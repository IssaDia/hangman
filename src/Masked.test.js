import React from 'react';
import Masked from './Masked';
import { mount } from 'enzyme';

// Test qui permet de vérifier que la variable usedLetters contenant les lettres cliquées sur le clavier sont bien renvoyées dans un tableau

describe('Test Masked component', ()=>{
  it ('usedLetters contains a tab', ()=>{

    // selection de tout ce qui est accessible dans le composant Masked
    const masked = mount(<Masked />);

    //fonction qui attend à ce que le state de userLetters renvoie bien un tableau
    expect(masked.state().usedLetters).toEqual([]);
  })

  

})
