import React from "react";
import Product from "./Product";
import FilteringBtn from "./filteringBtn";

export default function ShowProduct({
  products,
  setProducts,
  data,
}) {
  return (
    <>
      <FilteringBtn
        setProducts={setProducts}
        data={data}
      />

      <div className="row">
        {products.map((product) => {
          return <Product Product={product} />;
        })}
      </div>
    </>
  );
}
