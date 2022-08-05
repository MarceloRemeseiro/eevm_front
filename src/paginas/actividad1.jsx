import {Datos} from "../componentes/API/Datos";
import {Dominio} from "../componentes/API/Datos";
import Spinner from "../componentes/spinner/spinner";
import ReactMarkdown from "react-markdown";


function Actividad1() {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/home-tarjetas/?populate=*");
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
            {data?.data.attributes.TituloT1}
          </h1>
        </div>
      </div>
      <div className="container d-flex flex-wrap">
        <div className="col">
          <img src={""+ data?.data.attributes.ImagenT1.data.attributes.url+""} alt="" />
        </div>
        <div className="col text-p fs-5 px-5">
          <ReactMarkdown>
            {data?.data.attributes.DescripcionLargaT1}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default Actividad1;
