import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";
import { useRef, useEffect, useState } from "react";

export default function TripPlanners({width, stars}) {

  const media = width < 768 ? 'mobile' : width < 1152 ? 'tablet' : 'desktop'
  
  const tripPlannersInfo = [
    {
      local: 'rome',
      price: 99,
      days: 7,
      stars: 5,
      img: `/images/trip-planners/rome-planner-${media}.jpg`
    },
    {
      local: 'paris',
      price: 95,
      days: 7,
      stars: 5,
      img: `/images/trip-planners/paris-planner-${media}.jpg`
    },
    {
      local: 'barcelona',
      price: 89,
      days: 7,
      stars: 5,
      img: `/images/trip-planners/barcelona-planner-${media}.jpg`
    },
    {
      local: 'budapest',
      price: 89,
      days: 7,
      stars: 5,
      img: `/images/trip-planners/budapest-planner-${media}.jpg`
    },
    {
      local: 'berlin',
      price: 89,
      days: 7,
      stars: 5,
      img: `/images/trip-planners/berlin-planner-${media}.jpg`
    },
    {
      local: 'london',
      price: 95,
      days: 7,
      stars: 5,
      img: `/images/trip-planners/london-planner-${media}.jpg`
    },
  ]

  const [selected, setSelected] = useState(0)
  const [translate, setTranslate] = useState(0)
  const tripCarrousel = useRef(null)

  useEffect(()=>{
    if (width < 1152){
      setTranslate(0)
      setSelected(0)
    }
    function handleInterval(){

      const itemWidth = tripCarrousel.current.scrollWidth / tripPlannersInfo.length
      if(selected == tripPlannersInfo.length-1){
        setSelected(0), setTranslate(0)
        return
      }
      setSelected(selected + 1)
      setTranslate(translate - itemWidth)
    }
    const tripCarrouselInterval = setInterval(handleInterval, 3000)

    return ()=> clearInterval(tripCarrouselInterval)
  }, [selected])

  return (
    <section className="trip-planners">
        <div className="texts">
            <MainH2 text={'Trip Planners'} line/>
            <MainParagraph text={'20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start traveling, start throwing off the bowlines.'}/>
            <button className="trip-planners-button">
              <div className="top-square"></div>
              <span>View all trip planners</span>
              <div className="bottom-square"></div>
            </button>
            <ul className="slide">
              {tripPlannersInfo.map((item, index)=>{
                return <li 
                  key={item.local}
                  className={`point ${index == selected && 'selected'}`} 
                  id={index}
                  onClick={(e)=>{
                    let id = parseInt(e.target.id)
                    setSelected(id)
                    setTranslate(
                      -(tripCarrousel.current.scrollWidth / tripPlannersInfo.length) * id
                    )
                  }}
                  ></li>
              })}
            </ul>
        </div>
        <div className="planners-container" ref={tripCarrousel}>
          <ul className="planners-list" style={{transform: `translateX(${translate}px)`}}>
            {tripPlannersInfo.map((item, index)=>{
            return (
            <li className={`planner ${index == selected && 'selected'}`} key={item.local}>
              <img src={item.img} alt={item.local} />
              <div className="planner-info">
                <div className="tour-price">
                  <span className="tour">guided tour</span>
                  <span className="days">{`€${item.price}/Day`}</span>
                </div>
                <span className="tour-local">{`${item.local} city tour`}</span>
                <div className="stars-days">
                  <ul className="stars">{stars(item.stars)}</ul>
                  <span>{`${item.days} Days tour`}</span>
                </div>
              </div>
            </li>)})}
          </ul>
        </div>
    </section>
  )
}
