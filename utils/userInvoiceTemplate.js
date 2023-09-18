const template = (order) => {
  const { address, items } = order;
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invoice</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f7fafc;
            font-family: 'Arial', sans-serif;
        }
        .font-bold{
            font-weight: 700;
        }
        .font-bolder{
            font-weight: 800;
        }
        .invoice-container {
            background-color: #fff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
            max-width: 600px;
            padding: 1rem 2rem;
            border-radius: 8px;
        }
        .invoice-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        .invoice-header h1 {
            font-size: 2.5rem;
            color: #333;
        }
        .invoice-header p {
            color: #777;
        }
        .billing-info {
            margin-bottom: 2rem;
        }
        .billing-info h2 {
            font-size: 1.5rem;
            color: #333;
        }
        .billing-info p {
            color: #555;
        }
        .invoice-details {
            margin-bottom: 2rem;
        }
        .invoice-details h2 {
            font-size: 1.5rem;
            color: #333;
        }
        .invoice-table {
            width: 100%;
            border-collapse: collapse;
        }
        .invoice-table th,
        .invoice-table td {
            padding: 0.5rem;
            text-align: left;
        }
        .invoice-table th {
            background-color: #f0f0f0;
        }
        .invoice-table tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        .invoice-footer {
            text-align: center;
            color: #555;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="invoice-container">
        <div class="invoice-header">
            <h1>Invoice</h1>
            <p>Invoice #${order.id}</p>
        </div>
        
        <div class="billing-info">
            <h2>Billing Information</h2>
            <p>Name: <span class="font-bolder">${address.name}</span></p>
            <p>Email: ${address.email}</p>
            <p>Address: ${address.street} ${address.state}, ${address.city}, ${
    address.country
  } - ${address.pinCode}</p>
            <p>Order Status: ${order.status}</p>
            <p>Payment Status: ${order.paymentStatus}</p>
            <p>Payment Method: ${order.paymentMethod}</p>
        </div>
        
        <div class="invoice-details">
            <h2>Invoice Details</h2>
            <table class="invoice-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                ${items.map(
                  (item) => `<tr>
                    <td>${item.item.title}</td>
                    <td>${item.quantity}</td>
                    <td>$${Math.round(
                      item?.item?.price *
                        (1 - item?.item?.discountPercentage / 100)
                    )}</td>
                    <td>$${
                      Math.round(
                        item?.item?.price *
                          (1 - item?.item?.discountPercentage / 100)
                      ) * item.quantity
                    }</td>
                  </tr>`
                )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" class="font-bolder">Total</td>
                        <td class="font-bold">$${order.totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        
        <div class="invoice-footer">
            Thank you for your order!
        </div>
    </div>
</body>
</html>
`;
};

module.exports = template;
