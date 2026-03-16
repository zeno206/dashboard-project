import React from "react";

function Intropeople(props) {
  return (
    <div className="intro-ppl">
      <div className="br-2">
        <img className="int-img" src={props.img} alt="" />
        <h4 className="int-p">{props.req}</h4>
      </div>
    </div>
  );
}

export default Intropeople;
