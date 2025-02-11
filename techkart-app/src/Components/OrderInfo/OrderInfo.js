import { useContext } from "react";
import OrderInfoCard from "./OrderInfoCard";
import { myContext } from "../Context/Context";

function OrderInfo() {

    const { userData, productData } = useContext(myContext);

    return (
        <>
            <div className="container mt-3">
                <header className="py-3 border-bottom">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            <h4>My Order</h4>
                        </div>
                    </div>
                </header>

                {userData?.orders.map(card => {
                    const data = productData.find((item) => item.id === card.id);
                    if (data) {

                        return <OrderInfoCard key={card.id} id={card.id} description={data.description}
                            total={card.total} orderdate={card.orderdate} img={data.img[0]} />

                    }
                })}
            </div>
        </>
    )
}
export default OrderInfo;