import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';


export default function AdminProductList() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => { setData(res.data.result); console.log(res.data.result); });
    }, []);

    const [products, setProducts] = useState([]);
    const [shop, setShop] = useState([]);

    const handleEdit = (productName, categoryId, price, thumbImage, images, desc, quantity) => {
        if (!categoryId) {
            setProducts({ productName, categoryId, price, thumbImage, images, desc, quantity });

        }
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => { setData(res.data.result) }
            )
        // const newArr = products.filter((e) => e.id !== id);
        // setShop(newArr);

    };

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={() => navigate("/admin/product")}>add product</button>
            <div className='table-responsive'>
                <table className='table'>
                    <tbody>
                        {data.map((e, index) => (
                            <tr key={index}>
                                <td>{e.productName}</td>
                                <td>{e.price}</td>
                                <td><img src={e.images} width="100" /></td>
                                <td><img src={e.thumbImage} width="100" /></td>
                                <td></td>
                                <td>
                                    <a className='btn btn-warning' href={`/admin/product/${e.id}`}>Edit</a>
                                    {/* <span className='btn btn-warning' onClick={() => navigate("/admin/product")}>Edit</span> */}
                                    <span className='btn btn-danger' onClick={() => handleDelete(e.id)}>Delete</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
