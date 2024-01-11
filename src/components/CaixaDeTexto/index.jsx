import "./styles.css";

const CaiXaDeTexto = ({label, placeholder}) => {
    return (
        <div className="campo-texto"> 
            <label>{label}</label>
            <input placeholder={placeholder}></input>
        </div>
               
    );
};

export default CaiXaDeTexto;
