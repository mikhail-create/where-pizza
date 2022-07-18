import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import styles from './HeaderMenu.module.scss'

function HeaderMenu() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <div className={styles.header_logo__image}>
                    <Logo />
                </div>
                <div className={styles.header_logo__title}>
                    Куда пицца
                </div>
            </div>
            <div
                className={styles.header_cart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={styles.header_cart__icon}>
                    <Cart fill={isHovered ? "#FF7010" : "white"} />
                </div>
                <div className={styles.header_cart__total}>
                    0
                    <div className={styles.header_cart__currency}>₽</div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu