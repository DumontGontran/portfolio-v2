import { FaLinkedin, FaGithubSquare, FaEnvelopeOpenText } from 'react-icons/fa'
import '../../pages/index.css'
import './Contact.css'

const Contact = () => {

    return (
        <section>
            <h6>Démarrons un projet ensemble, n'hésitez pas à me contacter !</h6>
            <div className='link_wrapper'>
                <div className='link_display'>
                    <span className='link_description'>Email:</span>
                    <a href="mailto:dumont.gontran@orange.fr" className='link link_mail'><FaEnvelopeOpenText /></a>
                </div>
                <div className='link_display'>
                    <span className='link_description'>Malt:</span>
                    <a href="https://www.malt.fr/profile/gontrandumont" className='link link_malt'>Malt</a>
                </div>
                <div className='link_display'>
                    <span className='link_description'>LinkedIn:</span>
                    <a href="https://www.linkedin.com/in/gontran-dumont/" className='link link_linkedin'><FaLinkedin /></a>
                </div>
                <div className='link_display'>
                    <span className='link_description'>Github:</span>
                    <a href="https://github.com/DumontGontran" className='link link_github'><FaGithubSquare /></a>
                </div>
            </div>
        </section >
    )
}

export default Contact