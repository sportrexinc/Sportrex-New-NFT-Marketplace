import React from 'react'
import styles from './index.module.css'

const ColouredHeaderText = ({ text, fontSize = 'text-lg sm:text-2xl' }) => {
    return (
        <div className={`${styles.header} ${fontSize} biome-bold`}>{text}</div>
    )
}

export default ColouredHeaderText