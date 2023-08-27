import React from "react";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="card text-bg-dark border-0">
        <img
          src="./assets/Category-New-Arrivals-2022.webp"
          className="card-img"
          alt="background"
          height={500}
          style={{ objectFit: "cover" }}
        />
        <div className="card-img-overlay d-flex justify-content-center flex-column">
          <div className="container">
            <h5 className="card-title display-3 fw-bold mb-2 text-uppercase">
              New Season Arrival
            </h5>
            <p className="card-text text-uppercase lead fs-3">
              Check Out all the trends
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
