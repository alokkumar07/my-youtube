import React from 'react'
import Button from './Button'
const list =['All',"Gaming","Songs","Movies","Podcast","Cooking","Books","Games","Valentines", "Kapil_Sharma", "React", "Algorithms" ,]

const ButtonList = () => {
  return (
    <div className='flex'>
    {list.map((list,index)=>{
      return(
        <Button key={index} name={list} />
      )
    })}
    </div>
  )
}

export default ButtonList