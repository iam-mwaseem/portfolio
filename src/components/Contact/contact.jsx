'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import style from '@/styles/contact.module.css';
import contactIcon from '../../../public/images/contact-icon.svg'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] =
   useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    if (!formData.agree) tempErrors.agree = 'You must agree to the terms and conditions';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.email !== 'dev.muhammad.waseem@gmail.com'){
      if (validate()) {
        emailjs.send(
          'service_ru3opae', // Replace with your EmailJS service ID
          'template_x1mtlfs', // Replace with your EmailJS template ID
          formData,
          '_QScm7TNWLAV3q_R0' // Replace with your EmailJS user ID
        ).then((response) => {
          console.log('SUCCESS!', response.status, response.text);
           // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: '',
        agree: false
      });
      setErrors({});
        }, (error) => {
          console.log('FAILED...', error);
        });
      }
    }
  };

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
          <form className={style['contact-form-box']} onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Enter your name'
              className={style['contact-form-input']}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className={style['error']}>{errors.name}</span>}
            <input
              type='text'
              name='email'
              placeholder='Enter your email'
              className={style['contact-form-input']}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className={style['error']}>{errors.email}</span>}
            <textarea
              name='message'
              placeholder='Enter your message'
              className={style['contact-form-input']}
              style={{height:"100px"}}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <span className={style['error']}>{errors.message}</span>}
            <div>
              <input
                type='checkbox'
                name='agree'
                checked={formData.agree}
                onChange={handleChange}
              />
              <span style={{ display: 'inline-block' }}>I agree to terms and conditions</span>
            </div>
            {errors.agree && <span className={style['error']} style={{marginTop:'20px'}}>{errors.agree}</span>}
            <button type='submit' className={style['send-btn']}>Send</button>
          </form>
        </div>
    </section>
    </>
  )
}
