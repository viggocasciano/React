import './NavBar.css'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className={'navigation'}>
            <div className={'titreNav'}>
                <h1>KWIZ</h1>
            </div>
            <div>
                <NavLink to={'/'}>
                    <div><p>JOUER!</p></div>
                </NavLink>
                <NavLink to={'/new'}>
                    <div><p>Créer un quiz</p></div>
                </NavLink>
                <NavLink to={'/historique'}>
                    <div><p>Historique</p></div>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;
