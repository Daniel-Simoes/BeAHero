import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';



import Logo from '../../assets/logo.svg';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile'); 
        }
         catch {
            alert('Failed, Try to insert a new Incident again.');
         }
    }

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

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    
                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    
                    <input 
                        placeholder="How many do you need"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit"> Enter</button>
                </form>
            </div>
        </div>
       );
}
