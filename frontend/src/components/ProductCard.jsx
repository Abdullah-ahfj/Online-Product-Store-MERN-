import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";


const ProductCard = ({pId, name, price, image }) => {

  const [clickedDelete, setClickedDelete] = useState(false);
  const [clickedUpdate, setClickedUpdate] = useState(false);
  const [productById, setProductById ] = useState({_id: pId, name: name, price: price, image: image })

  const modalId = `editModal-${pId}`;
  

  const handleDelete = async() => {
    const res = await fetch(`http://localhost:5000/api/products/${pId}`, {
      method: "Delete",
    });
    const data = await res.json();

    setClickedDelete(true)
    setTimeout(() => {
      setClickedDelete(false)
    },5000)

    if(!data.success) return{success: false, message: data.message}
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/products/${pId}`, {
      method: "PUT",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(productById)
    });
    const data = await res.json();

    setClickedUpdate(true)
    setTimeout(() => {
      setClickedUpdate(false)
    },2000)

    if(!data.success) return{success: false, message: data.message}
  } 

  return (
    
    <div className="mt-3 mx-2">

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <symbol id="check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 
            5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 
            0 0 0-.01-1.05z"/>
          </symbol>
        </svg>
        {clickedDelete ? (
            <div
              className="alert alert-danger d-flex align-items-center fixed-bottom justify-content-around"
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
                Product Deleted Successfully
              </div>
            </div>
          ) : null}


      <div className="card bg-secondary" style={{ width: "18rem" }}>
        <img
          className="card-img-top img-fluid"
          src={image}
          alt="Card image cap"
          style={{
            height: "200px",
            objectFit: "contain",
            backgroundColor: "#f8f9fa",
          }}
        />
        <div className="card-body">
          <h5 className="card-title text-white">{name}</h5>
          <h5 className="card-text text-white mx-2">{price}$</h5>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#${modalId}`}
            style={{ marginRight: "15px" }}
          >
            <h4><FaEdit /></h4>
          </button>
          <button onClick={handleDelete} className="btn btn-danger ml-2">
            <h4><RiDeleteBin6Fill /></h4>
          </button>
        </div>
      </div>
      
      {/* <!-- Modal --> */}
      <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form onSubmit={handleSubmit}  className='form-signin'>

              <div className="form-label-group">
                <input 
                  type="text" 
                  id="productName" 
                  name='name' 
                  className="form-control" 
                  placeholder="Product Name"
                  value={productById.name} 
                  onChange={(e) => setProductById({...productById, [e.target.name]: e.target.value})}
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
                  value={productById.price}
                  onChange={(e) => setProductById({...productById, [e.target.name]: e.target.value})} 
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
                  value={productById.image}
                  onChange={(e) => setProductById({...productById, [e.target.name]: e.target.value})}
                  required 
                />
                <label htmlFor="productImage">Image URL</label>
              </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
            </form>

            {clickedUpdate ? (
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
                  Product Updated Successfully
                </div>
              </div>
            ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard