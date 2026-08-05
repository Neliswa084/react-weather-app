import React from 'react'
import styles from './Card.module.css'

type CardProps= {
    children: React.ReactNode,
    style?: React.CSSProperties
}

export const Card:React.FC<CardProps> = ({ children, style }) => {
  return (
   <div className={styles.card} style={style}>
      {children}
    </div>
  )
}
