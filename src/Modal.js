import React from "react";

const modal = ({ solution }) => {
    return(
        <div className="modal">
            <div>
                <h1>You Win!</h1>
                <p className="solution">{solution}</p>
            </div>
        </div>
    )
}

export default modal;