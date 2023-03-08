import React, { useState } from "react";
import Displayarea from "./Displayarea";
import Displaykeys from "./Displaykeys";

function Funckeys(){

    var [inputValues, setInputValue] = useState(["0"]);
    var [res, setRes] = useState(0);

    function Print(event){

        const value = event.target.dataset.rgv;

        if(value === "AC"){
            inputValues.length = 0;
            inputValues.push("0");
        }else if(value === "b"){
            inputValues.pop();
            if(inputValues.length === 0){
                inputValues.push("0")
            }
        }else if(Number.isInteger(Number(value)) && inputValues.length === 1 && inputValues[0] === "0"){
            inputValues.pop();
            inputValues.push(value);
        }else if(!Number.isInteger(Number(inputValues[inputValues.length-1])) && !Number.isInteger(Number(value))){
            inputValues.pop();
            inputValues.push(value);
        }else if(value === "="){
            
        }else{
            inputValues.push(value);
        }

        setInputValue(prev => {
            return [
                ...prev
            ]
        });

        var exp = "";
        const arth = {
            'x': '*'
        }  
        exp = inputValues.join("").toString().replace(/[x]/g, m => arth[m]);
        const re = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;
        if(re.test(exp)){
            setRes(eval(exp));
        }

    }
    
    return(
        <div className="pspk">
            <Displayarea 
                inputValues={inputValues.join("")}
                res={res}
            />
            <Displaykeys 
                Print={Print}
            />
        </div>
    )

}

export default Funckeys;