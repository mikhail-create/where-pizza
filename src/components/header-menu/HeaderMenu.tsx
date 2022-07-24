import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as LogoTitle } from '../../assets/icons/logo_title.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import styles from './HeaderMenu.module.scss'
import { Link } from 'react-router-dom'

function HeaderMenu() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <Link to={'/'}>
                    <Logo />
                    <LogoTitle className={styles.header_logo__title} />
                </Link>
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