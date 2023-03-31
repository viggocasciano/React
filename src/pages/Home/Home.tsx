import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <div className={'home'}>
            <h1>CHOIX DU QUIZ</h1>
            <div className={'choix'}>
                <h2>POKEMON - 23 QUESTIONS</h2>
                <h2>STAR WARS - 42 QUESTIONS</h2>
                <h2>LEAGUE OF LEGEND - 666 QUESTIONS</h2>
                <h2>MY LITTLE PONY - 1 QUESTION</h2>
                <h2>LE MONDE DE NARNIA - 0 QUESTION</h2>
            </div>
            <div className={'jouer'}>
                <p>Mon Nom:</p>
                <input type="text" name="nom" id="nom" />
                <NavLink to={'/play'}>
                    <button>JOUER</button>
                </NavLink>
            </div>
        </div>
            
    )
}

export default Home;