import React from 'react'
import styles from './Firesale.module.scss'

interface FiresaleProps {
    image: string,
    color: string,
    title: string
}

function Firesale(props: FiresaleProps) {
    return (
        <div className={`${styles.firesale} ${props.color === 'red' ? styles.red : styles.orange}`}>
            <div className={styles.firesale__image}>
                <img src={props.image} alt="Firesale image"/>
            </div>
            <div className={styles.firesale__title}>
                {props.title}
            </div>
        </div>
    )
}

export default Firesale