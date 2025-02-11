import { useContext, useState } from "react";
import axios from "axios";

import { myContext } from "../Context/Context";

import { UserURL } from "../../Constants/URLs";

function CartCard({ id, description, rating, mrp, discount, img, qty }) {

    const path = require(`../../Assets/Images/${img[0]}`);

    const disc = Math.round(Number(mrp) * Number(discount) / 100);

    const price = Math.round(Number(mrp - disc));

    const { userData, setUserData, loggedInInfo } = useContext(myContext);

    const [qvalue, setQvalue] = useState(qty);

    function onChangeQty(pid, qnty) {
        setQvalue(qnty);
        const upqty = userData.cart.map((data) => data.id === pid ? { id: pid, qty: qnty } : data);
        axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ cart: upqty })).then((res) => setUserData(res.data));
    }

    const onProdRemove = (pid) => {
        const updatedData = userData.cart.filter((data) => data.id !== pid);
        axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ cart: updatedData })).then((res) => setUserData(res.data));
    }

    const onAddWishList = (id) => {
        onProdRemove(id);
        if(!userData.wishitems.includes(id)){
        const data = [...userData.wishitems, id]
        axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ wishitems: data })).then((res) => setUserData(res.data));
        }
    }

return (
    <>
        <div className="card mx-3 my-3">
            <div className="row g-0">

                <div className="col-md-4">
                    <img src={path} className="img-fluid rounded-start" alt="..." width={'400px'} />
                </div>

                <div className="col-md-8">
                    <div className="card-body">

                        <p className="card-text">{description}</p>
                        <span className="fs-6 text-decoration-line-through">₹{mrp}</span>
                        <span className="fs-5 fw-medium mx-2">₹{price}</span>
                        <span className="text-success fw-medium">{discount}% Off</span>
                        <br />

                    </div>
                </div>
                <div className="m-2 d-flex align-items-center">
                    <button className="btn btn-outline-secondary rounded-circle p-0 pb-1 m-2" style={{ height: '28px', width: '28px' }} disabled={qvalue <= 1 ? "true" : ""} onClick={() => onChangeQty(id, Number(qvalue) - 1)}>-</button>
                    <span>
                        <input type="text" className="text-center" value={qvalue} onChange={(e) => onChangeQty(id, e.target.value)} style={{ width: '42px', height: '28px' }} />
                    </span>
                    <button className="btn btn-outline-secondary rounded-circle p-0 pb-1 mx-2" style={{ height: '28px', width: '28px' }} disabled={qty >= 5 ? "true" : ""} onClick={() => onChangeQty(id, Number(qvalue) + 1)}>+</button>
                    <button className="btn btn-outline-light text-dark" onClick={() => onAddWishList(id)}><span className="fw-medium">SAVE FOR LATER</span></button>
                    <button className="btn btn-outline-light text-dark mx-1" onClick={() => onProdRemove(id)}><span className="fw-medium">REMOVE</span></button>
                </div>
            </div>
        </div>
    </>
)
}

export default CartCard;