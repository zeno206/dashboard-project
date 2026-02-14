import React, { useEffect, useState } from "react";
import logo2 from "../assets/logo2.png";
import graph from "../assets/graph.png";
import {ResponsiveContainer,LineChart,Line} from "recharts";
import axios from "axios"



function MainDashboard(){

    const [number1,setnumber1] = useState(375)
    const [number2,setnumber2] = useState(6235)
     const [number3,setnumber3] = useState(809)
      const [number4,setnumber4] = useState(5590)
       const [number5,setnumber5] = useState(245)
        const [number6,setnumber6] = useState(95)
        const [number7,setnumber7] = useState(6798)

    const[data,setdata] = useState([])


  const genraterandomnumber = (()=>{
     const rand1 = (Math.trunc(Math.random()*1000)+1)
     const rand2= (Math.trunc(Math.random()*10000)+1)
     const rand3= (Math.trunc(Math.random()*10000)+1)
     const rand4= (Math.trunc(Math.random()*10000)+1)
     const rand5= (Math.trunc(Math.random()*10000)+1)
     const rand6= (Math.trunc(Math.random()*10000)+1)
     const rand7= (Math.trunc(Math.random()*200)*2)
     setnumber1(rand1)
     setnumber2(rand2)
      setnumber3(rand3)
       setnumber4(rand4)
        setnumber5(rand5)
         setnumber6(rand6)
         setnumber7(rand7)
  })


  useEffect(() => {
    const interval = setInterval(() => {
        genraterandomnumber()
    }, 9000);


    return () => {
        clearInterval(interval);
    };
}, []);

  useEffect(()=>{
   axios.get("/api/shubham")
   .then((response)=>{
          setdata(response.data)})
  .catch((error)=>{
    console.log(error)
  })
  },[])







    return(
      <div className="page">
        <div className="div-1">
            <div className="p-1">
                <h3 className="h-3">Pages/Main dashboard</h3>
                <h2 className="h-4">MainDashboard</h2>
            </div>
            <div className="p-2">
                <i class="ri-search-line"></i>
                <input className="inp-d" type="search" placeholder="search"/>
                <i class="ri-notification-line"></i>
                <i class="ri-reddit-fill"></i>
                <i class="ri-palette-fill"></i>
            </div>
        </div>
        <div className="div-2">
            <div className="bx-1">
                <div className="icn">
                <i class="ri-rhythm-line"></i>
                </div>
                <div className="txt">
                    <h4 className="hh-4i">Earning</h4>
                    <h4 className="hh-4">${number1}</h4>
                </div>
            </div>
            <div className="bx-2">
                  <div className="icn">
                <i class="ri-money-dollar-circle-line"></i>
                </div>
                <div className="txt">
                    <h4 className="hh-4o">Spend this month</h4>
                    <h4 className="hh-41">${number2}</h4>
                </div>
                
            </div>
            <div className="bx-3">
                  
                <div className="txt">
                    <h4 className="hh-4p">Sales</h4>
                    <h4 className="hh-42">${number3}</h4>
                        <h4 className="sale"><span className="span">-23%</span>Since last month</h4>
                </div>
                
            </div>
            <div className="bx-4">
                <div className="txt">
                    <h4 className="hh-4p">Your balance</h4>
                    <h4 className="hh-42">${number4}</h4>
                </div>
                  <div className="icn">
                <img className="usa" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXN8Bs7jGwN8GUOAGfNYZhon7uPKxDRFAt_A&s" alt="" />
                </div>
                
            </div>
            <div className="bx-5">
                  <div className="icn">
                <img className="right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOZGHRzbJTkWcZaotwdW45CW6wKigTqvHpQ&s" alt="" />
                </div>
                <div className="txt">
                    <h4  className="hh-4p">New table</h4>
                    <h4 className="hh-42">{number5}</h4>
                </div>
                
            </div>
            <div className="bx-6">
                  <div className="icn">
              <i class="ri-file-line"></i>
                </div>
                <div className="txt">
                    <h4 className="hh-4o">Total Project</h4>
                    <h4 className="hh-41">{number6}</h4>
                </div>
                
            </div>

        </div>
        <div className="div-3">
            <div className="bigbox-1">
                <div className="line-1">
                    <div className="l-1">
                        <i class="ri-calendar-line"></i>
                        <h3 className=".ha3">This month</h3>
                    </div>
                     <div className="l-2">
                        <i class="ri-rhythm-line"></i>
                    </div>
                </div>
                <div className="line-2">
                    <div className="l-3">
                        <h5 className="hh-5">${number7}k</h5>
                        <h6 className="hh-6">Total spent</h6>
                        <h6 className="hh6"><i class="ri-grok-ai-line"></i>ON TREK</h6>

                    </div>
                    <div className="l-4">
                 
                    </div>

                </div>

            </div>
             <div className="bigbox-2">
                 <div className="line-1">
                    <div className="l-1o">
                        <h3 className="l-1p">Weekly Revenue</h3>
                    </div>
                     <div className="l-2">
                        <i class="ri-rhythm-line"></i>
                    </div>
                </div>
                 <div className="l-4">
                        <img className="graph" src={logo2}/>
                    </div>

            </div>
        </div>
        <div className="div-4">
            <div className="bigbox-3">
                 <div className="line-1">
                    <div className="l-1o">
                        <h3 className="chek-t">Check table</h3>
                    </div>
                     <div className="l-2">
                        <i class="ri-more-line"></i>
                    </div>
                </div>
                <div className="line-2b">
                    <div className="name">
                        <h3 className="br">NAME</h3>
                    </div>
                    <div className="other">
                        <h3 className="br">PROGRESS</h3>
                        <h3 className="br">QUANTITY</h3>
                         <h3 className="br">DATE</h3>
                    </div>
                </div>
                <div className="line-3">
                    <div className="inp-T">
                        <input type="checkbox" />
                        <h3 className="i-txt">Horizon UI PRO</h3>
                    </div>
                      <div className="other-1">
                        <h3 className="res">17.5%</h3>
                        <h3 className="res">2035</h3>
                         <h3 className="res">12 jan 2021</h3>
                    </div>

                </div>
                 <div className="line-4">
                    <div className="inp-T">
                        <input type="checkbox" />
                        <h3 className="i-txt">Horizon UI PRO</h3>
                    </div>
                      <div className="other-1">
                        <h3 className="res">17.5%</h3>
                        <h3 className="res">2035</h3>
                         <h3 className="res">12 jan 2021</h3>
                    </div>

                </div>
                 <div className="line-5">
                    <div className="inp-T">
                        <input type="checkbox" />
                        <h3 className="i-txt">Horizon UI PRO</h3>
                    </div>
                      <div className="other-1">
                        <h3 className="res">17.5%</h3>
                        <h3 className="res">2035</h3>
                         <h3 className="res">12 jan 2021</h3>
                    </div>

                </div>
                <div className="line-6">
                    <div className="inp-T">
                        <input type="checkbox" />
                        <h3 className="i-txt">Horizon UI PRO</h3>
                    </div>
                      <div className="other-1">
                        <h3 className="res">17.5%</h3>
                        <h3 className="res">2035</h3>
                         <h3 className="res">12 jan 2021</h3>
                    </div>

                </div>
                <div className="line-7">
                    <div className="inp-T">
                        <input type="checkbox" />
                        <h3 className="i-txt">Horizon UI PRO</h3>
                    </div>
                      <div className="other-1">
                        <h3 className="res">17.5%</h3>
                        <h3 className="res">2035</h3>
                         <h3 className="res">12 jan 2021</h3>
                    </div>

                </div>


            </div>
             <div className="bigbox-4">
                <div className="lilbox-1">
                    <div className="lb-1">
                        <h3 className="l-1a">Daily traffic</h3>
                        <h4 className="l-2a">2.597</h4>
                    </div>
                    <div className="lb-2">
                                  <i class="ri-bar-chart-grouped-line"></i>
                    </div>
                    </div>
            </div>

            <div className="bigbox-4">
                <div className="lilbox-1">
                    <div className="lb-1">
                        <h3 className="l-1a">Your pie chart</h3>
                        
                    </div>
                    <div className="lb-2">
                      <img className="graph-2" src={graph} alt="" />
                    </div>
                    </div>
            </div>

        </div>


      </div>
        

    )
}

export default MainDashboard
