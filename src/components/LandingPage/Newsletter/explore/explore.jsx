import React from "react";
import Img from '../assets/explore/take a look at sneak peek.png';
import './explore.css';
import { useNavigate } from 'react-router-dom';
export default function App() {
    const navigate=useNavigate()
    const handleClick11 = () => {
        console.log("Navigating to sample");
        navigate('/newsletter/sample'); 
      };
    return (
        <>
            <div className="main-contain">
                <div className="for_img">
                    <img src={Img} alt="Exclusive sneak peek" />
                </div>

                <div className="text">
                    <div className="heading5">
                        <h2>Take a look at our exclusive sneak peek!</h2>
                    </div>
                    <div>
                        <p>Get a glimpse of what our newsletter offers with a sample edition. Explore curated <br />articles, practical tips, and insights from mental health experts.</p>
                    </div>
                   
                </div>
                <div className="click">
                <button className="button3" onClick={handleClick11}>Let's explore it together</button>
                </div>
            </div>
        </>
    );
}
