import { BsArrowRight } from 'react-icons/bs'
import MainH2 from '../../components/MainH2'
import MainParagraph from '../../components/MainParagraph'
import Carrousel from '../../components/Carrousel'

export default function Popular({width}) {
  const media = width < 768 ? 'mobile' : width < 1152 ? 'tablet' : 'desktop'

  const PopularDestInfo = [
    {
      name: 'Monument of Berlin',
      location: 'Berlin, Germany',
      img: `/images/popular-dest/monument-of-berlin-${media}.jpg`
    },
    {
      name: 'Millennium Bridge',
      location: 'London, United Kingdom',
      img: `/images/popular-dest/millennium-bridge-${media}.jpg`
    },
    {
      name: 'Rialto Bridge',
      location: 'Venice, Italy',
      img: `/images/popular-dest/rialto-bridge-${media}.jpg`
    },
    {
      name: 'Cristo Redentor',
      location: 'Rio de Janeiro, Brazil',
      img: `/images/popular-dest/cristo-redentor-${media}.jpg`
    },
    {
      name: 'Sea of Orange Tiles',
      location: 'Lisbon, Portugal',
      img: `/images/popular-dest/sea-of-orange-tiles-${media}.jpg`
    },
    {
      name: 'Taj Mahal',
      location: 'Agra, India',
      img: `/images/popular-dest/taj-mahal-${media}.jpg`
    },
  ]

  return (
    <section className='popular-destinations'>
      <MainH2 text={'Popular Destinations'} line/>
      <MainParagraph text={'Most popular destinations around the world, from historical places to natural wonders.'}/>
      <Carrousel
      media={media}
      item_list={PopularDestInfo.map(item=>{
        return(
          <li key={item.name} className='carrousel-item'>
            <img src={item.img} alt="" />
            <div className='texts'>
              <span className='destination'>{item.name}</span>
              <span className='location'>
                <img src="/images/icons/location-icon.svg" alt="" className='location-icon'/>
                <span>{item.location}</span>
              </span>
              <button className='read-more-button'>

              </button>
            </div>
          </li>)
      })}
      />
    </section>
  )
}











