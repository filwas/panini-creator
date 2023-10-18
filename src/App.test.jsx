import { describe, it, expect } from "vitest";
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {App, AppRoutes} from "./App";

describe("Test form submitting", () => {
  it("should change default values of each form element before clicking Place order button", () => {
    render(
      <MemoryRouter initialEntries={["/form"]}>
        <AppRoutes />
      </MemoryRouter>
    );
      screen.debug()
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
