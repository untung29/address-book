import React from "react";
import renderer from "react-test-renderer";
import Button from "./button.component";

it("<Button/> Snapshot Testing", () => {
  const ButtonTest = renderer.create(<Button />).toJSON();
  expect(ButtonTest).toMatchSnapshot();
});
