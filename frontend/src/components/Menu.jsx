import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import { BsCart4, BsPersonFill } from 'react-icons/bs'
import { selectCartList } from '../redux/slices/cartSlice'
import CartDropDownItemsList from './Cart/CartDropDownItemsList'

function Menu() {
    const cartItemsList = useSelector(selectCartList)

    return (
        <nav>
            <div className="navLinks">
                <div className="leftLinks">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'activeLink' : 'link'
                        }
                        to="home"
                        end
                    >
                        Home
                    </NavLink>
                    <span>|</span>

                    <NavLink
                        to="perfumes"
                        className={({ isActive }) =>
                            isActive ? 'activeLink' : 'link'
                        }
                    >
                        Perfumes
                    </NavLink>
                    <span>|</span>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'activeLink' : 'link'
                        }
                        to="about"
                    >
                        About
                    </NavLink>
                    <span>|</span>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'activeLink' : 'link'
                        }
                        to="contacts"
                    >
                        Contacts
                    </NavLink>
                </div>
                <div className="rightIcons">
                    <div className="dropDown">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'activeLink' : 'link'
                            }
                            to="cart"
                        >
                            <div className="iconContainer">
                                <BsCart4 />
                            </div>
                            {cartItemsList.length > 0 && (
                                <div className="cartListNotification">
                                    {cartItemsList.length}
                                </div>
                            )}
                        </NavLink>
                        <div className="dropDown-Content">
                            {cartItemsList.length > 0 ? (
                                cartItemsList.map((obj) => (
                                    <CartDropDownItemsList
                                        itemData={obj}
                                        key={obj.productId}
                                    />
                                ))
                            ) : (
                                <p style={{ fontWeight: 350 }}>
                                    Cart is empty.
                                </p>
                            )}
                        </div>
                    </div>
                    {/* <NavLink
                    // className={({ isActive }) =>
                    //     isActive ? 'activeLink' : 'link'
                    // }
                    // to="profile"
                    >
                        <BsPersonFill />
                    </NavLink> */}
                </div>
            </div>
        </nav>
    )
}

export default Menu
