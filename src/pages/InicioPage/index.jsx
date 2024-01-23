import Formulario from "../../components/Formulario";
import ListaDeEstudantes from "../../components/ListaDeEstudantes";
import { useEffect, useState } from "react";
import { estudantes } from "../../data/estudantes";

const InicioPage = () => {

// const lista = estudantes;
  const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);

  useEffect (() => {
    
         if (listaStorage) {
        setLista(JSON.parse(listaStorage));
    }
 }, []);


  useEffect(() => {
    if (lista.length > 14) {
      alert("Bateu Tudo");
    }
      
    localStorage.setItem("estudantes", JSON.stringify(lista));
      
  }, [lista]);


    return (
        <>
            <Formulario setLista={setLista} lista={lista} />
            <ListaDeEstudantes lista={lista}/>

        </>

    )
};

export default InicioPage;