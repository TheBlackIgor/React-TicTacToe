import './Board.css';
import { useState } from 'react';
import Block from './Block.jsx'
import { AiOutlineArrowLeft } from 'react-icons/ai'


function Board(props) {

    const changeBoard = (i, symbol) => {
        props.changeBoard(i, symbol)
    }
    let board
    function componentDidMount() {
        let i = -1
        board = props.board.map((el) => {
            console.log(el)
            i++
            return <Block key={i} value={el} id={i} />
        })
        console.log(board)
    }
    const handleBack = () => {
        props.changeState('menu')
    }
    componentDidMount()
    return (
        <div className='board'>
            <div className='backBt' onClick={handleBack}>
                <AiOutlineArrowLeft size={50} color='#FFC200' />
            </div>
            {board}
        </div>
    )

}

export default Board;
