import React, {useState, useEffect} from 'react'

import logo from "../assets/logo/Logo-01.png";

// import {SignIn, reset } from '../redux/slices/AuthSlice';
import "../styles/login.css"
import { Link } from 'react-router-dom';


function Login() {
   
  return (
   
    <div className="login-container">
        <div className="logo-container vertical-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />
        </div>
        <div className=" vertical-center text-center">
            <div className="container">
                {/* <p>OWNER LOGIN</p> */}
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <form 
                    // onSubmit={formik.handleSubmit}
                    >
                        <img className="mb-4" src={logo} width="200" />
                        {/* <h1 className="h3 mb-3 fw-normal">LOGIN</h1> */}
                        <p>Veuillez vous connecter à votre compte</p>
                        {/* {
                        msg != null ? 
                            <div className="alert alert-danger" role="alert">
                            {msg}
                            </div>
                            :
                            null
                        } */}
                        <div className="form-floating">
                            {/* <p>Please login to your account</p> */}
                            <input type="email" name="email"
                            className={'form-control'}
                            id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                            {/* <div style={{
                                color: 'red',
                                fontSize: 12,
                            }}>
                                {formik.errors.email && formik.touched.email
                                ? formik.errors.email
                                : null}
                            </div> */}
                        </div>
                        <div className="form-floating">
                            <input type="password" name="password"
                            // value={formik.values.password}
                            // onChange={formik.handleChange}
                            className={'form-control'}
                            id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">mot de passe</label>
                            {/* <div style={{
                                color: 'red',
                                fontSize: 12,
                            }}>
                                {formik.errors.password && formik.touched.password
                                ? formik.errors.password
                                : null}
                            </div> */}
                        </div>

                        {/* <button className="w-100 btn btn-lg" type="submit" 
                            style={{
                                marginBottom: 10,
                                backgroundColor:'#0f2d4a',
                                color: '#fff',
                            }}>
                            {
                                LoginLoading ? "loading ..." 
                                : "Sign in"
                            }
                        </button> */}
                        <Link className="w-100 btn btn-lg" to={"/dashboard"}
                            style={{
                                marginBottom: 10,
                                backgroundColor:'#0f2d4a',
                                color: '#fff',
                            }}>Sign in
                            
                        </Link>
                        
                    </form>
                    <div>
                        <Link to="/login-responsable" 
                            style={{
                                textDecoration: "none",
                                color: "rgb(79 142 196)",
                                fontSize: 16
                            }}
                        >Connectez-vous pour le resposable</Link>
                    </div>
            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login