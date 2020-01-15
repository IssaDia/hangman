import React from 'react';
import Masked from './Masked';
import { shallow } from 'enzyme';

// Test qui permet de vérifier que le composant Masked qui affiche le mot caché est bien présent dans App qui joue le rôle de wrapper de composant


describe('Test dans App', () => {
  it ('it renders  <Masked /> component', ()=>{
    const component = shallow (<Masked />);
    expect(component).toHaveLength(1);
  })

  // ici avec en ajoutant d'autres 'it' je peux effectuer d'autres test dans la catégories des tests du composant App
  }
);

