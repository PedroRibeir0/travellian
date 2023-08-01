import { useState, useEffect } from "react"
import { BsArrowRight } from 'react-icons/bs'
import { LiaAngleDownSolid, LiaAngleUpSolid} from 'react-icons/lia'
import Destinations from '../../components/Destinations'
import { flushSync } from "react-dom"
import MainH2 from "../../components/MainH2"

export default function Hero() {
  
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false)
  const [destinationInputText, setDestinationInputText] = useState('')
  const intervalTime = 4000
  
  let width = window.innerWidth
  
  const backgroundImages = [1,2,3,4].map(item=>{
    return `/images/home-bg/home-bg-${width <= 428 ? 'mobile' : width <= 1152 ? 'tablet' : 'desktop'}-${item}.jpg`
  })

  useEffect(()=>{
    
    function changeBackgroundImage(){

      if (currentIndex == backgroundImages.length -1){
        setCurrentIndex(0)
        return
      }
      setCurrentIndex(currentIndex + 1)
    }

    const bgInterval = setInterval(changeBackgroundImage, intervalTime)

    return ()=>{
      clearInterval(bgInterval)
    }
  }, [currentIndex])

  useEffect(()=>{
    let destList = document.querySelectorAll('.dest')
    destList.forEach(item=>{
      if (!item.innerHTML.toLocaleLowerCase().includes(destinationInputText.toLocaleLowerCase())){
        item.style.display = 'none'
      }else{
        item.style.display = 'flex'
      }
    })
  }, [destinationInputText])


  return (
    <section 
      className="hero" 
      style={{backgroundImage: `url(${backgroundImages[currentIndex]})`}}>
        <MainH2 text={'Start your unforgettable journey with us.'} light/>
        <p>The best travel for your journey begins now</p>
        <div className="bg-carrousel-control">
          <ul className="slide">{backgroundImages.map((item, index)=> 
            <li 
              onClick={e=> setCurrentIndex(e.target.id)}
              id={index}
              key={index} 
              className={`point ${currentIndex == index ? 'current' : ''}`}>
            </li>)}
          </ul>
        </div>
        <div className="form-button">
          <form className="travel-info-form" onSubmit={e=>e.preventDefault()}>
            <div className="input-group">
              <label htmlFor="destination">Destination</label>
              <input
              type="text"
              id="destination"
              value={destinationInputText}
              onChange={e=> setDestinationInputText(e.target.value)}
              onFocus={()=> {
                setDestinationInputText('')
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
                    onClick={e=>setDestinationInputText(e.target.innerText)}>
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
          </form>
          <button className="book-now-button">
            <span>Book now</span>
            <BsArrowRight className="arrow"/>
          </button>
        </div>
    </section>
  )
}
