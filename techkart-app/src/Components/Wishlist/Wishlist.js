import { useContext } from "react";

import { myContext } from "../Context/Context";

import WishCard from "./WishCard";

function Wishlist() {

    const { productData, userData, wishListCount } = useContext(myContext);

    const getProductById = (id) => productData?.find((prod) => (prod.id === id));

    return (
        <>
            <div className="container mt-3">
                <header className="py-3 border-bottom">
                    <div className="container d-flex flex-wrap justify-content-center">
                        <div className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
                            <h4>My WishList ({wishListCount})</h4>
                        </div>
                    </div>
                </header>

                {userData?.wishitems.map(card => {
                    const prdData = getProductById(card);

                    if (prdData) {

                        return <WishCard key={prdData.id} id={prdData.id} item={prdData.item} description={prdData.description}
                            rating={prdData.rating} mrp={prdData.mrp} discount={prdData.discount} img={prdData.img} />

                    }
                })}
            </div>
        </>
    )
}
export default Wishlist;