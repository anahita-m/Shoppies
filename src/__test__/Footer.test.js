import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import Footer from "../components/Footer/Footer"

configure({ adapter: new Adapter() });

describe("Footer component tests", () => {

    it('Checking if footer is hidden when there are less than 5 nominations', () => {
        const props = {
            restart: jest.fn(),
            nominatedMovies: [1,2,3,4]
        }
        const component = shallow(<Footer {...props} />);
        expect(component.find('.footer').get(0).props.style).toHaveProperty('visibility', 'hidden');
      });
    
    it('Checking if footer is visible when there are 5 nominations', () => {
        const props = {
            restart: jest.fn(),
            nominatedMovies: [1,2,3,4,5]
        }
        const component = shallow(<Footer {...props} />);
        expect(component.find('.footer').get(0).props.style).toHaveProperty('visibility', 'visible');
      });

      it('Checking if clicking the restart button is calling the correct props function to reset the site', () => {
        const props = {
            restart: jest.fn(),
            nominatedMovies: [1,2,3,4,5]
        }
        const component = shallow(<Footer {...props} />);
        component.find(".restart-button").simulate('click');
        expect(props.restart).toBeCalledTimes(1);
      });

    //   it('should call componentB', () => {
    //     const props = {
    //         restart: jest.fn(),
    //         nominatedMovies: [1,2,3,4,5]
    //     }
    //     const setClosed = jest.fn();
    //     const wrapper = shallow(<Footer {...props} onClick={setClosed} />);
    //     wrapper.find('.close-button').simulate('click')
    //     expect(spyPreventDefault).toHaveBeenCalled()
    //   })
  });