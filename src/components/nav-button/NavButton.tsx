import React from 'react'
import { moveToSection } from '../../_helpers/moveToSection';
import styles from './NavButton.module.scss'

interface NavButtonProps {
    icon: React.ReactNode;
    link: string;
    title: string;
}

function NavButton(props: NavButtonProps) {
  return (
    <div className={styles.button} onClick={() => moveToSection(props.link)}>
        {props.icon}
        <span>{props.title}</span>
    </div>
  )
}

export default NavButton