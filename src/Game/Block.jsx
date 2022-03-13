import './Block.css';
import { useState, useEffect } from 'react';
import { GoX } from "react-icons/go"
import { BiCircle } from "react-icons/bi"


function Block(props) {

    const [content, setContent] = useState(props.value)

    const handleClick = () => {
        setContent(props.turn)
        props.changeBoard(props.id, props.turn)
    }


    if (content === '-') {
        return (
            <div
                className='block'
                onClick={handleClick}
            >
            </div>
        )
    } else {
        return (
            <div
                className='block'
            >
                {content === 'o' ? <BiCircle size={50} color='#FFC200' /> : <GoX size={50} color='#FFC200' />}
            </div>
        )
    }

}

export default Block;
