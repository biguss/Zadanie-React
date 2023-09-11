function Product({ name, price, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}
export default Product;
