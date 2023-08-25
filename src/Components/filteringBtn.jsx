import React from "react";

export default function FilteringBtn(props) {

    const filterProduct = (cat) => {
        const updatedList = props.data.filter((x)=>x.category === cat);
        props.setProducts(updatedList);
    };

  return (
    <>
      <div className="row">
        <div className="col-12 buttons d-flex justify-content-center py-3">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => props.setProducts(props.data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>
      </div>
    </>
  );
}
