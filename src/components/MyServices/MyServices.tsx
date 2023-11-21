import { FaDesktop, FaDev, FaFolder, FaBullseye, FaHandshake, FaRocket } from 'react-icons/fa'
import '../../pages/index.css'
import './MyServices.css'

const MyServices = () => {
    return (
        <section>
            <h2>Services Offered</h2>
            <div className='services_wrapper'>
                <div className='services_element'>
                    <span className='services_offer'>RESPONSIVE</span>
                    <FaDesktop className='services_logo' />
                    <p className='services_description'>
                        Responsive on all media. Computer, tablet and mobile
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'> WEB DEVELOPMENT</span>
                    <FaDev className='services_logo' />
                    <p className='services_description'>
                        Creation of tailor-made website meeting customer needs
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>WEB PROJECTS</span>
                    <FaFolder className='services_logo' />
                    <p className='services_description'>
                        Landing page, showcase site, e-commerce, social networks, web application
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>SEO</span>
                    <FaBullseye className='services_logo' />
                    <p className='services_description'>
                        Code optimized for natural referencing
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>ACCOMPANIEMENT</span>
                    <FaHandshake className='services_logo' />
                    <p className='services_description'>
                        Constant communication with you on the progress of the project
                    </p>
                </div>
                <div className='services_element'>
                    <span className='services_offer'>WEB MAINTENANCE</span>
                    <FaRocket className='services_logo' />
                    <p className='services_description'>
                        Accommodation management, accessibility guarantee,
                        regular integration of security updates
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MyServices