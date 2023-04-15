import React from 'react'
import Button from './Button'
const list =['All',"Gaming","Songs","Movies","Podcast","Cooking","Books","Games","Valentines"]

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Soccer"/>
      <Button name="Valentines"/>
      <Button name="News"/>
      <Button name="Cooking"/>
      <Button name="Soccer"/>
      <Button name="Valentines"/>
    </div>
  )
}

export default ButtonList