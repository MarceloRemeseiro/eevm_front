import Top from "./componentes/top/top";
import Navbar from "./componentes/navbar/navbar";
import Home from "./paginas/home";
import Actividad from "./paginas/actividad";
import Actividad1 from "./paginas/actividad1";
import Actividad2 from "./paginas/actividad2";
import Actividad3 from "./paginas/actividad3";
import Actividad4 from "./paginas/actividad4";
import Actividad5 from "./paginas/actividad5";
import Actividad6 from "./paginas/actividad6";
import Media from "./paginas/media";
import MisionVision from "./paginas/misionVision";
import QueCreemos from "./paginas/queCreemos";
import Jesus from "./paginas/jesus";
import Pastores from "./paginas/pastores";
import { Contacto } from "./paginas/contacto";
import Dar from "./paginas/dar";
import Footer from "./componentes/footer/footer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./componentes/scrolltop/scrollTop";

function App() {
  return (
    
    <BrowserRouter className="App"><ScrollToTop/>
      <div>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="actividad" element={<Actividad />}></Route>
          <Route path="media" element={<Media />}></Route>
          <Route path="misionVision" element={<MisionVision />}></Route>
          <Route path="queCreemos" element={<QueCreemos />}></Route>
          <Route path="jesus" element={<Jesus />}></Route>
          <Route path="pastores" element={<Pastores />}></Route>
          <Route path="contacto" element={<Contacto />}></Route>
          <Route path="dar" element={<Dar />}></Route>
          <Route path="actividad/actividad1" element={<Actividad1 />}></Route>
          <Route path="actividad/actividad2" element={<Actividad2 />}></Route>
          <Route path="actividad/actividad3" element={<Actividad3 />}></Route>
          <Route path="actividad/actividad4" element={<Actividad4 />}></Route>
          <Route path="actividad/actividad5" element={<Actividad5 />}></Route>
          <Route path="actividad/actividad6" element={<Actividad6 />}></Route>
          <Route path="actividad1" element={<Actividad1 />}></Route>
          <Route path="actividad2" element={<Actividad2 />}></Route>
          <Route path="actividad3" element={<Actividad3 />}></Route>
          <Route path="actividad4" element={<Actividad4 />}></Route>
          <Route path="actividad5" element={<Actividad5 />}></Route>
          <Route path="actividad6" element={<Actividad6 />}></Route>
          <Route
            path="*"
            element={
              <div class="m-5 p-5">
                <div class="fs-1 text-center mt-5 pt-5">
                  404 - Página no encontrada
                </div>{" "}
              </div>
            }
          ></Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
