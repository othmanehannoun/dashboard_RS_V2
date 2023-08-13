import React, {useState, useEffect} from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import ErrorPage from '../screens/404';
import Profile from '../screens/Profile';
import SideMenu from '../components/owner/SideMenu';
import Dashboard from '../screens/Dashboard';
import OwnerHeader from '../components/owner/OwnerHeader';
import Setting from '../screens/Setting';
import Responsible from '../screens/Responsible';
import Store from '../screens/Store';
import { Ajouter } from '../screens/Ajouter';
import { Afficher } from '../screens/Afficher';



function OwnerNavigation() {
    const [inactive, setInactive] = useState(false);

    

    return (

    <div className="home">
        <SideMenu 
            onCollapse={(inactive) => {
            setInactive(inactive);
        }}
        />

        <div className='containerApp'>
            <OwnerHeader />

            <div className="dashboardApp p-5" style={{
                overflow: 'auto',
                height: '93vh',
            }}>
            <Switch>
                
               
                <Route exact path={"/dashboard"}> <Dashboard /> </Route>
    
                <Route exact path={"/setting"}> <Setting /> </Route>
                <Route exact path={"/profile"}> <Profile /> </Route>
                <Route exact path={"/responsables"}> <Responsible /> </Route>
                <Route exact path={"/magasins"}> <Store /> </Route>
                <Route exact path={"/admin/afficher"}> <Afficher /> </Route>
                <Route exact path={"/admin/ajouter"}> <Ajouter /> </Route>
                
                {/* <Route exact path="*"> <ErrorPage /> </Route> */}
            </Switch>
            </div>
        </div>

    </div>
    //     {/* <!-- --> */}
        
    //     {/* <!-- CONTENT APP -----------------------------------------------------------------------------> */}
    //     <div class="col-10 bg-light vh-100 overflow-auto">
    //       {/* <div class="px-5 my-3">
    //         <div class="row mb-3">
    //           <div class="ms-auto col-auto">
    //             <div class="row">
    //               <div class="align-items-center col-auto d-flex fw-semibold">John Doe</div>
    //               <div class="col-auto p-0">
    //                 <a href="./profil.html">
    //                   <div
    //                     class="bg-hestia rounded-circle d-flex justify-content-center align-items-center"
    //                     style={{height: '30px', width: '30px'}}
    //                   >
    //                     <i class="fa fa-user text-white"></i>
    //                   </div>
    //                 </a>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="row">
    //           <div class="col-8 mb-3">
    //             <div class="p-5 rounded-3 border bg-white">
    //               <canvas id="myChart"></canvas>
    //             </div>
    //           </div>
    //           <div class="col-4 mb-3">
    //             <div class="p-5 rounded-3 border bg-white h-100 bg-hestia-gold-gradient d-flex flex-column text-light">
    //               <p class="fs-4">Total de clients avec application</p>
    //               <p class="display-1 fw-semibold text-center m-auto">635</p>
    //             </div>
    //           </div>
    //           <div class="col-4 mb-3">
    //             <div class="p-5 rounded-3 border bg-white h-100">
    //               <p class="display-5 fw-semibold text-center">Offre 1</p>
    //               <p class="text-secondary text-center fw-semibold">230 utilisations</p>
    //             </div>
    //           </div>
    //           <div class="col-4 mb-3">
    //             <div class="p-5 rounded-3 border bg-white h-100">
    //               <p class="display-5 fw-semibold text-center">Offre 2</p>
    //               <p class="text-secondary text-center fw-semibold">350 utilisations</p>
    //             </div>
    //           </div>
    //           <div class="col-4 mb-3">
    //             <div class="p-5 rounded-3 border bg-white h-100">
    //               <p class="display-5 fw-semibold text-center">Offre 3</p>
    //               <p class="text-secondary text-center fw-semibold">120 utilisations</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div> */}
    //             <Switch>
    //                 <Route exact path={"/login"} render={() => {
    //                     return (
    //                     <Redirect to="/dashboard" /> 
    //                     )
    //                 }} />
    //                 {/* <Route exact path={"/login"} render={() => {
    //                     return (
    //                     <Redirect to="/offers" /> 
    //                     )
    //                 }} /> */}
    //                 {/* <Route exact path={"/offers"}> <Offers /> </Route> */}
    //                 <Route exact path={"/dashboard"}> <Dashboard /> </Route>
    //                 <Route exact path={"/offers"}> <AddOffer /> </Route>
    //                 <Route exact path={"/profile"}> <Profile /> </Route>
    //                 <Route exact path="*"> <ErrorPage /> </Route>
    //             </Switch>
    //     </div>
    //     {/* <!-- --> */}
    //   </div>
    // </div>
        // </Router>
    )
}

export default OwnerNavigation