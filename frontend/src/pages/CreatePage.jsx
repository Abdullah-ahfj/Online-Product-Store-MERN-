  import React, { useState } from 'react';
  import "../style/createPage.css";

  const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
      name: '',
      price: '',
      image: ''
    });
    const [created, setCreated] = useState(false);

    const handleChange = event => {
      const {name, value} = event.target;
      
      setNewProduct( prev => {
        return {...prev, [name]: value}
      })
    }

    const handleSubmit = async event => {
      event.preventDefault();

      try {
        const response = await fetch("http://localhost:5000/api/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct)
        })

        if(!response.ok){
          throw new Error("Failed to create product") 
        }

        const data = await response.json()
        console.log(data.data);

        setNewProduct({
          name: '',
          price: '',
          image: ''
        });

        setCreated(true)
          setTimeout(() => {
            setCreated(false)
          },2000) 
        
      } catch (error) {
        console.error("Error: ", error.message)
      }
      
    }


    return (
      <div className='p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol id="check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 
            5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 
            0 0 0-.01-1.05z"/>
          </symbol>
        </svg>
        {created ? (
            <div
              className="alert alert-success d-flex align-items-center fixed-bottom justify-content-around"
              role="alert"
              style={{
                width: "30%",
                margin: "0 auto",
                left: "0",
                right: "0",
                bottom: "20px", // slight gap from the bottom
                position: "fixed",
              }}
            >
              <svg
                className="bi flex-shrink-0 me-2"
                role="img"
                aria-label="Success:"
                width="24"
                height="24"
                fill="currentColor"
              >
                <use xlinkHref="#check-circle-fill" />
              </svg>
              <div className="fs-5 ">
                Product Created Successfully
              </div>
            </div>
          ) : null}

        <form onSubmit={handleSubmit} className='form-signin'>
          <div className="text-center mb-4">
            <h1 className="h3 mb-3 font-weight-normal">Create New Product</h1>
          </div>

          <div className="form-label-group">
            <input 
              type="text" 
              id="productName" 
              name='name' 
              className="form-control" 
              placeholder="Product Name"
              value={newProduct.name} 
              onChange={handleChange}
              required 
              autoFocus 
            />
            <label htmlFor="productName">Product Name</label>
          </div>

          <div className="form-label-group">
            <input 
              type="number" 
              id="productPrice" 
              name='price' 
              className="form-control"
              value={newProduct.price}
              onChange={handleChange} 
              placeholder="Price" 
              required 
            />
            <label htmlFor="productPrice">Price</label>
          </div>

          <div className="form-label-group">
            <input 
              type="text" 
              id="productImage" 
              name='image' 
              className="form-control" 
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleChange} 
              required 
            />
            <label htmlFor="productImage">Image URL</label>
          </div>

          <button type="submit" className="btn btn-lg btn-primary btn-block w-100">Add</button>
        </form>
        
      </div>
    );
  }

  export default CreatePage;



  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const response = await fetch("https://your-api-endpoint.com/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newProduct),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to create product");
  //     }

  //     const data = await response.json();
  //     console.log("Product created:", data);
  //     // Optionally reset form or show success message
  //     setNewProduct({ name: '', price: '', image: '' });
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };



  // import axios from 'axios';

  // const handleSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const response = await axios.post("https://your-api-endpoint.com/products", newProduct);
  //     console.log("Product created:", response.data);
  //     setNewProduct({ name: '', price: '', image: '' });
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };