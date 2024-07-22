import React from "react";
import Img from '../assets/explore/take a look at sneak peek.png';
import './explore.css';
import '../../../../App.css'
import '../../../../fonts/gilroy/Gilroy-SemiBold.ttf'
import '../../../../fonts/gilroy/Gilroy-Bold.ttf'
import "../../../../fonts/Manrope/static/Manrope-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Regular.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-Medium.ttf"
import "../../../../fonts/Montserrat/static/Montserrat-SemiBold.ttf"
export default function App() {

    const gotoHq=()=>{
        window.location.href = "https://www.hqsibling.in/";
    }
    return (
        <>
            <div className="main-contain">
                <div className="for_img">
                    <img src={Img} alt="Exclusive sneak peek" />
                </div>

                <div className="text">
                    <div className="heading5">
                        <h2 className="font-[Gilroy-semibold]">Take a look at our exclusive sneak peek!</h2>
                    </div>
                    <div>
                        <p className="font-[Montserrat-med]">Get a glimpse of what our newsletter offers with a sample edition. Explore curated <br />articles, practical tips, and insights from mental health experts.</p>
                    </div>
                   
                </div>
                <div className="click">
                <button className="button3 font-[Gilroy-semibold]" onClick={gotoHq}>Let's explore it together</button>
                </div>
            </div>
        </>
    );
}
