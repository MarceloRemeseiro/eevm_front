import { Link } from "react-router-dom";
import {Datos} from "../API/Datos";
import {Dominio} from "../API/Datos";
import Spinner from "../spinner/spinner";


function actividades() {
  const url = Dominio();
  const { data, loading, error } = Datos(
    url + "/api/home-tarjetas/?populate=*"
  );
  if (loading)
    return (
      <h1>
        <Spinner />
      </h1>
    );
  if (error) console.log(error);
  const act1 =
    data?.data.attributes.ActivoT1 === true
      ? "col-lg-4 col-md-6 wow fadeInUp"
      : "d-none";
  const act2 =
    data?.data.attributes.ActivoT2 === true
      ? "col-lg-4 col-md-6 wow fadeInUp"
      : "d-none";
  const act3 =
    data?.data.attributes.ActivoT3 === true
      ? "col-lg-4 col-md-6 wow fadeInUp"
      : "d-none";
  const act4 =
    data?.data.attributes.ActivoT4 === true
      ? "col-lg-4 col-md-6 wow fadeInUp"
      : "d-none";
  const act5 =
    data?.data.attributes.ActivoT5 === true
      ? "col-lg-4 col-md-6 wow fadeInUp"
      : "d-none";
  const act6 =
    data?.data.attributes.ActivoT6 === true
      ? "col-lg-4 col-md-6 wow fadeInUp"
      : "d-none";
  console.log(act1);
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
          <div className={"" + act1 + ""} data-wow-delay="0.1s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={
                
                  "" +
                  data?.data.attributes.ImagenT1.data.attributes.url +
                  ""
                }
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
          <div className={"" + act2 + ""} data-wow-delay="0.3s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={
                  
                  "" +
                  data?.data.attributes.ImagenT2.data.attributes.url +
                  ""
                }
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
          <div className={"" + act3 + ""} data-wow-delay="0.5s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={
                  
                  "" +
                  data?.data.attributes.ImagenT3.data.attributes.url +
                  ""
                }
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
          <div className={"" + act4 + ""} data-wow-delay="0.1s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={
                  
                  "" +
                  data?.data.attributes.ImagenT4.data.attributes.url +
                  ""
                }
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
          <div className={"" + act5 + ""} data-wow-delay="0.3s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={
                  
                  "" +
                  data?.data.attributes.ImagenT5.data.attributes.url +
                  ""
                }
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
          <div className={"" + act6 + ""} data-wow-delay="0.5s">
            <div className="service-item bg-light overflow-hidden h-100">
              <img
                className="img-fluid"
                src={
                  
                  "" +
                  data?.data.attributes.ImagenT6.data.attributes.url +
                  ""
                }
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
