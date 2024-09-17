import { useState } from "react";

const Display = ({expr}) => {
    return (
        <div className="display">
            <div className="display_save"></div>
            <div className="display_input">{expr}</div>
        </div>
    )
}

export default Display;