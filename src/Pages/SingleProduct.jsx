import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartReducer";


export default function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={100} />
          <Skeleton height={50} />
          <Skeleton height={150} width={"100%"} />
          <Skeleton height={50} width={100} count={2} />
        </div>
      </>
    );
  };

  const Product = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
        <div className="col-md-6">
          <h5 className="text-uppercase text-black-50">{product.category}</h5>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bold">
            Rating {product.rating && product.rating.rate}
            <i className="fa-solid fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <div className="quantity">
            <button onClick={(e)=> setQuantity((prev) => prev===1 ? 1 : prev - 1)}>-</button>
            {quantity}
            <button onClick={(e)=> setQuantity((prev) => prev + 1)} >+</button>
          </div>
          <button
            className="btn btn-outline-dark"
            onClick={()=> dispatch(addItem({
              id : product.id,
              title : product.title,
              desc : product.description,
              price : product.price,
              img : product.image,
              quantity
            }))}
          >
            Add To Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-4">{loading ? <Loading /> : <Product />}</div>
    </div>
  );
}
