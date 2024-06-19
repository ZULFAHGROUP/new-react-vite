/* eslint-disable no-unused-vars */
// import { useState } from "react"
import { useState } from "react"
import Input from "../shared/input"

const StatePage = () => {
  const [showPassword, setShowPassword] = useState(false)

  function ShowMyPassword() {
    setShowPassword(!showPassword)
  }

  // const [number, setNumber] = useState(0)

  //     function increase() {

  //         // setNumber(number + 1)
  //         // setNumber(number + 1)

  //     setNumber(prevNumber => prevNumber + 1)
  //   }
  //   function decrease() {
  //     if ( number <= 0) {
  //       return 0
  //     }
  //     setNumber(number - 1)
  //   }

  // console.log(number)

  // function submitFile() {

  //     alert('Please enter')
  // }

  return (
    <div
      className="d-flex w-100 justify-content-center align-items-center "
      style={{ height: "100vh" }}
    >
      {/* <button onClick={submitFile}  >Submit </button> */}
      {/* <button onClick={()=> alert("hello") }  >Submit </button> */}

      {/* <button >-</button>
      <div>{number}</div>
      <button onClick={increase}>+</button> */}

      <form className="w-50 p-3 rounded ">
        <Input placeholder="Email" type="text" />
        <div className="position-relative">
          <Input
            placeholder="Password"
            name="password"
            type={showPassword === true ? "text" : "password"}
          />
          <div
            onClick={ShowMyPassword}
            className="position-absolute top-0 end-50 mt-1"
            style={{ cursor: "pointer" }}
          >
            {showPassword === true ? (
              <i className="bi bi-eye"></i>
            ) : (
              <i className="bi bi-eye-slash"></i>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default StatePage
