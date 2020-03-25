import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import QuestionList from "./QuestionDetail";

describe("<QuestionList />", () => {
  it("renders h2 tag", () => {
    const wrapper = shallow(<QuestionList />);
    expect(wrapper.find("h2")).to.have.lengthOf(1);
  });
  it("renders a tag", () => {
    const wrapper = shallow(<QuestionList />);
    expect(wrapper.find("a"));
  });

  it("renders .title class", () => {
    const wrapper = shallow(<QuestionList />);
    expect(wrapper.find(".class"));
  });
  it("renders .question class", () => {
    const wrapper = shallow(<QuestionList />);
    expect(wrapper.find(".question"));
  });
});
