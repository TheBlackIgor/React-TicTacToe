import './App.css';
import { useState } from 'react';
import Menu from './LoadView/Menu'
import Board from './Game/Board'

function App() {
	const [player, setPlayer] = useState('o');
	const [state, setState] = useState('game')
	const [board, setBoard] = useState([
		'-', '-', '-',
		'-', '-', '-',
		'-', '-', '-'
	])

	const changeBoard = (i, symbol) => {

	}

	const changeState = newState => {
		setState(newState)
	}

	const pickPlayer = e => {
		setState('game')
		console.log(e)
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
				<Board board={board} changeBoard={changeBoard} changeState={changeState} />
			</div>
		)
	}
}

export default App;