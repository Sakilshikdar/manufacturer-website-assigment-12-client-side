import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data =>setProducts(data))
    }, [])
    return (
        <div className='mb-5'>
            <div id='services'>
                <h1 className='services-title d-flex justify-content-center  mt-5 text-2xl text-primary mb-4'>Our Products</h1>
                <div className='services-container container'>
                    {
                        products.slice(0, 3).map(product => <Product key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>
                
            </div>
        </div>
    )
};

export default Products;