import {useRef, useState, useEffect} from 'react'
import MainH2 from '../../components/MainH2'
import MainParagraph from '../../components/MainParagraph'
import Arrows from '../../components/Arrows'

export default function Popular() {
  
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(()=>{

    const handleResize = ()=> setWidth(window.innerWidth)

    window.addEventListener('load', handleResize)
    window.addEventListener('resize', handleResize)
  }, [])
  const [translate, setTranslate] = useState(0)
  const carrousel = useRef(null)
  const PopularDestInfo = [
    {
      name: 'Monument of Berlin',
      location: 'Berlin, Germany',
      img: '/images/popular-dest/monument-of-berlin'
    },
    {
      name: 'Millennium Bridge',
      location: 'London, United Kingdom',
      img: '/images/popular-dest/millennium-bridge'
    },
    {
      name: 'Rialto Bridge',
      location: 'Venice, Italy',
      img: '/images/popular-dest/rialto-bridge'
    },
    {
      name: 'Cristo Redentor',
      location: 'Rio de Janeiro, Brazil',
      img: '/images/popular-dest/cristo-redentor'
    },
    {
      name: 'Sea of Orange Tiles',
      location: 'Lisbon, Portugal',
      img: '/images/popular-dest/sea-of-orange-tiles'
    },
    {
      name: 'Taj Mahal',
      location: 'Agra, India',
      img: '/images/popular-dest/taj-mahal'
    },
  ]

  console.log(width)

  function handleLeftArrowClick (){
    let itemWidth = carrousel.current.scrollWidth / PopularDestInfo.length
    if (translate >= 0) return
    setTranslate(translate + itemWidth)
  }
  function handleRightArrowClick (){
    let itemWidth = carrousel.current.scrollWidth / PopularDestInfo.length
    let maxTranslate = -carrousel.current.scrollWidth + itemWidth
    if (translate <= maxTranslate) return
    setTranslate(translate - itemWidth)
  }

  return (
    <section className='popular-destinations'>
      <MainH2 text={'Popular Destinations'} line/>
      <MainParagraph text={'Most popular destinations around the world, from historical places to natural wonders.'}/>
      <div className="popular-carrousel">
        <ul className='inner-carrousel' style={{transform: `translateX(${translate}px)`}} ref={carrousel}>
          {PopularDestInfo.map(item=>{
            console.log(item)
            return(
              <li key={item.name} className='carrousel-item'>
                <img src={`${item.img}-${width < 768 ? 'mobile' : width < 1152 ? 'tablet' : 'desktop'}.jpg`} alt="" />
                <div className='texts'>
                  <span className='destination'>{item.name}</span>
                  <span className='location'>
                    <img src="/images/icons/location-icon.svg" alt="" className='location-icon'/>
                    <span>{item.location}</span>
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <Arrows
        handleLeftArrowClick = {handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
      />
    </section>
  )
}












