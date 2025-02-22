import React from 'react'
import ServiceCard from '@/components/ServiceCard/serviceCard'
import style from '@/styles/services.module.css'
import servicesData from '@/services-db'
export default function myServices() {
  return (
    <>
    <section className={style['service_main-container'] } id='services'>
        <h1  className={style.subtitle}>
            My Services
        </h1>
        <div className={style['service-card-container']}>
          {servicesData.map((service)=>(
            <ServiceCard title={service.title} id={service.id} description={service.description} cost={service.cost} key={service.id} />
          ))}
            
            </div>
    </section>
    </>
  )
}
