import React from "react";
import renderer from "react-test-renderer";
import TableItem from "./table-item.component";

it("<TableItem /> Snapshot Testing", () => {
  const TableItemTest = renderer.create(<TableItem item="Untung" />).toJSON();
  expect(TableItemTest).toMatchSnapshot();
});
