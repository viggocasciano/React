import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Home from '../pages/Home/Home';
import Play from '../pages/Play/Play';
import NewQuiz from '../pages/NewQuiz/NewQuiz';
import Historique from '../pages/Historique/Historique';


function Routeur(){
    return(
        <BrowserRouter>
            <div className="main-container">
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Home />} /> 
                <Route path={'/play'} element={<Play />}/>
                <Route path={'/new'} element={<NewQuiz/>}/>
                <Route path={'/historique'} element={<Historique/>}/>
            </Routes>
            </div>
        </BrowserRouter>
    );
}
export default Routeur; 