import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ type, content, handleDismiss }) {
	const Icon = ICONS_BY_VARIANT[type]
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
				<VisuallyHidden>{type} - </VisuallyHidden>
        {content}
      </p>
      <button onClick={handleDismiss} className={styles.closeButton} aria-label="Dismiss message" aria-live="off">
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
