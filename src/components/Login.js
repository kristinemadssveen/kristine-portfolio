import React from 'react'
import firebase from './firebase'
import './Login.css'

const Login = (props) => {
    const loginWithGoogle = () => {
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')

        firebase.auth()
        .signInWithPopup(provider)
            .catch( (error) => {
                console.log(error)
            } )
    }
    const logout = () => {
        firebase.auth().signOut()
    }
    return(
        <main className='login'>
        {
            !props.signedIn &&
            <button onClick={loginWithGoogle}>logg inn</button>
        }
        {
            props.signedIn &&
            <div className='profile'>
                <h1>Du er logget inn på Firebase</h1>
                <p>Velkommen {firebase.auth().currentUser.displayName}</p>
                {
                    firebase.auth().currentUser.photoURL &&
                    <img alt='profile img' src={firebase.auth().currentUser.photoURL} />
                }
                <button onClick={logout}>logg ut</button>
            </div>
        }
        </main>
    )
}

export default Login