import React from 'react';
import './NewProduct.css';

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="image">Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label htmlFor="stock">Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addProductItem">
          <label htmlFor="active">Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button type="button" className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
