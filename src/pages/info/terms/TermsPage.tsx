import React from 'react'
import styles from './TermsPage.module.scss'

function TermsPage() {
    return (
        <div className={styles.about}>
            <h2>Пользовательское соглашение</h2>
            <p>
                Права и обязанности сторон
                <br /><br />
                <b>Пользователь имеет право:</b>
                <ul>
                    <li>
                        осуществлять поиск информации на сайте
                    </li>
                    <li>
                        получать информацию на сайте
                    </li>
                    <li>
                        использовать информацию сайта в личных некоммерческих целях
                    </li>
                </ul>
                <br />
                <b>Администрация имеет право:</b>
                <ul>
                    <li>
                        по своему усмотрению и необходимости создавать, изменять, отменять правила
                    </li>
                    <li>
                        ограничивать доступ к любой информации на сайте
                    </li>
                    <li>
                        создавать, изменять, удалять информацию
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default TermsPage