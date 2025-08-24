import userEvent from "@testing-library/user-event";
import axios from "axios";
import { expect, test, describe } from "vitest";
import { renderWidthRouter } from "../helpers/route/renderWithRouter";
import { UserPage } from "./UserPage";
import { screen } from "@testing-library/dom";
import { vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../router/AppRouter";
import { render } from "@testing-library/react";

vi.mock("axios");

describe("user random", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        },
        {
          id: 2,
          title: "qui est esse",
        },
        {
          id: 3,
          title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        },
      ],
    };
  });
  test("user id", async () => {
    axios.get.mockResolvedValue(response);
    render(
      renderWidthRouter(<UserPage/>)
    )
    const users = await screen.findAllByTestId("users-id");
    expect(users.length).toBe(3);
    await userEvent.click(users[0]);
  });
});
