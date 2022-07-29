import Carousel from "../componentes/carousel/carousel";
import HomeCarousel from "../componentes/carousel/HomeCarousel";
import TarjetaFotoIzquierda from "../componentes/tarjetas/tarjetaFotoIzquierda"
import Banner from "../componentes/banner/banner"
import TarjetaFotoDerecha from "../componentes/tarjetas/tarjetaFotoDerecha"
import Actividades from "../componentes/actividades/actividades"
import HomeContacto from "../componentes/contacto/homeContacto"
import Pastores from "../componentes/pastores/pastores"
import Testimonios from "../componentes/testimonios/testimonios";

function home() {
    return (
        <div>
            <div>
        <Carousel/>
      </div>
      <div>
        <TarjetaFotoIzquierda/>
      </div>
      <div>
        <Banner/>
      </div>
      <div>
        <TarjetaFotoDerecha/>
      </div>
      <div>
      <Actividades/>
      </div>
      <div>
      <HomeCarousel/>
      </div>
      <div>
        <Pastores/>
      </div>
      <div>
        <Testimonios/>
      </div>
        </div>
    )
}

export default home;
