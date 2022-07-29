import {Link} from "react-router-dom"

function banner() {
  return (
    <div className="container-fluid my-5 p-0">
      <div className="row g-0">
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="position-relative">
            <img className="img-fluid w-100" src="img/fact-1.jpg" alt="" />
            <div className="facts-overlay">
              <h1 className="display-1 ">01</h1>
              <h4 className="text-white mb-3">Visión</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link to="misionVision" className="text-white small" href="">
              Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
          <div className="position-relative">
            <img className="img-fluid w-100" src="img/fact-2.jpg" alt="" />
            <div className="facts-overlay">
              <h1 className="display-1">02</h1>
              <h4 className="text-white mb-3">Misión</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link to="misionVision" className="text-white small" href="">
              Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="position-relative">
            <img className="img-fluid w-100" src="img/fact-3.jpg" alt="" />
            <div className="facts-overlay">
              <h1 className="display-1">03</h1>
              <h4 className="text-white mb-3">Que Creemos</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link to="queCreemos" className="text-white small" href="">
              Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
          <div className="position-relative">
            <img className="img-fluid w-100" src="img/fact-4.jpg" alt="" />
            <div className="facts-overlay">
              <h1 className="display-1">04</h1>
              <h4 className="text-white mb-3">Jesús</h4>
              <p className="text-white">
                Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit
                clita duo justo erat amet
              </p>
              <Link to="jesus" className="text-white small" href="">
              Leer mas<i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default banner;
