/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const BoltButton = ({ text,onClick, style}) => {
  return (
      <button onClick={onClick} className="rounded-pill p-2 " style={style} >{ text}</button>
  )
}

export default BoltButton