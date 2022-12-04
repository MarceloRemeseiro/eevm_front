import { Link } from "react-router-dom";
import { Datos } from "../componentes/API/Datos";
import { Dominio } from "../componentes/API/Datos";
import Spinner from "../componentes/spinner/spinner";
import ReactMarkdown from "react-markdown";

const TempsJunts = () => {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/excurciones/?populate=*");
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
            Temps Junts
          </h1>
        </div>
      </div>
      <div className="col pt-5">
        {data?.data.map((data) => (
          <div className="col-md-4">
            <h5 className="mt-4">{data.attributes.Titulo}</h5>
            <div>
              <img
                src={"" + data.attributes.Imagen.data.attributes.url + ""}
                alt=""
                className="img-thumbnail rounded"
                width="800"
              />
            </div>
            <ReactMarkdown className="mb-1">
              {data.attributes.Contenido}
            </ReactMarkdown>
            <div className=""></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TempsJunts;
