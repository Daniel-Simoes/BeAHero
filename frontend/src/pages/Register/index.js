import React from 'react';
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import Logo from '../../assets/logo.svg';

export default function Register() {
  return (
   <div className="register-container">
       <div className="content">
           <section>
               <img src={Logo} alt="Logo"/>
               <h1>Sign Up</h1>
               <p>Into in Aplication and help people find your Organization's Incidents.</p>
               <Link className="back-link" to="/Register">
                   <FiArrowLeft size={16} color="#E02041"/>
                    Sign In 
                </Link>
           </section>
           <form>
               <input placeholder="Organization Name"/>
               <input type="email" placeholder="Email"/>
               <input placeholder="Phone"/>
               <div className="input-group">
                   <input placeholder="City"/>
                   <input placeholder="County" style={{ width:300 }}/>
               </div>
               <button className="button" type="submit"> Enter</button>
           </form>
       </div>
   </div>
  );
}
