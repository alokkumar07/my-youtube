import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utils/constant';
import ViedoCard ,{AdViedoCard}from './ViedoCard';


const ViedoContainer = () => {
   const [videos, setVideos] = useState([]);
   
  useEffect(()=>{
    getViedo();
   },[]);

   const getViedo =async() =>{
     const data = await fetch(YOUTUBE_VIDEO_API)
     const json = await data.json();
    //  console.log(json.items);
     setVideos(json.items);
     
      
   }
  return (
    <div className='flex flex-wrap justify-between'>
      {/* <ViedoCard info={videos[0]}/> this is for one card */}
      {videos[0] && <AdViedoCard info={videos[0]}/>}
      {videos.map(videos =>
     <Link key={videos.id} to={"/watch?v="+ videos.id}> 
     <ViedoCard  info={videos} />
     </Link>
     )}
      
    </div>
  )
}

export default ViedoContainer