import React, { useContext, useEffect } from 'react'
import { Inputs } from './inputs'
import { ProvaiderContext } from './provaider/MyContext'
import '../styles/index.css'

export const Main = () => {
	const theme = useContext(ProvaiderContext)

	useEffect(() => {
		console.log('was mounted')
	}, []) // component did mount


	return (
		<main id='main' className={theme.theme === 'light' ? 'light' : 'dark'}>
			<div className='container'>
				<div className='div'>
					<Inputs></Inputs>
					<div className={theme.theme === 'light' ? 'div-result' : 'div-result--special'}>
						<p>{theme.theme === 'light' ? 'light' : 'dark'}</p>
					</div>
				</div>
			</div>
		</main>
	)
}
