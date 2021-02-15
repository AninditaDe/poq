import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ProductList from "../ProductList";

configure({ adapter: new Adapter() });

/* Can be extented */
describe("<ProductList />", () => {
  it("renders without crashing", () => {
    shallow(<ProductList />);
  });
});
