import React from 'react';
import './Rightcart.css'
import { faDeleteLeft, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rightcart = (props) => {
    const { name, img } = props.player;
    console.log(props.list);
    return (
        <div className='right-cart'>

            <div className='delete'>
                <p>{name}</p>
                <p className='fa-delete'><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></p>
            </div>


        </div>

    );
};

export default Rightcart;