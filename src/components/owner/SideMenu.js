import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/Logo-01.png";
import logoMobile from "../../assets/logo/Logo-09.png";
// import { getStoreByOwner } from "../../redux/slices/StoreSlice";
import MenuItem from "./MenuItem";
import "../../styles/owner/sideMenu.css"

const SideMenu = (props) => {
  
  const [inactive, setInactive] = useState(false);

 
  const menuItems = [
    {
      name: "Accueil",
      exact: true,
      to: "/dashboard",
      iconClassName: "bi bi-house",
    },
    {
      name: "Mes Offres",
      exact: true, 
      iconClassName: "bi bi-bookmark-star",
      childrens: [
        { name: "Afficher", to: "/admin/afficher", iconClassName: "bi bi-person"},
        { name: "Ajouter", to: "/admin/ajouter", iconClassName: "bi bi-people"},
      ],
    },
    { 
      name: "Responsables", 
      exact: true, 
      to: `/responsables`, 
      iconClassName: "bi bi-people"
    },
    { 
      name: "Etablissement", 
      exact: true, 
      to: `/magasins`, 
      iconClassName: "bi bi-shop-window"
    },
    { name: "Paramètres", exact: true, to: `/setting`, iconClassName: "bi bi-gear" },
    
  ];

 
  return (
    <div className={`side-ownerMenu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        {
          !inactive ?
          <div className="logo">
            <img src={logo} alt="hestaiLogo" />
          </div>
        :
          <div className="logoMobile">
            <img src={logoMobile} alt="hestaiLogo" />
          </div>
        }
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i className="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      {/* #4b0f3b */}
      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              item={menuItem}
              inactive={inactive}
              setInactive={setInactive}
              onCollapse={props.onCollapse}
              // onClick={(e) => {
              //   if(inactive){
              //     setInactive(false)
              //   }
              // }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
