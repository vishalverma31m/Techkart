import { Route, Routes, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

//Components Inport 
import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Carousel from './Home/Carousel';
import Card from './Home/Card';
import SubFooter from './Footer/SubFooter';
import OrderSummary from './Cart/OrderSummary';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductList from './Product/ProductList';
import WishListItem from './Wishlist/WishListItem';
import OrderDetails from './OrderInfo/OrderDetails';
import ProfilePage from './Profile/ProfilePage';

import { productURL, UserURL } from '../Constants/URLs';
import { myContext } from './Context/Context';

const Contents = () => {

  const { productData, setProductData, userData, setUserData, setCartCount, setCartDiscount, setCartTotal, isLoggedIn, setIsLoggedIn, loggedInInfo, setLoggedInInfo, setWishListCount } = useContext(myContext);

  const initialvalue = {
    count: 0,
    total: 0,
    discount: 0
  }

  useEffect(() => {
    axios.get(productURL).then(res => {
      setProductData(res.data);
    });

  }, []);

  useEffect(() => {

    if (isLoggedIn) {

      axios.get(UserURL + '/' + loggedInInfo.id).then(res => {
        setUserData(res.data);

      });
    }

    const flag = sessionStorage.getItem("isLoggedIn");

    if (flag == "true") {

      setIsLoggedIn(JSON.parse(sessionStorage.getItem("isLoggedIn")));
      setLoggedInInfo(JSON.parse(sessionStorage.getItem("loggedInInfo")));

    }
    else {

      sessionStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
      sessionStorage.setItem("loggedInInfo", JSON.stringify(loggedInInfo));

    }

  }, [isLoggedIn])

  useEffect(() => {

    if (userData) {

      const gtotal = userData.cart.reduce((accumulator, currentvalue) => {

        const prod = productData?.find((prodId) => (prodId.id == currentvalue.id));

        if (prod) {

          return {
            count: accumulator.count + 1,
            total: accumulator.total + prod.mrp * currentvalue.qty,
            discount: accumulator.discount + Math.round(prod.mrp * currentvalue.qty * prod.discount * 0.01)
          };
        }
        else {

          return {
            count: accumulator.count,
            total: accumulator.total,
            discount: accumulator.discount
          };
        }
      }, initialvalue);

      setCartTotal(gtotal.total);
      setCartDiscount(gtotal.discount);
      setCartCount(gtotal.count);
      setWishListCount(userData.wishitems.length);
    }
  }, [userData]);

  return (
    <>
      <Header/>

      <Routes>

        <Route path='/' element={<>
          <Carousel />
          <Card />
          <SubFooter />
          </>} />

        <Route exact path='/login' Component={Login} />
        <Route path='/register' Component={Register} />
        <Route path='/cart' element={<OrderSummary data={productData} />} />
        <Route path='/wishlist' element={<WishListItem />} />
        <Route path='/order' element={<OrderDetails />} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/:name' element={<ProductList />} />
        <Route path='/:name/:id' element={<ProductDetail />} />

      </Routes>
      <Footer />
    </>
  );

};

export default Contents;