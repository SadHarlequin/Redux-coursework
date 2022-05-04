import classes from '../../styles/userItem.module.css'
import {useState} from "react";

export default function ProductItem(props) {
    let [productname_, setProductname] = useState()
    let [price_, setPrice] = useState()
    let [quantity_, setQuantity] = useState()
    const {id, productname, price, quantity} = props

    function update() {
        if (!productname_)
            productname_ = productname
        if (!price_)
            price_ = price
        if (!quantity_)
            quantity_ = quantity
        props.update_({
            id: id,
            productname: productname_,
            price: price_,
            quantity: quantity_
        })
    }

    function deleteUs() {
        props.delete_({
            id: id
        })
    }

    return (
        <li key={id} className={classes.flex}>
            <label className={classes.padding}>id: {id}</label>
            <div>
                <label>productname: </label>
                <input type={'text'} className={classes.padding} defaultValue={productname}
                       onChange={e => setProductname(e.target.value)}/>
            </div>
            <div>
                <label>price: </label>
                <input type={'text'} className={classes.padding} defaultValue={price}
                       onChange={e => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>quantity: </label>
                <input type={'text'} className={classes.padding} defaultValue={quantity}
                       onChange={e => setQuantity(e.target.value)}/>
            </div>
            <button onClick={update} className={classes.padding}>Edit</button>
            <button onClick={deleteUs} className={classes.padding}>Delete</button>
        </li>
    )
}