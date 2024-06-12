/* eslint-disable react/prop-types */

const Button = ({ backgroundColor, textColor, title }) => {
  return (
    <button type="button" className={`btn ${backgroundColor} ${textColor} `}>
      {title}
    </button>
  )
}

export default Button
