function tarjetaFotoIzquierda() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="Tarjeta-1 position-relative overflow-hidden">
              <img
                className="position-absolute w-100 h-100"
                src="img/historia.png"
                alt=""
              />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tarjetaFotoIzquierda;
