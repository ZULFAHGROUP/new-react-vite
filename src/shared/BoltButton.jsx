/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const BoltButton = ({ text,onClick, className}) => {
  return (
      <button onClick={onClick} className={`rounded-2xl p-2 border-[0.2rem] ${className} `}  >{ text}</button>
  )
}

export default BoltButton