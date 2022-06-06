import './DefaultButton.css'

const DefaultButton = props => {
	return (
		<button className='btn' onClick={props.onClick}>
			{props.title}
		</button>
	)
}

export default DefaultButton
