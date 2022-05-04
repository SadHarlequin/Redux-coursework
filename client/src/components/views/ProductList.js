import UserItem from "./UserItem";
import ProductItem from "./ProductItem"
import {useEffect, useState} from "react";
import {deleteUser, editUser} from "../../services/userService";
import {deleteProduct, editProduct} from "../../services/productService";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";

export default function ProductList() {
    const [items, setItems] = useState()
    const user = useSelector(state => state.user)
    useEffect(() => {
       
       getAllProducts()
    }, [])

    if (!user || (user.username!=='admin'))
        return <Navigate to={'/'}/>

    function getAllProducts() {
        return fetch('http://localhost:3001/getAllProducts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                data.json().then(r => {
                    let temp = []
                    for (const product of r) {
                        temp.push(<ProductItem id={product.id} productname={product.productname} price={product.price}
                                             quantity={product.quantity} updateProduct_={editProduct} deleteProduct_={deleteProduct}/>)
                    }
                    setItems(temp)
                })
            })
    }
    return (
        <ul>
            {items}
        </ul>
    )
}