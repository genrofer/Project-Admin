import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Orders from './components/Orders/Orders';
import NewUser from './components/NewUser/NewUser';
import EditUser from './components/EditUser/EditUser';
import Login from './components/Login/Login';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")

    if(!token){
      navigate("/login")
    }
  }, [])

  return (
    <div className='flex'>
      <div className="next">
        <Routes>
          <Route path="/" element={<Orders />} />
          <Route path="/addUser" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
