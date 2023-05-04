import logo from './logo.svg';
import P from 'prop-types';
import './style.css';
import React, { useState, useCallback, useMemo } from 'react';



const ButtonSoma = React.memo(function ButtonSoma({incrementButton}) {
    console.log('O filho renderizou');
    return <button onClick={() => incrementButton(200)}>+Soma100+</button>
});
ButtonSoma.propType = {
    incrementButton: P.func,
}



export const useMemo2 = () => {
    const [counter, setCounter] = useState(0);


    const incrementCounter = useCallback((num) => {
        setCounter((c) => c + num);
    }, [])
    console.log('Pai renderizou');

    const VariavelMemo = useMemo(() =>{
        return <ButtonSoma incrementButton={incrementCounter} />
   }, [incrementCounter])    



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logoreverseClass" alt="logo" />
               
                {VariavelMemo}     
            </header>
        </div>
    );
}
