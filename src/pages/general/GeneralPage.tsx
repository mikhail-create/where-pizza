import React from 'react'
import FirasaleImage from '../../assets/images/firesales_1.png'
import FirasaleImageSecond from '../../assets/images/firesales_2.png'
import Firesale from '../../components/firesale/Firesale'
import MenuSection from '../../components/menu-section/MenuSection'
import NavMenu from '../../components/nav-menu/NavMenu'
import styles from './GeneralPage.module.scss'

function GeneralPage() {
    return (
        <div className={styles.general}>
            <div className={styles.general__nav}>
                <NavMenu />
            </div>
            <div className={styles.general__firesales}>
                <Firesale image={FirasaleImage} color="orange" title='3 средние пиццы от 999 рублей' />
                <Firesale image={FirasaleImageSecond} color="red" title='Кэшбек 10% на самовывоз (доставка)' />
                <Firesale image={FirasaleImage} color="orange" title='3 средние пиццы от 999 рублей' />
                <Firesale image={FirasaleImageSecond} color="red" title='Кэшбек 10% на самовывоз (доставка)' />
            </div>
            <div className={styles.general__content}>
                <MenuSection title='Пицца' link='#pizza' />
            </div>
        </div>
    )
}

export default GeneralPage