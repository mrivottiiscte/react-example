import React from 'react'

const Products = ({ products }) => {
  return (
    <div>
      <center><h1>Product List</h1></center>
      <ul key="ola" className="list-group">
      {products.map((product, index) => (
        <div>
            <li key={index} className="list-group-item">{product.title} {product.price}</li>
        </div>
      ))}
      </ul>
    </div>
  )
};

export default Products