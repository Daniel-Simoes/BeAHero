import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    const[ incidents, setIncidents ] = useState([]);

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then( response => {
            setIncidents(response.data);
        })
    }, [ongId]);

  return (
    <div className="profile-container">
        <header>
        <img src={Logo} alt="Logo"/>
        <span>Welcome, {ongName}</span>
            <Link className="button" to="/incidents/new"> New Incidents</Link>
            <button type="button">
                <FiPower size={18} color="#E02041" />
            </button>
        </header>
        <h1>Incidents</h1>
        <ul>
           { incidents.map( incident => {
               return (
                    <li key={incident.id}>
                        <strong>Incident:</strong>
                        <p>{incident.title}</p>
                        <strong>Description:</strong>
                        <p>{incident.description}</p>
                        <strong>Value:</strong>
                        <p>{Intl.NumberFormat('en-UK', { style: 'currency', currency: 'EUR' }).format(incident.value)}</p>
                        <button type="button" >
                            <FiTrash2 size={20} color="#A8A8B3" />
                        </button>
                    </li>
                )
            } )}
        </ul>
    </div>
  );
}
