import { useState, useRef } from "react"
import Arrows from "./Arrows"

export default function Carrousel({item_list, media}) {

    const carrousel = useRef(null)
    const [translate, setTranslate] = useState(0)

    function handleLeftArrowClick (){
        let itemWidth = carrousel.current.scrollWidth / item_list.length
        if (translate >= 0) return
        setTranslate(translate + itemWidth)
      }
      function handleRightArrowClick (){
        let itemWidth = carrousel.current.scrollWidth / item_list.length
        let maxTranslate = -carrousel.current.scrollWidth + itemWidth*(media == 'desktop' ? 2 : 1) 
        if (translate <= maxTranslate) {
          setTranslate(0)
          return
        }
        setTranslate(translate - itemWidth)
      }

    return (
    <>
    <div className="carrousel">
        <ul className="inner-carrousel" style={{transform: `translateX(${translate}px)`}} ref={carrousel}>
            {item_list}
        </ul>
    </div>
    <Arrows
        handleLeftArrowClick = {handleLeftArrowClick}
        handleRightArrowClick={handleRightArrowClick}
      />
    </>
  )
}
