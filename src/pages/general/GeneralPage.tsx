import React from 'react'
import NavMenu from '../../components/nav-menu/NavMenu'
import styles from './GeneralPage.module.scss'

function GeneralPage() {
  return (
    <div className={styles.general}>
        <NavMenu />
    </div>
  )
}

export default GeneralPage