import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { AboutPage } from './pages/AboutPage'
import { ErrorPage } from './pages/ErrorPage'
import { Users } from './Users/Users'
import { UserDetailsPage } from './pages/UserDetailsPage'

function App() {

  return (
    <div>
      <Link to="/" data-testid="main-page-link">Main</Link>
      <Link to="/about" data-testid="about-page-link">About</Link>
      <Link to='/users' data-testid='users-page-link'>Users</Link>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<UserDetailsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
