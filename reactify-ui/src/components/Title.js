import React from "react";

export default function Title({ name, title }) {
  return (
    <div className="p-d-flex">
      <div className="p-d-flex p-flex-column p-flex-md-row p-text-center text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}