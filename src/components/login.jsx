import React, { useEffect, useState } from "react";
import { Route,Routes, useNavigate } from "react-router-dom";
import Dashboardbar from "./dashboardbar";
import MainDashboard from "./main-dashboard";
import Nftmarketplace from "./nft-marketplace";
import Datatable from "./Data-table";
import Profile from "./profile";
import Signin from "./signin";
import Rtladmin from "./rtl-admin";
import 'remixicon/fonts/remixicon.css'






function Login(){

    useEffect(()=>{
        localStorage.setItem("User","dhiman")
        localStorage.setItem("password","mahadev")
         localStorage.setItem("User1","shubham")
        localStorage.setItem("password1","mahadev")
        

    },[])



    const [email,setemail]=useState('')
     const [password,setpassword]=useState('')


    const [showheader,setshowheader] = useState(true)
    const [showheader1,setshowheader1] = useState(false)
    
const navigate = useNavigate()

function next(){

    const storedemail = localStorage.getItem('User')
     const storedpassword = localStorage.getItem('password')
   

    if(email === storedemail && password === storedpassword){
   setTimeout(()=>{
   setshowheader(false)
   setshowheader1(true)
    navigate("/dashboard")},1000)}
   else{
  alert("wrong password try again")
   }

}
    return(
        <>
          {showheader &&(
        <div className="mainbox">
            <div className="inner-box">
            <div className="box-1">
                  <h2 className="a">Welcome Back 👋</h2>
                 <h2 className="z">User Dashoard</h2>
              

            </div>
            <div className="box-2">
                <h2 className="b">Dashboard</h2>
                  <h2 className="d">Please sign in to your account</h2>

                <input className="inp-1"
                 type="text" 
                 placeholder="Enter your email" 
                 onChange={(e)=>{
                    setemail(e.target.value)
                 }}
                 />
                <input className="inp-1" 
                type="password"
                 placeholder="password"
                  onChange={(e)=>{
                    setpassword(e.target.value)
                 }}
                 /><br/>
                <div className="check">
                <input type="checkbox" /><h3 className="rem">Remember me</h3>
                </div><br/>
                <button onClick={next} className="btn">Signup</button>
                <h2 className="de">OR</h2>
                <button className="btn-2"><i class="ri-google-fill"></i>Continue with Google</button>
            </div>
            </div>
        </div>
           )}

           {showheader1 &&(
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
       
           )}
       
        </>
    

    )
}

export default Login