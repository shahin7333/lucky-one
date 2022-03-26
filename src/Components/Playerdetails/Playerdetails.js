import React from 'react';
import './Playerdetails.css'
const Playerdetails = (props) => {
    const { player, handleAddToRight } = props;
    const { img, name, run, wicket } = player;
    return (
        <div className='player'>
            <img src={img} alt=""></img>
            <div className='player-statictics'>
                <h2>{name}</h2>
                <p>Run: {run}</p>
                <p>Wicket: {wicket}</p>
            </div>
            <button onClick={() => handleAddToRight(player)} className='btn-vote'><b>VOTE</b></button>
        </div >
    );
};

export default Playerdetails;