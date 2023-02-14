import "../style/Landing.css";
import "../App.css";
import { Input } from "../components/index";

import {
  Benefits,
  Product,
  Article,
  OutProduct,
  Testimonial,
} from "../components";
import { LandingPage } from "../data/pagesData";
import { Button } from "../components/Button";
import axios from "axios";
import { useContext, useEffect } from "react";
import { CategoryContext, DataContext } from "../context/context";

export const Landing = () => {
  const { setData, setFilterData } = useContext(DataContext);
  const { setCategory } = useContext(CategoryContext);

  useEffect(() => {
    getData();
    getCategory();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/product")
      .then((res) => {
        if (res.data.status) {
          setData(res.data.result);
          setFilterData(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  };

  const getCategory = () => {
    axios
      .get("http://localhost:9000/api/category")
      .then((res) => {
        if (res.data.status) {
          setCategory(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-d align-items justify-content">
      {LandingPage.map((data, index) => (
        <div className="landingPage" key={index}>
          <div className="containerTitle flex flex-d align-items justify-content landingTitle">
            <h1 className="bigTitle">{data.title}</h1>
            <span className="bigText">{data.text}</span>
          </div>
          <Input />
          <img src={data.img} alt="" />
        </div>
      ))}
      <Benefits />
      <Product />
      <OutProduct />
      <Testimonial />
      {/* <Article /> */}
      {/* <div className="join we me">
        <h1>Join with me to get special discount</h1>
        <div>learn me</div>
        <Button name="go" />
      </div> */}
    </div>
  );
};
