import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact } from 'react-icons/si'
import '../../pages/index.css'
import './AbilitiesAndStudies.css'

const AbilitiesAndStudies = () => {
    return (
        <>
            <section>
                <h4>Stack Technique utilisée</h4>
                <div className='abilities'>
                    <ul>
                        <li className='abilities_element'><SiHtml5 className='skill_logo' color='darkorange' /><SiCss3 className='skill_logo' color='royalblue' /><SiSass className='skill_logo' color='deeppink' /></li>
                        <li className='abilities_element'><SiJavascript className='skill_logo' color='gold' /><SiTypescript className='skill_logo' color='dodgerblue' /><SiReact className='skill_logo' color='dodgerblue' /></li>
                    </ul>
                </div>
            </section>
            <section>
                <h5>Mes Formations</h5>
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
        </>
    )
}

export default AbilitiesAndStudies