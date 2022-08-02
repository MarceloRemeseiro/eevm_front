/* eslint-disable react/jsx-no-duplicate-props */
import {Datos} from "../API/Datos";
import { Dominio } from "../API/Datos";
import Spinner from "../spinner/spinner";

function SeriesYoutube() {
  const url = Dominio();
  const { data, loading, error } = Datos(
    url + "/api/series-youtubes/?populate=*"
  );
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  return (
    <div>
      <div className="mt-5 container text-center">
        <hr />
        <h3 className="mt-5">Series</h3>
        <p>
          Aqui encontrarás listas de reproduccion de las diferentes
          <br /> series de predicaciones que se han hecho
        </p>

        <div className="row pt-5">
          {data?.data.map((data) => (
            <div className="col-md-4">
              <h5 className="mt-4">{data.attributes.Titulo}</h5>
              <p className="mb-1">{data.attributes.Descripcion}</p>
              <div>
                <a
                  href={"" + data.attributes.link + ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="">
                    {data.attributes.Miniatura.data.map((imagen) => (
                      <div>
                        <img
                          src={"" + imagen.attributes.url + ""}
                          alt=""
                          className="img-thumbnail rounded"
                          width="800"
                        />
                      </div>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SeriesYoutube;
