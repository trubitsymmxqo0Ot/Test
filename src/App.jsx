import "./App.css";
import { Counter } from "./components/Counter/Counter";
import { NavBar } from "./components/NavBar/NavBar";
import { AppRouter } from "./router/AppRouter";
function App() {
  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
