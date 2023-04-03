import { FaLinkedin, FaGithubSquare, FaHome, FaList } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <div className='link_navigation'>
                    <Link to='/' className='link'><FaHome /></Link>
                    <Link to='/projets' className='link'><FaList /></Link>
                </div>
                <h1>Mon Portfolio</h1>
                <div className='link_social'>
                    <a href="https://www.linkedin.com/in/gontran-dumont/" className='link'><FaLinkedin /></a>
                    <a href="https://github.com/DumontGontran" className='link'><FaGithubSquare /></a>
                </div>
            </nav>
        </header>
    )
}

export default Header