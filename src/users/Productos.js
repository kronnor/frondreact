import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';


const Formulario = () => {


    const [datos, setDatos] = useState({
        producto: '',
        cantidad: '',
        precio: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.producto + ' ' + datos.cantidad)
    }

    return (
        <Fragment>
            <h1>Ingreso de Productos</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="Producto" className="form-control" onChange={handleInputChange} name="producto"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Cantidad" className="form-control" onChange={handleInputChange} name="cantidad"></input>
                </div>
                <div className="col-md-3">
                    <input type="text" placeholder="Precio" className="form-control" onChange={handleInputChange} name="precio"></input>
                </div>
                <div className="col-md-3">
                    <input type="file" className="form-control" onChange={handleInputChange} name="imagen"></input>
                </div>
                <button type="submit" className="btn btn-primary"
                onClick={() => {
                    fetch("http://localhost:8080/api/crearproducto")
                      .then(response => response.body())
                      .then(data => console.log(data))
                      .catch(error => console.error(error));
                  }}
                >Guardar</button>
                <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            </form>
            
        </Fragment>
    );
}
 
export default Formulario;