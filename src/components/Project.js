import React, {useState} from 'react'
import './Project.css'
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit3 } from "react-icons/fi"
import firebase from './firebase'
import  { Link } from '@reach/router'
// import parse from 'html-react-parser'


const Project = (props) => {

    const [activeProject, setActiveProject] = useState(false)

    const deleteProject = () => {
        if(window.confirm('sure?')){
            firebase.firestore()
                .collection('projects')
                .doc(props.id)
                .delete()
                .then( ref => console.log('Document was deleted') )
                .catch( error => console.log(error) )
        }
    }

    return(
        <div onClick={()=>setActiveProject(!activeProject)} className={activeProject ? 'project active' : 'project'}>
            {
                props.data.defaultImage &&
                <img src={props.data.defaultImage} alt='default' />
            }
            <h1>{props.data.title}</h1>
           
            <div className='year'>
                {props.data.year}

            </div>

            <div className='byline'>
                {props.data.byline}

            </div>

            <Link to={'/projects/' + props.id}>Read more</Link>
           
            {
               props.data.color && <p>farge: {props.data.color}</p>
            }       


            {
            props.signedIn &&
            <div className='admin-icons'>
                <Link to={'/edit/' + props.id}>
                    <FiEdit3 className='edit-icons' color='#383838' />
                </Link>            
                <AiOutlineDelete onClick={deleteProject} className='edit-icons' color='#383838' />
            </div>
            }
        
        </div>
    )
}

export default Project