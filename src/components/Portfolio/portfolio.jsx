import ProjectCard from '@/components/project-card/projectCard.jsx'
import styles from '@/styles/portfolio.module.css'
export default function Portfolio (){
    return(
        <section className={styles.portfolio}>
      
        <h1 className={styles.subtitle}>Portfolio</h1>
       
       <div className={styles['project-container']}>

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
       </div>

    
      

      
        </section>
    )
}