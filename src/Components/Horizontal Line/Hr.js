import React from 'react'

const ColoredLine = ({ linecolor }) => (

    <hr
        style={{
            color: linecolor,
            height: "1px",
            // color: "rgb(254, 131, 105)",
            width: "40%",
            backgroundColor: "rgb(254, 131, 105)",
            float: "right",
        }}
    />

);

export default ColoredLine;