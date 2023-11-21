import { SiHtml5, SiCss3, SiSass, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiVuedotjs } from 'react-icons/si'
import '../../pages/index.css'
import './AbilitiesAndStudies.css'

const AbilitiesAndStudies = () => {
    return (
        <>
            <section>
                <h4>Technical Stack</h4>
                <div className='abilities'>
                    <ul>
                        <li className='abilities_element'><SiHtml5 className='skill_logo' color='darkorange' /><SiCss3 className='skill_logo' color='royalblue' /></li>
                        <li className='abilities_element'><SiSass className='skill_logo' color='deeppink' /><SiTailwindcss className='skill_logo' color='#00DDB8' /></li>
                        <li className='abilities_element'><SiJavascript className='skill_logo' color='gold' /><SiTypescript className='skill_logo' color='dodgerblue' /></li>
                        <li className='abilities_element'><SiReact className='skill_logo' color='dodgerblue' /><SiVuedotjs className='skill_logo' color='black' fill='#00DDB8' strokeWidth='1.25' /></li>
                    </ul>
                </div>
            </section>
            <section>
                <h5>My Training</h5>
                <div className='studies'>
                    <ul>
                        <li className='studies_element'>
                            <strong>September 2021 – May 2022</strong>
                            <p>Web Developper - RNCP level 5 title(BAC+2)</p>
                            <p>OpenClassRooms</p>
                        </li>
                        <li className='studies_element'>
                            <strong>2014</strong>
                            <p>Computer and Internet Certificate</p>
                            <p>UVHC(Mont Houy) / Valenciennes</p>
                        </li>
                        <li className='studies_element'>
                            <strong>2012</strong>
                            <p>Baccalaureate - Scientist</p>
                            <p>Lycée Fénelon / Cambrai</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AbilitiesAndStudies