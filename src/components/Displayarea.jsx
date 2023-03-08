import React, { useState } from "react";

function Displayarea(props) {

    return(
        <div>
            <div className="top">
                <div className="name">Calc</div>
                <div className="themetitle">THEME</div>
                <div className="theme">
                    <div className="theme1"></div>
                    <div className="theme2"></div>
                </div>
            </div>
            <div className="display">
                <div className="inputs">
                    <div><input 
                        type="text" 
                        // dir="rtl" 
                        disabled 
                        name="input1" 
                        value={props.inputValues}       
                    /></div>
                    <div><input 
                        type="text" 
                        // dir="rtl" 
                        disabled 
                        name="input2"
                        value={props.res}
                    /></div>
                </div>
            </div>
        </div>
    )
}

export default Displayarea;