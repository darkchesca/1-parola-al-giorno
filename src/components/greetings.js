import React from "react";

function Greetings(){
    return(
        <div>
            Ciao
            {
                localStorage.name
                || ', come ti chiami?'
            }
        </div>
    )
}

export default Greetings;
