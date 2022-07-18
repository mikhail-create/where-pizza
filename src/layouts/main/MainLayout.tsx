import React from 'react'
import { Outlet } from 'react-router-dom';
import FooterMenu from '../../components/footer-menu/FooterMenu';
import HeaderMenu from '../../components/header-menu/HeaderMenu';
import styles from './MainLayout.module.scss'

function MainLayout() {
    return (
        <div className={styles.layout}>
            <div className={styles.layout_header}>
                <HeaderMenu />
            </div>
            <div className={styles.layout_content}>
                <Outlet />
            </div>
            <div className={styles.layout_footer}>
                <FooterMenu />
            </div>
        </div>
    );
}

export default MainLayout