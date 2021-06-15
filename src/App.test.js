import React from "react";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { shallow, configure } from "enzyme";
import App from "./App";

// configure({ adapter: new Adapter() });
Enzyme.configure({ adapter: new Adapter() });


describe("App", () => {
 it("renders correctly", async () => {
   shallow(<App />);
 });
});
