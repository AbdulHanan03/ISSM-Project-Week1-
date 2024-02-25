

const Card = (props:any) => {
  return (
    <div className="card">
      {props.status==='available' && <div className="card-status">SOLD OUT</div>}
        <img className="card-pic" src={props.img} />
        <div>
            <img src="src/images/star.png" className="card-star"/>
            <span>{props.rating}</span>
            <span style={{color:'gray'}}> ({props.reviews})</span>
            <span style={{color:'gray'}}> * {props.location}</span>

        </div>
        <p>{props.desc}</p>
        <p><span style={{color:'Blue'}}>From ${props.price}</span> /person</p>
    </div>
  )
}

export default Card