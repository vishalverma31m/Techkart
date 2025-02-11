import logo from '../../Assets/Images/Laptop.avif'
import logo2 from '../../Assets/Images/Accessory.avif'
import logo3 from '../../Assets/Images/Gadgets.jfif'
import { NavLink } from 'react-router-dom';

function Card() {

  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h1 className="pb-2 border-bottom">Explore our Range</h1>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Laptops</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <NavLink className="stretched-link" to="laptops">
                    <li className="me-auto">
                      <button type="button" className="btn btn-dark btn-outline-light">Shop Now</button>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${logo2})`, backgroundSize: 'cover' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Accessories</h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <NavLink className="stretched-link" to="accesories">
                    <li className="me-auto">
                      <button type="button" className="btn btn-dark btn-outline-light">Shop Now</button>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: `url(${logo3})`, backgroundSize: 'cover' }}>
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Gadgets</h3>
                <ul className="d-flex list-unstyled mt-5">
                  <NavLink className="stretched-link" to="gadgets">
                    <li className="me-auto">
                      <button type="button" className="btn btn-dark btn-outline-light">Shop Now</button>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Card;