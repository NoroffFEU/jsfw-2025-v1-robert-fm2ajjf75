import CheckoutItem from "../CheckoutItem";

function CheckoutTable({ cart, onUpdateQuantity, onRemove }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CheckoutItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemove}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CheckoutTable;
