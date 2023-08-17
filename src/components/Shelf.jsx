import React from "react";
import "./Work.scss";
import { Link } from "react-router-dom";
import { ShelfData } from "./ShelfData.jsx";
const Shelf = () => {
  return (
    <div>
      <div className="boxMax">
        {ShelfData.map((item, index) => {
          return (
            <div className="box" id={item.id} key={index}>
              <div className="svg">{item.icon}</div>
              <div className="title">
                <h1>{item.title}</h1>
                <Link to={item.path}>I will learn too</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shelf;
