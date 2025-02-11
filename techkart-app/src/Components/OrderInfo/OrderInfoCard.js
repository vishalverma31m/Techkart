import './OrderInfoCard.css';

function OrderInfoCard({ description, total, orderdate, img }) {

    const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const imgPath = require(`../../Assets/Images/${img}`);

    const date = new Date(orderdate);
    const odate = dayArray[date.getDay()] + ', ' + monthArray[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getFullYear();

    return (
        <>
            <div className="card mx-3 my-3 py-2">
                <div className="row g-0">

                    <div className="col-md-1">
                        <div className="d-flex h-100">
                            <div className="card-body text-center align-content-center">
                                <img src={imgPath} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4">
                        <div className="card-body">
                            <p className="card-text truncate">{description}</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="d-flex h-100">
                            <div className="card-body text-center align-content-center">
                                ₹{total}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-flex h-100">
                            <div className="card-body align-content-center">
                                <span className="fw-medium">Delivered on {odate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderInfoCard;