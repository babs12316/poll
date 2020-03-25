import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import QuestionDetail from "./QuestionDetail";

describe("<QuestionDetail />", () => {
  it("renders h2 tag", () => {
    const wrapper = shallow(<QuestionDetail />);
    expect(wrapper.find("h2")).to.have.lengthOf(1);
  });
  it("renders a table", () => {
    const wrapper = shallow(<QuestionDetail />);
    expect(wrapper.find("table")).to.have.lengthOf(1);
  });

  it("renders b tag", () => {
    const wrapper = shallow(<QuestionDetail />);
    expect(wrapper.find("b")).to.have.lengthOf(1);
  });
});
