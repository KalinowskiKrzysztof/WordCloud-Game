import './StartupScreen.css'
import DefaultButton from './DefaultButton'
import { useNavigate } from 'react-router-dom'

const StartupScreen = ({ setName }) => {
	const navigate = useNavigate()
	return (
		<div className='container'>
			<h1>Wordcloud game</h1>
			<input className='start-input' onChange={event => setName(event.target.value)} placeholder='Enter your nickame here....'></input>
			<DefaultButton
				title='play'
				onClick={() => {
					navigate('/game')
				}}
			/>
		</div>
	)
}

export default StartupScreen
