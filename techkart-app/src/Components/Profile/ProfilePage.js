import UserSideNav from "../Wishlist/UserSideNav";
import Profile from "./Profile";

function ProfilePage() {
    return (
        <div className="container">
        <main className="d-flex flex-nowrap">
            <UserSideNav />
            <Profile />
        </main>
        </div>
    )
}
export default ProfilePage;