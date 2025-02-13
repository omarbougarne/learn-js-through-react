import React from 'react'
import arr from '../data/data'

import MainCard from './MainCard'
const Container = () => {
  return (
    <div>
      {arr.map((group, index)=>(
      <MainCard key={index} group={group}/>
      ))}
    </div>
  )
}

export default Container
