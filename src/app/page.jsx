import React from "react";
import Header from '@/components/Header/header';
import About from '@/components/About/about';
import styles from '@/styles/header.module.css'
export default function HomePage() {
  return <>
  <div className={styles['main-container']}>
    <Header />
  

    <About />
   
   
  </div>

  </>;
}
