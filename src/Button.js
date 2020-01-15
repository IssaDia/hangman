import React from 'react';


class Button extends React.Component {

    constructor(props){
        super(props);
        this.refreshPage = this.refreshPage.bind(this);
        
    }

    //méthode permettant l'accés au parent au bouton permettant de rejouer

     refreshPage() {
         
        this.props.getResetAction();

      }


    render(){     
               
        return <button onClick={this.refreshPage.bind(this)}>Rejouer</button>;}
           
}

  export default Button;