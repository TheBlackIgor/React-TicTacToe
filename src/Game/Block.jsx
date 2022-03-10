import './Block.css';
import { useState } from 'react';


function Block(props) {

    window.addEventListener('resize', () => {
        return (
            <div
                className={window.innerWidth > 600 ? 'bigBlock block' : 'smallBlock block'}
                onClick={props.fillBlock}
            />

        )
    })
    return (
        <div
            className={window.innerWidth > 600 ? 'bigBlock block' : 'smallBlock block'}
            onClick={props.fillBlock}
        />

    )

}

export default Block;
