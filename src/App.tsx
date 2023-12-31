import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Game from './pages/Game';
import GameStart from './pages/GameStart';
import GameOver from './pages/GameOver';
import './index.css';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/who-wants-to-be-a-millionaire" element={<GameStart />}/>
				<Route path="/who-wants-to-be-a-millionaire/game" element={<Game />}/>
				<Route path="/who-wants-to-be-a-millionaire/game-over" element={<GameOver />}/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
