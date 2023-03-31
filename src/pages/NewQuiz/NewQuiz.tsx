
import './NewQuiz.css';
import { NavLink } from 'react-router-dom';
import InputKwiz from '../../components/InputKwiz/InputKwiz';

function NewQuiz() {
    return (
        <div className={'nouveau'}>
            <div>
                <h1>Nouveau QUIZ</h1>
            </div>
            <div className={'theme'}>
                <h2>Thème</h2>
                <input type="text" name="theme" id="theme" />
            </div>
            <div className={'question'}>
                <h2>Nouvelle question</h2>
                <input type="text" name="question" id="question" />
                <div className={'ans'}>
                    <InputKwiz />
                    <InputKwiz />
                    <InputKwiz />
                    <InputKwiz />
                </div>
                <div className={'valider'}>
                    <button>OK</button>
                </div>
            </div>
            <div className='créer'>
                <NavLink to={'/'}>
                <button>VALIDER</button>
                </NavLink>
            </div>
        </div>



    )
}

export default NewQuiz;