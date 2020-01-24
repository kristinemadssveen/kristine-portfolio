import React, {useState, useEffect} from 'react'
import './Project.css'
import firebase from './firebase'
import parse from 'html-react-parser'
import  { Link } from '@reach/router'


const ProjectDetails = (props) => {

    const[project, setProject] = useState()

    let useEffectActivator = 1

    useEffect( () => {
        console.log('i am activated by the useEffectActivator constant')
    }, [useEffectActivator] )

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
            <p>
            <Link to='/projects/'>Tilbake</Link>
            </p>

            

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
                <h2>Henter prosjekt, vennligst vent</h2>  
            }
        </main>
    )
}

export default ProjectDetails