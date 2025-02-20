import React from 'react'
import ServiceCard from '@/components/ServiceCard/serviceCard'
import style from '@/styles/services.module.css'
export default function myServices() {
  return (
    <>
    <section className={style['service_main-container'] }>
        <h1  className={style.subtitle}>
            My Services
        </h1>
        <div className={style['service-card-container']}>
            <ServiceCard />
            <ServiceCard  />
            </div>
    </section>
    </>
  )
}
