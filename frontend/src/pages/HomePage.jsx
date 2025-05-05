import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { BsRocketTakeoffFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        
        setProducts(data.data);
        
      } catch (error) {
        console.error("Error", error.message);
      }
    }

    fetchProducts();

  },[products])

  return (
    <div className='m-3 mt-4'>
      <h1 className='text-center text-primary-emphasis'>Current Products <BsRocketTakeoffFill /></h1>
      
        {products.length === 0?(
          <h5 className='text-center mt-5'>No Products Found 😢 <br />
          <Link to={"/create"} className='btn btn-info text-white mt-2'>Create a product</Link>
          </h5>
          

        ):(
          <div className="d-flex flex-wrap mx-5">
          {products.map(product => (
            <ProductCard key={product._id} pId={product._id} name={product.name} price={product.price} image={product.image}/>
          ))}
          </div>
        )}
      
    </div>
  )
}

export default HomePage;

