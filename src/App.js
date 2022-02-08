import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={admin ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
