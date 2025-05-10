import './GraphTable.css'
import './App.css';
import { useEffect, useState } from 'react';
import GraphForm from './GraphForm';

function App() {

  const [paths, setPaths] = useState([])
  useEffect(() =>{
    fetch("http://localhost:5000/all-paths")
    .then((res) => res.json())
    .then((data) =>{
      setPaths(data)
    });
  },[]);

      function handleDelete(id){
          fetch(`http://localhost:5000/delete-path/${id}`,{
              method : "DELETE",
          })
          .then((res) => res.json())
          .then((data) => {
              alert(data.message);
              fetch("http://localhost:5000/all-paths")
              .then((res) => res.json())
              .then((data) => setPaths(data));
          });
          
  
      }

      function handleSave(editingId){
        const updateEdge = {
          start : editedStart,
          end : editedEnd,
          distance : editedDistance
        };

        fetch(`http://localhost:5000/edit-path/${editingId}`,{
          method : "PUT",
          headers :{
            "Content-Type" : "application/json"
          },
          body : JSON.stringify(updateEdge)
        })
        .then((res) => res.json())
        .then((data) => {
              alert(data.message);
              fetch("http://localhost:5000/all-paths")
              .then((res) => res.json())
              .then((data) => setPaths(data));
              setEditingId(null);

          });

      }


      const [editingId, setEditingId] = useState(null)
      const [editedStart, setEditedStart] = useState('')
      const [editedEnd, setEditedEnd] = useState('')
      const [editedDistance, setEditedDistance] = useState('')


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
                <th>Start</th>
                <th>End</th>
                <th>Distance</th>
                <th>Action</th>
                <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                  {paths.map((paths, idx) => (
                  <tr key={idx}>
                    {editingId === paths.id ?(
                      <input value={editedStart} onChange={(e) => setEditedStart(e.target.value)}/>
                    ):( <td>{paths.start}</td>)}

                    {editingId === paths.id ?(
                      <input value={editedEnd} onChange={(e) => setEditedEnd(e.target.value)}/>
                    ):( <td>{paths.end}</td>)}

                    {editingId === paths.id ?(
                      <input value={editedDistance} onChange={(e) => setEditedDistance(e.target.value)}/>
                    ):( <td>{paths.distance}</td>)}

                      <td>
                      <button onClick={() => handleDelete(paths.id)}>Delete</button>
                      </td>
                      <td>
                      {editingId === paths.id ? (
                          <button onClick={() => handleSave(paths.id)}>Save</button>
                        ) : (
                          <button onClick={() => {
                            setEditingId(paths.id);
                            setEditedStart(paths.start);
                            setEditedEnd(paths.end);
                            setEditedDistance(paths.distance);
                          }}>Edit</button>
                        )}

                      </td>
                    </tr>
                    ))}
               </tbody>
      </table>

    </div>
  );
}

export default App;
