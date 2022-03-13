import { useState } from 'react';
import './Score.css';
import { GoX } from "react-icons/go"
import { BiCircle } from "react-icons/bi"

function Score(props) {


    return (
        <div className="score">
            <div><BiCircle size={58} color='#FFC200' />{props.score[0]}</div>
            <div>{props.score[1]}<GoX size={60} color='#FFC200' /></div>
        </div>
    );
}

export default Score;
