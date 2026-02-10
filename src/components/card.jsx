import React from "react";



function Card(props){
    return(
    
    <div className="card">
        <div className="cardbox1">
            <img className="cardimage" src={props.image} alt="" />
        </div>
        <div className="cardbox2">
           <h2 className="card-h">{props.names}</h2>
           <p>{props.detail}</p>
           <button className="card-btn">{props.btn}</button>
        </div>
    </div>
    
    )
}
export default Card