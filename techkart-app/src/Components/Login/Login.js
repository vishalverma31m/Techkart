import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext, useState } from 'react';

import { UserURL } from '../../Constants/URLs';

import { myContext } from '../Context/Context';

import './Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [passErrorMsg, setPassErrorMsg] = useState('');

  const { setIsLoggedIn, setLoggedInInfo } = useContext(myContext);

  const navigate = new useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (email !== '' && pass !== '') {
      if (/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)) {

        axios.get(UserURL).then(res => {
          let flag = true;
          res.data.map(data => {

            if (data.email === email && data.password === pass) {
              setIsLoggedIn(true);
              setLoggedInInfo({
                id: data.id,
                fname: data.firstname,
                lname: data.lastname
              }
              );
              navigate('/');
              flag = false;
            }
          });
          if (flag) {
            setEmailError('is-invalid');
            setPassError('is-invalid');
            setEmailErrorMsg('');
            setPassErrorMsg('Email ID or Password is incorrect');
          }
        });
      }
      else {
        setEmailError('is-invalid');
        setPassError('');
        setEmailErrorMsg('Email ID is not valid');
        setPassErrorMsg('');
      }
    }
    else {
      if (email === '') {
        setEmailError('is-invalid');
        setPassError('');
        setEmailErrorMsg('Please Enter Email');
        setPassErrorMsg('');
      }
      else if (pass === '') {
        setEmailError('');
        setPassError('is-invalid');
        setEmailErrorMsg('');
        setPassErrorMsg('Please Enter Password');
      }
    }
    setEmail('');
    setPass('');
  }

  return (
    <div className="col-md-10 mx-auto col-lg-3 mt-5 mb-5">
      <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
        <h1 className="h3 mb-4 fw-normal">Sign In</h1>

        <div className="form-floating mb-3">

          <input type="text" className={`form-control ${emailError}`} id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="floatingInput">Email address</label>


          <div id="information" className="form-text invalid-feedback">{emailErrorMsg}</div>


        </div>
        <div className="form-floating mb-3">

          <input type="password" className={`form-control ${passError}`} id="floatingPassword" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
          <label htmlFor="floatingPassword">Password</label>

          <div id="information" className="form-text invalid-feedback">{passErrorMsg}</div>

        </div>

        <div className="form-check text-start my-3">

          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>

        </div>

        <button className="btn btn-primary w-100 py-2" onClick={(e) => handleClick(e)} >Sign in</button>
        <hr className="my-4" />

        <small className="text-body-secondary">Don't have an account?
          <NavLink className='text-decoration-none' to='/register'> Register Here</NavLink>
        </small>

      </form>
    </div>
  )
}

export default Login;