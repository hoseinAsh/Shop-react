import React from "react";
import {NavLink} from 'react-router-dom'

export default function Product({ Product }) {
  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-6 mb-4" key={Product.id}>
        <div className="card text-center mb-3 h-100 p-4" key={Product.id}>
          <img
            src={Product.image}
            className="card-img-top"
            alt={Product.title}
            height={250}
            style={{ width: "100%" }}
          />
          <div className="card-body">
            <h5 className="card-title fs-3">{Product.title.substring(0, 11)}...</h5>
            <p className="card-text lead fs-2">${Product.price}</p>
            <NavLink to={`/products/${Product.id}`} className="btn btn-outline-dark fs-5 py-2 px-3">
              See Product
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
