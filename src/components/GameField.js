import './GameField.css'
import DefaultButton from './DefaultButton'
import React, { useEffect } from 'react'
import { Word } from './Word'
import { useNavigate } from 'react-router-dom'
import { shuffle } from '../utils/shuffle'

export function GameField({ question, allWords, goodWords, setScore }) {
	const [allWordsShuffled, setAllWordsShuffled] = React.useState([])
	const [selectedWords, setSelectedWords] = React.useState([])
	const [checkingAnswer, setCheckingAnswer] = React.useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		let allWordsTemp = [...allWords]
		shuffle(allWordsTemp)
		setAllWordsShuffled(allWordsTemp)
	}, [])

	const selectWord = word => {
		setSelectedWords(prevSelectedWords => {
			setCheckingAnswer(false)
			if (selectedWords.includes(word)) {
				const newSelectedWords = [...prevSelectedWords]
				newSelectedWords.splice(prevSelectedWords.indexOf(word))
				return newSelectedWords
			}
			return [...prevSelectedWords, word]
		})
	}

	const calculateScore = () => {
		const correctSelected = selectedWords.filter(value => goodWords.includes(value))
		const leftCorrect = goodWords.length - correctSelected.length
		const incorrectSelected = selectedWords.length - correctSelected.length
		setScore(correctSelected.length * 2 - (incorrectSelected + leftCorrect))
	}

	const checkAnswer = word => {
		const wordClasses = []
		if (selectedWords.includes(word)) {
			wordClasses.push('selected')
			if (checkingAnswer) {
				if (goodWords.includes(word)) {
					wordClasses.push('correct')
				} else {
					wordClasses.push('incorrect')
				}
			}
		}
		return wordClasses.join(' ')
	}

	return (
		<div className='field-game'>
			{question}
			<div className='game-square'>
				<div className='words'>
					{allWordsShuffled.map(word => (
						<Word
							key={word}
							word={word}
							checkAnswer={checkAnswer}
							checkingAnswer={checkingAnswer}
							selectWord={selectWord}
						/>
					))}
				</div>
			</div>
			{!checkingAnswer && (
				<DefaultButton
					title='Check answer'
					onClick={() => {
						setCheckingAnswer(true)
						calculateScore()
					}}
				/>
			)}
			{checkingAnswer && (
				<DefaultButton
					title='Finish game'
					onClick={() => {
						navigate('/end')
					}}
				/>
			)}
		</div>
	)
}
export default GameField
