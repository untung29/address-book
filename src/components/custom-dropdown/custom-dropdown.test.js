import React from "react";
import renderer from "react-test-renderer";
import CustomDropdown from "./custom-dropdown.component";

it("<CustomDropdown /> Snapshot Testing", () => {
  const CustomDropdownTest = renderer
    .create(<CustomDropdown list={["Descending", "Ascending"]} placeholder="Select to filter by" />)
    .toJSON();
  expect(CustomDropdownTest).toMatchSnapshot();
});
