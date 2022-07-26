import React, { FC } from 'react'
import styles from './MyButton.module.css'

interface MyButtonProps{
    children: string
    // click: ()=>void
}

const MyButton: FC<MyButtonProps> = ({children})=>{

    

    return(
       <button className={styles.myButton} type='button'>{children}</button>
    )
}
export default MyButton