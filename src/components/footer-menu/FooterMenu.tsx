import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Phone } from '../../assets/icons/phone.svg'
import { ReactComponent as Address } from '../../assets/icons/address.svg'
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import styles from './FooterMenu.module.scss'

function FooterMenu() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__column}>
                <div className={styles.footer_logo}>
                    <div className={styles.footer_logo__image}>
                        <Logo />
                    </div>
                    <div className={styles.footer_logo__title}>
                        Куда пицца
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
                <div className={styles.footer_button}>
                    <a href='#'>
                        О компании
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <a href='#'>
                        Пользовательское соглашение
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <a href='#'>
                        Условия гарантии
                    </a>
                </div>
            </div>
            <div className={styles.footer__column}>
                <div className={styles.footer_title}>
                    Помощь
                </div>
                <div className={styles.footer_button}>
                    <a href='#'>
                        Ресторан
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <a href='#'>
                        Контакты
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <a href='#'>
                        Поддержка
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <a href='#'>
                        Отследить заказ
                    </a>
                </div>
            </div>
            <div className={styles.footer__column}>
                <div className={styles.footer_title}>
                    Контакты
                </div>
                <div className={styles.footer_button}>
                    <Phone />
                    <a href='#'>
                        +7 (926) 223-10-11
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <Address />
                    <a href='#'>
                        Москва, ул. Юных Ленинцев, д.99
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <Facebook />
                    <a href='#'>
                        Facebook
                    </a>
                </div>
                <div className={styles.footer_button}>
                    <Instagram />
                    <a href='#'>
                        Instagram
                    </a>
                </div>
            </div>

        </div>
    )
}

export default FooterMenu