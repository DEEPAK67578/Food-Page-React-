import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/Carticon'
import { CartItems } from '../../store/Data.context'
import { useContext, useState } from 'react'

const CartButton = (props) => {
    const ctx = useContext(CartItems)
    function modalOpen() {
        props.modalOpener()
    }
    return (
        <button className={styles.button} onClick={modalOpen}>
            <span className={styles.icon}>
              <CartIcon></CartIcon>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{ctx.quantityData}</span>
        </button>
    )
}

export default CartButton