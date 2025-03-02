import ProjectCard from '@/components/ProjectCard/projectCard'
import styles from '@/styles/portfolio.module.css'
import projectData from '@/project-db'
export default function Portfolio (){
    return(
        <section className={styles.portfolio} id='portfolio'>
      
        <h1 className={styles.subtitle}>Portfolio</h1>
       
       <div className={styles['project-container']} >
        {
            projectData.map((project )=> (

                <ProjectCard key={project.id} srcImage={project.srcImage} title={project.title} link={project.link} />
            ))
        }
       
       </div>

    
      

      
        </section>
    )
}