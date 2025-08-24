import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { AboutPage } from "../pages/AboutPage"
import { ErrorPage } from "../pages/ErrorPage"
import { Users } from "../Users/Users"
import { UserDetailsPage } from "../pages/UserDetailsPage"


export const AppRouter = () => {
    return (
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetailsPage/>}/>
      </Routes>
    )
}