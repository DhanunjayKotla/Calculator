import React from "react";
import keysInfo from "../keys";

function Displaykeys(props){

    return(
        <div className="keyboard">
            {keysInfo.map((keyInfo) => {
                return(
                    <div
                        className="keyboardkeys"
                        data-rgv={keyInfo.id}
                        onClick={(event) => {props.Print(event)}}
                    >{keyInfo.keyName}</div>
                )
            })}
        </div>
    )
    
}

export default Displaykeys;

