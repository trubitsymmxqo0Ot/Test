import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "../store/store"
import { AppRouter } from "../router/AppRouter";

export const renderTestApp = (component, options) => {
    const store = createReduxStore(options?.initialState);
    return (
         <Provider store={store}>
            <MemoryRouter initialEntries={[options?.initialState]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
         </Provider>
    )
}