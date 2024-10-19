import React from 'react';
import './L4.css'; // Keeping the same CSS import
import videoSrc from '../NEWIMG/FINAL 2.mp4'; // Importing the video file

function L4() {
    return (
        <>
            <div className="l4-container">
                <video
                    className="l4-image"
                    controls
                    // Do not include the muted attribute unless you explicitly want to mute the video
                >
                    <source src={videoSrc} type="video/mp4" />
                    {/* Fallback message if the browser doesn't support video */}
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* <h1 className="l4-header">TOWER</h1> */}
            <p className="l4-description">The Tower is a precision medical device designed to assist in accurate transperineal prostate biopsies. It provides urologists with a hands-free needle guidance system, allowing for improved control and targeting during procedures. The guide is engineered to be compatible with ultrasound systems, offering real-time visualization for precise needle placement.

This device is particularly beneficial in reducing patient discomfort and minimizing the risk of infection since it supports a sterile, controlled environment. Its ergonomic design ensures ease of use, while its adaptability to various needle sizes makes it versatile for different biopsy needs. Additionally, the Tower's free-hand mechanism enhances accuracy, making it a preferred choice for both diagnostic and therapeutic applications in urology.</p>
        </>
    );
}

export default L4;
