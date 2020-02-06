import React,{ useState, useEffect } from 'react'
import firebase from './firebase'
import Project from './Project'
import './Projects.css'
import { MdAddCircleOutline } from 'react-icons/md'
import {navigate} from '@reach/router'
import PacmanLoader from "react-spinners/PacmanLoader"
import Masonry from 'react-masonry-css'
import './Om.css'
import Om from  './Om'
import Footer from './Footer'

const Projects = (props) => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        if(!window.location.href.includes('projects'))navigate(process.env.PUBLIC_URL + '/projects')
    },[])

    const addProject = () => {
        firebase.firestore().collection('projects').add(
            {
                title:'0 Nytt prosjekt',
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }
        )
        .then( doc => navigate(process.env.PUBLIC_URL + '/edit/' + doc.id) )
    }
    
    useEffect( () => {
        firebase
        .firestore()
        .collection('projects')
        .orderBy('title')
        .onSnapshot(
            snapshot => setProjects(snapshot.docs)
        )
    }, [])

    return(
        <main>
             <Om/> 

            <div className='overskrift'>
                <h3>... div prosjekter</h3>
            </div>

            {
                props.signedIn &&
                <div className='add'>
                    <MdAddCircleOutline className='edit-icons' color='#383838' onClick={addProject} />
                </div>
            }

            {
            projects.length > 0
            ?
            <Masonry
                breakpointCols={
                    {
                        default: 3,
                        1300: 2,
                        1100: 1
                    }
                }
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
                {
                    projects.map(
                        project => 
                        <Project 
                            key={project.id} 
                            data={project.data()} 
                            id={project.id} 
                            signedIn={props.signedIn}
                        />
                    )
                }
            </Masonry>
            :
            <PacmanLoader color='#383838' />
            }

            <Footer/>
        </main>
    )
}

export default Projects