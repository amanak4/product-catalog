import React, { useEffect, useState } from 'react';
import { FaMinus, FaPlus, FaRemoveFormat, FaStar } from 'react-icons/fa';
import { products } from '../../components/data';
import './cart.css'; 
import { Link } from 'react-router-dom';

const Cart = ()=> {
    const [cartlist, setCartlist] = useState([]);
    const [count,setcount]=useState(1);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setCartlist(JSON.parse(storedCart));
        }
    },[cartlist]);

    /* -----------------REMOVING PRODUCT FROM CART --------------------*/

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

    const subtract =(value)=>{
        if(count==1){
            removeItemFromLocalStorage('cart',value);
        }
        else{
            setcount(prev=>prev-1);
        }
    }

    const add=()=>{
        setcount(prev=>prev+1);
    }

/*------------------------------------ RETURN ------------------------------ */

    return (
        <div className="container">
        <h2>Cart</h2>
            <div>
                {cartlist.map((item, ind) => {
                    const prod = products.find(prod => prod.title === item);
                    if (prod) {
                        return (
                            <div key={ind} className="prod_content">
                            
                                    <img src={prod.image} alt={prod.title} />
                                    
                                    <div className="prod_detail">
                                    <Link to={`/product/${prod.title}`} className='product__title'>
                                        <h2>{prod.title}</h2></Link>
                                        <p><span>Price</span> : {prod.price}</p>
                                        <p><span className='rating'>{prod.rating.rate} <FaStar className='star' /></span> {prod.rating.count} Rating</p>
                                        <div className="quantity-controls">
                                            <button  className='add__minus' onClick={() => subtract(prod.title)}>{count === 1 ? <FaRemoveFormat /> : <FaMinus />}</button>
                                            <span className="quantity-display">{count}</span>
                                            <button className='add__minus' onClick={add}><FaPlus /></button>
                                        </div>
                                    </div>
                        
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            {cartlist.length === 0 && (
                <div className="no-items">
                    No items selected in your Cart
                </div>
            )} 
        </div>
    );
}

export default Cart;
