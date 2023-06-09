import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context.jsx'

import { useNavigate } from 'react-router-dom'

import Button from '../button/button.component.jsx'
import CartItem from '../cart-item/cart-item.component.jsx'

import {
    CartDropdownContainer,
    EmptyMessage,
    CartItems
} from './cart-dropdown.styles.jsx'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    !cartItems.length ? 
                    <EmptyMessage>
                        Your cart is empty
                    </EmptyMessage> : cartItems.map (item => (
                        <CartItem key = { item.id } cartItem = { item } />
                ))}
            </CartItems>
            <Button onClick = { goToCheckoutHandler }>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown