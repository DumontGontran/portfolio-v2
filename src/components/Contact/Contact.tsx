import { ChangeEvent, useState } from 'react';
import '../../pages/index.css'
import './Contact.css'
import Email from './smtp';

const Contact = () => {
    const [form, setForm] = useState({
        email: '',
        subject: '',
        message: ''
    })

    const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    /* Email.send({
        Host: ``,
        Username: ``,
        Password: ``,
        To: ``,
        From: ``,
        Subject: ``,
        Body: ``
    }).then(
        message => alert(message)
    ) */

    return (
        <section>
            <h6>Démarrons un projet ensemble, n'hésitez pas à me contacter !</h6>
            <form>
                <label htmlFor='email'>Votre Email: *</label>
                <input type='email' name='email' id='email' required value={form.email} onChange={handleFormChange} />
                <label htmlFor='subject'>Sujet: *</label>
                <input type='subject' name='subject' id='subject' required value={form.subject} onChange={handleFormChange} />
                <label htmlFor='message'>Votre message: *</label>
                <textarea name='message' id='message' cols={25} rows={10} required value={form.message} onChange={handleFormChange}></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </section>
    )
}

export default Contact