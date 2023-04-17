import React from 'react'

const ViedoCard = ({info}) => {
    // console.log(info)
    // const {snippet,statistics } = info
    // const {channelTitle,title,thumbnails} =snippet

    
  return (
    // <div className='p-2 m-2 w-72 shadow-lg border-transparent  hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450'>
    // <img  className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
    // <ul>
    //     <li className='font-bold py-2'>{title}</li>
    //     <li>{channelTitle}</li>
    //     <li>{statistics.viewCount} views</li>
        
    // </ul>
    // </div>
    <div className='p-3 m-3 w-64  shadow-lg'>
    <img className='rounded-xl' alt='thumnail' src={info?.snippet?.thumbnails?.medium?.url} />
    <div>
        <ul>
            <li className='font-bold py-2 h-14 overflow-hidden '>{info?.snippet?.title}</li>
            <li className='text-gray-600 py-1'>{info?.snippet?.channelTitle}</li>
            <li className='text-gray-600'>{info?.statistics?.viewCount} views</li>
        </ul>
    </div>
    
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