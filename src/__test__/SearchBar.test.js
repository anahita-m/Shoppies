import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import SearchBar from "../components/SearchBar/SearchBar"

configure({ adapter: new Adapter() });

describe("SearchBar component tests", () => {
  
    it('change in search should call onChange prop', () => {
        const props = {
            handleSearchChange: jest.fn(),
            search: jest.fn()
        }
        const event = {
          preventDefault() {},
          target: { value: 'the-value' }
        };
        const component = shallow(<SearchBar {...props} />);
        component.find('input').simulate('change', event);
        expect(props.handleSearchChange).toBeCalledWith(event);
      });

  });