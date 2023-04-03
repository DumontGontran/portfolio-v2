import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './index.css'
import photo from '../images/dumont-gontran.jpg'

const Presentation = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <h2>DUMONT GONTRAN</h2>
                    <div className='presentation'>
                        <div className='description'>
                            <p className='description_element'>
                                Je suis un Développeur Web agé de 30 ans.
                                Je suis motivé et je possède une bonne maîtrise des outils et technologies les plus récents.
                            </p>
                            <p className='description_element'>
                                Mon expérience et mes compétences me permettent de fournir des solutions web modernes,
                                efficaces et à la pointe de la technologie.
                                Fort de mon savoir-faire et de mon professionnalisme,
                                je suis prêt à relever de nouveaux défis et à travailler avec des équipes dévouées.
                            </p>
                        </div>
                        <img src={photo} alt='dumont-gontran' className='photo' />
                        <ul className='description'>
                            <p className='description_element'>
                                Mes compétences personnelles comprennent la curiosité, la rigueur, la persévérance, l’esprit d’équipe,
                                l’intérêt pour le métier, l’adaptabilité et l’amour de l’apprentissage.
                            </p>
                            <p className='description_element'>
                                J'ai travaillé sur de nombreux projets variés, allant d'un site spécialisé dans le partage de cocktails utilisant React JS 18,
                                à un site e-commerce de restauration avec commande en ligne utilisant SASS,
                                jusqu'à optimiser le SEO avec un site d'agence en ligne offrant des services de SEO.
                            </p>
                        </ul>
                    </div>
                </section>
                <section>
                    <h3>Mes Compétences Techniques</h3>
                    <div>
                        <div className='abilities'>
                            <div className='abilities_element'><strong>Frontend :</strong>
                                <ul>
                                    <li>HTML5, CSS3, SASS, Tailwind</li>
                                    <li>Javascript, Typescript</li>
                                    <li>ReactJS, Redux</li>
                                    <li>VueJS, VueX</li>
                                </ul>
                            </div>
                            <div className='abilities_element'><strong>Backend :</strong>
                                <ul>
                                    <li>NodeJS, ExpressJS</li>
                                    <li>MongoDB, MySQL</li>
                                </ul>
                            </div>
                            <div className='abilities_element'><strong>CMS :</strong>
                                <ul>
                                    <li>WordPress</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h4>Mes Formations</h4>
                    <div>
                        <ul className='studies'>
                            <li className='studies_element'>
                                <strong>Septembre 2021 – Mai 2022</strong>
                                <p>Titre RNCP Développeur Web - Niveau 5</p>
                                <p>Plateforme Web OpenClassRooms</p>
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
            </main>
            <Footer />
        </>
    )
}

export default Presentation