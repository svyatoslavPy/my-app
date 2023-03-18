import React from "react"

export const ProvaiderContext = React.createContext({
	theme: 'light',
	changeToDark: () => {},
	changeToWhite: () => {},
})