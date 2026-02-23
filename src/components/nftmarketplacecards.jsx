import React from "react";
  
function Card2(props){
      <div className="avtar-box">
            <img src={props.image} alt="" />
            <div className="innerbox">
              <h3 className="pname">{props.names}</h3>
              <h4 className="phchat">{props.message}</h4>
            </div>
          </div>
}

export default Card2