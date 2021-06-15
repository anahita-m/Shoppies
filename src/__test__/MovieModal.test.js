import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import MovieModal from "../components/MovieModal/MovieModal"

configure({ adapter: new Adapter() });

describe("MovieModal", () => {
    it("Renders correctly without poster", async () => {
        const movieData = {"Title": "What We Do In The Shadows",
                            "Plot": "Vampire Roommates",
                            "imdbRating": "9.2",
                            "Genre": "comedy, horror",
                            "Director": "Taika Waititi",
                            "Actors": "Taika Waititi",
                            "Ratings": {"imdb": "8.2"},
                            "Year": "2012"
                          }
      let component = shallow(<MovieModal movieData={movieData}/>);
      expect(component.text()).toContain('What We Do In The Shadows')
      expect(component.text()).toContain('Vampire Roommates')
      expect(component.text()).toContain('Taika Waititi')
      expect(component.text()).toContain('2012')
      expect(component.text()).toContain('comedy')
      expect(component.text()).toContain('horror')
    });

});