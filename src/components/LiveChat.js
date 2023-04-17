import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 2000);

    return () => clearInterval(i);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <h1 className="w-full ml-2 p-2 border border-black rounded-t-lg font-bold bg-gray-100 ">
        Live Chat
      </h1>
      <div className=" w-full h-[500px] ml-2 p-2 border  border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            //Disclaimer: don't use indexes as keys
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className=" p-2 m-2 w-full border border-black rounded-b-lg bg-gray-100 flex"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log('Submit',liveMessage)
          dispatch(
            addMessage({
              name: "Alok kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black rounded-lg w-72 px-2"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="mx-2 px-3 bg-green-100 border border-green-400 rounded-xl hover:bg-green-300">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
