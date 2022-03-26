import React, { useEffect, useState } from 'react';
import Playerdetails from '../Playerdetails/Playerdetails';
import './Bestplayer.css'

const Bestplayer = () => {
    const [players, setBestPlayers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBestPlayers(data))
    }, []);
    return (
        <div className='best-players-container'>
            <div className="players-container">
                {
                    players.map(player => <Playerdetails key={player.id} player={player}
                    ></Playerdetails>)
                }
            </div>
            <div className="choose-cart">
                <h3>best players</h3>
            </div>
        </div>
    );
};

export default Bestplayer;