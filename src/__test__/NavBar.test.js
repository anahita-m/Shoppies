import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import NavBar from "../components/NavBar/NavBar"

configure({ adapter: new Adapter() });

describe("NavBar component tests", () => {

    it('Checking if light mode button is visisble and dark mode button is invisible when dark mode is on', () => {
        const props = {
            darkMode: true
        }
        const component = shallow(<NavBar {...props} />);
        expect(component.find('.light-mode-button').exists()).toBe(true)
        expect(component.find('.dark-mode-button').exists()).toBe(false)
      });

      it('Checking if light mode button is invisible and dark mode button is visible when light mode is on', () => {
        const props = {
            darkMode: false
        }
        const component = shallow(<NavBar {...props} />);
        expect(component.find('.light-mode-button').exists()).toBe(false)
        expect(component.find('.dark-mode-button').exists()).toBe(true)
      });

      it('Checking if switching modes calls the right props function', () => {
        const props = {
            darkMode: false,
            onDarkModeOn: jest.fn()
        }
        const component = shallow(<NavBar {...props} />);
        component.find('.nav-link').simulate('click')
        expect(props.onDarkModeOn).toBeCalledTimes(1);
      });
    
  });