import React from 'react'
import { ReactComponent as Filter } from '../../assets/icons/filter.svg'
import ProductCard from '../product-card/ProductCard'
import styles from './MenuSection.module.scss'

interface MenuSectionProps {
    title: string,
    link: string
}

function MenuSection(props: MenuSectionProps) {
    return (
        <div className={styles.section}>
            <div className={styles.section_title}>
                <h1 id={props.link}>
                    {props.title}
                </h1>
                <div className={styles.section_title__filter}>
                    <Filter />
                    <span>
                        Фильтры
                    </span>
                </div>
            </div>
            <div className={styles.section_content}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default MenuSection