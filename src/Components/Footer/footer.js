import React, { useState, useEffect } from "react";
import './Footer.css'

const Footer = () => {
    const [time, setTime] = useState(new Date().toUTCString())
    
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000
        );
        return () => {
            clearInterval(interval)}
    })

    const tick = () => {
        setTime(new Date().toUTCString());
      };

    return(
        <div class='footer'>
            <p><span>&#169;</span> stntsk</p>
            <p>UTC: {time}</p>
        </div>
    )
}

export default Footer