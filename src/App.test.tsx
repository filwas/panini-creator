import { describe, it, expect } from "vitest";
import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./App";
import { SelectorType, FormDataType } from "./components/enumFaces/enumFaces";
import { wait } from "@testing-library/user-event/dist/types/utils";

describe("Test form submitting", () => {
  it("should change default values of each form element before clicking Place order button", () => {
    render(
      <MemoryRouter initialEntries={["/form"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    const ingredients = screen.getAllByTestId(/ingredient/);

    ingredients.forEach((ingredient, index) => {
      /*if (index != 9) {
        return;
      }*/
      const names = ingredient.getAttribute("data-testid");

      const ingredName = names.match(/\w+-(\w+)-\w+/)[1] as FormDataType;
      const selector = names.match(/\w+-\w+-(\w+)/)[1] as SelectorType;

      console.log(ingredName, selector);
      const defaultValues = within(ingredient)
        .queryAllByTestId(/textValue/)
        .map((value) =>
          selector == SelectorType.Textinput ? value.value : value.textContent
        );
      console.log(defaultValues);

      switch (selector) {
        case SelectorType.Carousel:
          //simply clicking one of the arrows to change the selected option
          const arrow = within(ingredient).getByTestId(/arrow-right/);
          //fireEvent.click(arrow);
          //userEvent.click(arrow);
          fireEvent.click(arrow);
          break;
        case SelectorType.Dropdown:
          //first we click on the dropdown to open it
          const firstBar = within(ingredient).getByTestId(/textValue/);
          fireEvent.click(firstBar);
          //then we select one of the options
          const secondOption = within(ingredient).getByTestId(/-option-1/);
          fireEvent.click(secondOption);
          break;
        case SelectorType.Multiselect:
        case SelectorType.Checkbox:
        case SelectorType.Radial:
          //we're getting all the options which are not selected and we click one
          const multiOptions = within(ingredient).getAllByTestId(/notSelected/);
          //in Radial, the first option is selected by default, so we need to click something else
          //but we cannot always click "the second" option, because some checkbox' have only one option
          fireEvent.click(multiOptions[selector==SelectorType.Radial? 1 : 0]);
          break;

        case SelectorType.Textinput:
          const textInput = within(ingredient).getByTestId(/textValue/);
          //fireEvent.click(textInput);
          //fireEvent.keyPress(textInput, {key: "a"})
          //userEvent.keyboard("asdf");
          userEvent.click(textInput)
          userEvent.type(textInput, "asdf")
          textInput.dispatchEvent(new Event())
          console.log("HEREHERHEHREHRHERHHER", textInput.value);

          break;
        default:
          break;
      }

      const newValues = within(ingredient)
        .queryAllByTestId(/textValue/)
        .map((value) =>
          selector == SelectorType.Textinput ? value.value : value.textContent
        );
      console.log(newValues);

      expect(newValues).not.toEqual(defaultValues);
    });
  });

  it("should return image mock of form payload when form validation passes when Place order button is clicked", () => {
    /*render(



      <MemoryRouter initialEntries={["/form"]}>
        <AppRoutes />
      </MemoryRouter>
    );
      screen.debug()*/
  });

  it("should redirect to Success screen when Place order button is clicked", () => {
    /*render(
      <MemoryRouter initialEntries={["/form"]}>
        <AppRoutes />
      </MemoryRouter>
    );
      screen.debug()*/
  });
});
