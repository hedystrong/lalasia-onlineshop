import { productCard } from "../data/productCard";
import "../App.css";
import { ProductsPage } from "../data/pagesData";
import ProductCard from "../components/ProductCard";
import { useContext, useEffect } from "react";

import axios from "axios";
import { Outlet } from "react-router-dom";
import { url } from "../components/constant";
import { DataContext } from "../context/context";

export const Products = () => {
  const { filterData } = useContext(DataContext);

  console.log(filterData);
  return (
    <div className="flex flex-d align-items justify-content">
      {ProductsPage.map((data) => (
        <>
          <div className="containerTitle flex flex-d align-items justify-content">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <img src={data.img} alt="" />
        </>
      ))}
      <div className="flex" style={{ margin: "15px" }}>
        <div
          className="flex flex-row p-2"
          style={{ backgroundColor: "#f4f4f4" }}
        >
          <input
            type="text"
            placeholder=" Search property"
            style={{ width: "800px", border: 0 }}
          />
          <button style={{ marginRight: "5px" }}>Find Now</button>
          <button>Filter</button>
        </div>
      </div>
      <div>
        {/* <div className="flex justify-between">
          <div>
            <h1>Total Product</h1>
            <span>184</span>
          </div>
          <div>
            <span>Sort By</span>
          </div>
        </div> */}
        <div className="productCard">
          {filterData?.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};
