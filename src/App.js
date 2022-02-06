import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem('persist:root')).user
  ).currentUser?.isAdmin;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={admin ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/*" element={admin ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
