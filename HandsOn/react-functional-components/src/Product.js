const Product = (props) => {
  return (
    <>
      <div>
        <pre>
          Name:{props.name}
          Price:{props.price}
          Stock:{props.stock}
        </pre>
      </div>
    </>
  );
};
const Shop = () => {
  let item = { name: "Iphone", price: 45000, stock: 23 };
  return (
    <>
      <Product name="Bottle" price="30" stock="12" />
      <Product name={item.name} price={item.price} 
      stocl={item.stock} />
    </>
  );
};
export default Shop;
