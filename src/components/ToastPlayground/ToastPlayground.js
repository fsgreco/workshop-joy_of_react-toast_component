import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [ message, setMessage ] = React.useState('')
	const [ choosenVariant, setChoosenVariant ] = React.useState(VARIANT_OPTIONS[0])

	const [ showToast, setShowToast ] = React.useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		console.log({message, choosenVariant})
		setShowToast(true)
	}
	const handleDismiss = () => setShowToast(false)

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

			{ showToast && <Toast type={choosenVariant} content={message} handleDismiss={handleDismiss} /> }

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} onChange={e => setMessage(e.target.value)} value={message} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
						{VARIANT_OPTIONS.map( (variant, id) => (
							<label htmlFor={'variant'+id} key={id}>
								<input
									id={'variant' + id}
									type="radio"
									name="variant"
									checked={ variant === choosenVariant}
									value={variant}
									onChange={e => setChoosenVariant(e.target.value)}
								/>
								{variant}
							</label>
						))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
