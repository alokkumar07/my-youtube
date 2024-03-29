import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";
import { BrowserRouter, Link } from "react-router-dom";

const Head = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //make an api call after ever key press
    //but if the difference between 2 api calls is <200ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // console.log(searchQuery, "api call");
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    // setSuggestion(json[1]);

    //update in my cache
    dispatch(
      cacheResults({
        // iphone:[1,2,3]
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()} // =>
          className="h-8 cursor-pointer"
          alt="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAbFBMVEXz9fT09PQzMzPy8vL29vY4ODgrKyvv7+8vLy8mJiZMTEzW1tb///+wsLD5+/rx8/I7PTzj5eRGSEeHiYgkJCR/gYAoKimbnZw6PDvq6uri5OPO0M8/QUAiJCNkZmXb3dxvcXAdHR3HychTVVQHeaVBAAADUklEQVR4nO3b3W6jMBAFYGNsxiTeMSEJxflpmvb933FtN6y2Um9WHUAbnU9tLsc9GAJ2B6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvhHST1DMlZBUqa6rql4rDkkFiY9KK2RI82FUMEKoSh9pTlYIQiFlUbUQk86smlYIwoZZUWCxIDUZNoYXDxIjKUUUpILUkdL5FePiQTwr7z17MbmUYb94kNP7rxm8nxYLQF4RB3/+sNdhuF5dK8QdDk3b2s3ZByblaf4kpnwer4PuLp0VlMrp5nD8a5BZpa8VHxRZ3XV6GLR2QrRu2lzTkgq+DDO7wOlm2A/OjqO1Wmo+Pgu5ps832rBADEqnLxO/6Ov96tzgGiGuca69H/RLKl4GmT0IhzSMj/vXvt/0m4+NkI9UrO9f9zEVp3y9z80ETsOk23pIM6PijoTsYsUV1cwmHSoO81/tfufzcxalp8V8Niuph8byyJh+U+XHIAAAAAAAAN/jmSwYIa3eiLy/bU/n820r5nY+n7Zb74nSKnSZIEEFvr31zjk7Oi3EjTYV7N9uHPIIyyRJQfb3Yex046xUEO0a3dnmvs9BlkmRRorU6VE7LRcjsaVgR7HsnCHIP2V5hlPriS72p/n6/fQEN8SvpLYZp/+3rxZEqmFg9SBSMzL574OsPiNPc2pJBVj91JIKMkEQBEEQBEEQBPkvgvDJ52UPBcO5xVTwobGqKzZUejf8bv51icktNcTsQ0xr0hilWjhSpaqm2nMpv8ASMeQOOvK7/Wt/6WWbavrcVLPzkSks0R30aHNy1/ug3TBItTk1jdPN/eBefFimzSk3OuXGs9aNl0tnnVTjmbPd5TK6dqNKi978SitgiNZeLm5otJVrBXSt6zprYwhpgPkvds7XewjHYdBjN+ZuQCkphWuaY97UWqQVkENul91udGmXHaTaZdtD27QHvdl6tUwH3WQ3TwPzbrEAE89Grp18skZLeYxl6/THr12EB1W2Sldo8i/bm+Hnr11MQbi86LTGlunncTRSQcyj4CqYf/5q0p/jolbcwJZ4WWyqRCtNRkkh8freVKxccetl+fnCas2//QsEQZCZIAiCzORpggAAAAAAAAAAAAAAAAAAAAAAAAAAAMDsfgNFgH00igMk8QAAAABJRU5ErkJggg=="
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={(e) => setShowSuggestion(true)}
            onBlur={(e) => setShowSuggestion(false)}
          />
          <button className="border border-gray-400 px-5 p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="absolute top-20 bg-white w-[31rem] px-3 rounded-b-lg shadow-md">
            <ul>
           
              {suggestion.map((showSuggestion,index) => (
                <BrowserRouter>

                <Link to={"/search/" + showSuggestion}>

                <li key={index} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                 <span> 🔍{showSuggestion}</span> 
                </li>
                </Link>
                </BrowserRouter>
              ))}
            </ul>
            
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="data:image/png;base64,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"
        />
      </div>
    </div>
  );
};

export default Head;
