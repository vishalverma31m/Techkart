import { useContext, useEffect, useState } from "react";
import CartCard from "./CartCard";
import { UserURL } from "../../Constants/URLs";
import axios from "axios";
import { myContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

function Cart() {

    const { productData, userData, setUserData, loggedInInfo } = useContext(myContext);

    const [confirmFlag, setConfirmFlag] = useState(false);

    const navigate = new useNavigate();

    const getProductById = (id) => {
        const udata = productData?.find((prod) => (prod.id === id));

        return udata;
    };

    const onPlaceOrder = () => {
        userData.cart.map((cart) => {
            const prddata = getProductById(cart.id);
            const price = Math.round(Number(prddata.mrp - Math.round(Number(prddata.mrp) * Number(prddata.discount) * 0.01)));
            const data = [...userData.orders, { id: cart.id, qty: cart.qty, price: price, total: price * Number(cart.qty), orderdate: new Date() }];
            axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ orders: data, cart: [] })).then((res) => setUserData(res.data));
            navigate('/order');
        })
        setConfirmFlag(false);
    }

    return (
        <>
            <header className="py-3 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                        <h4>Cart</h4>
                    </div>
                </div>
            </header>
            {confirmFlag &&
                <>
                    <div className="modal modal-sheet position-absolute d-block p-4 py-md-5 bg-body-tertiary opacity-25" tabindex="-1" role="dialog" id="modalChoice"></div>
                    <div className="modal modal-sheet position-absolute d-block p-4 py-md-5" tabindex="-1" role="dialog" id="modalChoice">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content rounded-3 shadow">
                                <div className="modal-body p-4 text-center">
                                    <h5 className="mb-0">Please confirm to proceed the order</h5>
                                </div>
                                <div className="modal-footer flex-nowrap p-0">
                                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end" onClick={() => onPlaceOrder()}><strong>Yes</strong></button>
                                    <button type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0" data-bs-dismiss="modal" onClick={() => setConfirmFlag(false)}>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }

            {userData?.cart.map(card => {
                const prddata = getProductById(card.id);

                if (prddata) {

                    return <CartCard key={prddata.id} id={prddata.id} name={prddata.name} description={prddata.description}
                        rating={prddata.rating} mrp={prddata.mrp} discount={prddata.discount} img={prddata.img} qty={card.qty} />
                }
            })}
            <div className="card sticky-bottom text-end m-3 p-3 pe-3 border border-opacity-25">
                <div>
                    <button className="btn btn-primary py-3 px-5" onClick={() => setConfirmFlag(true)}><b>PLACE ORDER</b></button>
                </div>
            </div>
        </>
    )
}

export default Cart;