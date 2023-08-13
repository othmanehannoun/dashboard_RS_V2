import React, { useEffect, useState} from "react";
import { NavLink, Link } from "react-router-dom";


const MenuItem = (props) => {
  // const { name, subMenus, iconClassName, to, inactive, exact } = props;
  const { item , inactive, setInactive, onCollapse} = props;
  const [open, setOpen] = useState(false);

  const handleClickSubMenu = async()=>{
    await setOpen(!open)
    setInactive(false)
   
  }

  // ____________________________________________________________________

  useEffect(() => {
    if (inactive) {
      setOpen(false);
    }

    onCollapse(inactive);
  }, [inactive]);
   
  const removeActiveClassFromMenuItem = () => {
    
    document.querySelectorAll(".menu-item").forEach((el) => {
      el.classList.remove("active");
    });
  };


  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromMenuItem();
        el.classList.toggle("active");
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });

  }, []);

  const handleActive = (to) =>{
    removeActiveClassFromMenuItem();
  }

 
 if(item.childrens){
    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <Link to={"#"} className="sidebar-title" onClick={() => handleClickSubMenu()}
              style={
                !open ? 
                {marginBottom: 20}
                :
                {marginBottom: 5}
              }
            >
                <div style={{
                    display: 'flex',
                }}>
                  <div className={`${inactive ? "icon-active" : "icon-inactive"}`}>
                    <i className={item.iconClassName}></i>
                  </div>
                  {
                    !inactive ? 
                    <span>{item.name}</span>
                    :
                    null
                  }
                  
                </div>
                <i className="bi-chevron-down toggle-btn" ></i>
            </Link>
            {
              open ?
                <ul className='sub-menu'>
               
                    { item.childrens.map((child, index) => 
                    <li key={index} 
                      onClick={() => handleActive(child.to)}
                    >
                      <NavLink to={child.to || "#"}
                        // className={window.location.pathname === child.to ? 'subMenu-item active' : 'subMenu-item' }
                        className={ 'subMenu-item' }

                      >
                        <div className={`${inactive ? "icon-active" : "icon-inactive"}`}>
                          <i className={child.iconClassName}></i>
                        </div>
                        <span>{child.name}</span>
                      </NavLink>
                    </li>
                    ) }
                </ul>
              :null
            }
        </div>
    )
}else{
  return (
    <li 
      // onClick={props.onClick}
    >
      <Link
        exact={`${item.exact}`}
        to={item.to || "#"}
        className={ window.location.pathname === item.to ? `menu-item active` : 'menu-item'}
      >
        <div className={`${inactive ? "icon-active" : "icon-inactive"}`}>
          <i className={item.iconClassName}></i>
        </div>
        <span>{item.name}</span>
      </Link>
      
    </li>
  );
}

};

export default MenuItem;


