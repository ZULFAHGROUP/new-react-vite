const SectionOne = () => {

  const myStyle = {width:"50%",height:"20vh",border:"2px solid red"}

  return (
    <div style={{display:"flex",justifyContent:"space-between"}} >
      <div className="divOne" style={myStyle} ></div>
      <div className="divTwo" style={myStyle} ></div>
    </div>
  )
}

export default SectionOne
