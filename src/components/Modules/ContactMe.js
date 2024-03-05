import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import '../../css/contactme/ContactMe.css';

function ContactMe({ firebase }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendFormDataToFirebase = () => {
        const db = getDatabase(firebase);
        push(ref(db, 'messages'), formData)
            .then(() => {
                console.log("Data sent successfully");
            })
            .catch((error) => {
                console.error("Error sending data: ", error);
            });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendFormDataToFirebase();
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='form-box'>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                    className='input-field ' 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Name" 
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    className='input-field email' 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea 
                    className='input-field message' 
                    id="message" 
                    name="message" 
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                />

                <div className='bttn-send' type="submit">
                    <p className='send-message'> Send message</p>
                </div>
            </form>
        </div>
    );
}

export default ContactMe;
