import logo from './logo.svg';
import './App.css';

function App() {
  const [archivos, setArchivos] = useState(null)
  const subirArchivos = e => {
    setArchivos(e);
    console.log(e);

  }
  const insertarArchivos = async () => {

    const f = new FormData();

    for (let index = 0; index < archivos.length; index++) {
      f.append("file", archivos[index]);

    }

    console.log("Aqui " + f)
    await axios.post("http://localhost:8080/api/assets/upload", f, { headers: { 'Content-Type': 'multipart/form-data' } })

      .then(response => {
        console.log(response.data);
        console.log(f)
      }).catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App">

      <label>cargar foto</label>
      <input type= "file"></input>
      <input type="file" id="subir" name="PDF" onChange={(e) => subirArchivos(e.target.files)} />
      <button onClick={() => insertarArchivos()}>subir foto</button>
    </div>
  );
}


export default App;
