import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as LogoTitle } from '../../assets/icons/logo_title.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Address } from '../../assets/icons/address.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import styles from './FooterMenu.module.scss'

const FooterButton = (title: string, link: string, icon?: React.ReactNode) => {
    return (
        <div className={styles.footer_button}>
            {icon && <span className={styles.footer_button__icon}>{icon}</span>}
            <a href={link}>
                {title}
            </a>
        </div>
    )
}

function FooterMenu() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__column}>
                <div className={styles.footer_logo}>
                    <div className={styles.footer_logo__image}>
                        <Logo />
                        <LogoTitle className={styles.footer_logo__title} />
                    </div>
                </div>
                <div className={styles.footer_logo__copyright}>
                    © Copyright 2021 — Куда Пицца
                </div>
            </div>
            <div className={styles.footer__column}>
                <div className={styles.footer_title}>
                    Куда пицца
                </div>
                {FooterButton('О компании', '#')}
                {FooterButton('Пользовательское соглашение', '#')}
                {FooterButton('Условия гарантии', '#')}
            </div>
            <div className={styles.footer__column}>
                <div className={styles.footer_title}>
                    Помощь
                </div>
                {FooterButton('Ресторан', '#')}
                {FooterButton('Контакты', '#')}
                {FooterButton('Поддержка', '#')}
                {FooterButton('Отследить заказ', '#')}
            </div>
            <div className={styles.footer__column}>
                <div className={styles.footer_title}>
                    Контакты
                </div>
                {FooterButton('+7 (926) 223-10-11', '#', <Phone />)}
                {FooterButton('Москва, ул. Юных Ленинцев, д.99', '#', <Address />)}
                {FooterButton('Facebook', '#', <Facebook />)}
                {FooterButton('Instagram', '#', <Instagram />)}
            </div>

        </div>
    )
}

export default FooterMenu