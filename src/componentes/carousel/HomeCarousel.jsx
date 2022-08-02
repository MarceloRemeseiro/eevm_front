import { Link } from "react-router-dom";
import {Datos} from "../API/Datos";
import {Dominio} from "../API/Datos";
import Spinner from "../spinner/spinner";

function homeCarousel() {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/home-slider2/?populate=*");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  return (
    <div
      id="carouselExampleControlsNoTouching"
      className="carousel slide"
      data-bs-touch="false"
    >
      <div className="carousel-inner">
          <div className="carousel-item active">
        <Link to={""+data?.data.attributes.Link1+""}>
            <img
              src={""+ data?.data.attributes.Imagen1.data.attributes.url+""}
              className="d-block w-100"
            />
        </Link>
          </div>
          <div className="carousel-item">
        <Link to={""+data?.data.attributes.Link2+""}>
            <img
              src={""+ data?.data.attributes.Imagen2.data.attributes.url+""}
              className="d-block w-100"
            />
        </Link>
          </div>
          <div className="carousel-item">
        <Link to={""+data?.data.attributes.Link3+""}>
            <img
              src={""+ data?.data.attributes.Imagen3.data.attributes.url+""}
              className="d-block w-100"
            />
        </Link>
          </div>
        
          <div className="carousel-item">
            <Link to={""+data?.data.attributes.Link4+""}>
              <img
              src={""+ data?.data.attributes.Imagen4.data.attributes.url+""}
              className="d-block w-100"
              /></Link>
          </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControlsNoTouching"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default homeCarousel;
