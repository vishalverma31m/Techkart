import UserSideNav from "../Wishlist/UserSideNav";
import OrderInfo from "./OrderInfo";

function OrderDetails() {
    return (
        <div className="container">
        <main className="d-flex flex-nowrap">
            <UserSideNav />
            <OrderInfo />
        </main>
        </div>
    )
}
export default OrderDetails;