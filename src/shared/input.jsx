/* eslint-disable react/prop-types */
const Input = ({...props}) => {
//   return <input placeholder={placeholder} type={type} className="w-full py-1 px-2 rounded d-block my-2" />
  return <input  {...props} className="w-full py-1 px-2 rounded d-block my-2" />
}


export default Input