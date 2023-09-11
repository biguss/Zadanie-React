import Product from "./Product";

function ProductList({ products }) {
  return (
    <div>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
}
export default ProductList;
