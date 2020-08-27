import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Joke from "./Joke";

configure({ adapter: new Adapter() });

describe("Joke component", () => {
  it("renders", () => {
    const wrapper = shallow(<Joke />);
    expect(wrapper).toMatchSnapshot();
  });
});