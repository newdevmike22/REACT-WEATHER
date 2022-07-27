import Berlin from "../assets/berlin.jpg";
import Chicago from "../assets/chicago.jpg";
import Dubai from "../assets/dubai.jpg";
import HongKong from "../assets/hongkong.jpg";
import London from "../assets/london.jpg";
import NewYork from "../assets/newyork2.jpg";
import Paris from "../assets/paris.jpg";
import Toronto from "../assets/toronto.jpg";

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Berlin} className="d-block w-100" alt="Berlin" />
                    </div>
                    <div className="carousel-item">
                        <img src={Chicago} className="d-block w-100" alt="Chicago" />
                    </div>
                    <div className="carousel-item">
                        <img src={Dubai} className="d-block w-100" alt="Dubai" />
                    </div>
                    <div className="carousel-item">
                        <img src={HongKong} className="d-block w-100" alt="Hong Kong" />
                    </div>
                    <div className="carousel-item">
                        <img src={London} className="d-block w-100" alt="London" />
                    </div>
                    <div className="carousel-item">
                        <img src={NewYork} className="d-block w-100" alt="New York" />
                    </div>
                    <div className="carousel-item">
                        <img src={Paris} className="d-block w-100" alt="Paris" />
                    </div>
                    <div className="carousel-item">
                        <img src={Toronto} className="d-block w-100" alt="Toronto" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="spin globe">
                <h2><i className="fas fa-globe"></i></h2>
            </div>
            <div className="logo">
                <h1><span className="weather-logo">weather</span>finder</h1>
            </div>
        </div>
    )
}

export default Carousel;