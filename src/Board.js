import React from 'react';

//Tableau avec toutes les lettres de l'alphabet qui seront affichées sous forme de boutons dans le render
let boardLettersArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {boardLetters : boardLettersArray};
        this.getClickedLetter = this.getClickedLetter.bind(this);

    }

    //méthode permettant au parent d'accéder aux lettres qui ont été présses par l'utilisateur et de masquer celles-ci

    getClickedLetter(clickedLetter, e){

        this.props.getLetter(clickedLetter);
        e.target.style.color = 'grey';
       
    }


    render(){
        
           const board = this.state.boardLetters.map((letter, index) => {
               return <button key={index} className = {letter} value={letter} onClick={this.getClickedLetter.bind(this, letter)}>{letter}</button>;})
            return (
                <div className='keyboard'>
                    {board}
                    </div>
                    )         
    }  
}


  export default Board;