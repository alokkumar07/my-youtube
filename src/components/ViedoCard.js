import React from 'react'

const ViedoCard = ({info}) => {
    // console.log(info)
    const {snippet,statistics } = info
    const {channelTitle,title,thumbnails} =snippet

    
  return (
    <div className='p-2 m-2 w-72 shadow-lg border-transparent  hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450'>
    <img  className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
        
    </ul>
    </div>
  )
};

 export  const AdViedoCard = ({info})=>{
 return (
  <div className='p-1 m-1 border border-red-900'>
  <ViedoCard info={info}/>

  </div>
 )
}

export default ViedoCard