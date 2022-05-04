import UserItem from "./UserItem";
import ProductItem from "./ProductItem"
import {useEffect, useState} from "react";
import {deleteUser, editUser} from "../../services/userService";
import {deleteProduct, editProduct} from "../../services/productService";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import React from "react";

export default function Admin() {
    const [items, setItems] = useState()
    const user = useSelector(state => state.user)
    useEffect(() => {
        getAllUsers()
        getAllProducts()
    }, [])

    if (!user || (user.username!=='admin' && user.password !== '12345'))
        return <Navigate to={'/'}/>

    function getAllUsers() {
        return fetch('http://localhost:3001/getAllUsers', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                data.json().then(r => {
                    let temp = []
                    for (const user of r) {
                        temp.push(<UserItem id={user.id} username={user.username} password={user.password}
                                             update_={editUser} delete_={deleteUser}/>)
                    }
                    setItems(temp)
                })
            })
    }
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
                                             quantity={product.quantity} update_={editProduct} delete_={deleteProduct}/>)
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