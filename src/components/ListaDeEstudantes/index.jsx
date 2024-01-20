import CardEstudantes from "../CardEstudantes";
import "./styles.css";

const ListaDeEstudantes = ({lista}) => {
    return (
        <div className="wrapper">
            {lista.map((estudantes, index) => ( 
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