import React from "react";
import waitUntil from 'async-wait-until';
import nock from 'nock';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure, mount } from "enzyme";
import MovieCard from "../components/MovieCard/MovieCard"
import fetchMock from "fetch-mock";


configure({ adapter: new Adapter() });

  const props = {
    "movieID": 'tt0800039',
    "darkMode":"true",
    "nomContainer":"false",
    "nominatedMovies":"[]"
  };

describe("MovieCard", () => {

  it('Check that componentDidMount lifecycle method is called', () => {
    const spy = jest.spyOn(MovieCard.prototype, 'componentDidMount');
    const wrapper = mount(<MovieCard {...props}/>);
    expect(spy).toHaveBeenCalled();
    wrapper.unmount();
  });

  it('Component fetching movie data from API', async () => {
  const component = shallow(<MovieCard {...props}/>);
   expect(component.text()).toContain('N/A');
});

});