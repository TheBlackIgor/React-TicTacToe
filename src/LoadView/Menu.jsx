import { useState } from 'react';
import './Menu.css';
import { GoX } from "react-icons/go"
import { BiCircle } from "react-icons/bi"

function Menu(props) {
	const [player, setPlayer] = useState('o');

	const posComp = () => {
		document.getElementById('optBg').style.left = (window.innerWidth / 2 - 150) + 'px'
	}

	const handlePickPlayer = () => {
		if (player === 'o') {
			document.getElementById('optBg').style.left = (window.innerWidth / 2) + 'px'
			setPlayer('x')
		} else {
			document.getElementById('optBg').style.left = (window.innerWidth / 2 - 150) + 'px'
			setPlayer('o')
		}
	}

	const handleResize = () => {
		if (player === 'x') document.getElementById('optBg').style.left = (window.innerWidth / 2) + 'px'
		else document.getElementById('optBg').style.left = (window.innerWidth / 2 - 150) + 'px'
	}
	const handlePlayVSP = () => {
		props.pickPlayer('1v1')
	}
	const handlePlayVSAI = () => {
		props.pickPlayer(player)
	}

	window.addEventListener('resize', handleResize)
	const buttonBg = {
		left: (window.innerWidth / 2 - 150) + 'px'
	}

	return (
		<div className="mainMenu">
			<div className="select">
				<div className='opt' onClick={handlePickPlayer}><BiCircle size={28} color='#FFC200' /></div>
				<div className='opt' onClick={handlePickPlayer}><GoX size={30} color='#FFC200' /></div>
				<div className='optBg' id='optBg' style={buttonBg}></div>
			</div>
			<div className='buttons'>
				<div onClick={handlePlayVSP}>vs Player</div>
				<div onClick={handlePlayVSAI}>vs AI</div>
			</div>
		</div >
	);
}

export default Menu;
