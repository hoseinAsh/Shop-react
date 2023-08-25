import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <>
      <div className="row">
        <div className="col-md-3 mb-4">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3 mb-4">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3 mb-4">
          <Skeleton height={400} />
        </div>
        <div className="col-md-3 mb-4">
          <Skeleton height={400} />
        </div>
      </div>
    </>
  );
}
