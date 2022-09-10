function tarjetaFotoDerecha() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">
                Series de predicaciones
              </h6>
              <h1 className="display-6 mb-0">Serie de Jonás</h1>
            </div>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse bibendum velit at felis eleifend, ut consequat orci
              pulvinar. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quisquam, excepturi ipsam. Ex, consequuntur ratione deleniti
              quibusdam laboriosam quidem fugiat. Libero voluptates
              exercitationem eveniet praesentium placeat necessitatibus,
              perspiciatis repellendus. Obcaecati unde quasi quibusdam hic sit
              dolor voluptates reprehenderit sapiente! Eius nihil animi velit
              vitae ipsam? Reiciendis nemo repudiandae quia possimus officiis.
            </p>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="Tarjeta-1 position-relative overflow-hidden w-100"
              /* style="min-height: 400px" */
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/series.png"
                alt=""
                /* style="object-fit: cover" */
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tarjetaFotoDerecha;
