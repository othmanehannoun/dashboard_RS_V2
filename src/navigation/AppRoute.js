import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import OwnerNavigation from './OwnerNavigation';
// import AuthRespNavigation from './AuthRespNavigation';



const AppRoute = () => {

    const [user , setUser] = useState(true)
    return (
        <>
                
                <Router>
                  {
                    user ? <OwnerNavigation /> :  <AuthNavigation /> 
                  }
                </Router>
             
          
        </>
       
    )
}



export default AppRoute