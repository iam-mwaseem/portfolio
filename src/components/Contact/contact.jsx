import React from 'react'
import style from '@/styles/contact.module.css'
import contactIcon from '../../../public/images/contact-icon.svg'
import Image from 'next/image'
export default function Contact() {
  return (
    <>
    <section className={style['contact_main-container']} >
      <div>
        <h3 className={style['contact-subtitle-gradient']}>Do you have a project to discuss?</h3>
        <div className={style['contact__subtitle']}>
          <Image src={contactIcon} alt='contact icon' / >
          <span style={{marginLeft:'12px'}}>Contact Me</span>
        </div>
        <div className={style['contact-info']} >
          <div>
          <span className={style['contact-info-subtitle']}>Contact</span>
          <span style={{display:'block',marginTop:"10px"}}>dev.muhammad.waseem@gmail.com</span>
          </div>
        </div>
       
        
      </div>
      {/* starting form  */}
        <div className={style['contact-form-block']}>
          <span className={style['contact__subtitle']}>CONTACT FORM</span>
          <form className={style['contact-form-box']}>
            <input type='text' placeholder='Enter your name' className={style['contact-form-input']} />
            <input type='text' placeholder='Enter your email' className={style['contact-form-input']} />
            <textarea  placeholder='Enter your message' className={style['contact-form-input']} />
            <div>

            <input type='checkbox' ></input>
            <span style={{display:'inline-block'}}>I agree to terms and conditions</span>
            </div>
          </form>
          <button type='submit' className={style['send-btn']} >Send</button>
        </div>
    </section>
    </>
  )
}
