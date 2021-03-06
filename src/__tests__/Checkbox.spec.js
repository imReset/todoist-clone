import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../components/Checkbox";

// Clearning up the DOM
beforeEach(cleanup);

jest.mock("../firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

describe("<Checkbox />", () => {
  describe("Success", () => {
    it("renders the task checkbox", () => {
      const { queryByTestId } = render(
        <Checkbox
          id="1"
          taskDesc="Check to see if the checkbox has been updated"
        />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
    });

    it("renders the task checkbox and accepts a onClick", () => {
      const { queryByTestId } = render(
        <Checkbox
          id="1"
          taskDesc="Check to see if the checkbox has been updated"
        />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.click(queryByTestId("checkbox-action"));
    });

    it("renders the task checkbox and accepts a onKeyDown", () => {
      const { queryByTestId } = render(
        <Checkbox
          id="1"
          taskDesc="Check to see if the checkbox has been updated"
        />
      );
      expect(queryByTestId("checkbox-action")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("checkbox-action"), {
        key: "a",
        code: 65,
      });
      fireEvent.keyDown(queryByTestId("checkbox-action"), {
        key: "Enter",
        code: 13,
      });
    });
  });
});
