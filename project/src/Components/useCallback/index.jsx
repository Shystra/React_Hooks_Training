import logo from './logo.svg';
import P from 'prop-types';
import './style.css';
import React, { useState, useCallback } from 'react';

// useCallback para coisas pesadas

const Button = React.memo(function Button({ incrementButton }) {
    console.log('Filho, renderizou');
    return <button onClick={() => incrementButton(100)}>+</button>;
  });

Button.propTypes = {
    incrementButton: P.func, 
};


export const CallBack = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);
    




    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
               

                <h1>Counter: {counter}</h1>
                <Button incrementButton={incrementCounter}/>

                

            </header>
        </div>
    );
}
