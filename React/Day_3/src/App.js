import './GraphTable.css'
import { useEffect, useState } from 'react';
import './App.css';
import GraphForm from './GraphForm';


function App() {

  const [edgelist, setEdgeList] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/edges")
    .then((res) => res.json())
    .then((data) => {
      setEdgeList(data)
    });
  },[] );


  return (
    <div className="App">
    <GraphForm onSubmit={() => {
  fetch("http://localhost:5000/edges")
    .then((res) => res.json())
    .then((data) => setEdgeList(data));
}} />

      <table>
                <thead>
                    <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {edgelist.map((edge, idx) => (
                    <tr key={idx}>
                        <td>{edge.from}</td>
                        <td>{edge.to}</td>
                        <td>{edge.weight}</td>
                    </tr>
                    ))}
                </tbody>
      </table>
    </div>
  );
}

export default App;
