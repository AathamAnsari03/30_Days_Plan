import './components/GraphTable.css';
import './App.css';
import GraphForm from './components/GraphForm';
import React, {useState, useEffect} from 'react';
import DeleteButton from './components/DeleteButton';
import EditSaveButton from './components/EditSaveButton';




function App() {

  const [path, setPaths] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/all-paths')
      .then((res) => res.json())
      .then((data) => {
        setPaths(data);
      });
  }
  , []);

  function handleDelete(id) {
    fetch(`http://localhost:5000/delete-path/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        fetch("http://localhost:5000/all-paths")
          .then((res) => res.json())
          .then((data) => setPaths(data));
      });
  }

  function handleSave(id) {
    const updatedPath = {
      start: EditingStart,
      end: EditingEnd,
      distance: EditingDistance,
    };

    fetch(`http://localhost:5000/update-path/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPath),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setEditingId(null);
        fetch("http://localhost:5000/all-paths")
          .then((res) => res.json())
          .then((data) => setPaths(data));
      });
    }

  

  const [EditingId, setEditingId] = useState(null);
  const [EditingStart, setEditingStart] = useState("");
  const [EditingEnd, setEditingEnd] = useState("");
  const [EditingDistance, setEditingDistance] = useState("");

  return (
    <div className="App">
      <GraphForm onSubmit={() =>{
        fetch('http://localhost:5000/all-paths')
          .then((res) => res.json())
          .then((data) => {
            setPaths(data);
          });
      } } />

      <table>
        <thead>
          <tr>
            <th>start</th>
            <th>end</th>
            <th>distance</th>
            <th>Action</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {path.map((path) =>(
          <tr key={path.id}>
            <td>
                {EditingId === path.id
                  ? <input value={EditingStart} onChange={(e) => setEditingStart(e.target.value)} />
                  : path.start}
            </td>
            <td>
                {EditingId === path.id
                  ? <input value={EditingEnd} onChange={(e) => setEditingEnd(e.target.value)} />
                  : path.end}
            </td>
            <td>
                {EditingId === path.id
                  ? <input value={EditingDistance} onChange={(e) => setEditingDistance(e.target.value)} />
                  : path.distance}
            </td>
                  

            <td>
            <DeleteButton onClick={() => handleDelete(path.id)} />
            </td>

            <td>
                 <EditSaveButton
                  isEditing={EditingId === path.id}
                  path={path}
                  onEdit={() => {
                    setEditingId(path.id);
                    setEditingStart(path.start);
                    setEditingEnd(path.end);
                    setEditingDistance(path.distance);
                  }}
                  onSave={() => handleSave(path.id)} />
            </td>

          </tr>))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
