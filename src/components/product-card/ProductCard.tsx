import React from 'react'
import styles from './ProductCard.module.scss'

function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src="https://via.placeholder.com/298" alt="" />
            </div>
            <div className={styles.card_description}>
                <div className={styles.card_description__title}>
                    Маргарита
                </div>
                <div className={styles.card_description__compound}>
                    Соус красный, сыр моцарелла, томаты черри
                </div>
                <div className={styles.card_description__action}>
                    <div className={styles.card_description__button}>
                        Выбрать
                    </div>
                    <div className={styles.card_description__price}>
                        От 475 ₽
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard