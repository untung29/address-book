import React from "react";
import renderer from "react-test-renderer";
import Field from "./field.component";

it("<Field /> Snapshot Testing", () => {
  const FieldTest = renderer
    .create(<Field label="First Name" id="firstname" type="text" placeholder="First Name" />)
    .toJSON();
  expect(FieldTest).toMatchSnapshot();
});
