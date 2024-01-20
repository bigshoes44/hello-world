import { useState, useEffect } from "react";
import Contador from "./components/Contador";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaDeEstudantes from "./components/ListaDeEstudantes";
import Rodape from "./components/Rodape";
import { estudantes } from "./data/estudantes";


function App() {
  
  //const lista = estudantes;
  //const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(estudantes);

  //useEffect (() => {
    
  //  if (listaStorage) {
  //    setLista(JSON.parse(listaStorage));
  //  }
 // }, []);


  useEffect(() => {
    if (lista.length > 14) {
      alert("Bateu Tudo");
    }
      
    localStorage.setItem("estudantes", JSON.stringify(lista));
      
  }, [lista]);

  return (
  <>
    <div style={{marginBottom: "130px"}}>
        <Header />
        <Contador />
        <Formulario setLista={setLista} lista={lista} />
        <ListaDeEstudantes lista={lista}/>
        </div>
        <Rodape mensagem="Feito Por Larissa Bispo" />
          

  </>
    
 );
}

export default App;
