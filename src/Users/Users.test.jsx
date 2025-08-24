import axios from "axios"
import { Users } from "./Users"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes,Route } from "react-router-dom";
import { UserDetailsPage } from "../pages/UserDetailsPage";

vi.mock('axios');

describe('users test', () => {
    let response;
    beforeEach(() => {
        response = {
            data: [
                {
                  "id": 1,
                  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                },
                {
                  "id": 2,
                  "title": "qui est esse",
                },
                {
                  "id": 3,
                  "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                },
            ]
        }
    })
    test('renders users', async () => {
        axios.get.mockResolvedValue(response); //СНАЧАЛА МЫ МОКАЕМ АКСИОС, А ПОТОМ УЖЕ РЕНДЕРИМ СТРАНИЦУ (логично, сначала получаем данные и затем на их основе строим страницу)
        render(
          <MemoryRouter>
            <Users/>
          </MemoryRouter>
        )
        const users = await screen.findAllByTestId("user-item"); //findAll т.к. массив элементов
        expect(users.length).toBe(3); //Всего 3 пользователя мы замокали
        expect(axios.get).toHaveBeenCalledTimes(1);
        screen.debug();
    })
    test('dynamic route', async () => {
      axios.get.mockResolvedValue(response);
      render(
        <MemoryRouter initialEntries={['/users']}>
          <Routes>
            <Route path='/users' element={<Users/>}/>
            <Route path='/users/:id' element={<UserDetailsPage/>}/>
          </Routes>
        </MemoryRouter>
      )
      const users = await screen.findAllByTestId("user-item");
      expect(users.length).toBe(3);
      await userEvent.click(users[0]);
      expect(screen.getByTestId('userDetails-page')).toBeInTheDocument();
    })
    
})