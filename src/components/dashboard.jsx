import React from "react";
import Dashboardbar from "./dashboardbar";
import { Route, Routes } from "react-router-dom";
import MainDashboard from "./main-dashboard";
import Nftmarketplace from "./nft-marketplace";
import Datatable from "./Data-table";
import Profile from "./profile";
import Signin from "./signin";
import Rtladmin from "./rtl-admin";


function Dashboard(){
    return(
        <>
        <div className="section-2">
        <Dashboardbar/>
        <Routes>
            <Route path="/" element={<MainDashboard/>}/>
            <Route  path="/1"  element={<Nftmarketplace/>}/>
             <Route  path="/2"  element={<Datatable/>}/>
            <Route  path="/3"  element={<Profile/>}/>
              <Route  path="/4"  element={<Signin/>}/>
              <Route path="/5"  element={<Rtladmin/>}/>
           </Routes>
           </div>
        </>
    
    )
}


export default Dashboard