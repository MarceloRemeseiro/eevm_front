import {Datos} from "../componentes/API/Datos";
import {Dominio} from "../componentes/API/Datos";
import Spinner from "../componentes/spinner/spinner";
import ReactMarkdown from "react-markdown";

function actividad5() {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/tarjetas-inicio/?populate=*");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);

  return (
    <div>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            {data?.data.attributes.TituloT5}
          </h1>
        </div>
      </div>
      <div className="container d-lg-flex flex-wrap">
        <div className="col mb-3">
          <img src={""+ data?.data.attributes.ImagenT5.data.attributes.url+""} alt="" 
          width="100%"
          />
        </div>
        <div className="col text-p fs-5 px-5">
          <ReactMarkdown>
            {data?.data.attributes.DescripcionLargaT5}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default actividad5;
