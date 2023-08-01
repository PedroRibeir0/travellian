import { useState, useEffect } from "react"
import { BsArrowRight } from 'react-icons/bs'
import Destinations from '../../components/Destinations'
import { flushSync } from "react-dom"

export default function Hero() {
  
  
  const [current, setCurrent] = useState(0)
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)
  const [destText, setDestText] = useState('')
  const intervalTime = 4000
  
  let width = window.innerWidth
  
  const backgroundImages = [1,2,3,4].map(item=>{
    return `/images/home-bg/home-bg-${width <= 428 ? 'mobile' : width <= 1152 ? 'tablet' : 'desktop'}-${item}.jpg`
  })

  useEffect(()=>{
    
    function changeBackgroundImage(){

      if (current == backgroundImages.length -1){
        setCurrent(0)
        return
      }
      setCurrent(current + 1)
    }

    const bgInterval = setInterval(changeBackgroundImage, intervalTime)

    return ()=>{
      clearInterval(bgInterval)
    }
  }, [current])

  useEffect(()=>{

  }, [destText])


  return (
    <section 
      className="hero" 
      style={{backgroundImage: `url(${backgroundImages[current]})`}}>
        <h1>Start your unforgettable journey with us.</h1>
        <p>The best travel for your journey begins now</p>
        <form className="travel-info-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="input-group">
            <label htmlFor="destination">Destination</label>
            <input 
            type="text" 
            id="destination" 
            value={destText}
            onChange={e=> setDestText(e.target.value)}
            onFocus={()=> {
              setDestText('')
              setIsDestinationsOpen(true)
            }}
            onBlur={()=> {
              setTimeout(()=>setIsDestinationsOpen(false), 100)
            }}/>
            <ul className="destinations-list" 
              style={{display: isDestinationsOpen ? 'flex' : 'none'}}>
              {Destinations.map(dest=>{
                return(
                <li 
                  key={dest.city}
                  className="dest"
                  onClick={e=>setDestText(e.target.innerText)}>
                  {dest.city}, {dest.country}
                </li>)
              })}
            </ul>
          </div>
          <div className="input-group">
            <label htmlFor="person">person</label>
            <select name="" id="person">
              {[1,2,3,4,5,6].map(item=> <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="check-in">check-in</label>
            <input type="date" id="check-in"/>
          </div>
          <div className="input-group">
            <label htmlFor="check-out">check-out</label>
            <input type="date" id="check-out"/>
          </div>
          <button className="book-now-button">
            <span>Book now</span>
            <BsArrowRight className="arrow"/>
          </button>
        </form>
    </section>
  )
}
