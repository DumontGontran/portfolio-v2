import { FaDesktop, FaDev, FaFolder, FaBullseye, FaHandshake, FaRocket } from 'react-icons/fa'
import '../../pages/index.css'
import './MyServices.css'

const MyServices = () => {
    return (
        <section>
            <h2>Les Services Proposés</h2>
            <div className='services_wrapper'>
                <div className='services_element'>
                    <span className='services_offer'>RESPONSIVE</span>
                    <FaDesktop className='services_logo' />
                    <p className='services_description'>
                        Responsive sur tous les supports. Ordinateur, tablette et mobile
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>DÉVELOPPEMENT WEB</span>
                    <FaDev className='services_logo' />
                    <p className='services_description'>
                        Création de site web sur-mesure répondant aux besoins des clients
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>PROJETS WEB</span>
                    <FaFolder className='services_logo' />
                    <p className='services_description'>
                        Landing page, site vitrine, e-commerce, réseaux sociaux, application web
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>RÉFÉRENCEMENT</span>
                    <FaBullseye className='services_logo' />
                    <p className='services_description'>
                        Code optimisé pour le référencement naturel(SEO)
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>ACCOMPAGNEMENT</span>
                    <FaHandshake className='services_logo' />
                    <p className='services_description'>
                        Communication constante avec vous sur l'avancement du projet
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>MAINTENANCE WEB</span>
                    <FaRocket className='services_logo' />
                    <p className='services_description'>
                        Gestion d'hébérgement, garantie d'accessibilité,
                        intégration régulière des mises à jour de sécurité
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MyServices