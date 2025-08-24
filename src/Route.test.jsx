import { fireEvent, screen } from "@testing-library/dom";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";


describe('test app', () => {
    test('routing', async () => {
        render(
            <MemoryRouter> //Нужен для того, чтобы если мы обернули именно index.jsx (где мы генеримся по root) файл в BrowseRouter не падало приложение
                <App/>
            </MemoryRouter>
    );
        const mainLink = screen.getByTestId('main-page-link');
        const aboutLink = screen.getByTestId('about-page-link');
        await userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
        await userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        screen.debug();
    })
    test('404 page', async () => {
        render(
            <MemoryRouter initialEntries={['/adfsdfgsdfg']}> //Передаем конкретный путь, который мы проверяем
                <App/>
            </MemoryRouter>
        )
        expect(screen.getByTestId('error-page')).toBeInTheDocument();
    })
})