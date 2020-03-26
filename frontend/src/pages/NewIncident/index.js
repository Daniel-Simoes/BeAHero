import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import Logo from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={Logo} alt="Logo"/>
                    <h1>New Incident</h1>
                    <p>Describe all details from your acident to find a Hero with can help you</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                         Back to Home 
                     </Link>
                </section>
                <form>
                    <input placeholder="Title"/>
                    <textarea placeholder="Description"></textarea>
                    <input placeholder="How many do you need"/>
                    
                    <button className="button" type="submit"> Enter</button>
                </form>
            </div>
        </div>
       );
}
