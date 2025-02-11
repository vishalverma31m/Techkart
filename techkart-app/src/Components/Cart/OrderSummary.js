import Cart from "./Cart";
import Total from "./Total";

function OrderSummary({ data }) {

    return (
        <div className="container">
            <main>
                <div className="row g-5">
                    <Total />
                    <div className="col-md-7 col-lg-8">
                        <Cart product={data} />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default OrderSummary;