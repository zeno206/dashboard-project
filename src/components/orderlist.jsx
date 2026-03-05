import React from "react";

function Orderlist(props) {
  return (
    <>
      <div className="modrl-1">
        <input type="checkbox" />
        <h3 className="ordrnamel-1">{props.ordernumber}</h3>
        <h3 className="ordrnamel-2">{props.Date}</h3>
        <h3 className="ordrnamel-3">{props.Email}</h3>
        <h3 className="ordrnamel-4">{props.Country}</h3>
        <h3 className="ordrnamel-5">{props.Shipping}</h3>
        <h3 className="ordrnamel-6">{props.Ordertype}</h3>
        <h3 className="ordrnamel-7">{props.Customer}</h3>
      </div>
    </>
  );
}

export default Orderlist;
