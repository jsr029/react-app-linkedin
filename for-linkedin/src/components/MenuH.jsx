import React from 'react'
import { Link } from "react-router-dom";

function menuH() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/cvpage'>Cv</Link></li>
            </ul>
        </nav>
    )
}

export default menuH