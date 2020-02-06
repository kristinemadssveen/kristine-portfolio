import React, {useState, useEffect} from 'react'
import firebase from './firebase'
import './Edit.css'
import FileUploader from "react-firebase-file-uploader"

const Edit = (props) => {

    const [project, setProject] = useState()
    const [status,setStatus] = useState('')

    useEffect( () => {
        firebase.firestore().collection('projects').doc(props.id)
        .onSnapshot( snapshot => 
            setProject( snapshot.data() )    
        )
    }, [props.id] )

    const saveProject = (e) => {
        setStatus('laster, vennligst vent')
        e.preventDefault()
        firebase.firestore().collection('projects').doc(props.id)
            .update(project)
            .then( () => setStatus('prosjekt oppdatert') )
            .catch( error => {console.log( error.message )} )
    }

    const updateValue = 
        e => {
        e.persist()
        setProject( 
            existingProject => ({
            ...existingProject,
            [e.target.name]: e.target.value
        }))
    }
    const uploadStart = () => {
        setStatus('laster opp bilde, vennligst vent')
    }
    const uploadError = (error) => {
        setStatus(error)
    }
    const handleProgress = (percentage) => {
        console.log(percentage)
    }

    const uploadSuccess = filename => {
        firebase
            .storage()
            .ref('images')
            .child(filename)
            .getDownloadURL()
            .then(
                url => setProject( existingProject => ( {
                    ...existingProject,
                    defaultImage: url
                } ) )
            )
            setStatus('bilde opplastet')
    }

    return(
        <main className='edit'>
            {
            project && 
            <>
            <h1>Edit project: {project.title}</h1>
            <form onSubmit={saveProject}>
                <input name='title' onChange={updateValue} value={project.title} />
                <input onChange={updateValue} name='year' placeholder='År' value={project.year} />
                <input onChange={updateValue} className='byline' name='byline' placeholder='Kort beskrivelse av prosjektet' value={project.byline} />
                <textarea onChange={updateValue} name='description' placeholder='Beskriv prosjektet ditt så godt du kan her' value={project.description} />

                {
                    project.defaultImage &&
                    <img src={project.defaultImage} alt='default' />
                }
               <label>
            <div className='button'>{project.defaultImage ? 'erstatt' : 'last opp bilde'}</div>
                <FileUploader
                    hidden
                    accept="image/*"
                    storageRef={firebase.storage().ref('images')}
                    onUploadStart={uploadStart}
                    onUploadError={uploadError}
                    onUploadSuccess={uploadSuccess}
                    onProgress={handleProgress}
                    />
                </label>
                <button type='submit'>lagre</button>
            </form>
            </>
            }
            <p>{status}</p>
        </main>
    )
}

export default Edit