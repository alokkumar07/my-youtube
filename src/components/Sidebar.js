import React from 'react'
import { useSelector } from 'react-redux'
// import {isMenuOpen} from '../utils/appSlice'

const Sidebar = () => {
   const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
   if(!isMenuOpen) return console.log('Sidebar is closed',isMenuOpen)
;
  return (
    <div className='p-5 shadow-lg w-48'>
    <ul>
        <li>Home</li> 
        <li>Shorts</li>
        <li>Viedos</li>
        <li>Live</li>
    </ul>
    <h1 className='font-bold pt-5'>Subsriptions</h1>
    <ul>
        <li>Music</li> 
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
    </ul>
    <h1 className='font-bold pt-5'>Watch Later</h1>
    <ul>
        <li>Music</li> 
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
    </ul>
    </div>
  )
}

export default Sidebar