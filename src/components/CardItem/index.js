import './index.css'

const CardItem = props => {
  const {cardsList} = props
  return (
    <ul className="cards" type="none">
      {cardsList.map(eachItem => (
        <li key={eachItem.id} className={eachItem.className}>
          <h1 className="heading">{eachItem.title}</h1>
          <p className="para">{eachItem.description}</p>
          <div className="imageContainer">
            <img src={eachItem.imgUrl} className="img" alt={eachItem.title} />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CardItem
