import React from 'react'
import './Om.css'
import { FaArrowDown } from "react-icons/fa"

const Om = () => {

    return(

    <div className='container'>
       
        <div className='navn'>
            <h1>KRISTINE</h1>
            <h1 className='mads'>MADSSVEEN</h1>
            <h1>LINTORP</h1> 
        </div>

        <div className='ux-design'>
            <h1 className='animated heartBeat'><strong>Interaksjonsdesigner / UX-designer</strong></h1>

            <FaArrowDown  color='#383838'/>

        </div>

        

        <div className='om-meg'>
            <h3 className='mads2'>... hvem er jeg?</h3>
            <p>Mitt navn er Kristine Madssveen Lintorp, og jeg er ei 20 år gammel jente fra Lillestrøm. Helt siden jeg var liten har jeg elsket å designe diverse ting, og jeg har alltid elsket å lage ting fra "scratch". Når det kommer til prosjekter er jeg aller mest glad i alt fra idéfasen til prototyping, men utformingen av nettsiden er også gøy.</p>
        </div>

    </div>

    )
} 

export default Om