import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { CtxToasts } from '../ToastPlayground/ToastPlayground';

function ToastShelf() {

	const { toasts, removeToast } = React.useContext(CtxToasts)
	
  return (
    <ol className={styles.wrapper}>
			{ toasts?.map(({id, type, content }) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast type={type} content={content} handleDismiss={() => removeToast(id)} />
				</li>
			))}
    </ol>
  );
}

export default ToastShelf;
