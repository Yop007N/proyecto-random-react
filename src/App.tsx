
import Formulario from "./components/Formulario";
import ListaEstudiante from "./components/ListaEstudiante";

const App = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <Formulario />
        <ListaEstudiante />
      </div>
    </div>
  );
}

export default App;
