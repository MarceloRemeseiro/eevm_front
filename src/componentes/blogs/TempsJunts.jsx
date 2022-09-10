import { Link } from "react-router-dom";
import { Datos } from "../API/Datos";
import { Dominio } from "../API/Datos";
import Spinner from "../spinner/spinner";

const TempsJunts = () => {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/blogs/?populate=*");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  return (
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
          <p className="mb-1">{data.attributes.Contenido}</p>
          <div className=""></div>
        </div>
      ))}
    </div>
  );
};

export default TempsJunts;
