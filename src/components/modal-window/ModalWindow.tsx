import React from 'react'
import styles from './ModalWindow.module.scss'

function ModalWindow() {
    return (
        <div className={styles.modal} onClick={() => console.log('click')}>
            <div className={styles.modal_window} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modal_window__image}>
                    IMAGE
                </div>
                <div className={styles.modal_window_content}>
                    <div className={styles.modal_window_content__title}>
                        Пицца
                    </div>
                    <div className={styles.modal_window_content__compound}>
                        Соус красный, сыр моцарелла, томаты черри
                    </div>
                    <div className={styles.modal_winow_content__removable}>
                        Убрать ингредиент:
                        <span>
                            REMOVABLE
                        </span>
                    </div>
                    <div className={styles.modal_window_content__size}>
                        SLIDER
                    </div>
                    <div className={styles.modal_window_content__additional}>
                        Добавьте в пиццу:
                        <span>
                            ADDITIONAL
                        </span>
                    </div>
                    <div className={styles.modal_window_content__total}>
                        <span>
                            Итого: 359 ₽
                        </span>
                        <button>
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalWindow