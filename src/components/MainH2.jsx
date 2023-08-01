
export default function MainH2({text, light}) {
  return (
    <h2 className={`main-h2 ${light && 'light'}`}>{text}</h2>
  )
}
