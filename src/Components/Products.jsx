import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ShowProduct from "./ShowProduct";

export default function Products() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      };
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  return (
    <div>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-12">
            <h1 className="display-5 text-center mb-4">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            {loading ? <Loading /> : <ShowProduct data={data} products={products}  setProducts={setProducts} />}
          </div>
        </div>
      </div>
    </div>
  );
}
