

function tarjetaFotoIzquierda() {


  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div
              className="Tarjeta-1 position-relative overflow-hidden ps-5 pt-5"
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/historia.png"
                alt=""
                              
              />
              <div className="position-absolute top-0 start-0 bg-white pe-3 pb-3">
                <div className="Tarjeta-2 d-flex flex-column justify-content-center text-center bg-primary p-3">
                  <h1 className="text-white">25</h1>
                  <h2 className="text-white">Años</h2>
                  <h5 className="text-white mb-0">En Vilassar de Mar</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="h-100">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Quienes somos</h6>
                <h1 className="display-6 mb-0">
                  Nuestra Historia en Vilassar de Mar
                </h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum velit at felis eleifend, ut consequat orci
                pulvinar.
              </p>
              <p className="mb-4">
                Curabitur iaculis tristique metus, porta sagittis lorem aliquet
                at. Mauris eu ligula elit. Fusce quis ipsum id neque semper
                fermentum a ac metus.
              </p>
              {/* <div className="border-top mt-4 pt-4">
                <div className="row g-4">
                  <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">Ontime at services</h6>
                  </div>
                  <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">24/7 hours services</h6>
                  </div>
                  <div className="col-sm-4 d-flex wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">Verified professionals</h6>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tarjetaFotoIzquierda;
