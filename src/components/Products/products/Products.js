import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-shore-49038.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mb-5'>
            <div id='services'>
                <h1 className='services-title d-flex justify-content-center  mt-5 text-2xl text-primary mb-4'>Our Products</h1>
                <div data-aos="zoom-in"
                        data-aos-duration='2000' className='services-container container'>
                    {
                        products.map(product => <Product key={product._id}
                            product={product}
                        ></Product>)
                    }
                </div>

            </div>
        </div>
    )
};

export default Products;