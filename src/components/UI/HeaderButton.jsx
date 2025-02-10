import React from 'react'

 const HeaderButton = ({children, onClick}) => {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  )
}
export default HeaderButton