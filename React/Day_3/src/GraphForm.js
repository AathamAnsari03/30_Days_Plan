import React, {useState} from "react"; 
import './GraphForm.css';


function GraphForm({onSubmit}){
    const handleSubmit = (e) => {
        e.preventDefault();
        const edgeData = { from, to, weight };
      
        fetch("http://localhost:5000/add-edge", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(edgeData)
        })
          .then((res) => res.json())
          .then((data) => {
            alert(data.message); 
            setFrom("");
            setTo("");
            setWeight("");
            onSubmit(data); 
          });
    };
             

    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [weight, setWeight] = useState("")

    return (
        <div>
            <form onSubmit={handleSubmit} className="graph-form">
                <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="Enter From Location"></input>
                <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="Enter To Location"></input>
                <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter the Distance"></input>
                <button type="submit">Add Edge</button>
            </form>
        </div>
    );



}
export default GraphForm;

