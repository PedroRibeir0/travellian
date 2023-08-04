import Carrousel from "../../components/Carrousel";
import MainH2 from "../../components/MainH2";
import MainParagraph from "../../components/MainParagraph";
import SeeMoreButton from "../../components/SeeMoreButton";
import {AiFillStar} from 'react-icons/ai'

export default function SpecialOffer({width}) {

  const isCarrousel = width < 1152

  const specialOffersInfo = [
    {
      local: 'Lisbon, Portugal',
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 500,
      stars: 5,
      img: '/images/special-offers/lisbon.jpg'
    },
    {
      local: 'Athens, Greece',
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 500,
      stars: 5,
      img: '/images/special-offers/greece.jpg'
    },
    {
      local: 'Rome, Italy',
      description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
      price: 500,
      stars: 5,
      img: '/images/special-offers/rome.jpg'
    },
  ].map(item=>{
    return (
      <li 
      key={item.local} className={'carrousel-item'} 
      style={{width: isCarrousel && window.innerWidth-40}}>
        <img src={item.img} alt={item.local} />
        <div className="texts">
          <h3>{item.local}</h3>
          <ul className="stars-container">
            {stars(item.stars)}
          </ul>
          <p>{item.description}</p>
          <div className="details">
            <span className="price">
              <span className="from">From</span>
              {`€${item.price}`}
            </span>
            <button className="details-button">Details</button>
          </div>
        </div>
      </li>
  )})

  function stars(number_of_stars){
    const starList = Array.from(
    { length: (number_of_stars - 1) / 1 + 1 },
    (i, index) => 1 + index * 1
    );
    return starList.map(item=>{
      return( 
      <li className="star">
        <AiFillStar className="star"/>
      </li>)
    })
  }

  return (
    <section className="special-offer">
        <MainH2 text={'Special Offer'} line/>
        <MainParagraph text={'Check out our special offer and discounts'}/>
        {!isCarrousel && <SeeMoreButton text={'see all offers'}/>}
        <div className="offers-carrousel">
        {width < 1152 ? <Carrousel item_list={specialOffersInfo}/> : 
        <ul className="offers-desktop-list">
          {specialOffersInfo}
        </ul>}
        </div>
    </section>
  )
}
