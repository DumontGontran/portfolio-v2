import Cards from '../components/Card/Cards'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './index.css'

const Projets = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <h2>Mes Projets</h2>
                    <p className='projets_infos'><strong>Information :</strong> Les Projets sont classés des plus récents aux plus anciens.</p>
                    <Cards />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Projets