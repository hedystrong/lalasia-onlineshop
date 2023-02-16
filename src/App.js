import "./App.css";
import { Footer, NavBar, Product } from "./components";
import { Landing, Products, Services, Article, AboutUs, Login } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CategoryContext, DataContext, UserContext } from "./context/context";
import AdminLayout from "./admin/AdminLayout";
import AdminProductList from "./admin/AdminProductList";
import { AdminProduct } from "./admin/AdminProduct";
import Layout from "./components/Layout";


function App() {

  const [currentUser, setCurrentUser] = useState();
  const [data, setData] = useState();
  const [filterData, setFilterData] = useState();
  const [categoryData, setCategory] = useState();

  return (
    <DataContext.Provider value={{ data, setData, filterData, setFilterData }}>
      <CategoryContext.Provider value={{ categoryData, setCategory }}>


        <div className="Container flex flex-d aling-items justify-content">
          <Routes>

            <Route element={<Layout />}>
              <Route index path="/" element={<Landing />} />
              <Route path="/product" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />

              <Route path="/services/*" element={<Services />} />
              <Route path="/article" element={<Article />} />

              <Route path="/about-us" element={<AboutUs />} />
            </Route>

            <Route path="/admin/*" element={<AdminLayout />} >
              <Route path="products" element={<AdminProductList />} />
              <Route path="product" element={<AdminProduct />} />
              <Route path="product/:pid" element={<AdminProduct />} />
            </Route>
          </Routes>

        </div>
      </CategoryContext.Provider>
    </DataContext.Provider>
  );
}

export default App;
