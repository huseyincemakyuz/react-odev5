import React from 'react'
import styles from './styles.module.css'


export const Button = ({ type }) => {
  return <Button className={styles[type]}>{type}</Button>
}

