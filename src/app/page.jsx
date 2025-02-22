import React from "react";
import Header from '@/components/Header/header';
import About from '@/components/About/about';
import Portfolio from '@/components/Portfolio/portfolio'
import Skill from '@/components/Skill/skill'
import styles from '@/styles/header.module.css'
import Service from '@/components/MyServices/myServices'
import Contact from '@/components/Contact/contact'
import Footer from '@/components/Footer/footer'
export default function HomePage() {
  return <>
  <div className={styles['main-container']}>
    <Header />
  

    <About />
   <Portfolio />
   <Skill />
   <Service />
   <Contact />
   <Footer />
  </div>

  </>;
}
