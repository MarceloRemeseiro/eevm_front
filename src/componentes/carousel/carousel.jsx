import { Link } from "react-router-dom";
import { Datos } from "../API/Datos";
import { Dominio } from "../API/Datos";
import Spinner from "../spinner/spinner";

function carousel() {
  const altura = "800" + "px";
  const ancho = "100%";
  const url = Dominio();
  const { data, loading, error } = Datos(url + "/api/home-slider1/?populate=*");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="w-100"
              src={"" + data?.data.attributes.Imagen1.data.attributes.url + ""}
              alt="Image"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                      {data?.data.attributes.TituloPeque1}
                    </h5>
                    <h1 className="display-2 text-light mb-3 animated slideInDown">
                      {data?.data.attributes.TituloGrande1}
                    </h1>
                    <ol className="breadcrumb mb-4 pb-2">
                      <li className="breadcrumb-item fs-5 text-light">
                        {data?.data.attributes.Subtitulo1_1}
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        {data?.data.attributes.Subtitulo1_2}
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        {data?.data.attributes.Subtitulo1_3}
                      </li>
                    </ol>
                    <Link
                      to={"" + data?.data.attributes.LinkS1 + ""}
                      className="btn py-3 px-5"
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
              className="w-100"
              src={"" + data?.data.attributes.Imagen2.data.attributes.url + ""}
              alt="Image"
            />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h5 className="text-light text-uppercase mb-3 animated slideInDown">
                      {data?.data.attributes.TituloPeque2}
                    </h5>
                    <h1 className="display-2 text-light mb-3 animated slideInDown">
                      {data?.data.attributes.TituloGrande2}
                    </h1>
                    <ol className="breadcrumb mb-4 pb-2">
                      <li className="breadcrumb-item fs-5 text-light">
                        {data?.data.attributes.Subtitulo2_1}
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        {data?.data.attributes.Subtitulo2_2}
                      </li>
                      <li className="breadcrumb-item fs-5 text-light">
                        {data?.data.attributes.Subtitulo2_3}
                      </li>
                    </ol>
                    <Link
                      to={"" + data?.data.attributes.LinkS2 + ""}
                      className="btn py-3 px-5"
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
          data-bs-target="#header-carousel"
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
          data-bs-target="#header-carousel"
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
