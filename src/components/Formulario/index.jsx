import CaiXaDeTexto from "../CaixaDeTexto";
import Botao from "../Botao";
import "./styles.css";

const Formulario = () => {

    return (
                
            <section className="formulario">
                <form>
                    <b>Preencha com os dados da mulher referência para criar um card</b>;
                            
                    <CaiXaDeTexto label="Nome" placeholder="Digite o seu nome..."/>
                    <CaiXaDeTexto label="Foto" placeholder="Insira a Url da sua foto..."/>
                    <CaiXaDeTexto label="Comida que não gosta" placeholder="Comida que não desce..."/>
                    <CaiXaDeTexto label="Experiencia Massa" placeholder="Conta ai... "/>
                    <Botao texto="Criar Card"/>
                </form>
                        
            </section>
                                                        
                
            
    );
};

export default Formulario;