import React, { useState, useEffect, useRef } from 'react';

const TimerHook = () => {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])


    return (
        <div>
            Hook Timer {timer}
            <button onClick={()=>clearInterval(intervalRef.current)} >Clear Interval</button>
        </div>
    )
}
export default TimerHook;
// Here when we unsubscribe the interval in side useEffect by returning clearinterval, its fine
// But the problem is it is in scope that means the interval time only available inside the useEffect,
// if u try to call this interval inside the JSX in a button onclick , it will through the error that ,
// interval is not defind.

// For this scinerio how to Handle ???

// So useRef comes to the picture to handle all this scinereo.

// lets try with useRef.
 
// Steps to use useRef.

//1: import useRef from rect.
//2: assign that import ref in a variable like line no. 6.
//3: call that variable inside the useEffect and unSubscribe it by returning that .
//4: Then call that inside the button onClick.

// There r 3 more important hooks 

//1: useInteriatorhandle()
//2: useLayoutEffect()
//3: useDebugvalue()

