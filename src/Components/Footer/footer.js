import React, { useState, useEffect } from "react";

const Footer = () => {
    const [time, setTime] = useState(new Date().toLocaleString())
    
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000
        );
        return () => {
            clearInterval(interval)}
    })

    const tick = () => {
        setTime(new Date().toLocaleString());
      };

    return(
        <div>
            <p><span>&#169;</span> stntsk</p>
            <p>Local time: {time}</p>
        </div>
    )
}

export default Footer