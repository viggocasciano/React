import './Play.css';

function Play() {
    return(
        <div className={'play'}>
            <div className={'question'}>
                <h2>Question</h2>
                <p>Combien de pokémon existent au total après la génération 5?</p>
            </div>
            <div className={'answer'}>
                <h2>Sélectionnez</h2>
                <div >
                    <div className={'rep'}>
                        <input type="radio" name="rep" id="rep"/>
                        <p>- 256 </p>
                    </div>  
                    <div className={'rep'}>
                        <input type="radio" name="rep" id="rep"/>
                        <p>- 256 </p>
                    </div>
                    <div className={'rep'}>
                        <input type="radio" name="rep" id="rep"/>
                        <p>- 256 </p>
                    </div>
                    <div className={'rep'}>
                        <input type="radio" name="rep" id="rep"/>
                        <p>- 256 </p>
                    </div> 
                    <div className={'valider'}>
                        <button>OK</button>
                    </div>      
                </div>
            </div>
            
        </div>
                    

    )
}

export default Play

