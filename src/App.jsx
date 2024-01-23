import Header from "./components/Header";
import Rodape from "./components/Rodape";
import ContadorPage from "./pages/ContadorPage";
import { Route, Routes } from 'react-router-dom';
import InicioPage from "./pages/InicioPage";
import ErrorPage from "./pages/ErrorPage";
import SobrePage from "./pages/SobrePage";
import SobremimPage from "./pages/SobrePage/SobreMimPage";
import SobrePretaLabPage from "./pages/SobrePage/SobrePretaLabPage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  
  return (
    <>
      <Header />
        <div style={{marginBottom: "130px"}}>
            <Routes>
              <Route path='/' element={<InicioPage />} />
              <Route path="/contador" element={<ContadorPage />} />
              <Route path="/pokemon" element={<PokemonPage />} />
                <Route path="/sobre" >
                    <Route index element={<SobrePage />} />
                    <Route path="mim" element={<SobremimPage />} />
                    <Route path="preta-lab" element={<SobrePretaLabPage />} />
                </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            
            
          </div>
      <Rodape mensagem="Feito Por Larissa Bispo" />
          

  </>
    
 );
}

export default App;
