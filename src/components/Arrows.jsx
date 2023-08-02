
export default function Arrows({handleLeftArrowClick, handleRightArrowClick}) {
  return (
    <div className="arrows">
        <img onClick={handleLeftArrowClick}src="/images/icons/blue-arrow.svg" alt="left-arrow" />
        <img onClick={handleRightArrowClick}src="/images/icons/orange-arrow.svg" alt="right-arrow" />
    </div>
  )
}
