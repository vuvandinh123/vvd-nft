import heart1 from "../../../public/Heart.svg"
import heart2 from "../../../public/Heart2.svg"
import { useState } from "react"
import { PropTypes } from "prop-types"
import ImageLoader from "./ImageLoader"
import { useCountDown } from "../../hooks"
import { Link } from "react-router-dom"
import { shortened } from "../../utils"

const Card = (props) => {
  const [heart,setHeart] = useState(false);
  const {name,price,author,image,id,address,col} = props;
  const short = shortened(author);
  const timeCountDown = new Date(`2023-08-23T12:00:00`).getTime();
  const { time } = useCountDown("days",timeCountDown );
  return (
    <div className="card" style={{'--col':col}}>
      <div onClick={()=>setHeart(!heart)} className="card__heart d-center">
        <img className="" src={heart ? heart1 : heart2} alt="" />
      </div>
      <div className="card__image d-center relative">
        <Link style={{ display:"block" }} to={`/item/${address}/${id}`}><ImageLoader src={image} alt={name} /></Link>
      </div>
      <div className="card__content">
        <div className="card__title"><h3>{name}</h3></div>
        <div className="card__outher">
          Created by <Link to={''}>{short}</Link>
        </div>
        <div className="card__bottom">
          <div className="card__price">
            <p className="text-gray">Current Bid</p>
            <h4 className=""><i style={{ marginRight:"5px" }} className="fa-brands fa-ethereum text-yellow"></i> {price} <span className="" style={{ letterSpacing:"2px" }}>ETH</span></h4>
          </div>
          <div className="card__time">
            <p className="text-gray">Remaining Time</p>
            <h5>
              <span className="card-hours"> {time.hours}</span> : 
              <span className="card-min"> {time.minutes}</span> : 
              <span className="card-sec"> {time.seconds}</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="card__btn">
        <Link to={`item/${id}`}>Collect Now</Link>
      </div>
    </div>
  )
}
Card.propTypes = {
  id:PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  col:PropTypes.number
}
export default Card
