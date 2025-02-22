'use client';
import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import LinkIcon from '../../../public/images/link-icon.svg'
// import card1 from '../../../public/images/card1.png'
import styles from '@/styles/projectCard.module.css'
import Link from 'next/link'
export default function ProjectCard({srcImage , title , link}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
   <div>

 
    <div className={`${styles['card-container']} ${isVisible ? styles['visible'] : styles['hidden']}`}>
      <Image src={srcImage} alt='visit page'  width={300} height={169} style={{width:'100%', height:'auto'}} className={styles['card-img']} layout='responsive' />
        <h3 className={styles['card-text']}>{title}</h3>
        <Link  href={link} className={styles['card-link']} target='_blank' rel='noopenernorederrer'>
            <Image src={LinkIcon} alt='visit project' />
        </Link>
    </div>
    </div>
    </>
  )
}
