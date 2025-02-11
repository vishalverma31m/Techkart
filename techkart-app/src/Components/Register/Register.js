import { DevTool } from '@hookform/devtools'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';

import { UserURL } from '../../Constants/URLs';
import { myContext } from '../Context/Context';

import './Register.css'

let formValues = {
  userName: '',
  email: '',
  password: ''
}

function Register() {

  const form = useForm({ mode: "onChange", formValues });
  const { register, control, handleSubmit, formState, getValues } = form;
  const { errors } = formState;

  const { setUserData } = useContext(myContext);

  const navigate = new useNavigate();

  let error = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatpassword: '',
  };

  const onSubmit = (data) => {
    const userData ={
      firstname : data.firstname,
      lastname : data.lastname,
      email : data.email,
      password : data.password,
      wishitems : [],
      cart : [],
      orders : []
    }
    axios.post(UserURL, JSON.stringify(userData)).then(res => setUserData(res.data)).catch(err => console.log(err));
    navigate('/login');
  }

  if (errors) {
    for (var err in errors)
      error[err] = 'is-invalid';
  }

  return (
    <>
      <div className="col-md-10 mx-auto col-lg-4 mt-5 mb-2">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit(onSubmit)} noValidate >

          <h2 className="mb-4">Create Account</h2>
          <p className="mb-3">Please fill in this form to create an account.</p>

          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">

                <input type="text" className={`form-control ${error.firstname}`} id="firstName" placeholder="John Doe"
                  {...register('firstname', {
                    required: 'Please enter your name',
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: 'This field only contain alphabets'
                    }
                  })} />

                <label htmlFor="firstName">First Name</label>

                {control.getFieldState('firstname').isTouched &&
                  <div id="information" className='form-text invalid-feedback'>{errors.firstname?.message}</div>
                }

              </div>
            </div>
            <div className="col-md">
              <div className="form-floating mb-3">

                <input type="text" className={`form-control ${error.lastname}`} id="lastName" placeholder="John Doe"
                  {...register('lastname')} />

                <label htmlFor="lastName">Last Name</label>

              </div>
            </div>
          </div>
          <div className="form-floating mb-3">

            <input type="email" className={`form-control ${error.email}`} id="email" placeholder="name@example.com"
              {...register('email', {
                required: 'Please enter an email',
                pattern: {
                  value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
                  message: "Email Address is not valid"
                }
              })} />

            <label htmlFor="email">Email address</label>

            {control.getFieldState('email').isTouched &&
              <div id="passwordHelpBlock" className='form-text  invalid-feedback'>{errors.email?.message}</div>
            }

          </div>
          <div className="form-floating mb-3">

            <input type="password" className={`form-control ${error.password}`} id="password" placeholder="Password"
              {...register('password', {
                required: 'Please enter a password',
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
                  message: "Your password must be between 8 to 15 characters which contain at least 1 upper case, numeric and special character"
                }
              })} />

            <label htmlFor="password">Password</label>

            {control.getFieldState('password').isDirty &&
              <div id="passwordHelpBlock" className='form-text  invalid-feedback'>{errors.password?.message}</div>
            }

          </div>
          <div className="form-floating mb-3">

            <input type="password" className={`form-control ${error.repeatpassword}`} id="repeatPassword" placeholder="Password"
              {...register('repeatpassword', {
                validate: value => value === getValues('password') || 'Password do not match'
              })} />

            <label htmlFor="repeatPassword">Repeat Password</label>

            {control.getFieldState('repeatpassword').isTouched &&
              <div id="passwordHelpBlock" className='form-text  invalid-feedback'>{errors.repeatpassword?.message}</div>
            }

          </div>
          <input className="w-100 mb-3 btn btn-lg btn-primary" type="submit" value="Sign Up" />

          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>

          <hr className="my-4" />
          <small className="text-body-secondary">Already have an account?
            <NavLink className='pe-auto text-decoration-none' to='/login' > Login Here</NavLink>
          </small>

        </form>
      </div>
      <DevTool control={control} />
    </>
  )
}

export default Register;