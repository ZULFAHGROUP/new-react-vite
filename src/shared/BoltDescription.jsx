/* eslint-disable react/prop-types */

const BoltDescription = ({ numbering, title, text }) => {
  return (
    <div className="d-flex gap-3">
      <p
        className=" p-2 rounded-circle text-light d-flex justify-content-center mt-2 align-items-center "
        style={{ backgroundColor: "#32bb78", width: "20px", height: "20px" }}
      >
        {numbering}
      </p>
      <div >
        <h3>{title}</h3>
        <p style={{ width: "25rem" }}>{text}</p>
      </div>
    </div>
  )
}

export default BoltDescription
