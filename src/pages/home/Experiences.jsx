import Carrousel from "../../components/Carrousel";
import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";

export default function Experiences({stars}) {

    const travelersExperience = [
        {
            name: 'John Doe',
            occupation: 'Musician',
            stars: 5,
            avatar: '/images/icons/avatar-1.svg'
        },
        {
            name: 'John Smith',
            occupation: 'Journalist, HWO News',
            stars: 5,
            avatar: '/images/icons/avatar-2.svg'
        },
        {
            name: 'Tamara Bellis',
            occupation: 'Managing Director, JTH',
            stars: 5,
            avatar: '/images/icons/avatar-3.svg'
        },
        {
            name: 'John Martin',
            occupation: 'Musician',
            stars: 5,
            avatar: '/images/icons/avatar-1.svg'
        },
        {
            name: 'John Ribeiro',
            occupation: 'Journalist, HWO News',
            stars: 5,
            avatar: '/images/icons/avatar-2.svg'
        },
    ]

    return (
    <section className="experiences">
        <MainH2 text={'Traveler’s Experiences'} line/>
        <MainParagraph text={'Here some awesome feedback from our travelers'}/>
        <Carrousel item_list={travelersExperience.map(item=>{
            return(
            <li key={item.name} className="carrousel-item">
                <img src={item.avatar} alt="" className="avatar"/>
                <p className="msg">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.
                </p>
                <ul className="stars">
                    {stars(item.stars)}
                </ul>
                <div className="user-info">
                    <span className="user-name">{item.name}</span>
                    <span className="user-occupation">{item.occupation}</span>
                </div>
            </li>)
        })}/>
    </section>
  )
}
