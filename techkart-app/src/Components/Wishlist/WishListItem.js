import UserSideNav from "./UserSideNav";
import Wishlist from "./Wishlist";

function WishListItem() {
    return (
        <div className="container">
        <main className="d-flex flex-nowrap">
            <UserSideNav />
            <Wishlist />
        </main>
        </div>
    )
}
export default WishListItem;