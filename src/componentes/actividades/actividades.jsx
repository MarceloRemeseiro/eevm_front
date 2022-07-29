import { Link } from "react-router-dom";
import Datos from "../API/Datos";
import Spinner from "../spinner/spinner";

function actividades() {
  const url = "http://localhost:8086";
  const { data, loading, error } = Datos(url + "/api/home-tarjetas/?populate=*");
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h1 className="display-6 mb-0">Nuestras Actividades</h1>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={url + ""+ data?.data.attributes.ImagenT1.data.attributes.url+""}
                alt=""
              />
              <Link to="actividad1" className="small">
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{data?.data.attributes.TituloT1}</h5>
                  <p>{data?.data.attributes.DescripcionT1}</p>
                  <p className="link ">
                    Leer mas<i className="fa fa-arrow-right ms-3"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={url + ""+ data?.data.attributes.ImagenT2.data.attributes.url+""}
                alt=""
              />
              <Link to="actividad2" className="small">
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{data?.data.attributes.TituloT2}</h5>
                  <p>{data?.data.attributes.DescripcionT2}</p>
                  <p className="link ">
                    Leer mas<i className="fa fa-arrow-right ms-3"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={url + ""+ data?.data.attributes.ImagenT3.data.attributes.url+""}
                alt=""
              />
              <Link to="actividad3" className="small">
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{data?.data.attributes.TituloT3}</h5>
                  <p>{data?.data.attributes.DescripcionT3}</p>
                  <p className="link ">
                    Leer mas<i className="fa fa-arrow-right ms-3"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={url + ""+ data?.data.attributes.ImagenT4.data.attributes.url+""}
                alt=""
              />
              <Link to="actividad4" className="small">
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{data?.data.attributes.TituloT4}</h5>
                  <p>{data?.data.attributes.DescripcionT4}</p>
                  <p className="link ">
                    Leer mas<i className="fa fa-arrow-right ms-3"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={url + ""+ data?.data.attributes.ImagenT5.data.attributes.url+""}
                alt=""
              />
              <Link to="actividad5" className="small">
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{data?.data.attributes.TituloT5}</h5>
                  <p>{data?.data.attributes.DescripcionT5}</p>
                  <p className="link ">
                    Leer mas<i className="fa fa-arrow-right ms-3"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={url + ""+ data?.data.attributes.ImagenT6.data.attributes.url+""}
                alt=""
              />
              <Link to="actividad6" className="small">
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{data?.data.attributes.TituloT6}</h5>
                  <p>{data?.data.attributes.DescripcionT6}</p>
                  <p className="link ">
                    Leer mas<i className="fa fa-arrow-right ms-3"></i>
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default actividades;
