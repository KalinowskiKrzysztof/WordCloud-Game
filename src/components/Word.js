import React, { useMemo } from 'react'

export function Word({word, checkAnswer, checkingAnswer, selectWord}) {
	const selectionState = checkAnswer(word)

	// { Using the following code, I tried to display the words randomly, but they overlapped}
	// const gameSquare Height = 400;
	// const gameSquareWidth = 700;
	const style = useMemo(
		() => ({
			width: 'min-content',

			// position: 'absolute',
			// left: Math.random() * (gameSquareWidth - 100),
			// top: Math.random() * (gameSquareHeight - 100),
		}),
		[]
	)

	return (
		<button key={word} style={style} className={selectionState} onClick={() => selectWord(word)}>
			{checkingAnswer && selectionState === 'selected correct' && 'good'}
			{checkingAnswer && selectionState === 'selected incorrect' && 'bad'} {word}
		</button>
	)
}
