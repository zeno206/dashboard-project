import React from "react";

function Profilethoughts(props) {
  return (
    <>
      <div className="thoughtsection">
        <div className="id-sec">
          <img className="p-img" src={props.img} alt="" />
          <h2 className="p-nam">
            {props.name}
            <span className="spn"> {props.time}</span>
          </h2>
          <span className="optn">
            <i class="ri-more-2-line"></i>
          </span>
        </div>
        <p className="p-thg">{props.thg}</p>
        <img className="thg-img" src={props.thgimg} alt="" />
      </div>
    </>
  );
}

export default Profilethoughts;
