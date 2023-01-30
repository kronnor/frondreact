import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Productos from "./users/Productos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <center><h1>Página React</h1></center>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/addproduct" element={<Productos/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}


export default App;
