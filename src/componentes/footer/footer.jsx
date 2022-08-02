import {Link} from "react-router-dom"


function footer() {
  return (
    <div>
    <div
      className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5 justify-content-center">
          <div className="col-lg-3 col-md-6">
            <h1 className="text-white mb-4 fs-2">
              <i className="fa fa-building text-primary me-3"></i>Església de Vilassar de Mar
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="d-flex pt-2">
              {/* <a className="btn btn-square btn-outline-primary me-1" href="">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a className="btn btn-square btn-outline-primary me-1" href="https://www.facebook.com/eevilassardemar">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square btn-outline-primary me-1" href="https://www.youtube.com/user/Jesusviu/featured">
                <i className="fab fa-youtube"></i>
              </a>
              {/* <a className="btn btn-square btn-outline-primary me-0" href="">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Dirección</h4>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>C/ de l'Àngel, 8 - 08340 Vilassar de Mar (Barcelona)
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+34 777 555 444
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Accesos Directos</h4>
            <Link to="misionVision" className="btn btn-link">
              Sobre Nosotros
            </Link>
            <Link to="contacto" className="btn btn-link">
              Contacta
            </Link>
            <Link to="media" className="btn btn-link">
              Media
            </Link>
            <Link to="actividades" className="btn btn-link">
              Actividades
            </Link>
            {/* <a className="btn btn-link" href="">
              
            </a> */}
          </div>
          {/* <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto mw-400" style="max-width: 400px">
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p>Església de Vilassar de Mar</p>
            </div>
            {/*  <div className="col-md-6 text-center text-md-end">
              Designed By <a href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By:
              <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"
    ><i className="bi bi-arrow-up"></i></a></div>
  );
}

export default footer;
