import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';


import Logo from '../../assets/logo.svg';

import './styles.css';

export default function Profile() {
  return (
    <div className="profile-container">
        <header>
        <img src={Logo} alt="Logo"/>
            <span>Welcome</span>
            <Link className="button" to="/incidents/new"> New Incidents</Link>
            <button type="button">
                <FiPower size={18} color="#E02041" />
            </button>
        </header>
        <h1>Incidents</h1>
        <ul>
            <li>
                <strong>Incident:</strong>
                <p>Incident Test</p>
                <strong>Description:</strong>
                <p>Description Test</p>
                <strong>Value:</strong>
                <p>$ 200</p>
                <button type="button" >
                    <FiTrash2 size={20} color="#A8A8B3" />
                </button>
            </li>

            <li>
                <strong>Incident:</strong>
                <p>Incident Test</p>
                <strong>Description:</strong>
                <p>Description Test</p>
                <strong>Value:</strong>
                <p>$ 200</p>
                <button type="button" >
                    <FiTrash2 size={20} color="#A8A8B3" />
                </button>
            </li>

            <li>
                <strong>Incident:</strong>
                <p>Incident Test</p>
                <strong>Description:</strong>
                <p>Description Test</p>
                <strong>Value:</strong>
                <p>$ 200</p>
                <button type="button" >
                    <FiTrash2 size={20} color="#A8A8B3" />
                </button>
            </li>

            <li>
                <strong>Incident:</strong>
                <p>Incident Test</p>
                <strong>Description:</strong>
                <p>Description Test</p>
                <strong>Value:</strong>
                <p>$ 200</p>
                <button type="button" >
                    <FiTrash2 size={20} color="#A8A8B3" />
                </button>
            </li>
        </ul>
    </div>
  );
}
