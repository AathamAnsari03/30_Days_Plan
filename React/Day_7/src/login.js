import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import './styles.css';


function Login(){
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const Userdata = {
            name, password
        };

        fetch('http://localhost:5000/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(Userdata)
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.message === 'Login successful'){
                localStorage.setItem('token', data.access_token);
                alert('Login successful');
                navigate('/dashboard');
            }
            else if (data.message === 'Invalid credentials'){
                alert('Invalid credentials');
            }
        })
        
    }

    
        const [name, SetName] = useState('');
        const [password, SetPassword] = useState('');

        return(
            <div className="container">
                <h1>Login</h1>
                <form onSubmit = {handleLogin}>
                    <input value={name} onChange={(e) => SetName(e.target.value)} placeholder="Enter your name"></input>
                    <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} placeholder="Enter Password"></input>
                    <button className="auth-button" type="submit">Login</button>
                </form>
            </div>
        )

}
export default Login;