import React, { useState } from "react";

export default function Product() {
  //here product is an object
  const [product, setProduct] = useState({
    id: 40342943,
    name: "IPhone 15 Max Prod",
    price: 160000,
    stock: 4,
  });
  return (
    <div style={{ color: "brown" }}>
      Product details <br />
      Id:{product.id} <br />
      Name:{product.name} <br />
      Price:{product.price} <br />
      Stock:{product.stock}
    </div>
  );
}
