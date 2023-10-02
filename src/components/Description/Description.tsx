import '../../pages/index.css'
import './Description.css'
import photo from '../../images/dumont-gontran.webp'

const Description = () => {
    return (
        <section>
                    <h1>Développeur Front-end</h1>
                    <div className='presentation'>
                        <img src={photo} alt='dumont-gontran' className='photo' />
                        <ul className='description'>
                        <li className='description_element'>
                                Gontran DUMONT, 30 ans. Bientôt 2 ans d'expériences dans le développement web.
                            </li>
                            <li className='description_element'>
                            Je possède une bonne maîtrise des outils et technologies les plus récents.
                            </li>
                            <li className='description_element'>
                                Je suis curieux, rigoureux, persévérant, et je suis capable de m'adapter facilement au changement.
                            </li>
                            <li className='description_element'>
                                Je suis prêt à relever de nouveaux défis et à travailler avec des équipes dévouées.
                            </li>
                        </ul>
                    </div>
                </section>
    )
}

export default Description