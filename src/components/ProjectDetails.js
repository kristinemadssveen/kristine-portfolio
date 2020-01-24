import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import parse from 'html-react-parser'


const ProjectDetails = (props) => {

    const[project, setProject] = useState()

    useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .doc(props.id)
        .onSnapshot(
            snapshot => setProject(snapshot.data())
        )
    }, [props.id])

    return(

        <main className='project-details'>
            {
                project
                ?
            
        <div>

            {
                project.defaultImage &&
                <img src={project.defaultImage} alt='default' />
            }

            <h1>{project.title}</h1>
           
            <div className='year'>
                {project.year}

            </div>

            <div className='description'>
                {project.description && parse(project.description)}

            </div>
    
        </div>
                :
                <h2>Fetching project, hold on</h2>  
            }
        </main>
    )
}

export default ProjectDetails