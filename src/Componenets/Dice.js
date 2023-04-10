import React from "react";

function Dice(props){
     
    const style={
        backgroundColor: props.isHeld ?"#59E391":"white"
    }

    return(
        <div className="dice" onClick={()=>props.diceClick(props.id)} style={style}>
            <h2 className="dice-value">{props.value}</h2>
        </div>
    );
}

export default Dice;