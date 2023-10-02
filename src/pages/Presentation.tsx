import Cards from '../components/Card/Cards'
import Description from '../components/Description/Description'
import AbilitiesAndStudies from '../components/AbilitiesAndStudies/AbilitiesAndStudies'
import MyServices from '../components/MyServices/MyServices'
import Footer from '../components/Footer/Footer'
import './index.css'

const Presentation = () => {
    return (
        <>
            <main>
                <Description />
                <MyServices />
                <Cards />
                <AbilitiesAndStudies />
            </main>
            <Footer />
        </>
    )
}

export default Presentation