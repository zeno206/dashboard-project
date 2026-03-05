import React from "react";
import Orderlist from "./orderlist";

function Orders() {
  const orderdata = [
    {
      order_id: 7648392,
      date: "2026-02-18",
      email: "amit.verma01@gmail.com",
      country: "India",
      shipping_address: "H.No 21, Andheri West, Mumbai, India",
      order_type: "Online Payment",
      customer_gender: "Male",
    },
    {
      order_id: 9182746,
      date: "2026-02-05",
      email: "olivia.smith22@gmail.com",
      country: "USA",
      shipping_address: "H.No 78, Lake View, Chicago, USA",
      order_type: "Cash on Delivery",
      customer_gender: "Female",
    },
    {
      order_id: 6359184,
      date: "2026-01-29",
      email: "zain.ali77@gmail.com",
      country: "Pakistan",
      shipping_address: "H.No 14, Gulshan Block 3, Karachi",
      order_type: "Bank Transfer",
      customer_gender: "Male",
    },
    {
      order_id: 4827165,
      date: "2026-02-12",
      email: "emma.brown90@gmail.com",
      country: "UK",
      shipping_address: "H.No 55, King Street, London, UK",
      order_type: "Online Payment",
      customer_gender: "Female",
    },
    {
      order_id: 3591847,
      date: "2026-02-01",
      email: "noah.johnson33@gmail.com",
      country: "Canada",
      shipping_address: "H.No 92, Maple Road, Toronto, Canada",
      order_type: "Cash on Delivery",
      customer_gender: "Male",
    },
    {
      order_id: 7462918,
      date: "2026-01-22",
      email: "sara.khan44@gmail.com",
      country: "India",
      shipping_address: "H.No 33, Sector 18, Noida, India",
      order_type: "Online Payment",
      customer_gender: "Female",
    },
    {
      order_id: 5819374,
      date: "2026-02-09",
      email: "daniel.lee77@gmail.com",
      country: "USA",
      shipping_address: "H.No 66, Sunset Ave, Dallas, USA",
      order_type: "Bank Transfer",
      customer_gender: "Male",
    },
    {
      order_id: 9274615,
      date: "2026-02-15",
      email: "fatima.ali88@gmail.com",
      country: "UAE",
      shipping_address: "H.No 10, Marina Walk, Dubai, UAE",
      order_type: "Cash on Delivery",
      customer_gender: "Female",
    },
    {
      order_id: 3184759,
      date: "2026-01-30",
      email: "liam.wilson55@gmail.com",
      country: "Australia",
      shipping_address: "H.No 47, George St, Sydney, Australia",
      order_type: "Online Payment",
      customer_gender: "Male",
    },
    {
      order_id: 8642197,
      date: "2026-02-11",
      email: "ava.thomas11@gmail.com",
      country: "Germany",
      shipping_address: "H.No 25, Main Road, Berlin, Germany",
      order_type: "Bank Transfer",
      customer_gender: "Female",
    },
  ];

  return (
    <div className="orderbox">
      <div className="ob-l1">
        <h2 className="orders">Orders</h2>
        <button className="orderbtn">Create new</button>
      </div>
      <div className="ob-l2">
        <div className="inpL-1">
          <h3 className="d-1">What are you looking for?</h3>
          <input className="search-inp" placeholder="search" />
        </div>
        <div className="inpL-2">
          <h3 className="d-1">Catageory</h3>
          <select id="orders" name="orders">
            <option value="volvo">All</option>
            <option value="bmw">Single</option>
            <option value="audi">Double</option>
          </select>
        </div>
        <div className="inpL-3">
          <h3 className="d-1">Status</h3>
          <select id="orders" name="orders">
            <option value="volvo">All</option>
            <option value="bmw">Single</option>
            <option value="audi">Double</option>
          </select>
        </div>
        <button className="orderbtn-2">Search</button>
      </div>
      <div className="ob-l3">
        <div className="modrl-0">
          <div className="hbar-1">
            <h2 className="hdg-0">Product Summery</h2>
            <h6 className="hdg-1">Show</h6>
          </div>
          <div className="hbar-2">
            <select className="order-column">
              <option value="volvo">All Column</option>
              <option value="bmw">Single Column</option>
              <option value="audi">Double Column</option>
            </select>
            <button className="orderbtn-3 ">Dispatch selected</button>
          </div>
        </div>
        <div className="row-name">
          <ul className="row-ul">
            <li className="row-li-1">Id</li>
            <li className="row-li-2">Date</li>
            <li className="row-li-3">Email</li>
            <li className="row-li-4">Country</li>
            <li className="row-li-5">Address</li>
            <li className="row-li-6">Payment</li>
            <li className="row-li-7">Gender</li>
          </ul>
        </div>
        {orderdata.map((orderdata) => {
          return (
            <Orderlist
              ordernumber={orderdata.order_id}
              Date={orderdata.date}
              Email={orderdata.email}
              Country={orderdata.country}
              Shipping={orderdata.shipping_address}
              Ordertype={orderdata.order_type}
              Customer={orderdata.customer_gender}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
