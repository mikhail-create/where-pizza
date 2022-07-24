import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as LogoTitle } from '../../assets/icons/logo_title.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Address } from '../../assets/icons/address.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import styles from './FooterMenu.module.scss'
import { FooterLinkSchema } from '../../schemas/FooterLinkSchema'
import { Link } from 'react-router-dom'

const FooterLinks: FooterLinkSchema[] = [
    {
        title: 'Куда пицца', items: [
            { title: 'О компании', link: '/info/about', icon: '' },
            { title: 'Пользовательское соглашение', link: '/info/terms', icon: '' },
            { title: 'Политика конфиденциальности', link: '#', icon: '' }
        ]
    },
    {
        title: 'Помощь', items: [
            { title: 'Рестораны', link: '#', icon: '' },
            { title: 'Контакты', link: '#', icon: '' },
            { title: 'Поддержка', link: '#', icon: '' },
            { title: 'Отследить заказ', link: '#', icon: '' }
        ]
    },
    {
        title: 'Контакты', items: [
            { title: '+7 (111) 222-33-44', link: '#', icon: <Phone /> },
            { title: 'Москва, Лаврушинский пер., 10', link: '#', icon: <Address /> },
            { title: 'Facebook', link: '#', icon: <Facebook /> },
            { title: 'Instagram', link: '#', icon: <Instagram /> }
        ]
    },
]

const FooterButton = (title: string, link: string, icon?: React.ReactNode) => {
    return (
        <div className={styles.footer_button} key={title}>
            {icon && <span className={styles.footer_button__icon}>{icon}</span>}
            <Link to={link}>
                {title}
            </Link>
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
            {FooterLinks.map(({ title, items }) => (
                <div className={styles.footer__column} key={title}>
                    <div className={styles.footer_title}>
                        {title}
                    </div>
                    {items.map(({ title, link, icon }) => (
                        FooterButton(title, link, icon)
                    ))}
                </div>
            ))}
        </div >
    )
}

export default FooterMenu