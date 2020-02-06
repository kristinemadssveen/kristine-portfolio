import React, {useState} from 'react'
import { Link } from '@reach/router'
import './Header.css'
import { MdMenu } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

const Header = ( props ) => {

    const [show, setShow] = useState(false)

    const isPartiallyActive = ({
        isPartiallyCurrent
    }) => {
        return isPartiallyCurrent
        ? { className: 'active' }
        : null
    }

    return(

        <div className='header-container'>

        <MdMenu className='burger' color='darkgray' size='32' onClick={ () => setShow(!show) } />

        <header className= { show ? 'visible' : '' } onClick={ () => setShow(false) }>
            
            <div>
            <Link getProps={isPartiallyActive} to={process.env.PUBLIC_URL + '/projects'}>prosjekter</Link>
            </div>
            <div className='menu2'>
            <Link to={process.env.PUBLIC_URL + '/contact'}>kontakt</Link>
            <Link to={process.env.PUBLIC_URL + '/login'}>
                {
                props.signedIn 
                ? 'profil'
                : 'login'
                }
            </Link>
            <a href='https://www.linkedin.com/in/kristine-madssveen-lintorp-319a97164/' target="_blank" rel="noopener noreferrer" ><FaLinkedin className='edit-icons' color='#035A88' /></a>
            </div>
        </header>        
        </div>
    )
}

export default Header