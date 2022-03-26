import React, { useEffect, useState } from 'react';
import Playerdetails from '../Playerdetails/Playerdetails';
import Rightcart from '../Rightcart/Rightcart';
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
        const newList = [...list, player];
        setList(newList);

    };
    const CloseAll = () => {
        setList([]);
    }

    // const ChooseOne = () => {
    //     const randBest = list[Math.floor(Math.randaom() * list.length)];
    //     console.log(randBest)
    //     const newList = [randBest];
    //     setList(newList);
    // }
    const chooseBest = () => {
        const randBest = list[Math.floor(Math.random() * list.length)];
        const newList = [randBest];
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
                <h3 className='best-heading'>Best players in my eyes</h3>
                {
                    list.map(player => <Rightcart key={player.id} player={player}></Rightcart>)

                }
                <div>
                    <button onClick={chooseBest} className='btn-choose-clear' id='btn-choose-clear-one'><b>Choose One</b></button><br />
                    <button onClick={CloseAll} className='btn-choose-clear' id='btn-choose-clear-two'><b>Clear All</b></button>
                </div>
            </div>
        </div>
    );
};

export default Bestplayer;