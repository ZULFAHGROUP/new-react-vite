/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <div className="d-flex gap-3">
      <div className="">
        <img src={props.image} alt="iconThree" className="img-fluid" />
      </div>
      <div className="" style={{ color: "#2B4B80" }}>
        <h3>{props.title}</h3>
        <p style={{ fontWeight: "400", width: "20rem" }}>{props.text}</p>
      </div>
    </div>
  )
}

export default Card
