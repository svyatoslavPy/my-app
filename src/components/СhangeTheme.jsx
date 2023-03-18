import { useContext } from 'react'
import { ProvaiderContext } from './provaider/MyContext'

export const ChangeTheme = () => {
	const theme = useContext(ProvaiderContext)

	const changeToDark = () => {
		theme.changeToDark()
	}

	const changeToWhite = () => {
		theme.changeToWhite()
	}
	return (
		<div className='header-buttons'>
			<button onClick={changeToDark}>Dark</button>
			<button onClick={changeToWhite}>White</button>
		</div>
	)
}

// * Напишите приложение состоящее из компонентов показанных на рисунке выше. Слева вверху есть две кнопки (dark и light). Они переключают фон DIv2 (белый или черный), так же фон должен менятся в текстовых полях внутри этого Div2. Справа есть поле (на рисунке обозначена словом индикатор), оно должно отображать слова Day/Night в зависимосте от выбранного режима, (dark / light).
// @ Поля обозначиенные (текст с валидацией) должны принемать только числа и не быть пустыми. В противном случае после начала ввода под полем должна появится надпись, что поле невалидно
