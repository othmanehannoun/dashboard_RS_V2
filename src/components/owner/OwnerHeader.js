import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/owner/ownerHeader.css";
import { logout } from "../../redux/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

export default function OwnerHeader() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.auth);

    // const handleLogOut = ()=>{
    //     if(window.confirm("Voulez-vous vous déconnecter?")){
    //       dispatch(logout())
    //     }
    // }
    const handleLogOut = ()=>{
        if(window.confirm("Voulez-vous vous déconnecter?")){
          console.log("looogooouut");
        }
    }

    return (
        <div className="ownerHeader">
        <div className="wrapper">
            {/* <div className="search">
            
            </div> */}
            <div className="items">
                
                <div className="item">
                    <div className="navbar-profile">
                        {/* <img className="avatar" src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="profile" /> */}
                        <div
                            className="bg-hestia rounded-circle d-flex justify-content-center align-items-center"
                            style={{ height: 30, width: 30, marginRight: 5 }}
                        >
                            <i className="bi bi-person"></i>
                        </div>
                        
                        <li className="nav-item dropdown d-flex align-items-center">
                        <Link className="nav-link text-body p-0" id="dropdownProfileButton" data-bs-toggle="dropdown" aria-expanded="false" to={"#"}>
                            <p className="mb-0 d-none d-sm-block navbar-profile-name">
                                {
                                    user && 
                                    user !== null &&
                                    user.username
                                }
                                <i className="bi bi-caret-down"></i>
                            </p>
                            
                        </Link>
                        

                        <ul className="dropdown-menu dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownProfileButton">
                            <li className="mb-2 notificationItem">
                                <Link to={"/profile"} className="dropdown-item border-radius-md" >
                                    <div className="d-flex py-1">
                                        <div className="my-auto">
                                            {/* <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "> */}
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <p className="text-xs mb-0">
                                            <i className="bi bi-person" style={{
                                                color: "black",
                                                marginRight: 10
                                            }}></i>
                                                Votre Profil
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mb-2 notificationItem">
                                <Link  to={"#"} className="dropdown-item border-radius-md">
                                    <div className="d-flex py-1">
                                        <div className="my-auto">
                                            {/* <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "> */}
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <p className="text-xs mb-0">
                                            <i className="bi bi-gear" style={{
                                                color: "black",
                                                marginRight: 10
                                            }}></i>
                                                Paramètres
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li className="mb-2 notificationItem">
                                <button  onClick={()=>{handleLogOut()}} className="dropdown-item border-radius-md" >
                                    <div className="d-flex py-1">
                                        <div className="my-auto">
                                            {/* <img src="./assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "> */}
                                        </div>
                                        <div className="d-flex flex-column justify-content-center">
                                            <p className="text-xs mb-0">
                                            <i className="bi bi-box-arrow-right" style={{
                                                color: "black",
                                                marginRight: 10
                                            }}></i>
                                                Se Déconnecter
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </li>
                            
                        </ul>
                    </li>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
