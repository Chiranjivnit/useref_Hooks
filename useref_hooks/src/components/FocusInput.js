import React, { useEffect, useRef } from 'react';

function FocusInput() {
  const inputref = useRef('');
  useEffect(() => {
    // focus the input element
    inputref.current.focus()
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputref} type='text' />
      </header>
    </div>
  );
}

export default FocusInput;
