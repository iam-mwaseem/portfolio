import Image from 'next/image'
import style from '@/styles/skill.module.css'
import Html from '../../../public/images/html.svg'
import Css from '../../../public/images/css-icon.svg'
import Js from '../../../public/images/js-icon.svg'
import Figma from '../../../public/images/figma-icon.svg'
import Npm from '../../../public/images/npm-icon.svg'
import React from '../../../public/images/react-icon.svg'
import Webpage from '../../../public/images/webpage-icon.svg'
import Git from '../../../public/images/git-icon.svg'
import Scss from '../../../public/images/scss.svg'
import NodeJs from '../../../public/images/nodejs-logo.svg'
import monogDB from '../../../public/images/mongodb-icon.svg'
import moySql from '../../../public/images/mysql-icon.svg'
import php from '../../../public/images/php-icon.svg'
import vue from '../../../public/images/vue-icon.svg'
import nextIcon from '../../../public/images/nextjs-icon.svg'
import tailwind from '../../../public/images/tailwind-icon.svg'
export default function Skill (){
    return (
        <>
        <section className={style['main-container']} id='skills'>
            <h1 className={style.subtitle}>Skills</h1>
            <div className={style['skill-icon-container']}>
                <p className={style['skills__content-subtitle']}>The skills, tools and technologies I use:</p>
                <div className={style['skill-icon']}>
                    <Image src={Html} alt='icon' />
                    <Image src={Css} alt='icon' />
                    <Image src={Js} alt='icon' />
                    <Image src={Figma} alt='icon' />
                    <Image src={Npm} alt='icon' />
                    <Image src={React} alt='icon' />
                    <Image src={vue} alt='icon'  width='71' height='70' />
                    <Image src={nextIcon} alt='icon'  width='71' height='70' />
                    <Image src={Webpage} alt='icon' />
                    <Image src={Git} alt='icon' />
                    <Image src={Scss} alt='icon' />
                    <Image src={NodeJs} alt='icon' width='71' height='70' />
                    <Image src={monogDB} alt='icon' width='71' height='70' />
                    <Image src={php} alt='icon' width='71' height='70' />
                    <Image src={moySql} alt='icon' width='71' height='70' />
                    <Image src={tailwind} alt='icon' width='71' height='70' />
                </div>
            </div>
        </section>
        </>
    )
}