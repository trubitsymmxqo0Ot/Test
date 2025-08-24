import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import { ErrorPage } from "../pages/ErrorPage";
import { User } from "../components/User/User";
import { UserPage } from "../pages/UserPage";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
