import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { User } from "../components/User/User";
import { UserPage } from "../pages/UserPage";
import { HelloWorld } from "../pages/HelloWorld";
import { UsersForTest } from "../components/UsersForTest/UsersForTest";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/hello" element={<HelloWorld />} />
        <Route path="/users-test" element={<UsersForTest />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
