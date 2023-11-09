import { describe, it, expect, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  within,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import { AppRoutes, App } from "./App";
import FormScreen from "./components/screens/FormScreen";
import { formatData } from "./api/formatters";

const fetchMock = createFetchMock(vi);
beforeEach(() => {
  fetchMock.resetMocks();
  fetchMock.enableMocks();
});

it("should change default values of each form element before clicking Place order button", async () => {
  render(
    <MemoryRouter initialEntries={["/form"]}>
      <FormScreen />
    </MemoryRouter>
  );

  //BREAD BREAD BREAD
  const bread = screen.getByTestId(/ingredient-bread-carousel/);
  const breadArrow = within(bread).getByTestId(/arrow-right/);
  const breadValue = within(bread).getByTestId(
    /carousel-bread-textValue/
  ).textContent;
  await userEvent.click(breadArrow);
  const newBreadValue = within(bread).getByTestId(
    /carousel-bread-textValue/
  ).textContent;
  expect(breadValue).not.toBe(newBreadValue);

  //CHEESE CHEESE CHEESE
  const cheese = screen.getByTestId(/ingredient-cheese-dropdown/);
  const cheeseFirstBar = within(cheese).getByTestId(/textValue/);
  const cheeseFirstValue = cheeseFirstBar.textContent;
  await userEvent.click(cheeseFirstBar);
  const cheeseSecondBar = within(cheese).getByTestId(/-option-1/i);
  await userEvent.click(cheeseSecondBar);
  const cheeseSecondValue = cheeseFirstBar.textContent;
  expect(cheeseFirstValue).not.toBe(cheeseSecondValue);

  //FRESH MEAT
  const meat = screen.getByTestId(/ingredient-meat-dropdown/);
  const meatFirstBar = within(meat).getByTestId(/textValue/);
  const meatFirstValue = meatFirstBar.textContent;
  await userEvent.click(meatFirstBar);
  const meatSecondBar = within(meat).getByTestId(/-option-1/i);
  await userEvent.click(meatSecondBar);
  const meatSecondValue = meatFirstBar.textContent;
  expect(meatFirstValue).not.toBe(meatSecondValue);

  //DRESSING
  const dressing = screen.getByTestId(/ingredient-dressing-carousel/);
  const dressingArrow = within(dressing).getByTestId(/arrow-right/);
  const dressingValue = within(dressing).getByTestId(
    /carousel-dressing-textValue/
  ).textContent;
  await userEvent.click(dressingArrow);
  const newDressingValue = within(dressing).getByTestId(
    /carousel-dressing-textValue/
  ).textContent;
  expect(dressingValue).not.toEqual(newDressingValue);

  //VEGETABLES
  const vegetable = screen.getByTestId(/ingredient-vegetables-multiselect/);
  const vegeOptions = within(vegetable).queryAllByTestId(/notSelected/);
  const initialVegeValues = within(vegetable).queryAllByTestId(/textValue/);
  await userEvent.click(vegeOptions[1]);
  const newVegeValues = within(vegetable).queryAllByTestId(/textValue/);
  expect(initialVegeValues).not.toBe(newVegeValues);

  //EGG EGG EGG
  const egg = screen.getByTestId(/ingredient-egg-dropdown/);
  const eggFirstBar = within(egg).getByTestId(/textValue/);
  const eggFirstValue = eggFirstBar.textContent;
  await userEvent.click(eggFirstBar);
  const eggSecondBar = within(egg).getByTestId(/-option-1/i);
  await userEvent.click(eggSecondBar);
  const eggSecondValue = eggFirstBar.textContent;
  expect(eggFirstValue).not.toBe(eggSecondValue);

  //SPREADS
  const spread = screen.getByTestId(/ingredient-spreads-checkbox/);
  const spreadOptions = within(spread).getAllByTestId(/notSelected/);
  const initialSpreadValues = within(spread).queryAllByTestId(/textValue/);
  await userEvent.click(spreadOptions[1]);
  const newSpreadValues = within(spread).queryAllByTestId(/textValue/);
  expect(initialSpreadValues).not.toBe(newSpreadValues);

  //SERVING
  const serving = screen.getByTestId(/ingredient-serving-radial/);
  const servingOptions = within(serving).getAllByTestId(/notSelected/);
  const initialServingValues = within(serving).queryAllByTestId(/textValue/);
  await userEvent.click(servingOptions[1]);
  const newServingValues = within(serving).queryAllByTestId(/textValue/);
  expect(initialServingValues).not.toBe(newServingValues);

  //TOPPING
  const topping = screen.getByTestId(/ingredient-topping-checkbox/);
  const toppingOptions = within(topping).getAllByTestId(/notSelected/);
  const initialToppingValues = within(topping).queryAllByTestId(/textValue/);
  await userEvent.click(toppingOptions[1]);
  const newToppingValues = within(topping).queryAllByTestId(/textValue/);
  expect(initialToppingValues).not.toBe(newToppingValues);

  //LITERAL HELL
  const sandwichName = screen.getByTestId(/ingredient-sandwichName-textinput/);
  const sandwichNameInput = within(sandwichName).getByTestId(/textValue/);
  expect(sandwichNameInput.value).toBe(""); // expeting default value first
  await userEvent.click(sandwichNameInput);
  await userEvent.keyboard(
    "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
  );
  expect(sandwichNameInput.value).toBe(
    "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"
  );

  //CUTLERY
  const cutlery = screen.getByTestId(/ingredient-cutlery-checkbox/);
  const cutleryOptions = within(cutlery).getAllByTestId(/notSelected/);
  const initialCutleryValues = within(cutlery).queryAllByTestId(/textValue/);
  await userEvent.click(cutleryOptions[0]);
  const newCutleryValues = within(cutlery).queryAllByTestId(/textValue/);
  expect(initialCutleryValues).not.toBe(newCutleryValues);

  //NAPKINS
  const napkins = screen.getByTestId(/ingredient-napkins-checkbox/);
  const napkinsOptions = within(napkins).getAllByTestId(/notSelected/);
  const initialNapkinsValues = within(napkins).queryAllByTestId(/textValue/);
  await userEvent.click(napkinsOptions[0]);
  const newNapkinsValues = within(napkins).queryAllByTestId(/textValue/);
  expect(initialNapkinsValues).not.toBe(newNapkinsValues);
});

it("should return image mock of form payload when form validation passes when Place order button is clicked", async () => {
  fetchMock.mockResponse(JSON.stringify({ imageUrl: "someURL" }));

  render(
    <MemoryRouter initialEntries={["/form"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const postButton = screen.getByTestId(/submitButton/);
  await userEvent.click(postButton);

  expect(fetchMock).toHaveBeenCalledTimes(1);

  const responseBodyBuffer = await fetchMock.mock.results[0].value.body;
  const responseObject = JSON.parse(responseBodyBuffer.toString());

  expect(responseObject).toEqual({ imageUrl: "someURL" });
});

it("should redirect to Success screen when Place order button is clicked", async () => {
  fetchMock.mockResponse(JSON.stringify({ imageUrl: "someURL" }));

  render(
    <MemoryRouter initialEntries={["/form"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const button = screen.getByTestId("submitButton");
  await userEvent.click(button);

  const reorder = await screen.findByText("Panini ordered");
  expect(reorder).toBeInTheDocument();
});

it("should randomize all form configuration parameters when RANDOMIZE PANINI button is clicked", async () => {
  fetchMock.mockResponse(JSON.stringify({ imageUrl: "someURL" }));

  const defaultForm = {
    sandwichName: [""],
    cutlery: [],
    napkins: [],
    bread: ["WHEAT"],
    cheese: ["EDAM"],
    meat: ["SALAMI"],
    dressing: ["OLIVE OIL"],
    vegetables: [],
    egg: ["FRIED EGG"],
    spreads: [],
    serving: ["GRILLED"],
    topping: [],
  };

  const defaultValues = formatData(defaultForm);

  render(
    <MemoryRouter initialEntries={["/form"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const randomButton = screen.getByTestId(/randomize-button/);
  await userEvent.click(randomButton);

  const postButton = screen.getByTestId(/submitButton/);
  await userEvent.click(postButton);

  expect(fetchMock).toHaveBeenCalledTimes(1);

  const callBodyBuffer = await fetchMock.mock.calls[0][1].body;
  const callValues = JSON.parse(callBodyBuffer);

  expect(callValues).not.toEqual(defaultValues);
});

it("should reset all form configuration values when START AGAIN button is clicked", async () => {
  fetchMock.mockResponse(JSON.stringify({ imageUrl: "someURL" }));

  const defaultForm = {
    sandwichName: [""],
    cutlery: [],
    napkins: [],
    bread: ["WHEAT"],
    cheese: ["EDAM"],
    meat: ["SALAMI"],
    dressing: ["OLIVE OIL"],
    vegetables: [],
    egg: ["FRIED EGG"],
    spreads: [],
    serving: ["GRILLED"],
    topping: [],
  };

  const defaultValues = formatData(defaultForm);

  render(
    <MemoryRouter initialEntries={["/form"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  const defaultValuesAmount = (await screen.findAllByTestId(/textValue/i))
    .length;

  const randomButton = screen.getByTestId(/randomize-button/);
  await userEvent.click(randomButton);

  const randomValuesAmount = (await screen.findAllByTestId(/textValue/i))
    .length;

  expect(defaultValuesAmount).not.toEqual(randomValuesAmount);

  const resetButton = screen.getByTestId(/resetButton/i);
  await userEvent.click(resetButton);

  const resetValuesAmount = (await screen.findAllByTestId(/textValue/i)).length;

  expect(resetValuesAmount).toEqual(defaultValuesAmount);

  const postButton = screen.getByTestId(/submitButton/);
  await userEvent.click(postButton);

  expect(fetchMock).toHaveBeenCalledTimes(1);

  const callBodyBuffer = await fetchMock.mock.calls[0][1].body;
  const callValues = JSON.parse(callBodyBuffer);

  expect(callValues).toEqual(defaultValues);
});
