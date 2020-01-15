import React from 'react';
import Board from './Board';
import { shallow } from 'enzyme';
import { board} from './Board';


describe('Test Board component', ()=>{

  // test qui confirme qu'il y'a bien 26 lettres qui seront renvoyées sur le clavier
  
  it('keyboard got 26 letters', () => {
    const component = shallow(<Board />);
    const lettersArray = component.state().boardLetters;
    expect (lettersArray).toHaveLength(26);

  })

  // test qui vérifie que la fonction onClick fonctionne (en prenant comme exemple la lettre b du clavier)

  it('verify onClick is called', () => {
    const onClick = jest.fn()
    const wrapper = shallow(
      <button key='1' className = 'B' value='B' onClick={onClick}>B</button>
    )

    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalledWith()
  })

})

