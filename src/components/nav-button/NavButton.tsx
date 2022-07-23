import React from 'react'
import styles from './NavButton.module.scss'

interface NavButtonProps {
    icon: React.ReactNode;
    link: string;
    title: string;
}

const moveToSection = (link: string) => {
    console.log(link);
    const section = document.querySelector(link)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
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