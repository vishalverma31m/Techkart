import { useContext } from "react";

import { myContext } from "../Context/Context";

function Total() {

    const { cartCount, cartDiscount, cartTotal } = useContext(myContext);

    return (

        <div className="col-md-5 col-lg-4 order-md-last">
            <ul className="list-group my-3">
                <li className="list-group-item disabled d-flex justify-content-between lh-sm py-3">
                    <div>
                        <h6 className="my-0 ">PRICE DETAILS</h6>
                    </div>
                </li>
                <li className="list-group-item border-bottom-0 d-flex justify-content-between lh-lg">
                    <div>
                        <p className="my-0">Price ({cartCount} item)</p>
                    </div>
                    <span className="text-body-secondary">₹{cartTotal}</span>
                </li>
                <li className="list-group-item border-bottom-0 d-flex justify-content-between lh-lg">
                    <div>
                        <p className="my-0">Discount</p>
                    </div>
                    <span className="text-success fw-medium">−₹{cartDiscount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-lg">
                    <div>
                        <p className="my-0">Delivery</p>
                    </div>
                    <span className="text-body-secondary">Free</span>
                </li>
                <li className="list-group-item d-flex justify-content-between mb-0 py-4 border-dashed">
                    <h5 className="mb-0">Total Amount</h5>
                    <h5 className="mb-0">₹{Math.round(Number(cartTotal - cartDiscount))}</h5>
                </li>
                <li className="list-group-item d-flex justify-content-between py-3">
                    <h6 className="mb-0 text-success">You will save ₹{cartDiscount} on this order</h6>
                </li>
            </ul>

            <div className="d-flex justify-content-center pt-2 px-2">
                <div className="align-content-center">
                    <i className="bi bi-shield-fill-check h3"></i>
                </div>
                <div className="px-3 d-flex">
                    <small>
                        Safe and Secure Payments. Easy returns. 100% Authentic products.
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Total;