import { BsArrowRight } from 'react-icons/bs'


export default function SeeMoreButton({text}) {
  return (
    <button className="see-more-button">
        <span>{text}</span>
        <BsArrowRight className='arrow'/>
    </button>
  )
}
