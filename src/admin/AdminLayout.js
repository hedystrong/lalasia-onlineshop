import React from 'react'
import Admin from "./Admin";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div>
            <div>
                <div className="navbar bg-dark flex-nowrap">
                    <a href="#" className="col-md-3 navbar-brand text-light">
                        Company Name
                    </a>
                    <input type="text" className="w-100 form-control bg-dark border-0" />
                    <div className="nav text-nowrap">
                        <span className="text-light"> Log Out </span>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 bg-light">
                            <div className="nav  flex-column">
                                <div className="nav-item">
                                    <a href="/" className="nav-link">
                                        Dashboard
                                    </a>
                                </div>

                                <div className="nav-item">
                                    <a href="/admin/users" className="nav-link">
                                        Users
                                    </a>
                                </div>
                                <div className="nav-item">
                                    <a href="/admin/products" className="nav-link">
                                        Products
                                    </a>
                                </div>
                                <div className="nav-item">
                                    <a href="/admin/categories" className="nav-link">
                                        Categories
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}
