import React, { Fragment } from 'react'
import meals from '../../assets/meals.jpg'
import CartButton from './CartButton'

import styles from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
          <header className={styles.header}>
            <h1>React Meals</h1>
            <CartButton modalOpener={props.modalOpener}></CartButton>
          </header>
          <div className={styles['main-image']}>
            <img src={meals} alt='A table full of delicious food'/>
          </div>
        </Fragment>
    )
}

export default Header