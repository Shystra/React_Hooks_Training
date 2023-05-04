import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Contador } from './Components/useEffect';
import { Reverse } from './Components/useState';
import { CallBack } from './Components/useCallback';
import { useMemo2 } from './Components/useMemo';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador/>
    <Reverse />
    <CallBack/>
    <useMemo2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
