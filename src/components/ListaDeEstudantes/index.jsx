import { estudantes } from "../../data/estudantes";
import CardEstudantes from "../CardEstudantes";
import "./styles.css";

const ListaDeEstudantes = () => {
    return (
        <div className="wrapper">
            {estudantes.map((estudantes, index) => ( 
            <CardEstudantes
            key={index}
            nome={estudantes.nome}
            comidaQueNaoGosta={estudantes.comidaQueNaoGosta}
            fotoUrl={estudantes.foto}
            experienciaPositiva={estudantes.experienciaPositiva}
            />
        ))}
        </div>
    );
};

export default ListaDeEstudantes;