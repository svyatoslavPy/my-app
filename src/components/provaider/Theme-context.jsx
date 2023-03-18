import React, { useState } from 'react'
import { ProvaiderContext } from './MyContext'

export const Provider = props => {
	const [theme, setTheme] = useState('light')

	const changeToDark = () => {
		setTheme('dark')
	}

	const changeToWhite = () => {
		setTheme('light')
	}

	const getHookValue = () => {
		return {
			theme,
			changeToDark,
			changeToWhite,
		}
	}

	return (
		<ProvaiderContext.Provider value={getHookValue()}>
			{props.children}
		</ProvaiderContext.Provider>
	)
}
