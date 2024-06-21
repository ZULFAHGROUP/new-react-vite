/* eslint-disable react/prop-types */
import BoltDescription from "./BoltDescription"

const BoltCardAndText = ({ image, header,details=[] }) => {


  return (
    <div className="container d-flex w-100 justify-content-between  ">
      <div className="w-50  rounded overflow-hidden ">
        <img src={image} alt="img" className="img-fluid " />
      </div>
      <div className="text-start">
        <h2>{header}</h2>

        {details.map((detail) => (
          <BoltDescription key={detail.numbering} {...detail} />
        ))}
        {/* <BoltDescription numbering="1" title="first" text="Hello" />
        <BoltDescription numbering="2" title="second" text="Hi" />
        <BoltDescription numbering="3" title="third" text="You" /> */}
      </div>
    </div>
  )
}

export default BoltCardAndText
