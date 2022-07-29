import { Link} from "react-router-dom";

function navbar() {
  /* var btncontainer = document.getElementById("navbar");
  var btns = btncontainer.getElementsByClassname("nav-item");

  for(var i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";})} */


  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <Link to="/" className="navbar-brand d-flex aling-items-center">
        <div className="align-text-center">
          <img
            src="/img/logo.png"
            width="100"
            height="100"
            className="d-inline-block"
            alt=""
          ></img> 
        </div>
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-3 py-lg-0" id="navbar">
          <Link to="/" className="nav-item nav-link">
            Inicio
          </Link>
          <Link to="actividad" className="nav-item nav-link">
            Actividades
          </Link>
          <Link to="media" className="nav-item nav-link">
            Media
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Sobre Nosotros
            </Link>
            <div className="dropdown-menu bg-light m-0">
              <Link to="misionVision" className="dropdown-item" id="btn">
                Misión y visión
              </Link>
              <Link to="queCreemos" className="dropdown-item" id="btn">
                Que creemos
              </Link>
              <Link to="jesus" className="dropdown-item" id="btn">
                Jesús
              </Link>
              <Link to="pastores" className="dropdown-item" id="btn">
                Pastores
              </Link>
              {/* <Link to="testimonial.html" className="dropdown-item">
                Testimonios
              </Link> */}
            </div>
          </div>
          <Link to="contacto" className="nav-item nav-link" id="btn">
            Contacto
          </Link>
          <Link to="dar" className="nav-item nav-link" id="btn">
            Dar
          </Link>
        </div>
      </div>
      
    </nav>
  );
}

export default navbar;
