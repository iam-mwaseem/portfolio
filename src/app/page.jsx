import React from "react";
import Header from '@/components/Header/header';
import About from '@/components/About/about';
import Portfolio from '@/components/Portfolio/portfolio'
import styles from '@/styles/header.module.css'
export default function HomePage() {
  return <>
  <div className={styles['main-container']}>
    <Header />
  

    <About />
   <Portfolio />
  </div>

  </>;
}
