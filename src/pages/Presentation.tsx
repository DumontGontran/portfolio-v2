import { FaHtml5, FaCss3, FaSass } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import Cards from '../components/Card/Cards'
import Footer from '../components/Footer/Footer'
import './index.css'
import photo from '../images/dumont-gontran.jpg'

const Presentation = () => {
    return (
        <>
            <main>
                <section>
                    <h1>Développeur Front-end</h1>
                    <div className='presentation'>
                        <ul className='description'>
                            <li className='description_element'>
                                Je m'appelle <strong>Gontran DUMONT</strong>.
                                Je suis motivé et je possède <strong>une bonne maîtrise des outils et technologies</strong> les plus récents.
                            </li>
                            <li className='description_element'>
                                Mon expérience et mes compétences me permettent de <strong>fournir des solutions web modernes,
                                    efficaces et à la pointe de la technologie</strong>.
                                Fort de mon <strong>savoir-faire</strong> et de mon <strong>professionnalisme</strong>,
                                je suis prêt à relever de nouveaux défis et à travailler avec des équipes dévouées.
                            </li>
                        </ul>
                        <img src={photo} alt='dumont-gontran' className='photo description_element' />
                        <ul className='description'>
                            <li className='description_element'>
                                Mes compétences personnelles comprennent <strong>la curiosité, la rigueur, la persévérance, l’esprit d’équipe,
                                    l’intérêt pour le métier, l’adaptabilité</strong> et l’amour de l’apprentissage.
                            </li>
                            <li className='description_element'>
                                J'ai travaillé sur de <strong>nombreux projets variés</strong>, ce qui me permet de vous proposer un <strong>service de qualité</strong> :
                                <ul>
                                    <li>Mise en application d'un design à partir de plans fournies.</li>
                                    <li>Mise en place de fonctionnalités diverses.</li>
                                    <li>Optimisation en matière de référencement (SEO) !</li>
                                    <li>Possibilité de mise en ligne de l'application web sur un hébergement dédié pour vous !</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h2>Mes Compétences Techniques utilisées</h2>
                    <div>
                        <div className='abilities'>
                            <ul>
                                <li className='abilities_element'><FaHtml5 className='skill_logo' color='darkorange' /><FaCss3 className='skill_logo' color='royalblue' /><FaSass className='skill_logo' color='deeppink' /></li>
                                <li className='abilities_element'><SiJavascript className='skill_logo' color='gold' /><SiTypescript className='skill_logo' color='dodgerblue' /></li>
                            </ul>
                        </div>
                    </div>
                    <h3>Mes Formations</h3>
                    <div className='studies'>
                        <ul>
                            <li className='studies_element'>
                                <strong>Septembre 2021 – Mai 2022</strong>
                                <p>Titre RNCP Développeur Web - Niveau 5</p>
                                <p>OpenClassRooms</p>
                            </li>
                            <li className='studies_element'>
                                <strong>2014</strong>
                                <p>Certificat Informatique et Internet(C2i)</p>
                                <p>Université du Mont Houy(UVHC) / Valenciennes</p>
                            </li>
                            <li className='studies_element'>
                                <strong>2012</strong>
                                <p>Baccalauréat - Scientifique</p>
                                <p>Lycée Fénelon / Cambrai</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h4>Mes Projets</h4>
                    <Cards />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Presentation