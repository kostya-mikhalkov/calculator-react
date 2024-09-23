import { useState } from "react";

const Display = ({expr, history, theme}) => {
    const arr = history.filter((item, ind, arr) => arr.indexOf(item) === ind);
    return (
        <div className="display" style={{'color': theme ? 'black' : 'white'}}>
            <div className="display_save">
                {arr.map((item, ind) => {
                    return (
                        <div key={ind}>{item}</div>
                    )
                })}
            </div>
            <div className="display_input">{expr}</div>
        </div>
    )
}

export default Display;