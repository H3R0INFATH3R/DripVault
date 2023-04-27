import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context.jsx'

import Button from '../button/button.component.jsx'
import CartItem from '../cart-item/cart-item.component.jsx'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems, cartCount } = useContext(CartContext)

    return (
        <div className = 'cart-dropdown-container'>
            <div className = 'cart-items'>
                {
                    cartCount === 0 ? 'Your cart is empty' : cartItems.map (item => (
                        <CartItem key = {item.id} cartItem = {item} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown