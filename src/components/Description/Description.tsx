import '../../pages/index.css'
import './Description.css'
import photo from '../../images/dumont-gontran.webp'

const Description = () => {
    return (
        <section>
            <h1>Front-End Developper/Web Integrator</h1>
            <div className='presentation'>
                <img src={photo} alt='dumont-gontran' className='photo' />
                <ul className='description'>
                    <li className='description_element'>
                        My name is Gontran DUMONT, I have 30 years old, I live in France and I have 2 years of experience in web development.
                    </li>
                    <li className='description_element'>
                        I have significant experience in web integration as well as functionality development.
                    </li>
                    <li className='description_element'>
                        I am curious, rigorous, persevering, and I am able to easily adapt to change.
                    </li>
                    <li className='description_element'>
                    I am ready to take on new challenges and work with dedicated teams.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Description