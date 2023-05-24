import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context.jsx'
import { CartContext } from '../../contexts/cart.context.jsx'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/cart-icon.component.jsx'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component.jsx'
import { 
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink
} from './navigation.styles.jsx'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to = '/'>
                    <Logo />
                </LogoContainer>
                <NavLinksContainer>
                    <Link className = 'nav-link' to = '/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <NavLink as = 'span' onClick = { signOutUser }>SIGN OUT</NavLink>
                        ) : (
                            <NavLink to = '/auth'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinksContainer>
                { isCartOpen && <CartDropdown /> }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation