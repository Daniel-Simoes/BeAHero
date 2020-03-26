import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';


import api from '../../services/api';
import './styles.css';

import Logo from '../../assets/logo.svg';

export default function Register() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[phone, setPhone] = useState('');
    const[city, setCity] = useState('');
    const[county, setCounty] = useState('');

    const histoty = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            city,
            county,
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Your ID is: ${response.data.id}`);
            histoty.push('/');
            }
            catch (err) {
                alert('Registration error, Please try again.');
            }
    }

  return (
   <div className="register-container">
       <div className="content">
           <section>
               <img src={Logo} alt="Logo"/>
               <h1>Sign Up</h1>
               <p>Into in Aplication and help people find your Organization's Incidents.</p>
               <Link className="back-link" to="/">
                   <FiArrowLeft size={16} color="#E02041"/>
                    Sign In 
                </Link>
           </section>
           <form onSubmit={handleRegister }>

               <input 
               placeholder="Organization Name"
               value={name}
               onChange={e => setName(e.target.value)}
               />

               <input 
               type="email" 
               placeholder="Email"
               value={email}
               onChange={e => setEmail(e.target.value)}
               />

               <input 
               placeholder="Phone"
               value={phone}
               onChange={e => setPhone(e.target.value)}
               />
               
               <div className="input-group">

                   <input 
                   placeholder="City"
                   value={city}
                   onChange={e => setCity(e.target.value)}
                   />

                   <input 
                   placeholder="County" 
                   style={{ width:300 }}
                   value={county}
                   onChange={e => setCounty(e.target.value)}
                   />
               </div>
               <button className="button" type="submit"> Enter</button>
           </form>
       </div>
   </div>
  );
}
