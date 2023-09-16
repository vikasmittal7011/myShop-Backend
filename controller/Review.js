const { Product } = require("../models/Product");
const { Review } = require("../models/Review");
const HttpError = require("../models/http-error");

const updateProductRating = async (id, rId) => {
  try {
    const product = await Product.findOne({ _id: id });
    const reviews = await Review.find({ product: product.id });

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviews.length;

    product.totalRating.push(rId);
    product.averageRating = averageRating;

    await Product.findByIdAndUpdate({ _id: product._id }, product, {
      new: true,
    });

    return true;
  } catch (err) {
    return false;
  }
};

exports.postReview = async (req, res, next) => {
  try {
    const { id } = req.userData;
    const review = new Review({ ...req.body, user: id });
    await review.save();

    if (review) {
      const result = await updateProductRating(req.body.product, review.id);
      if (result) {
        res.json({ success: true, review });
      }
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.fetchReviews = async (req, res, next) => {
  const { product } = req.params;
  let query = Review.find({ product })
    .populate({
      path: "user",
      select: "name",
    })
    .sort({ createdAt: "desc" });
  let totalReviewsQuery = Review.find({ product });

  const totalDocs = await totalReviewsQuery.count().exec();

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }
  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalDocs);
    if (docs) {
      res.json({ success: true, reviews: docs });
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};

exports.updateReview = async (req, res, next) => {
  let updatedReview;
  try {
    const { id } = req.params;
    const { id: user } = req.userData;
    const review = await Review.findOne({ _id: id });

    if (review.user.toString() === user) {
      updatedReview = await Review.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      ).populate({
        path: "user",
        select: "name",
      });
    } else {
      return next(new HttpError("You are not rigth user", 400));
    }

    if (updatedReview) {
      const result = await updateProductRating(
        review.product.toString(),
        updatedReview.id
      );
      if (result) {
        res.json({ success: true, review: updatedReview });
      }
    }
  } catch (err) {
    return next(new HttpError("Internal server error", 500));
  }
};
