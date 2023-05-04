import logo from './logo.svg';
import './style.css';
import { useState } from 'react';

export const Reverse = () => {
    const [reverse, setReverse] = useState(false);
    const [count, setCounter] = useState(0);
    const reverseClass = reverse ? 'reverse' : '';


    const handleCountClick = () => {
        setCounter(count + 1)
        console.log(handleCountClick)
    }




    const handleClick = () => {
        setReverse(!reverse);
    };





    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
               




                <button type='button' onClick={handleClick} > Reverse </button>
                <p></p>
                <button type='button' onClick={handleCountClick}> Count {count}</button>

            </header>
        </div>
    );
}
