import { useMemo, useState } from "react";
import CaiXaDeTexto from "../CaixaDeTexto";
import Botao from "../Botao";
import "./styles.css";
import { estudantes } from './../../data/estudantes';


const Formulario = ({lista, setLista}) => {
    // const nome = document.getElementById("nome").value;
    const [nome, setNome] = useState('');
    const [foto, setFoto] = useState('');
    const [comidaNaoGosta, setComidaNaoGosta] = useState('');
    const [experienciaMassa, setExperienciaMassa] = useState('');

    const limparCampos = () => {

        setNome("");
        setFoto("");
        setComidaNaoGosta("");
        setExperienciaMassa("");
    };
    
    const criarCartao = (event) => {
        event.preventDefault();
        
       
        const estudante = {
            nome: nome,
            foto: foto,
            comidaQueNaoGosta: comidaNaoGosta,
            experienciaPositiva: experienciaMassa,
        };

        //lista.push(estudante);
        const novaLista = [...lista, estudante]; 
        setLista(novaLista);

        limparCampos();

        
    };

    const quantidadeEstudantes = useMemo(() => lista.length, [lista]);
    
    return (
                
            <section className="formulario">
                <form onSubmit={criarCartao}>
                    <b>Preencha com os dados da mulher referência para criar um card</b> <br />
                    <small>
                        <i> Atualmente há {quantidadeEstudantes} estudantes cadastradas </i>
                    </small>;
                            
                    <CaiXaDeTexto value={nome} label="Nome" placeholder="Digite o seu nome..." 
                    handleChange={(e) => setNome(e.target.value) } />
                    <CaiXaDeTexto value={foto} label="Foto" placeholder="Insira a Url da sua foto..." 
                    handleChange={(e) => setFoto(e.target.value)}/>
                    <CaiXaDeTexto value={comidaNaoGosta} label="Comida que não gosta" placeholder="Comida que não desce..."
                    handleChange={(e) => setComidaNaoGosta(e.target.value)}/>
                    <CaiXaDeTexto value={experienciaMassa} label="Experiencia Massa" placeholder="Conta ai... "
                    handleChange={(e) => setExperienciaMassa(e.target.value)}/>
                    <Botao texto="Criar Card" acao={criarCartao} />
                </form>
                        
            </section>
                                                        
                
            
    );
};

export default Formulario;