import React from "react";
import Img from '../assets/explore/take a look at sneak peek.png';
import './explore.css';

export default function App() {
    return (
        <>
            <div className="main-contain">
                <div className="for_img">
                    <img src={Img} alt="Exclusive sneak peek" />
                </div>

                <div className="text">
                    <div className="heading5">
                        <p>Take a look at our exclusive sneak peek!</p>
                    </div>
                    <div>
                        <p>Get a glimpse of what our newsletter offers with a sample edition. Explore curated <br />articles, practical tips, and insights from mental health experts.</p>
                    </div>
                   
                </div>
                <div className="click">
                <button className="button3">Let's explore it together</button>
                </div>
            </div>
        </>
    );
}
