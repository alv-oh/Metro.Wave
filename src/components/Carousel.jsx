const Carousel = () => {
    return (
      <section className="row">
        <div classNameName="col-md-12">
          <div className="carousel slide" id="mycarousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src="images/slide1.jpg" alt="" className="d-block w-100" style={{height:'400px',objectFit:'cover'}} />
              </div>
  
              <div className="carousel-item">
                <img src="images/slide2.jpg" alt="" className="d-block w-100" style={{height:'400px',objectFit:'cover'}} />
              </div>
  
              <div className="carousel-item">
                <img src="images/slide3.jpg" alt="" className="d-block w-100" style={{height:'400px',objectFit:'cover'}} />
              </div>
            </div>
  
            <a
              href="#mycarousel"
              className="carousel-control-prev"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
  
            <a
              href="#mycarousel"
              className="carousel-control-next"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Carousel;