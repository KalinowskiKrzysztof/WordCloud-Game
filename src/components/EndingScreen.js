import './EndingScreen.css'

const EndingScreen = ({ score, name }) => {
	return (
		<div className='ending-container'>
			<h2>Congratulations, {name}!</h2>
			<h3>Your score: </h3>
			<span className='score'>{`${score} ${Math.abs(score) === 1 ? 'point' : 'points'}`}</span>
		</div>
	)
}

export default EndingScreen
