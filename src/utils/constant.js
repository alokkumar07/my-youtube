const GOOGLE_API_KEY = "AIzaSyC6OjObbVSidaMYDCJ5qWAMW-VVJpT7jB4";

 export const OFFSET_LIVE_CHAT =25;
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const  YOUTUBE_SEARCH_API= "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="