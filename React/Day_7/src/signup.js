import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './styles.css';


function Signup(){
    const navigate = useNavigate();
    const handleSignup = (e) =>{
        e.preventDefault();
        const Userdata = {
            name, password
        };

        fetch('http://localhost:5000/signup', {

            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(Userdata)
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            navigate('/login');
        })
    }



    const [name, Setname] = useState('');
    const [password, Setpassword] = useState('');


    return (
        <div className='container'>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <input value={name} onChange={(e) => Setname(e.target.value)} placeholder="Enter your name"></input>
                <input type='password' value={password} onChange={(e) => Setpassword(e.target.value)} placeholder='Enter Password'></input>
                <button className="auth-button" type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Signup;