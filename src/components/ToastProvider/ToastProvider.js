import React from "react";

import ToastShelf from '../ToastShelf'

export const CtxToasts = React.createContext()

function ToastProvider({children}) {
	const [ toasts, setToasts ] = React.useState([])
	const addToast = toast => setToasts(currArr => [...currArr, toast ])
	const removeToast = toastId => setToasts( currentArr => currentArr.filter( val => val.id !== toastId))
  return (
		<CtxToasts.Provider value={{ toasts, addToast, removeToast }}> 
			{children}
			<ToastShelf />
		</CtxToasts.Provider>
	)
}

export default ToastProvider;
