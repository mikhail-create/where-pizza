import React, { useEffect, useRef, useState } from 'react'
import FirasaleImage from '../../assets/images/firesales_1.png'
import FirasaleImageSecond from '../../assets/images/firesales_2.png'
import Firesale from '../../components/firesale/Firesale'
import MenuSection from '../../components/menu-section/MenuSection'
import ModalWindow from '../../components/modal-window/ModalWindow'
import NavMenuFixed from '../../components/nav-menu--fixed/NavMenuFixed'
import NavMenu from '../../components/nav-menu/NavMenu'
import styles from './GeneralPage.module.scss'

function useOnScreen(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false)
    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}

function GeneralPage() {
    const [isModalVisible, setIsModalVisible] = useState(true)
    const ref = useRef(null)
    const isVisible = useOnScreen(ref)
    return (
        <div className={`${styles.general} ${isModalVisible && styles.overflow}`}>
            {!isVisible && <NavMenuFixed />}
            <div className={styles.general__wrapper}>
                <div ref={ref} className={styles.general__nav} >
                    <NavMenu />
                    {isModalVisible && <ModalWindow />} 
                </div>
                <div className={styles.general__firesales}>
                    <Firesale image={FirasaleImage} color="orange" title='3 средние пиццы от 999 рублей' />
                    <Firesale image={FirasaleImageSecond} color="red" title='Кэшбек 10% на самовывоз (доставка)' />
                    <Firesale image={FirasaleImage} color="orange" title='3 средние пиццы от 999 рублей' />
                    <Firesale image={FirasaleImageSecond} color="red" title='Кэшбек 10% на самовывоз (доставка)' />
                </div>
                <div className={styles.general__content}>
                    <MenuSection title='Пицца' link='pizza' />
                    <MenuSection title='Суши' link='sushi' />
                </div>
            </div>
        </div>
    )
}

export default GeneralPage