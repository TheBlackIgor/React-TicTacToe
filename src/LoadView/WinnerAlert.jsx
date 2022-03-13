import { useState } from 'react';
import './WinnerAlert.css';
import { GoX } from "react-icons/go"
import { BiCircle } from "react-icons/bi"

function WinnerAlert(props) {


    return (
        <div className="alert">
            <div className='al'>
                <h2>
                    Winner is {props.winner === 'o' ? <BiCircle size={58} color='#FFC200' /> : <GoX size={60} color='#FFC200' />}
                </h2>
                <div className="buttons">
                    <div onClick={props.nextGame}>Next game</div>
                    <div onClick={props.showMenu}>Menu</div>
                </div>
            </div>
            <div className='bg'></div>
        </div >
    );
}

export default WinnerAlert;
