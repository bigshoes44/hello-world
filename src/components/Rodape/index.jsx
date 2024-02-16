import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './styles.css';

const Rodape = ({mensagem}) => {
    return (
        <>
            <footer>
                <p> 
                    <LinkedInIcon /> 
                    <GitHubIcon /> 
                    {mensagem}                   
                    
                </p>
    
            </footer>
        </>
        
        
    );
};

export default Rodape;