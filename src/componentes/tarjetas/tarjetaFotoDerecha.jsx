function tarjetaFotoDerecha() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">
                Ven a visitarnos
              </h6>
              <h1 className="display-6 mb-0">
                Nos encantaría poder recibirte!
              </h1>
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
            {/* <div className="row gy-5 gx-4">
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                  <h6 className="mb-0">ipsum amet ipsum</h6>
                </div>
                <span>
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                </span>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                  <h6 className="mb-0">ipsum amet ipsum</h6>
                </div>
                <span>
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                </span>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                  <h6 className="mb-0">ipsum amet ipsum</h6>
                </div>
                <span>
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                </span>
              </div>
              <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                <div className="d-flex align-items-center mb-3">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                  <h6 className="mb-0">ipsum amet ipsumss</h6>
                </div>
                <span>
                  Magna sea eos sit dolor, ipsum amet ipsum lorem diam
                </span>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div
              className="Tarjeta-1 position-relative overflow-hidden ps-5 pt-5 h-100"
              /* style="min-height: 400px" */
            >
              <img
                className="position-absolute w-100 h-100"
                src="img/familia.jpg"
                alt=""
                /* style="object-fit: cover" */
              />
              <div
                className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                /* style="width: 200px; height: 200px" */
              >
                <div className="d-flex flex-column justify-content-center text-center bg-primary p-3">
                  <h1 className="text-white">aadd</h1>
                  <h2 className="text-white">sssdd</h2>
                  <h5 className="text-white mb-0">asfge</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default tarjetaFotoDerecha;
