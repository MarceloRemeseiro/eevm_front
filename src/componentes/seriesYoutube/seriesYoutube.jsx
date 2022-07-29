import Datos from "../API/Datos";
import Spinner from "../spinner/spinner";

function seriesYoutube() {
  const url = "http://localhost:8086";
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
        <h3 className="mt-5">Videos anteriores</h3>
        <div className="row">
          <div className="col-md-4">
            <h5 className="mb-1">{data?.data[0].attributes.Titulo}</h5>
            <p>{data?.data[0].attributes.Descripcion}</p>
            <a href = {(""+data?.data[0].attributes.link+"").slice(0,2)} target="_blank">
              <img
                src={
                  url +
                  "" +
                  data?.data[0].attributes.Miniatura.data[0].attributes.url +
                  ""
                }
                className="img-thumbnail rounded"
                width="800"
              />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default seriesYoutube;
