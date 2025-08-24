import userEvent from "@testing-library/user-event";
import { expect, describe, test } from "vitest";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";
describe('routing', () => {
    test('main link', async () => {
        render(renderWithRouter(<NavBar/>))
        const mainLink = screen.getByTestId('main-page-link');
        await userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    })
    test('about link', async () => {
        render(renderWithRouter(<NavBar/>));
        const aboutLink = screen.getByTestId('about-page-link');
        await userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
    })
    test('users link', async () => {
        render(renderWithRouter(<NavBar/>, '/users'));
        const userLink = screen.getByTestId('users-page');
        await userEvent.click(userLink);
        expect(screen.getByTestId('users-page')).toBeInTheDocument();
    })
})