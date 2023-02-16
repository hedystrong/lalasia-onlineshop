import React, { useEffect } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/form";
import FormControl from "react-bootstrap/formControl";
import FormLabel from "react-bootstrap/formLabel";
import axios from 'axios';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import FormSelect from 'react-bootstrap/esm/FormSelect';


export function AdminProduct() {
    const init = {
        productName: "",
        categoryId: 0,
        price: 0,
        thumbImage: "",
        images: [],
        salePercent: 0,
        quantity: 0,
        desc: "",
    };
    const [loading, setLoading] = useState(false);
    const [productItem, setProductItem] = useState(init);

    const { pid } = useParams();

    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    const onSave = (e) => {
        console.log(productItem);
        e.preventDefault();
        if (!pid) {
            axios
                .post("http://localhost:8000/api/product", productItem)
                .then((res) => {
                    if (res.data.status) {
                        navigate("/admin/products")
                    } else {
                        alert("Hadgalahad aldaa garsan bna")
                    }
                });
        } else {
            axios
                .put(`http://localhost:8000/api/product/${pid}`, productItem)
                .then((res) => {
                    if (res.data.status) {
                        navigate("/admin/products")
                    } else {
                        alert("Hadgalahad aldaa garsan bna")
                    }
                }).catch(err => console.log(err))
        }
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${pid}`)
            .then((res) => {

                console.log(res);
                if (res.data.status) {
                    setProductItem(res.data.result)
                    // navigate("/admin/products")
                } else {
                    alert("Hadgalahad aldaa garsan bna")
                }
            });
    }, [])

    const sendFile = async (fieldName, files) => {
        setLoading(true);
        console.log(files);

        const url = `https://api.cloudinary.com/v1_1/dnowpv9qs/upload`;
        const newArr = [];
        for (let i = 0; i < files.length; i++) {

            console.log(files[i]);
            newArr.push(files[i]);
        }

        console.log(newArr);

        const promise = await Promise.all(
            newArr.map((file) => {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("api_key", "775479378444756");
                formData.append("upload_preset", "jnoyojr2");

                return axios.post(url, formData);
            })
        );
        console.log(promise);

        const arr = [];

        promise.map((res) => {
            arr.push(res.data.secure_url);
        });

        if (fieldName == "images") {
            setProductItem({
                ...productItem,
                images: arr,
            });
        } else {
            setProductItem({
                ...productItem,
                thumbImage: arr[0],
            });
        }
        setLoading(false);
    };
    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = () => {
        axios.get("http://localhost:8000/api/category")
            .then(res => setCategories(res.data.result))
    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-6 '>
                    <Form>
                        <FormGroup>
                            <FormLabel>ProductName</FormLabel>
                            <FormControl value={productItem.productName} onChange={(e) =>
                                setProductItem({ ...productItem, productName: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Price</FormLabel>
                            <FormControl value={productItem.price} onChange={(e) =>
                                setProductItem({ ...productItem, price: e.target.value })} />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Category</FormLabel>
                            <Form.Select value={productItem.categoryId} onChange={(e) =>
                                setProductItem({ ...productItem, categoryId: e.target.value })}>
                                <option value={0}>Select</option>
                                {
                                    categories.map(({ categoryId, categoryName }) => <option value={categoryId}>{categoryName}</option>)
                                }
                            </Form.Select>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Thumb image</FormLabel>
                            <FormControl
                                type='file'
                                // value={productItem.thumbImage}
                                onChange={(e) => {
                                    sendFile("thumbImage", e.target.files)
                                }} />
                            {loading && "Uploading..."}
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Slide Images</FormLabel>
                            <FormControl
                                multiple
                                type='file'
                                // value={productItem.images}
                                onChange={(e) => {
                                    sendFile("images", e.target.files)
                                }} />
                            {loading && "Uploading..."}
                        </FormGroup>
                        <Button onClick={onSave}>Save</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
