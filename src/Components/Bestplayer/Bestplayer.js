import React, { useEffect, useState } from 'react';
import Playerdetails from '../Playerdetails/Playerdetails';
import './Bestplayer.css'

const Bestplayer = () => {
    const [players, setBestPlayers] = useState([]);
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBestPlayers(data))
    }, []);

    const handleAddToRight = (player) => {
        console.log(player);
        const newList = [...list, player];
        setList(newList);
    }

    return (
        <div className='best-players-container'>
            <div className="players-container">
                {
                    players.map(player => <Playerdetails key={player.id} player={player} handleAddToRight={handleAddToRight}
                    ></Playerdetails>)
                }
            </div>
            <div className="choose-right">
                <h3>best players</h3>
                <p>seleted player:{list.length}</p>
            </div>
        </div>
    );
};

export default Bestplayer;