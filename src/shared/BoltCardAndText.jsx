/* eslint-disable react/prop-types */
import BoltDescription from "./BoltDescription"

const BoltCardAndText = ({ image, header, details = [] }) => {
  return (
    <div className="px-20 flex w-full justify-between  ">
      <div className="w-1/2  rounded-md overflow-hidden ">
        <img src={image} alt="img" className="img-fluid " />
      </div>
      <div className="text-start space-y-3">
        <h2 className="text-[2rem] font-bold ">{header}</h2>

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
