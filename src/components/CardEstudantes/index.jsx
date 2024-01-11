import "./styles.css";

const CardEstudantes = ({
    fotoUrl,
    nome,
    comidaQueNaoGosta,
    experienciaPositiva,
}) => { 
    return (
            <div className="card">
                <img src={fotoUrl} alt="foto da estudante" />
                <div className="container">
                    <h4>
                        <b>{nome}</b>
                    </h4>
                    <p>
                        <b>Comida que não gosto: </b>
                            {comidaQueNaoGosta}
                            
                    </p>
                    <p>
                        <b>Uma experiência Muito massa:</b>
                            {experienciaPositiva}

                    </p>
                </div>
            </div>
    );
   
};

export default CardEstudantes;