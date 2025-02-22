'use client'
import React, {useState,useEffect} from "react";
import Image from "next/image";
import devIcon from "../../../public/images/icon-dev.svg";
import style from '@/styles/serviceCard.module.css'
export default function ServiceCard({title, id ,description , cost}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const cardStyle = {
    alignSelf: id % 2 !== 0 ? 'auto' : 'self-end'
  };
  return (
    <>
      <div className={`${style['card-container']} ${isVisible ? style['visible'] : style['hidden']}`} style={cardStyle}>
        <div>
          <Image src={devIcon} alt="code" />
          <h3 style={{display:"inline-block"}} className={style['card-subtitle']}>{title}</h3>
        </div>
        <p className={style['card-text']}>
         {description}
         
        </p>
        <p> {cost}</p>
      </div>
    </>
  );
}
