import React from 'react'; 
import { Header } from '../../components/Header'; 
import { shallow } from 'enzyme';


test('should render header correctly', () => {
    const wrapper = shallow(<Header  startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on buttonClick', () => {
    const startLogout =  jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
}); 