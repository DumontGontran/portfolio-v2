import Cards from '../components/Card/Cards'
import Description from '../components/Description/Description'
import Abilities from '../components/Abilities/Abilities'
import MyServices from '../components/MyServices/MyServices'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import './index.css'

const Presentation = () => {
    return (
        <>
            <main>
                <Description />
                <MyServices />
                <Cards />
                <Abilities />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default Presentation