import React, { Fragment, useEffect } from 'react'
import GameField from './components/GameField'
import StartupScreen from './components/StartupScreen'
import EndingScreen from './components/EndingScreen'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { shuffle } from './utils/shuffle'

const apiResponse = [
	{
		question: 'select animals',
		all_words: ['hole', 'sofa', 'pear', 'tiger', 'oatmeal', 'square', 'nut', 'cub', 'shirt', 'tub', 'passenger', 'cow'],
		good_words: ['tiger', 'cow'],
	},
	{
		question: 'select colors',
		all_words: [
			'jeans',
			'existence',
			'ink',
			'red',
			'blue',
			'yellow',
			'laugh',
			'behavior',
			'expansion',
			'white',
			'black',
			'cakes',
		],
		good_words: ['red', 'blue', 'yellow', 'white', 'black'],
	},
	{
		question: 'select vehicles',
		all_words: ['belief', 'wire', 'car', 'bus', 'star', 'river', 'hat', 'skirt', 'train'],
		good_words: ['car', 'bus', 'train'],
	},
]

const App = () => {
	const [score, setScore] = React.useState(0)
	const [name, setName] = React.useState('Player')

	useEffect(() => {
		shuffle(apiResponse)
	}, [])

	const response = apiResponse[0]

	return (
		<Fragment>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<StartupScreen setName={setName} />} />
					<Route
						exact
						path='/game'
						element={
							<GameField
								setScore={setScore}
								question={response.question}
								allWords={response.all_words}
								goodWords={response.good_words}
							/>
						}
					/>
					<Route exact path='/end' element={<EndingScreen name={name} score={score} />} />
				</Routes>
			</BrowserRouter>
		</Fragment>
	)
}

export default App
