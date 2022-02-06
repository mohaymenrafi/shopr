import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import HomeMain from './HomeMain';
import './Home.css';
import UserList from '../userList/UserList';
import User from '../user/User';
import NewUser from '../newUser/NewUser';
import ProductList from '../productList/ProductList';
import Product from '../product/Product';
import NewProduct from '../newProduct/NewProduct';

export default function Home() {
  return (
    <>
      <Topbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={<User />} />
          <Route path="newuser" element={<NewUser />} />
          <Route path="products" element={<ProductList />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}
