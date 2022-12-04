import { Link } from "react-router-dom";
import { Datos } from "../API/Datos";
import { Dominio } from "../API/Datos";
import Spinner from "../spinner/spinner";

function homeCarousel() {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/Slider2/?populate=*");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a
            href={data?.data.attributes.Link1}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"" + data?.data.attributes.Imagen1.data.attributes.url + ""}
              className="d-block w-100"
              alt=""
            />
          </a>
        </div>
        <div className="carousel-item">
          <a
            href={data?.data.attributes.Link2}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"" + data?.data.attributes.Imagen2.data.attributes.url + ""}
              className="d-block w-100"
              alt=""
            />
          </a>
        </div>
        <div className="carousel-item">
          <a
            href={data?.data.attributes.Link3}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"" + data?.data.attributes.Imagen3.data.attributes.url + ""}
              className="d-block w-100"
              alt=""
            />
          </a>
        </div>

        <div className="carousel-item">
          <a
            href={data?.data.attributes.Link4}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={"" + data?.data.attributes.Imagen4.data.attributes.url + ""}
              className="d-block w-100"
              alt=""
            />
          </a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default homeCarousel;
