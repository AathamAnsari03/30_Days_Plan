import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


function Dashboard(){
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

    useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("JWT", token);

    if(!token){
        navigate('/login');
    }

    fetch('http://localhost:5000/dashboard', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
    .then((res) => {
        if (res.status === 401 || res.status === 422) {
            localStorage.removeItem('token');
            navigate('/login');
        }
        return res.json();
    })
    .then((data) => {
        setMessage(data.message);
    })

    }, [navigate]);

    return(
        <div children="container">
            <h1>Dashboard</h1>
            <p>{message}</p>
            <button onClick={() => {
                localStorage.removeItem('token');
                navigate('/');
            }}>Logout</button>
        </div>
    );
}
export default Dashboard;