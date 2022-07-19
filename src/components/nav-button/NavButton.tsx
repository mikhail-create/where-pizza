import React from 'react'
import styles from './NavButton.module.scss'

interface NavButtonProps {
    icon: React.ReactNode;
    link: string;
    title: string;
}

function NavButton(props: NavButtonProps) {
  return (
    <div className={styles.button}>
        {props.icon}
        <a href={props.link}>{props.title}</a>
    </div>
  )
}

export default NavButton