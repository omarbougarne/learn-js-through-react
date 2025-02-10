import React from 'react'

const CardButton = ({children, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default CardButton
