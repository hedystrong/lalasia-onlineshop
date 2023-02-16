import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useContext, useEffect } from "react";
import { CategoryContext, DataContext } from "../context/context";
import axios from 'axios';

export default function Layout() {
    const [current, setCurrent] = useState();

    const { setData, setFilterData } = useContext(DataContext);
    const { setCategory } = useContext(CategoryContext);

    useEffect(() => {
        getData();
        getCategory();
    }, []);

    const getData = () => {
        axios
            .get("http://localhost:8000/api/product")
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
            .get("http://localhost:8000/api/category")
            .then((res) => {
                if (res.data.status) {
                    setCategory(res.data.result);
                }
            })
            .catch((err) => console.log(err));
    };


    return (
        <div>
            <NavBar current={current} setCurrent={setCurrent} />
            <Outlet />
            <Footer />
        </div>
    )
}
