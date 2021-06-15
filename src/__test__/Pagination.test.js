import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import Pagination from "../components/Pagination/Pagination"

configure({ adapter: new Adapter() });

describe("Pagination component tests", () => {
  
    it('Checking if pagination is displaying the correct result text and page numbers', () => {
        const props = {
            setPage: jest.fn(),
            totalPages:10,
            pageNumber: 2,
            searchTerm: 'Inception'
        }
        const component = shallow(<Pagination {...props} />);
        expect(component.text()).toContain('Page 2 of 10');
      });


      it('Checking if clicking the next button is calling the right function to reset the page', () => {
        const props = {
            setPage: jest.fn(),
            totalPages:10,
            pageNumber: 2,
            searchTerm: 'Inception'
        }
        const component = shallow(<Pagination {...props} />);
        expect(component.text()).toContain('Page 2 of 10');
        component.find(".next").simulate('click');
        expect(props.setPage).toBeCalledTimes(1);
      });

      it('Checking if clicking the previous button is calling the right function to reset the page', () => {
        const props = {
            setPage: jest.fn(),
            totalPages:10,
            pageNumber: 2,
            searchTerm: 'Inception'
        }
        const component = shallow(<Pagination {...props} />);
        expect(component.text()).toContain('Page 2 of 10');
        component.find(".previous").simulate('click');
        expect(props.setPage).toBeCalledTimes(1);
      });

      it('Checking that the previous button is disabled when page 1 of results is being presented', () => {
        const props = {
            setPage: jest.fn(),
            totalPages:10,
            pageNumber: 1,
            searchTerm: 'Inception'
        }
        const component = shallow(<Pagination {...props} />);
        expect(component.text()).toContain('Page 1 of 10');
        expect(component.find(".previous").props().disabled).toBe(true)
      });

      it('Checking that the next button is disabled when the last page of results is being presented', () => {
        const props = {
            setPage: jest.fn(),
            totalPages:10,
            pageNumber: 10,
            searchTerm: 'Inception'
        }
        const component = shallow(<Pagination {...props} />);
        expect(component.text()).toContain('Page 10 of 10');
        expect(component.find(".next").props().disabled).toBe(true)
      });
  });