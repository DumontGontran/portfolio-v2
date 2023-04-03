import { useSelector } from 'react-redux'
import { store } from '../../store'
import './Cards.css'

const Cards = () => {
    interface Projet {
        id: number;
        title: string;
        logo: string;
        alt: string;
        technos: string;
        description: string;
        link: string;
    }

    const projets: Array<Projet> = useSelector(() => store.getState().Projets.projets)
    return (
        <section className='wrapper'>
            {projets && projets.map((projet) =>
                <a href={projet.link} key={projet.id} className='projet_link'>
                    <article>
                        <span className='projet_title'>{projet.title}</span>
                        <img src={projet.logo} alt={projet.alt} className='projet_logo' />
                        <div>
                            <p className='projet_tech'>{projet.technos}</p>
                            <p className='projet_description'>{projet.description}</p>
                        </div>
                    </article>
                </a>
            )}
        </section>
    )
}

export default Cards