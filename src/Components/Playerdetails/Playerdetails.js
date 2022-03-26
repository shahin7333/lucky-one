import React from 'react';
import './Playerdetails.css'
const Playerdetails = (props) => {
    const { img, name, run, wicket } = props.player;
    return (
        <div className='player'>
            <img src={img} alt=""></img>
            <div className='player-statictics'>
                <h2>{name}</h2>
                <p>Run: {run}</p>
                <p>Wicket: {wicket}</p>
            </div>
            <button className='btn-vote'><b>VOTE</b></button>
        </div>
    );
};

export default Playerdetails;