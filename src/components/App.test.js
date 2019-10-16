import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import App from "./App";

configure({ adapter: new Adapter() });
const app = shallow(<App />);

it("renders correctly", () => {
  expect(app).toMatchSnapshot();
});

it("initializes the `state` ", () => {
  expect(app.state().gifts).toEqual([]);
});

it("adds a new gift to `state` ", () => {
  app.find(".btn-add").simulate("click");

  expect(app.state().gifts).toEqual([{ id: 1 }]);
});

it("adds a new gift to the rendered list ", () => {
  app.find(".btn-add").simulate("click");

  expect(app.find(".gift-list").children().length).toEqual(2);
});
