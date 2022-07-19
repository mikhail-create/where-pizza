import React from 'react'
import styles from './NavMenu.module.scss';
import { ReactComponent as Fire } from '../../assets/icons/fire.svg'
import { ReactComponent as Combo } from '../../assets/icons/food/combo.svg'
import { ReactComponent as Dessert } from '../../assets/icons/food/dessert.svg'
import { ReactComponent as Drink } from '../../assets/icons/food/drink.svg'
import { ReactComponent as Pizza } from '../../assets/icons/food/pizza.svg'
import { ReactComponent as Sauce } from '../../assets/icons/food/sauce.svg'
import { ReactComponent as Snaks } from '../../assets/icons/food/snaks.svg'
import { ReactComponent as Sushi } from '../../assets/icons/food/sushi.svg'
import NavButton from '../nav-button/NavButton';

function NavMenu() {
    const categories = [
        { title: 'Акции', link: '#', icon: <Fire /> },
        { title: 'Пицца', link: '#', icon: <Pizza /> },
        { title: 'Суши', link: '#', icon: <Sushi /> },
        { title: 'Напитки', link: '#', icon: <Drink /> },
        { title: 'Закуски', link: '#', icon: <Snaks /> },
        { title: 'Комбо', link: '#', icon: <Combo /> },
        { title: 'Десерты', link: '#', icon: <Dessert /> },
        { title: 'Соусы', link: '#', icon: <Sauce /> },
    ]

    return (
        <div className={styles.nav}>
            {categories.map(({ title, link, icon }) => (
                <NavButton key={title} title={title} link={link} icon={icon} />
            ))}
        </div>
    )
}

export default NavMenu