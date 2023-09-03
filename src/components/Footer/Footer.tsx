import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <span>© {new Date().getFullYear()}, Dumont Gontran</span>
            <div>
                <a href="https://www.linkedin.com/in/gontran-dumont/" className='link link_linkedin'><FaLinkedin /></a>
                <a href="https://github.com/DumontGontran" className='link link_github'><FaGithubSquare /></a>
                <a href="https://www.malt.fr/profile/gontrandumont" className='link link_malt'>Malt</a>
            </div>
        </footer>
    )
}

export default Footer