import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <>
            <Link to="/" data-testid="main-page-link">Main</Link>
            <Link to="/about" data-testid="about-page-link">About</Link>
            <Link to='/users' data-testid='users-page-link'>Users</Link>
        </>
    )
}