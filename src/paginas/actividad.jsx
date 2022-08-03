import Actividades from "../componentes/actividades/actividades";

function actividad() {
  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Actividades
          </h1>
          {/* <h6 className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            eligendi earum ab et tempore molestias cupiditate sint consequatur
            repudiandae aliquid alias nemo, expedita laudantium minus, sapiente
            nisi rerum possimus asperiores corporis. Porro aliquid velit sunt
          
          </h6> */}
        </div>
      </div>
      <Actividades />
    </div>
  );
}

export default actividad;
