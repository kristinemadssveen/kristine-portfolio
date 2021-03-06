import React, {useState} from 'react'
import './Project.css'
import { AiOutlineDelete } from "react-icons/ai"
import { FiEdit3 } from "react-icons/fi"
import firebase from './firebase'
import  { Link, navigate } from '@reach/router'

// import parse from 'html-react-parser'


const Project = (props) => {

    const [/*activeProject, setActiveProject*/] = useState(false)

    const deleteProject = () => {
        if(window.confirm('Er du sikker?')){
            firebase.firestore()
                .collection('projects')
                .doc(props.id)
                .delete()
                .then( ref => console.log('Document was deleted') )
                .catch( error => console.log(error) )
        }
    }

    return(                    
        <div className='project' >
            {
                props.data.defaultImage &&
                <img src={props.data.defaultImage} alt='default' onClick={ () => navigate(process.env.PUBLIC_URL + '/projects/' + props.id)}/>
            }

            <div className='innhold' onClick={ () => navigate(process.env.PUBLIC_URL + '/projects/' + props.id)}>

                <h1>{props.data.title}</h1>
            
                <div className='year'>
                    {props.data.year}

                </div>

                <div className='byline'>
                    {props.data.byline}

                </div>

                </div>

                {

                props.signedIn &&
                <div className='admin-icons'>
                    <Link to={process.env.PUBLIC_URL + '/edit/' + props.id}>
                        <FiEdit3 className='edit-icons' color='#383838' />
                    </Link>            
                    <AiOutlineDelete onClick={deleteProject} className='edit-icons' color='#383838' />
                </div>
                }

            
        
        </div>
    )
}

export default Project