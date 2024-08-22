import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <nav>
            <NavLink
                style={({ isActive }) =>
                    isActive
                        ? { color: 'lightcoral', textDecoration: 'none' }
                        : {}
                }
                to="."
                end
            >
                Home
            </NavLink>{' '}
            |<NavLink to="perfumes">Perfumes</NavLink> |
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
