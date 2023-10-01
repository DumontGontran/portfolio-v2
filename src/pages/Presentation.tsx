import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact } from 'react-icons/si'
import Cards from '../components/Card/Cards'
import Footer from '../components/Footer/Footer'
import './index.css'
import photo from '../images/dumont-gontran.webp'

const Presentation = () => {
    return (
        <>
            <main>
                <section>
                    <h1>Développeur Front-end</h1>
                    <div className='presentation'>
                        <ul className='description'>
                            <li className='description_element'>
                                Gontran DUMONT, 30 ans. Bientôt 2 ans d'expériences dans le développement web.
                            </li>
                            <li className='description_element'>
                            Je possède une bonne maîtrise des outils et technologies les plus récents.
                            </li>
                        </ul>
                        <img src={photo} alt='dumont-gontran' className='photo' />
                        <ul className='description'>
                            <li className='description_element'>
                                Je suis curieux, rigoureux, persévérant, et je suis capable de m'adapter facilement au changement.
                            </li>
                            <li className='description_element'>
                                Je suis prêt à relever de nouveaux défis et à travailler avec des équipes dévouées.
                            </li>
                            {/* <li className='description_element'>
                                J'ai travaillé sur de <strong>nombreux projets variés</strong>, ce qui me permet de vous proposer un <strong>service de qualité</strong> :
                                <ul>
                                    <li>Mise en application d'un design à partir de maquettes.</li>
                                    <li>Mise en place de fonctionnalités diverses.</li>
                                    <li>Optimisation en matière de référencement (SEO) !</li>
                                    <li>Possibilité de mise en ligne de l'application web sur un hébergement dédié pour vous !</li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </section>
                <section>
                    <h2>Stack Technique utilisée</h2>
                    <div className='abilities'>
                        <ul>
                            <li className='abilities_element'><SiHtml5 className='skill_logo' color='darkorange' /><SiCss3 className='skill_logo' color='royalblue' /><SiSass className='skill_logo' color='deeppink' /></li>
                            <li className='abilities_element'><SiJavascript className='skill_logo' color='gold' /><SiTypescript className='skill_logo' color='dodgerblue' /><SiReact className='skill_logo' color='dodgerblue' /></li>
                        </ul>
                    </div>
                    <h3>Mes Formations</h3>
                    <div className='studies'>
                        <ul>
                            <li className='studies_element'>
                                <strong>Septembre 2021 – Mai 2022</strong>
                                <p>Titre RNCP Développeur Web - BAC+2</p>
                                <p>OpenClassRooms</p>
                            </li>
                            <li className='studies_element'>
                                <strong>2014</strong>
                                <p>Certificat Informatique et Internet(C2i)</p>
                                <p>UVHC(Mont Houy) / Valenciennes</p>
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