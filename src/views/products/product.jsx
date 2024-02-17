import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../components/data';
import './product.css';
import { FaCartPlus, FaHeart, FaStar } from 'react-icons/fa';

function Category() {
    const { id } = useParams();


    /*-------------------------------ADD TO CART ----------------------------- */
    const addtocart = () => {
        const paststorage = localStorage.getItem('cart');
        const cartItems = paststorage ? JSON.parse(paststorage) : [];
        if (!cartItems.includes(id)) {
            cartItems.push(id);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            alert("This product is added to your cart list. ")
        }
        else{
            alert("This product was already added to your cart list. ")
        }
       
    };
    
  /*-------------------------------------- ADD TO WISHLIST ----------------------------- */
    const addtowishlist = () => {
        const paststorage = localStorage.getItem('wishlist');
        const cartItems = paststorage ? JSON.parse(paststorage) : [];
        if (!cartItems.includes(id)) {
            cartItems.push(id);
            localStorage.setItem('wishlist', JSON.stringify(cartItems));
            alert("This product is added to your wishlist. ")
        }
        else{
            alert("This product was already added to your wishlist. ")
        }
        
    };
    
/*-----------------------------------RETURN ----------------------------------- */
    return (
        <div className="container">
            <div className='product-details'>
            <div>
                {products
                    .filter(prod => prod.title.includes(id))
                    .map((prod, ind) => (
                        <div key={ind} className='prod'>
                        <div>
                            <img src={prod.image} alt='Product Image' className='prod-image' />
                            </div>
                            <div className='prod-info'>
                                <h2 className='prod-title'>{prod.title}</h2>
                                <p><span className='rating'>{prod.rating.rate} <FaStar className='star' /></span> {prod.rating.count} Rating</p>
                                <p><span>Price</span> : {prod.price}</p>
                                <p className='prod-specs'>Description :</p>
                                <span className='prod-description'>{prod.description}</span>
                                <p className='prod-specs'>Specifications :</p>
                    <ul className='specs-list'>
                        {Object.entries(prod.speci).map(([key, value], index) => (
                            <li key={index}><span className='speci-key'>{key}</span>: <span className='speci-value'>{value}</span></li>
                        ))}
                    </ul>
                    </div>   
                        </div>
                    ))}
                    </div>
                <div className='action-buttons'>
                    <button onClick={addtocart} className='add-to-cart'> <FaCartPlus />  Add to Cart </button>
                    <button onClick={addtowishlist} className='add-to-wishlist'> <FaHeart />  Wishlist </button>
                </div>
                </div>
        </div>
    );
}

export default Category;
