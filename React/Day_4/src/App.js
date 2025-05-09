import './GraphTable.css'
import { useEffect, useState } from 'react';
import './App.css';
import GraphForm from './GraphForm';


function App() {

  const [paths, setPaths] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/all-paths")
    .then((res) => res.json())
    .then((data) => {
      setPaths(data)
    });
  },[] );


  return (
    <div className="App">
    <GraphForm onSubmit={() => {
  fetch("http://localhost:5000/all-paths")
    .then((res) => res.json())
    .then((data) => setPaths(data));
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
                    {paths.map((paths, idx) => (
                    <tr key={idx}>
                        <td>{paths.start}</td>
                        <td>{paths.end}</td>
                        <td>{paths.distance}</td>
                    </tr>
                    ))}
                </tbody>
      </table>
    </div>
  );
}

export default App;
