import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from "enzyme";
import Home from "../components/Home/Home"

configure({ adapter: new Adapter() });

describe("Home", () => {
    it("renders correctly", async () => {
      shallow(<Home />);
    });

    it("Home presents 8 movies presented by default", async () => {
        let component = shallow(<Home />)
        expect(component.find("MovieCard").length).toEqual(8)
      });

   });
