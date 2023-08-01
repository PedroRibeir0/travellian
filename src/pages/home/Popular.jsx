import React from 'react'
import MainH2 from '../../components/MainH2'
import MainParagraph from '../../components/MainParagraph'

export default function Popular() {
  return (
    <section className='popular-destinations'>
      <MainH2 text={'Popular Destinations'}/>
      <div className="line"></div>
      <MainParagraph text={'Most popular destinations around the world, from historical places to natural wonders.'}/>
    </section>
  )
}












