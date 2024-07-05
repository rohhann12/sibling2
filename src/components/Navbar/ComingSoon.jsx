import React from 'react';
import './ComingSoon.css';
import { useNavigate } from 'react-router-dom';
const ComingSoon = () => {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate('/')
    }
    return (
        <div className="coming-soon-container">
            <div className="content">
                <h1>Coming Soon</h1>
            </div>
            <button onClick={goBack} className='button'>Go back</button>
        </div>
    );
};


export default ComingSoon;
