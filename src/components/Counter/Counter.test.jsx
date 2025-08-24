import { describe, test, expect } from "vitest";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
describe("counter test", () => {
  test("test router", async () => {
    const { getByTestId } = render(
      <Provider store={createReduxStore()}>
        //Прокидываем наш стор для получения контекста
        <Counter />
      </Provider>
    ); //Теперь поиск будет конкретно в контейре Counter, а не на всей странице и мы можем использовать методы get find и т.д.
    const increment = getByTestId("increment");
    expect(getByTestId("title")).toHaveTextContent("value = 0")
    await userEvent.click(increment);
    expect(getByTestId('title')).toHaveTextContent("value = 1");
    const decrement = getByTestId('decrement');
    await userEvent.click(decrement);
    expect(getByTestId('title')).toHaveTextContent('value = 0')
  });
});
