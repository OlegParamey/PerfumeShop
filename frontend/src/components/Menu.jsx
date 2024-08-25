import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="."
                end
            >
                Home
            </NavLink>{' '}
            |
            <NavLink
                to="perfumes"
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            >
                Perfumes
            </NavLink>{' '}
            |
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="about"
            >
                About
            </NavLink>{' '}
            |
            <NavLink
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                to="contacts"
            >
                Contacts
            </NavLink>
        </nav>
    )
}

export default Menu
