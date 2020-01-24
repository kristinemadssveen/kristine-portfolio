import React, {useState} from 'react'
import { Link } from '@reach/router'
import './Header.css'
import { MdMenu } from "react-icons/md"

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
            
            <Link getProps={isPartiallyActive} to='/projects'>prosjekter</Link>
            <Link to='/contact'>kontakt</Link>
            <Link to='/login'>
                {
                props.signedIn 
                ? 'profil'
                : 'login'
                }
            </Link>
        </header>        
        </div>
    )
}

export default Header