import userEvent from "@testing-library/user-event";
import { expect, test, describe } from "vitest";
import { screen } from "@testing-library/dom";
import { renderWithRouter } from "../helpers/route/renderWithRouter";
import { NavBar } from "../components/NavBar/NavBar";
import { ErrorPage } from "./ErrorPage";
import { render } from "@testing-library/react";

describe("Pages", () => {
  test("MainPage", async () => {
    render(renderWithRouter(<NavBar />));
    const mainLink = screen.getByTestId("main-page-link");
    await userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("AboutPage", async () => {
    render(renderWithRouter(<NavBar />, ["/about"]));
    const aboutLink = screen.getByTestId("about-page-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
  test("ErrorPage", async () => {
    render(renderWithRouter(<ErrorPage />, ["/asdasd"]));
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
  test("UserPage", async () => {
    render(renderWithRouter(<NavBar />, ["/users"]));
    const usersLink = screen.getByTestId("user-page-link");
    await userEvent.click(usersLink);
    expect(screen.getByTestId("user-page"));
  });
});
