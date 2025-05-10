import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.css';


function Homepage(){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            navigate('/dashboard');
        }
    }
    , [navigate]);
    
    return(
        <div className='container'>
            <h1>Homepage</h1>
            <p>Welcome to the Ans World!</p>
            <button onClick={() => navigate('/signup')}>Signup</button>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}
export default Homepage