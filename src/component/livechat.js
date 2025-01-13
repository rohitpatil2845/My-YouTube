import React, { useEffect, useState } from "react";
import Chatmessage from "./chatmessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Chatslice";
import { generate, Randommessage } from "../utils/helper";

const Livechat = () => {
  const [livemessage, SetLiveMesssage] = useState("");

  const dispatch = useDispatch();

  const Chatmessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generate(),
          message: Randommessage(20),
        })
      );
    }, 600);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {Chatmessages.map((c, index) => (
            <Chatmessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 m-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("ac", livemessage);
          dispatch(
            addMessage({
              name: "Rohit Patil",
              message:livemessage,
            })
          );
          SetLiveMesssage("");
        }}
      >
        <input
          className="px-3 w-60"
          type="text"
          value={livemessage}
          onChange={(e) => {
            SetLiveMesssage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-gray-600">Send</button>
      </form>
    </>
  );
};

export default Livechat;
