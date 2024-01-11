import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListadeEstudantes";
import Rodape from "./components/Rodape";


function App() {
  return (
  <>
    <div style={{marginBottom: "130px"}}>
        <Header />
        <Formulario />
        <ListaDeItens />
        <ListaDeEstudantes />
        <Rodape mensagem="Feito Por Larissa Bispo" />
    </div>  
      

  </>
    
 );
}

export default App;
