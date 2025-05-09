import React, {useState} from "react";  
import './GraphForm.css';


function GraphForm({onSubmit}){
    const handleSubmit = (e) => {
        e.preventDefault();
        const pathaData = {
            start : from,
            end : to,
            distance : weight
        };
        fetch('http://localhost:5000/add-path',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(pathaData)
        })
        .then((res) => res.json())
        .then((data) => {
            alert(data.message);
            setFrom("");
            setTo("");
            setWeight("");
            onSubmit();
        });
    }    



    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [weight, setWeight] = useState("");

    return (
        <div>
            <form onSubmit={handleSubmit} className="graph-form">
                <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" />
                <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" />
                <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
                <button type="submit">Add Path</button>
            </form>
        </div>
    )
}

export default GraphForm;