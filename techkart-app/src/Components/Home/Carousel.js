import { NavLink } from 'react-router-dom';

import logo2 from '../../Assets/Images/Copilot.avif'
import logo3 from '../../Assets/Images/AsusLaptop.webp'
import logo4 from '../../Assets/Videos/Video.mp4'

function Carousel() {
  return (
    <>
      <main>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active w-100">
              <video id="tcm15949187944" className="w-100" autoPlay muted playsInline loop disablePictureInPicture style={{ height: '512px', width: '100vh', objectFit: 'fill' }}>
                <source src={logo4} type="video/mp4" srcSet="" />
              </video>
              <div className="container">
                <div className="carousel-caption text-start mb-0">
                  <h1 className="text-dark">Nitro V 14 AMD</h1>
                  <br />
                  <h5 className="opacity-75 text-dark">A new era of AI-powered innovation begins</h5>
                  <br />
                  <p><NavLink className="btn btn-lg btn-primary" to="/laptop/2">Shop Now</NavLink></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={logo2} className="d-block w-100" alt="..." style={{ height: '512px' }} />
              <div className="container">
                <div className="carousel-caption text-start mb-0">
                  <h1>Copilot + PC</h1>
                  <br />
                  <h5 className="opacity-75">A new era of AI-powered innovation begins</h5>
                  <br />
                  <p><NavLink className="btn btn-lg btn-primary" to="/laptop/1">Shop Now</NavLink></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={logo3} className="d-block w-100" alt="..." style={{ height: '512px' }} />
              <div className="container">
                <div className="carousel-caption text-start mb-0">
                  <h1 className="text-dark">ASUS ExpertBook P5</h1>
                  <br />
                  <h5 className="opacity-75 text-dark">Work reimagined, with AI</h5>
                  <br />
                  <p><NavLink className="btn btn-lg btn-primary" to="/laptop/5">Shop Now</NavLink></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  )
}
export default Carousel;