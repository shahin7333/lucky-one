import { faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
            <button onClick={() => handleAddToRight(player)} className='btn-vote'>
                <p className='vote'><b>VOTE</b></p>
                <FontAwesomeIcon icon={faVoteYea}></FontAwesomeIcon>
            </button>
        </div >
    );
};

export default Playerdetails;