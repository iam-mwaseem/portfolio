import Link from "next/link";
import styles from "@/styles/header.module.css";
import LangIcon from "../../../public/images/icon-lang.svg";
import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className={`${styles.header} ${styles.container}`}>
        <Link href="/" className={styles["header-link"]}>
          Muhammad Waseem
        </Link>

        <nav className={styles["header-nav"]}>
          <ul className={styles["header-list"]}>
            <li >
              <Link href="/" className={styles.link}>Portfolio</Link>
            </li>
            <li>
              <Link href="/technologies" className={styles.link}>Technologies</Link>
            </li>
            <li>
              <Link href="/services" className={styles.link}>Services</Link>
            </li>
            <li>
              <Link href="/contacts" className={styles.link}>Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className={styles["header__dropdown"]} >
          <button
            className={`${styles.button} ${styles["header__button-lang"]}`}
            style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}
          >
            <span style={{paddingLeft:'4px'}}>

            EN
            </span>
            
            <Image
              src={LangIcon}
              alt="languages"
              className={styles.icon}
            ></Image>
          </button>

          <ul
            id="polylang-languages"
            className={styles["header__dropdown-list"]}
          >
            <li >
              <a
                lang="en-US"
                hrefLang="en-US"
                href="https://tetianazaporozhets.eu/"
              >
                en
              </a>
            </li>
            <li >
              <a
                lang="pl-PL"
                hrefLang="pl-PL"
                href="https://tetianazaporozhets.eu/pl/"
              >
                pl
              </a>
            </li>
            <li >
              <a
                lang="uk"
                hrefLang="uk"
                href="https://tetianazaporozhets.eu/uk/"
              >
                uk
              </a>
            </li>
            <li >
              <a
                lang="ru-RU"
                hrefLang="ru-RU"
                href="https://tetianazaporozhets.eu/ru/"
              >
                ru
              </a>
            </li>
          </ul>

          <ul id="custom-languages" className={styles["header__dropdown-list"]}>
            <li>
              <a href="https://tetianazaporozhets.eu/" data-lang="En">
                En
              </a>
            </li>
            <li>
              <a href="https://tetianazaporozhets.eu/uk/" data-lang="Uk">
                Uk
              </a>
            </li>
            <li>
              <a href="https://tetianazaporozhets.eu/ru/" data-lang="Ru">
                Ru
              </a>
            </li>
            <li>
              <a href="https://tetianazaporozhets.eu/pl/" data-lang="Pl">
                Pl
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
