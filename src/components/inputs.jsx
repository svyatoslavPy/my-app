import React, { useContext, useState} from 'react'
import { ProvaiderContext } from './provaider/MyContext'

export const Inputs = () => {
	const theme = useContext(ProvaiderContext)
	const [value, setValue] = useState('')
	const [togetherValue, setTogetherValue] = useState('')
	const [validate, setValidate] = useState(false)

	const typeChange = e => {
		setValue(e.target.value)
		valid(e.target.value)
	}

	const togetherTypeChange = e => {
		setTogetherValue(e.target.value)
		valid(e.target.value)
	}

	function valid(val) {
		if (!isNaN(parseFloat(val)) && val !== '') {
			setValidate(false)
		} else if (val === '') {
			setValidate(false)
		} else {
			setValidate(true)
		}
	}

	return (
		<div className='div-items'>
			<input
				type='text'
				value={value}
				onChange={typeChange}
				className={theme.theme === 'light' ? 'input-light' : 'input-dark'}
			></input>
			<input
				type='text'
				value={togetherValue}
				onChange={togetherTypeChange}
				className={theme.theme === 'light' ? 'input-light' : 'input-dark'}
			></input>
			{validate && (
				<p
					className={theme.theme === 'light' ? 'div-item' : 'div-item--special'}
				>
					Error
				</p>
			)}
		</div>
	)
}
