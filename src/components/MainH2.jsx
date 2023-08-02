
export default function MainH2({text, light, line}) {
  return (
    <h2 className={`main-h2 ${light && 'light'}`}>
      <span>{text}</span>
      {line && <div className="line"></div>}
    </h2>
  )
}
