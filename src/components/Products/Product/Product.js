import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {_id,name, img, description, price, available, minimum} = product;

    return (
        <div className='service-container shadow-lg p-3 mb-5 bg-white rounded'>
        <img className='mx-auto' style={{width:'200px'}} src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}$</p>
        <h6 className='py-1'>Description: {description.slice(0, 100)}...</h6>
        <p>Available: {available}</p>
        <h6 className='py-1'>Minimum order: {minimum}</h6>
        <Link to={`/purchase/${_id}`}><button className='button border-3 mt-2'>purchase</button></Link>
    </div>
    );
};

export default Product;