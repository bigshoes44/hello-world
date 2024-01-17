import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";


function App() {
  return (
  <>
    <div style={{marginBottom: "130px"}}>
        <Header />
        <Contador />
        <Formulario />
        <ListaDeEstudantes />
        <Rodape mensagem="Feito Por Larissa Bispo" />
    </div>  
      

  </>
    
 );
}

export default App;
