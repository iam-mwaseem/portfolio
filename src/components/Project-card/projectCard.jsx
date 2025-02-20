import React from 'react'
import Image from 'next/image'
import LinkIcon from '../../../public/images/link-icon.svg'
import card1 from '../../../public/images/card1.png'
import styles from '@/styles/projectCard.module.css'
import Link from 'next/link'
export default function projectCard() {
  return (
    <>
   <div>

 
    <div className={styles['card-container']}>
      <Image src={card1} alt='visit page' style={{width:'100%', height:'auto'}} className={styles['card-img']} />
        <h3 className={styles['card-text']}>This project is developed in NextJS</h3>
        <Link  href='/card-1' className={styles['card-link']}>
            <Image src={LinkIcon} alt='visit project' />
        </Link>
    </div>
    </div>
    </>
  )
}
