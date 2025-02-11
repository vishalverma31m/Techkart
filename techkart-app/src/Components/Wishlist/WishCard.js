import axios from "axios";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { UserURL } from "../../Constants/URLs";

import { myContext } from "../Context/Context";

function WishCard({ id, item, description, mrp, discount, img }) {

    const { userData, setUserData, loggedInInfo } = useContext(myContext);

    const imgPath = require(`../../Assets/Images/${img[0]}`);

    const path = '/' + item + '/' + id;

    const disc = Math.round(Number(mrp) * Number(discount) / 100);

    const price = Math.round(Number(mrp - disc));

    function onProdRemove(pid) {
        const updatedData = userData.wishitems.filter((data) => data !== pid);
        axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ wishitems: updatedData })).then((res) => setUserData(res.data));
    }

    return (
        <div className="card mx-3 my-3">
            <div className="row g-0">

                <div className="col-md-2">
                    <img src={imgPath} className="img-fluid rounded-start" alt="..." width={'200px'} />
                </div>

                <div className="col-md-9">
                    <div className="card-body">

                        <NavLink className="text-decoration-none text-dark" to={path}>
                            <p className="card-text">{description}</p>
                            <span className="fs-5 fw-medium">₹{price}</span>
                            <span className="fs-6 text-decoration-line-through mx-2">₹{mrp}</span>

                            <span className="text-success fw-medium">{discount}% Off</span>
                        </NavLink>
                    </div>
                </div>

                <div className="col-md-1">
                    <div className="d-flex h-100">
                        <div className="card-body text-center align-content-center">
                            <button className="btn btn-outline-light text-dark" onClick={() => onProdRemove(id)}><i className="bi bi-trash fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishCard;