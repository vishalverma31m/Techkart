import { useState } from "react"
import { myContext } from "./Context";

export default function ContextProvider(props) {

    const initialInfo = {
        id : "",
        fname : "",
        lname : ""
    }
    const [productData, setProductData] = useState();
    const [userData, setUserData] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInInfo, setLoggedInInfo] = useState(initialInfo);

    const [cartCount, setCartCount] = useState(0);
    const [cartDiscount, setCartDiscount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [wishListCount, setWishListCount] = useState(0);

    return (
        <myContext.Provider value={{ productData, setProductData, userData, setUserData, cartCount, setCartCount, cartDiscount, setCartDiscount, cartTotal, setCartTotal, filteredData, setFilteredData, searchValue, setSearchValue, isLoggedIn, setIsLoggedIn, loggedInInfo, setLoggedInInfo, wishListCount, setWishListCount }}>
            {props.children}
        </myContext.Provider>
    )
}