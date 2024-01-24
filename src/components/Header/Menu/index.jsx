import { Link } from "react-router-dom";
import "./styles.css";


const Menu = () => {
    return (
        <nav>
            <ul className="menu">
                <li>
                    <Link className="menu-item" to="/">Home</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/contador">Counter</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/sobre">About</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/pokemon">Pokemon Api</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/endereco">CEP API</Link>
                </li>
            </ul>
        </nav>

    );
};

export default Menu;