"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/styles/header.module.css";
// import hamBurgerIcon from "../../../public/images/hamburger-icon.svg";
// import Image from "next/image";
export default function MobileNavBar() {
  const [toggleList, setToggleList] = useState(false);
  const handleOnClick = () => {
    setToggleList((prevState) => {
      return !prevState;
    });

  };
  const handleSideBarLinkClick = ()=>{
    setToggleList(false);
}
  return (
    <header className={`${styles.header} ${styles.container}`}>
      {/* <Image src={hamBurgerIcon} alt="hamburger icon" onClick={handleOnClick} width={70} height={70} /> */}
      <div className={styles["hamburger-lines"]} onClick={handleOnClick}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>

      <Link href="/" className={styles["header-link"]}>
        Muhammad Waseem
      </Link>
  
      <nav
        className={`${styles["header-nav"]} ${toggleList ? styles.active : ""}`}
      >
        {/* <span className={styles["close-btn"]} onClick={handleOnClick}>
          &times;
        </span> */}
        <ul className={styles["header-list"]}>
          <li>
            <Link href="#portfolio" className={styles.link} onClick={handleSideBarLinkClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#skills" className={styles.link} onClick={handleSideBarLinkClick}>
              Technologies
            </Link>
          </li>
          <li>
            <Link href="#services" className={styles.link} onClick={handleSideBarLinkClick}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#contacts" className={styles.link} onClick={handleSideBarLinkClick}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
