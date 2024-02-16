import "./styles.css";
import { loading } from '/public';


const Loading = () => {
    return (

        <div className="loader_container">
            <img className="loader" src={loading} alt="Carregando" />
        </div>
    );

};

export default Loading;
