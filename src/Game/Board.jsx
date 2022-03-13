import './Board.css';
import { useState, useEffect } from 'react';
import Block from './Block.jsx'
import { AiOutlineArrowLeft } from 'react-icons/ai'


function Board(props) {
    const [board, setBoard] = useState([
        '-', '-', '-',
        '-', '-', '-',
        '-', '-', '-'
    ])
    const [turn, setTurn] = useState(props.firstMove)
    const [round, setRound] = useState(1)

    //change state board and check for winner
    const changeBoard = (i, symbol) => {
        let hTab = board
        turn === 'o' ? setTurn('x') : setTurn('o')
        props.changeMove()
        setRound(round + 1)
        hTab[i] = symbol
        setBoard(hTab)
        if (round > 4) {
            handleCheckForWinner()
        }
        if (round === 9) {
            handleDraw('draw')
        }
    }

    const handleCheckForWinner = () => {
        handleCheckForSymbol('o')
        handleCheckForSymbol('x')
    }

    //check if n symbol wins
    const handleCheckForSymbol = n => {
        let win = false
        for (let i = 0; i < 3; i++) {
            if (board[i] === n && board[i + 3] === n && board[i + 6] === n) win = true //horizontal
            if (board[i * 3] === n && board[i * 3 + 1] === n && board[i * 3 + 2] === n) win = true //vertical
        }
        if (board[0] === n && board[4] === n && board[8] === n) win = true //cross
        if (board[2] === n && board[4] === n && board[6] === n) win = true //cross


        if (win) {
            props.changeScore(n)
        }
    }

    //reset the board to defaul and 
    const handleDraw = whoWin => {
        props.reloadBoard() //go to the App.jsx and change key of Board, idk how else I could reload this component, still learning ;p
    }

    //go back with app state
    const handleBack = () => {
        props.changeState('menu')
    }

    return (
        <div className='board'>
            <div className='backBt' onClick={handleBack}>
                <AiOutlineArrowLeft size={50} color='#FFC200' />
            </div>
            <Block value={board[0]} id={0} turn={turn} changeBoard={changeBoard} />
            <Block value={board[1]} id={1} turn={turn} changeBoard={changeBoard} />
            <Block value={board[2]} id={2} turn={turn} changeBoard={changeBoard} />
            <Block value={board[3]} id={3} turn={turn} changeBoard={changeBoard} />
            <Block value={board[4]} id={4} turn={turn} changeBoard={changeBoard} />
            <Block value={board[5]} id={5} turn={turn} changeBoard={changeBoard} />
            <Block value={board[6]} id={6} turn={turn} changeBoard={changeBoard} />
            <Block value={board[7]} id={7} turn={turn} changeBoard={changeBoard} />
            <Block value={board[8]} id={8} turn={turn} changeBoard={changeBoard} />
        </div>
    )
    // {board.map((el, i) => {
    //     <Block key={i} value={el} id={i} turn={turn} changeBoard={changeBoard} />
    // })}
}

export default Board;
