import React from 'react';


import './styles.css';

import Logo from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login() {
  return (
    <div className="login-container">
        <section className="form">
            <img src={Logo} alt="Logo"/>
            <form>
                <h1>Sign In</h1>
                <input placeholder="Your Id"/>
                <button className="button" type="submit">Enter</button>
                
                <a href="/Register">
                    
                    Sign Up 
                </a>
            </form>
        </section>
        <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
