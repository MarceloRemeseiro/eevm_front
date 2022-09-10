import { Link } from "react-router-dom";
import { Datos } from "../API/Datos";
import { Dominio } from "../API/Datos";
import CarouselStatic from "./carouselStatic";

function carousel() {
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/home-slider1/?populate=*");
  if (loading)
    return (
      <div>
        <CarouselStatic />
      </div>
    );
  if (error) console.log(error);
  const act1 =
    data?.data.attributes.ActivoS1 === true
      ? "btn btn-primary btn-smpy-3 px-5"
      : "d-none";
  const act2 =
    data?.data.attributes.ActivoS2 === true
      ? "btn btn-primary btn-smpy-3 px-5"
      : "d-none";

  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 altoCarrousel"
              src={"" + data?.data.attributes.Imagen1.data.attributes.url + ""}
              alt="ImagenFondo1"
              width="100%"
              style={{ height: "50vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="carousel-content ">
                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                      {data?.data.attributes.TituloPeque1}
                    </h5>
                    <h1 className="display-5 text-light mb-3 animated slideInDown">
                      {data?.data.attributes.TituloGrande1}
                    </h1>

                    <Link
                      to={"" + data?.data.attributes.LinkS1 + ""}
                      className={"" + act2 + ""}
                    >
                      Mas detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 altoCarrousel"
              src={"" + data?.data.attributes.Imagen2.data.attributes.url + ""}
              alt="ImagenFondo2"
              width="100%"
              style={{ height: "50vh", objectFit: "cover" }}
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                      {data?.data.attributes.TituloPeque2}
                    </h5>
                    <h1 className="display-5 text-light mb-3 animated slideInDown">
                      {data?.data.attributes.TituloGrande2}
                    </h1>
                    <Link
                      to={"" + data?.data.attributes.LinkS2 + ""}
                      className={"" + act1 + ""}
                    >
                      Mas detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default carousel;
