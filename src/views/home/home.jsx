import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { categories } from '../../components/data';

const YourComponent = () => {
    return (
        <div className='container'>
        <h2 className='categ'>Categories</h2>
        <div className='grid'>
            {categories.map((cate, index) => (
                <ul key={index} className='category-item'> 
                    <Link className='category-link' to={`/category/1/${cate.category}`}>
                        <img src={cate.image} alt={cate.category} className='category-image' />
                        <li className='category-name'>{cate.category}</li>
                    </Link>
                </ul>
            ))}
        </div>
        </div>
    );
};

export default YourComponent;
