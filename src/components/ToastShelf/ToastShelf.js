import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { CtxToasts } from '../ToastProvider/ToastProvider';

function ToastShelf() {

	const { toasts, removeToast } = React.useContext(CtxToasts)
	
  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
			{ toasts?.map(({id, type, content }) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast type={type} content={content} handleDismiss={() => removeToast(id)} />
				</li>
			))}
    </ol>
  );
}

export default ToastShelf;
