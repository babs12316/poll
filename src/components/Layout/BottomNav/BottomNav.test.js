import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import BottomNav from "./BottomNav";

describe("<BottomNav />", () => {
  it("renders msg", () => {
    const wrapper = shallow(<BottomNav title="My App" />);
    expect(wrapper.find("h6")).to.have.lengthOf(1);
  });

  it("has class bottomNav", () => {
    const wrapper = shallow(<BottomNav title="My App" />);
    expect(wrapper.find(".bottomNav")).to.have.lengthOf(1);
  });
});
