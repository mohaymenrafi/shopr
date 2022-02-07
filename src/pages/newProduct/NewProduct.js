import React, { useState } from 'react';
import './NewProduct.css';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { useDispatch } from 'react-redux';
import app from '../../firebase';
import { addProduct } from '../../redux/apiCalls';

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [color, setColor] = useState([]);
  const [sizes, setSizes] = useState([]);
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };
  const handleSizes = (e) => {
    setSizes(e.target.value.split(','));
  };
  const handleColor = (e) => {
    setColor(e.target.value.split(','));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            size: sizes,
            color,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Title</label>
          <input
            type="text"
            placeholder="Product Title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Price</label>
          <input
            type="number"
            placeholder="Product Price"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Description</label>
          <textarea
            type="text"
            placeholder="Product Description"
            name="desc"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Categories</label>
          <input
            type="text"
            placeholder="Product Categories"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Size</label>
          <input
            type="text"
            placeholder="Product Sizes"
            onChange={handleSizes}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Colors</label>
          <input
            type="text"
            placeholder="Product Colors"
            onChange={handleColor}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="stock">Stock</label>
          {/* eslint-disable */}
          <select
            name="stock"
            id="stock"
            name="inStock"
            onChange={handleChange}
            >
            {/* eslint-enable */}
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
