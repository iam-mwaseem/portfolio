import React from "react";
import Image from "next/image";
import devIcon from "../../../public/images/icon-dev.svg";
import style from '@/styles/serviceCard.module.css'
export default function ServiceCard() {
  return (
    <>
      <div className={style['card-container']}>
        <div>
          <Image src={devIcon} alt="code" />
          <h3 style={{display:"inline-block"}} className={style['card-subtitle']}>Custom Website Development</h3>
        </div>
        <p className={style['card-text']}>
          I will create your website based on the design you provide or develop
          a unique one, using code and Figma. Your website will be responsive,
          beautifully displayed on all devices, and ready for publishing online.
         
        </p>
        <p> Cost: from 400 € (price depends on complexity and scope of the
          project)</p>
      </div>
    </>
  );
}
