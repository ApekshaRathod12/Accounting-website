import React, { useEffect, useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

function Contact() {

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");    
    const navigate = useNavigate();

    // const navigate= useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        // if (auth) {
        //     navigate("/")
        // }
    })

    const collectData = async () => {
        console.log(name, email, contact);
        let result = await fetch('http://localhost:4000/post', {
            method: 'post',
            body: JSON.stringify({ name, contact, email }),
            headers: {
                'content-Type': 'application/json',
            }
        });

        result = await result.json()
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        // if (result) {
        //     navigate("/");  
        // }
    }

  return (
    <div className='contact-container'>
    
    <h2 className='ctc-head'>Contact Us</h2>
    <div className='ctc'>
    <div className='ctc-l'>
      <h3>Ahmedabad , Gujarat</h3>
      <h3>+91 1234567890</h3>
      <h3><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>xyz12@gmail.com</a></h3>
    </div>
    <div className='ctc-r'>
    <form className='contact-form'>

        <label className='form-label'>Name </label>
        <input type='text' name='name' placeholder='Your Name' className='form-field' value={name} onChange={(e)=>setName(e.target.value)} ></input>

        <label className='form-label'>Contact No </label>
        <input type='text' name='contact' placeholder='Your contact' className='form-field' value={contact} onChange={(e)=>setContact(e.target.value)}></input>

        <label className='form-label'>Email</label>
        <input type='email' name='email' placeholder='Your email' className='form-field' value={email} onChange={(e)=>setEmail(e.target.value)}></input>

        <button className='form-btn' onClick={collectData}>Submit</button>
      </form>
    </div>

    </div>
    

      
    </div>
  )
}

export default Contact;