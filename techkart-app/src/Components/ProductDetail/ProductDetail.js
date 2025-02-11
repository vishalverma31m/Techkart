import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { UserURL } from '../../Constants/URLs';
import { myContext } from "../Context/Context";

import ProductDetailCard from './ProductDetailCard';

function ProductDetail() {

    const { productData, userData, setUserData, isLoggedIn, loggedInInfo } = useContext(myContext);

    const [cartFlag, setCartFlag] = useState(false);
    const [wishListFlag, setWishListFlag] = useState(false);
    const [currentProduct, setCurrentProduct] = useState('');

    const { id } = useParams();
    let productImagePath;
    let BrandImagePath;
    let price;

    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const date = new Date();

    date.setDate(date.getDate() + 5);

    const ExpDate = date.getDate();
    const ExpMonth = monthArray[date.getMonth()];
    const ExpDay = dayArray[date.getDay(date)];

    const navigate = new useNavigate();

    useEffect(() => {
        const prodDetails = productData?.find((data) => data.id === id);
        setCurrentProduct(prodDetails);
        userData?.cart.find((data) => {
            if (data.id === id) {
                setCartFlag(true);
            };
        });
        userData?.wishitems.find((data) => {
            if (data === id) {
                setWishListFlag(true);
            };
        });

    }, [userData, productData, id]);

    if (currentProduct) {
        BrandImagePath = require(`../../Assets/Images/${currentProduct.brandimage}`);
        productImagePath = require(`../../Assets/Images/${currentProduct.img[0]}`);
        price = Math.round(currentProduct?.mrp - currentProduct.mrp * currentProduct.discount * 0.01);
    }

    function onAddCart() {
        if (isLoggedIn) {
            if (cartFlag) {
                navigate('/cart');
            }
            else {
                const data = [...userData.cart, { id: id, qty: 1 }]
                axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ cart: data })).then((res) => setUserData(res.data));
                navigate('/cart');
                setCartFlag(false);
            }
        }
        else {
            navigate('/login');
        }
    }
    function onAddWishList() {
        if (isLoggedIn) {
            if (wishListFlag) {
                navigate('/wishlist');
            }
            else {
                const data = [...userData.wishitems, id]
                axios.patch(`${UserURL}/${loggedInInfo.id}`, JSON.stringify({ wishitems: data })).then((res) => setUserData(res.data));
                navigate('/wishlist');
                setWishListFlag(false);
            }
        }
        else {
            navigate('/login');
        }
    }
    return (
        <div className="container">
            <div className="row featurette my-5">
                <div className="col-md-7 order-md-2">
                    <h5 className="featurette-heading fw-normal lh-base">{currentProduct?.description}</h5>
                    <div className='py-2'>
                        <button type="button" className="btn btn-success px-2 py-0"><small>{currentProduct?.rating}</small>
                            <i className="bi bi-star-fill ps-1"></i>
                        </button>
                        <span className='fs-6 ps-2'>{currentProduct?.ratingcount} Ratings & {currentProduct?.reviewcount} Reviews</span>
                    </div>
                    <div className='py-2'>
                        <span className="text-success fw-medium">Exclusive Offer</span>
                    </div>
                    <span className="fs-3 fw-medium">₹{price}</span>
                    <span className="fs-6 text-decoration-line-through mx-3">₹{currentProduct?.mrp}</span>

                    <span className="text-success fw-medium">{currentProduct?.discount}% Off</span>
                    <div className='pt-4'>
                        <span className="text-success fw-medium">FREE delivery </span>
                        <span className="fs-6 fw-semibold">{ExpDay + ", " + ExpDate + " " + ExpMonth}</span>

                    </div>
                    <div className='my-5'>
                        <span className="py-auto py-1 px-auto px-1 border"><img src={BrandImagePath} width={'39px'} height={'25px'} /></span>
                        <span className="fs-6 ms-5">1 Year Brand Warranty</span>
                        <span className="ms-2"><a className="link-primary text-decoration-none" href="#">Know More</a></span>
                    </div>
                    <div className="row g-1 fs-6">
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div><small className="fw-medium">Highlights</small></div>
                                <div>
                                    <ul className="list-style">
                                        <li><small>Stylish & Portable Thin and Light Laptop</small></li>
                                        <li><small>15.6 Inch Full HD, IPS 300nits Anti-glare</small></li>
                                        <li><small>Light Laptop without Optical Disk Drive</small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex">
                                <div className="w-25"><small className="fw-medium">Easy Payment Options</small></div>
                                <div className="w-75">
                                    <ul className="list-style ps-4">
                                        <li><small>No cost EMI starting from ₹3,875/month</small></li>
                                        <li><small>Cash on Delivery</small></li>
                                        <li><small>Net banking & Credit/ Debit/ ATM card</small></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 order-md-1">
                    <div className="row g-0">

                        <div className="list-group col-md-2 overflow-auto">
                            {
                                currentProduct && currentProduct.img.map(img => (
                                    <ProductDetailCard key={img} image={img} />
                                ))
                            }
                        </div>

                        <div className="col-md-10 ">

                            <div className="d-flex border border-secondary-subtle p-3 align-items-center justify-content-center" style={{ height: '448px' }}>
                                <img src={productImagePath} width={'100%'} style={{ maxHeight: '416px' }} />
                            </div>
                            <div className="row g-2 mt-2">

                                <div className="col-md-6">
                                    <button className='btn btn-outline-primary p-3 w-100' onClick={() => onAddWishList()}>{wishListFlag ? "GO TO WISHLIST" : "ADD TO WISHLIST"}</button>
                                </div>
                                <div className="col-md-6">
                                    <button className='btn btn-primary p-3 w-100' onClick={() => onAddCart()}>{cartFlag ? "GO TO CART" : "ADD TO CART"}</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;