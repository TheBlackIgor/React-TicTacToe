import './App.css';
import { useState } from 'react';
import Menu from './LoadView/Menu'
import Board from './Game/Board'
import WinnerAlert from './LoadView/WinnerAlert.jsx'
import { GoX } from "react-icons/go"
import { BiCircle } from "react-icons/bi"
import Score from './LoadView/Score'

function App() {
	const [player, setPlayer] = useState('o');
	const [state, setState] = useState('menu')
	const [move, setMove] = useState('o')
	const [boardKey, setBoardKey] = useState(Math.random())
	const [firstMove, setFirstMove] = useState('o')
	const [endGame, setEndGame] = useState(false)
	const [curWinner, setCurWinner] = useState('')

	const [mode, setMode] = useState('1v1')
	const [score, setScore] = useState([0, 0])

	const changeState = newState => {
		setScore([0, 0])
		setState(newState)
	}

	const pickPlayer = e => {
		setState('game')
		setMode(e)
	}
	const handleChangeScore = winner => {
		setEndGame(true)
		setCurWinner(winner)
		let hTab = score
		if (winner === 'o') hTab[0] += 1
		else if (winner === 'x') hTab[1] += 1
		setScore(hTab)
		firstMove === 'o' ? setFirstMove('x') : setFirstMove('o')
	}
	const handleStartNextGame = () => {
		setMove(firstMove)
		setEndGame(false)
		setBoardKey(Math.random())
	}
	const handleShowMenu = () => {
		setScore([0, 0])
		setMove(firstMove)
		setEndGame(false)
		setState('menu')
	}
	const changeMove = () => {
		move === 'o' ? setMove('x') : setMove('o')
	}
	const reloadBoard = () => {
		setMove(firstMove)
		setBoardKey(Math.random())
	}

	if (state === 'menu') {
		return (
			<div className="App">
				<Menu pickPlayer={pickPlayer} />
			</div>
		);
	} else if (state === 'game') {
		return (
			<div className='App'>
				<div className='currentMove'>
					Current move {move === 'o' ? <BiCircle size={58} color='#FFC200' /> : <GoX size={60} color='#FFC200' />}
				</div>
				{endGame ? <WinnerAlert winner={curWinner} nextGame={handleStartNextGame} showMenu={handleShowMenu} /> : ''}
				<Board
					key={boardKey}
					changeState={changeState}
					gameMode={mode}
					firstMove={firstMove}
					changeScore={handleChangeScore}
					changeMove={changeMove}
					reloadBoard={reloadBoard}
				/>
				<div className="score">
					<div><BiCircle size={58} color='#FFC200' />{score[0]}</div>
					<div>{score[1]}<GoX size={60} color='#FFC200' /></div>
				</div>
			</div>
		)
	}
}

export default App;