import React from "react";
import "../stylesheet/ClearButton.css"

const ClearButton = (props) =>(
    <div className="clear-button" onClick={props.clearDrive}>
        {props.children}
    </div>
)

export default ClearButton;