import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiExpress, SiMysql, SiMongodb } from 'react-icons/si'
import '../../pages/index.css'
import './AbilitiesAndStudies.css'

const AbilitiesAndStudies = () => {
    return (
        <>
            <section>
                <h4>Technical Stack</h4>
                <div className='abilities'>
                    <ul>
                        <span className='abilities_title'>Frontend:</span>
                        <li className='abilities_element'><SiHtml5 className='skill_logo' color='darkorange' /><SiCss3 className='skill_logo' color='royalblue' /></li>
                        <li className='abilities_element'><SiJavascript className='skill_logo' color='gold' /><SiTypescript className='skill_logo' color='dodgerblue' /></li>
                        <li className='abilities_element'><SiReact className='skill_logo' color='dodgerblue' /></li>
                    </ul>
                    <ul>
                        <span className='abilities_title'>Backend:</span>
                        <li className='abilities_element'><SiNodedotjs className='skill_logo' color='green' /><SiExpress className='skill_logo' color='black' /></li>
                        <li className='abilities_element'><SiMysql className='skill_logo' color='black' /><SiMongodb className='skill_logo' color='green' /></li>
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