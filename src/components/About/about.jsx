import Link from 'next/link'
import styles from '@/styles/about.module.css'
export default function About(){
    return (
        <div className={`${styles['main__text-block']} ${styles.loaded}`}>
            <h1 className={styles['main-title']}>Full-stack <br /> web developer</h1>
            <div>

            <p className={styles['main-text']}>I am Waseem, a web-developer from Pakistan.
            I create beautiful and responsive websites that are easy to use.</p>
            </div>
            <button className={styles.button}>
           

            <Link href='/portfolios'><span className={styles.button}>View my works</span></Link>
    
            </button>
        </div>
    )
}