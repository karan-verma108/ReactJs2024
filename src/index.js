import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import Statewise from './CovidCase/Statewise';
// import App from './App';
// import Countdown from 'react-countdown';
// import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import BootstrapPage from './BootstrapPage';
// import App from './ContextAPI/App';
// import App from './UseEffect/App';
// import ChangeTitle from './UseEffect/ChangeTitle';
// import PokemonData from './Pokemon/PokemonData';
import App from './ReactRouter/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);