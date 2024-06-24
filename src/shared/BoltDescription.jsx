/* eslint-disable react/prop-types */

const BoltDescription = ({ numbering, title, text }) => {
  return (
    <div className="flex gap-3">
      <p className=" p-2 rounded-full text-white bg-[#32bb78] w-[20px] h-[20px] text-light flex justify-center mt-2 items-center ">
        {numbering}
      </p>
      <div>
        <h3 className="text-[1.5rem] font-semibold ">{title}</h3>
        <p className="w-[25rem] ">{text}</p>
      </div>
    </div>
  )
}

export default BoltDescription
