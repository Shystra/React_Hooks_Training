import logo from './logo.svg';
import './style.css';
import { useState } from 'react';


const Button = ({ incrementButton}) => {
    return <button onClick={() => incrementButton(10)}>+</button>
}




export const CallBack = () => {
    const[counter, setCounter] = useState(0)


    const incrementCounter = (num) => {
        setCounter(counter + num)
    }
    




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
