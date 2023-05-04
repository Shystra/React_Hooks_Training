import logo from './logo.svg';
import './style.css';
import { useEffect, useState } from 'react';

const eventClick = () => {
    console.log('button clicado')
}

export const Contador = () => {
    const [counter, setCounter] = useState(0);



    // Executa toda vez que a dependência mudar// toda vez que o componente atualiza
    useEffect(() => {
        document.querySelector('button')?.addEventListener('click', eventClick);

        return () => {
            document.querySelector('button')?.removeEventListener('click', eventClick);
        };
    }, [])



    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo"  alt="logo" />

                <h1>Counter: {counter}</h1>
               <button onClick={() => setCounter( counter + 1 )}>+</button>


            </header>
        </div>
    );
}
