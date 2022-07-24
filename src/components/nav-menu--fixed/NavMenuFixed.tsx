import React, { useState } from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as LogoTitle } from '../../assets/icons/logo_title.svg'
import { ReactComponent as Cart } from '../../assets/icons/cart.svg'
import styles from './NavMenuFixed.module.scss'
import { moveToSection } from '../../_helpers/moveToSection'

function NavMenuFixed() {
    const [isHovered, setIsHovered] = useState(false);

    const categories = [
        { title: 'Акции', link: '#' },
        { title: 'Пицца', link: '#pizza' },
        { title: 'Суши', link: '#sushi' },
        { title: 'Напитки', link: '#' },
        { title: 'Закуски', link: '#' },
        { title: 'Комбо', link: '#' },
        { title: 'Десерты', link: '#' },
        { title: 'Соусы', link: '#' },
    ]

    return (
        <div className={styles.menu}>
            <div className={styles.menu__wrapper}>
                <div className={styles.menu_logo}>
                    <Logo />
                    <LogoTitle className={styles.menu_logo__title} />
                </div>
                <div className={styles.menu_nav}>
                    {categories.map(({ title, link }) => (
                        <div key={title} className={styles.menu_nav__item} onClick={() => moveToSection(link)}>
                            {title}
                        </div>
                    ))}
                </div>
                <div
                    className={styles.menu_cart}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className={styles.menu_cart__icon}>
                        <Cart fill={isHovered ? "#FF7010" : "white"} />
                    </div>
                    <div className={styles.menu_cart__total}>
                        0
                        <div className={styles.menu_cart__currency}>₽</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavMenuFixed