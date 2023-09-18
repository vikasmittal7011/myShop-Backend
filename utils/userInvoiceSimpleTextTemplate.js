const simpleText = (order) => {
  const { address, items } = order;

  return `Invoice
  
      Invoice #${order.id}
      
      Billing Information
      Name: ${address.name}
      Email: ${address.email}
      Address: ${address.street} ${address.state}, ${address.city}, ${
    address.country
  } - ${address.pinCode}
      Order Status: ${order.status}
      Payment Status: ${order.paymentStatus}
      Payment Method: ${order.paymentMethod}
      
      Invoice Details
      Product Name  Quantity  Price  Total
      ${items.map(
        (item) =>
          `${item.item.title}  ${item.quantity}  $${Math.round(
            item?.item?.price * (1 - item?.item?.discountPercentage / 100)
          )}  $$${
            Math.round(
              item?.item?.price * (1 - item?.item?.discountPercentage / 100)
            ) * item.quantity
          }`
      )}
      
      Total  $${order.totalPrice}
      
      Thank you for your order!
      `;
};

module.exports = simpleText;
