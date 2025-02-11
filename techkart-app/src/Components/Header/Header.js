import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { myContext } from "../Context/Context";

function Header() {

  const { cartCount, productData, searchValue, setSearchValue, isLoggedIn, loggedInInfo, setLoggedInInfo, setIsLoggedIn, setCartCount } = useContext(myContext);

  const navigate = new useNavigate();

  const filteredData = productData?.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase()));

  const profilePath = isLoggedIn ? '/profile' : '/login';
  const wishlistPath = isLoggedIn ? '/wishlist' : '/login';
  const cartPath = isLoggedIn ? '/cart' : '/login';
  const orderPath = isLoggedIn ? '/order' : '/login';

  const getProduct = (e, data) => {
    
    e.preventDefault();
    setSearchValue('');
    const path = '/' + data.item + '/' + data.id;

    navigate(path, { replace: true });
  }

  const handleLogout = () => {

    const data = {
      id: '',
      fname: '',
      lname: ''
    }

    setIsLoggedIn(false);
    setLoggedInInfo(data);
    sessionStorage.setItem("isLoggedIn", JSON.stringify(false));
    sessionStorage.setItem("loggedInInfo", JSON.stringify(data));
    setCartCount(0);
    navigate('/');

  }

  return (
    <>
      <header className="p-3 border-bottom sticky-top bg-body-tertiary">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
              <h3>Techkart</h3>
            </NavLink>

            <form className="col-12 col-lg-auto w-50 ms-5 mb-2 justify-content-center mb-md-0 " role="search">

              <div className="form-group has-search">

                <span className="fa fa-search form-control-feedback"></span>
                <input type="text" className="form-control dropdown" placeholder="What are you looking for Today ?" aria-label="Search" value={searchValue}
                  data-bs-toggle="dropdown" aria-expanded="false" onChange={(e) => setSearchValue(e.target.value)} />
                <div style={{ position: 'relative' }}>

                  <ul className="dropdown-menu text-small" style={{ width: '100%' }}>
                    {!searchValue && <>
                      <li className="mb-2"><span className="mx-3 mb-5" href="#"><b>Discover More</b></span></li>
                      <li><NavLink className="dropdown-item" to="/laptop"><span className="fa fa-search me-3"></span>Laptop</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/mouse"><span className="fa fa-search me-3"></span>Mouse</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/keyboard"><span className="fa fa-search me-3"></span>Keyboard</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/charger"><span className="fa fa-search me-3"></span>Charger</NavLink></li>
                    </>
                    }

                    {searchValue && filteredData.map((data) => {
                      const path = require(`../../Assets/Images/${data.img[0]}`);
                      return <li key={data.id}><button className="button dropdown-item text-truncate" onClick={(e) => getProduct(e, data)} to={data.item + '/' + data.id}><img src={path} className="d-inline-block me-3" width={'40px'} height={'40px'} />{data.description}</button></li>
                    })}
                  </ul>

                </div>
              </div>
            </form>

            <div className="dropdown text-end">
              <button type="button" className="btn btn-outline-light text-dark position-relative ms-2 me-3 p-2 px-3 fs-5 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {!isLoggedIn && <i className="bi bi-person position-relative ms-2 me-1"></i>}
                {isLoggedIn && <span className="rounded-circle border p-2 me-1">{loggedInInfo.fname.substring(0, 1).toUpperCase() + loggedInInfo.lname.substring(0, 1).toUpperCase()}</span>}
                Profile
              </button>

              <ul className="dropdown-menu text-small">
                <li><NavLink className="dropdown-item" to={profilePath}>My Profile</NavLink></li>
                <li><NavLink className="dropdown-item" to={orderPath}>Orders</NavLink></li>
                <li><NavLink className="dropdown-item" to="/gift">Gift Card</NavLink></li>
                <li><NavLink className="dropdown-item" to="/notification">Notification</NavLink></li>
                {isLoggedIn && <><li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={() => { handleLogout() }}>Log out</button></li></>}
              </ul>
              <NavLink to={wishlistPath}>
                <button type="button" className="btn btn-outline-light text-dark position-relative ms-2 me-4 p-2 px-3 fs-5">
                  <i className="bi bi-heart position-relative me-1"></i> Wishlist
                </button>
              </NavLink>
              <NavLink to={cartPath}>
                <button type="button" className="btn btn-outline-light text-dark  ms-3 me-4 p-2 px-3 fs-5">
                  <span className="position-relative pe-2">
                    <i className="bi bi-cart3 position-relative"></i>
                    {cartCount != 0 &&
                      <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                        <small>{cartCount}</small>
                      </span>
                    }
                  </span>
                  <span className="ps-2">
                    Cart
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;