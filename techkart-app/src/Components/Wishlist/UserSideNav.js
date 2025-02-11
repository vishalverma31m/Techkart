import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { myContext } from "../Context/Context";

function UserSideNav() {

  const { userData, setIsLoggedIn, setLoggedInInfo, setCartCount } = useContext(myContext);

  const navigate = new useNavigate();

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
    <div className="d-flex flex-column flex-shrink-0 p-3 my-3" style={{ width: '280px' }}>
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto p-3 w-100 border shadow">
        <i className="bi bi-person-circle fs-2 me-3"></i><span className="fs-5 fw-medium">Hello {userData?.firstname}</span>
      </div>
      <ul className="list-unstyled mt-3 border shadow p-3">
        <li className="mb-1">
          <button className="btn d-inline-flex align-items-center rounded border-0 p-0 fs-6 mb-1">
            <NavLink className="text-decoration-none text-dark" to="/order">
              <i className="bi bi-box-fill text-primary me-3 fs-5"></i><span className="fs-5 ">My Orders</span></NavLink>
          </button>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn d-inline-flex align-items-center rounded border-0 p-0 fs-6 mb-1">
            <NavLink className="text-decoration-none text-dark" to="/profile"><i className="bi bi-person-fill me-3 fs-4 text-primary"></i><span className="fs-5 ">Profile</span></NavLink>
          </button>
        </li>
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn d-inline-flex align-items-center rounded border-0 p-0 fs-6 mb-1">
            <NavLink className="text-decoration-none text-dark" to="/wishlist"><i className="bi bi-heart-fill me-3 fs-5 text-primary"></i><span className="fs-5 ">My Wishlist</span></NavLink>
          </button>
        </li>
      </ul>
      <div className="dropdown">
        <div className="my-3  p-3 border shadow">
          <button className="btn btn-outline-light text-start text-dark w-100" onClick={() => handleLogout()}>
            <i className="bi bi-power text-primary me-3 fs-5"></i>
            <span className="fs-5">Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default UserSideNav;