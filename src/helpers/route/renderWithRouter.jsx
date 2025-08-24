import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../router/AppRouter";
import { render } from "@testing-library/react";
export const renderWidthRouter = (component, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
