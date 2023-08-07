import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";
import {motion} from 'framer-motion'
import { useRef, useEffect } from "react";

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
  const dragCarrousel = useRef()

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
        </div>
        <motion.div className="planners-container">
          <motion.ul
            ref={dragCarrousel}
            className="planners-list" 
            drag={width >= 1152 ? 'x' : ''}
            whileDrag={{cursor: 'grabbing'}}
            whileHover={{cursor: 'grab'}}
            dragConstraints={{
              left: -1310,
              right: 0
            }}
            dragElastic={0.2}
          >
            {tripPlannersInfo.map(item=>{
              return (
              <motion.li className="planner" key={item.local}>
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
              </motion.li>
            )})}
          </motion.ul>
        </motion.div>
    </section>
  )
}
