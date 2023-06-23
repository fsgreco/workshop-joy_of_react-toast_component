import React from "react";

import ToastShelf from '../ToastShelf'
import useOnKeyPress from "../../hooks/use-escape-key";

export const CtxToasts = React.createContext()

function ToastProvider({children}) {
	const [ toasts, setToasts ] = React.useState([])
	const addToast = toast => setToasts(currArr => [...currArr, toast ])
	const removeToast = toastId => setToasts( currentArr => currentArr.filter( val => val.id !== toastId))

	useOnKeyPress(['Escape'], () => setToasts([]) )

  return (
		<CtxToasts.Provider value={{ toasts, addToast, removeToast }}> 
			{children}
			<ToastShelf />
		</CtxToasts.Provider>
	)
}

export default ToastProvider;
