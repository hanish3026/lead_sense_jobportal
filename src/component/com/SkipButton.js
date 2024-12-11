import React from 'react'

const SkipButton = ({children,onClick}) => {
  return (
  <div>
    <button className="btn btn-outline-secondary btn-lg px-5 " onClick={onClick}>{children}</button>
    </div>
  )
}

export default SkipButton