/* eslint-disable no-unused-vars */
import { useState } from "react"
import Input from "../shared/input"

const Recap = () => {
    // const [count, setCount] = useState(0)

    // const show = false
  const [showPassword, setShowPassword] = useState(false)

  function togglePassword() {
    setShowPassword(!showPassword)
  }

  // function submit() {

  //     alert('Please enter')
  // }

  //   function add() {
  //     setCount(count + 1)
  //   }

  //   function minus() {
  //     if (count <= 0) {
  //       return 0
  //     }
  //     setCount(count - 1)
  //   }
  return (
    <div
      className="d-flex w-100 align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <form className="w-50  p-4 rounded ">
        <Input placeholder="email" type="email" />
        <div className="position-relative">
          <Input
            placeholder="password"
            type={showPassword === false ? "password" : "text"}
          />
          <div
            onClick={togglePassword}
            style={{ cursor: "pointer" }}
            className="position-absolute top-0 end-0 px-2 pt-1"
          >
            {/* {showPassword === false ? (
              <i className="bi bi-eye-slash-fill"></i>
            ) : (
              <i className="bi bi-eye-fill"></i>
            )} */}

            {showPassword === false ? (
              <i className="bi bi-eye-slash-fill"></i>
            ) : (
              <i className="bi bi-eye-fill"></i>
            )}
          </div>
        </div>
      </form>

      {/* <button  onMouseOver={submit} >Submit</button> */}
      {/* <button onClick={minus}>-</button> */}
      {/* <p>{count}</p> */}
      {/* <button onClick={add} >+</button> */}
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
    </div>
  )
}

export default Recap
