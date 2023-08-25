import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/cartReducer";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((Item) => {
      total += Item.quantity * Item.price;
    });
    return total;
  };

  return (
    <div>
      <div className="text-center text-uppercase">
        <h1 className="mb-4 p-4">products in you're cart</h1>
      </div>

      {products?.map((product) => {
        return (
          <div
            className="card mb-3 position-relative"
            style={{ width: "80%", margin: "0 auto" }}
            key={product.id}
          >
            <div className="row g-0 py-4">
              <div className="col-md-4 d-flex justify-content-center">
                <img
                  src={product.img}
                  width={250}
                  className="img-fluid rounded-start"
                  alt={product.title}
                />
              </div>
              <div className="col-md-8 d-flex align-items-center">
                <div className="card-body">
                  <h1 className="card-title display-4">{product.title}</h1>
                  <p className="card-text lead fw-bold fs-4 ">
                    {product.quantity} * $ {product.price}
                  </p>
                </div>
              </div>
            </div>
            <span
              onClick={() => dispatch(delItem(product.id))}
              className="position-absolute"
              style={{ top: "5px", right: "15px", cursor: "pointer" }}
            >
              X
            </span>
          </div>
        );
      })}

      {totalPrice() > 0 ? (
        <div className="container" style={{width : "80%"}}>
          <div className="row justify-content-around align-items-center py-4">
            <div className="col-md-4 mb-2">
              <h5>Subtotal : ${totalPrice()}</h5>
            </div>
            <div className="col-md-8 d-md-flex justify-content-end">
              <NavLink to="/products" className="btn btn-outline-dark">
                Continue Shopping
              </NavLink>
              <button type="button" className="btn btn-dark ms-2">
                Check Out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center ">
          <h1 className="text-center">You're Cart Is Empty</h1>
          <NavLink to="/products" className="btn btn-outline-dark mt-3 fs-5" style={{width : "150px"}}>Go to Shop</NavLink>
        </div>
      )}
    </div>
  );
}
