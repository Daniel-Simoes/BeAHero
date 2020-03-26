import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import Logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {

  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault(); 

    try {
        const response = await api.post('sessions', { id });
        
        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);

        history.push('/profile');
    }
    catch (err) {
      alert('Login Failed, try again')
    }
  }

  return (
    <div className="login-container">
        <section className="form">
            <img src={Logo} alt="Logo"/>
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                
                <input 
                  placeholder="Your Id"
                  value={id}
                  onChange={e => setId(e.target.value)}
                />

                <button className="button" type="submit">Enter</button>
                
                <Link className="back-link" to="/Register">
                    <FiLogIn size={16} color="#E02041"/>
                    Sign Up 
                </Link>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
