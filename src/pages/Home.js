import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function Home() {

  const [users, setUsers] = useState([]);

  const {id} = useParams();
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/listarproductos");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/borrarproducto/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
        <div className="py-4">
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio</th>
      <th scope="col">Url</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
      users.map((user, index) =>(
    <tr>
      <th scope="row" key={index}>
                  {index + 1}</th>
      <td>{user.nombre}</td>
      <td>{user.cantidad}</td>
      <td>{user.precio}</td>
      <td><img src={user.url} height="50" width="50" /></td>
      <td>
        <button className="btn btn-outline-primary mx-2">Editar</button>
        <button className="btn btn-danger mx-2"
        onClick={() => deleteUser(user.id)}
        >Borrar</button>
      </td>
      
    </tr>
      ))
    }


  </tbody>
</table>
        </div>
    </div>
  )
}
