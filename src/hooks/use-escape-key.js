import React from 'react'

/**
 * Custom hook that run a callback if user press any key present on the keys array
 * @param {Array<string>} keys array of strings for each key (code events: developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values)
 * @param {Function<void>} callback 
 */
const useOnKeyPress = (keys,callback) => {
   React.useEffect(() => {
    const runCallback = e => keys.includes(e.code) && callback()
    window.addEventListener('keydown', runCallback)
    return () => window.removeEventListener('keydown', runCallback)
  }, [keys, callback])
}

export default useOnKeyPress