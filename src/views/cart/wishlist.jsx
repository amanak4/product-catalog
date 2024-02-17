import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaStar } from 'react-icons/fa';
import { products } from '../../components/data';
import './cart.css'; 

function Cart() {
    const [wishlist, setwishlist] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('wishlist');
        if (storedCart) {
            setwishlist(JSON.parse(storedCart));
        }
    },[wishlist]);


    /* -----------------REMOVING PRODUCT FROM WISHLIST --------------------*/


    const removeItemFromLocalStorage = (key, valueToRemove) => {
        const currentValue = localStorage.getItem(key);
    
        if (currentValue) {
            try {
                const currentArray = JSON.parse(currentValue);
                const updatedArray = currentArray.filter(item => item !== valueToRemove);
                localStorage.setItem(key, JSON.stringify(updatedArray));
            } catch (error) {
                console.error('Error parsing or updating localStorage:', error);
            }
        }
    };

    const removefromwishlist = (value) => {
        removeItemFromLocalStorage('wishlist', value);
    };

    /*-------------------------------------- RETURN --------------------------------- */
    return (
        <div className="container">
            <div className='cart-container'>
                {wishlist.map((item, ind) => {
                    const prod = products.find(prod => prod.title === item);
                    if (prod) {
                        return (
                            <div key={ind} className="prod_content">
                                    <img src={prod.image} alt={prod.title} />
                                    <div className="prod_detail">
                                    <Link to={`/product/${prod.title}`} className='product__title'><h2>{prod.title}</h2></Link>
                                        <p><span>Price</span> : {prod.price}</p>
                                        <p><span className='rating'>{prod.rating.rate} <FaStar className='star' /></span> {prod.rating.count} Rating</p>
                                    </div>
                                    <button className="remove-button" onClick={() => { removefromwishlist(prod.title) }}><FaHeart className='filledheart' /></button>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>   
            {wishlist.length === 0 && (
                <div className="no-items">
                    No items in wishlist
                </div>
            )}
        </div>
    );
}

export default Cart;
