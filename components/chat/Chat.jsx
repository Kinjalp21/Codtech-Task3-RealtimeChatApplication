import "./chat.css"
import EmojiPicker from "emoji-picker-react";
import { RxAvatar } from "react-icons/rx"
import { MdOutlinePhone } from "react-icons/md"
import { IoVideocam } from "react-icons/io5"
import { MdEmojiEmotions } from "react-icons/md"
import { CiCircleInfo } from "react-icons/ci"
import { CiImageOn } from "react-icons/ci"
import { IoMdMic } from "react-icons/io"
import { FaCamera } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const Chat = () => {

const [open, setOpen] = useState(false);
const [text, setText] = useState("");

const endRef = useRef(null)

useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
}, );

const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
};

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <RxAvatar className="img"/>
                    <div className="texts">
                        <span>Harry</span>
                        <p>The Chosen One</p>
                    </div>
                </div>
                <div className="icons">
                    <MdOutlinePhone className="img"/>
                    <IoVideocam className="img"/>
                    <CiCircleInfo className="img"/>
                </div>
            </div>
            <div className="center">
                <div className="message own">
                    <div className="texts">
                        <p>
                            Hey Ron.
                        </p>
                        <span>3 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p> Can you please send a pic of your flying car? I want to show it to Neville.
                        </p>
                        <span>3 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <RxAvatar className="img"/>
                    <div className="texts">
                    <img src="https://images.pexels.com/photos/3767825/pexels-photo-3767825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p> Here it is.
                        </p>
                        <span>3 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            Thanks Ron.
                        </p>
                        <span>3 min ago</span>
                    </div>
                </div>
            </div>
            <div ref={endRef}></div>
            <div className="bottom">
                <div className="icons">
                    <CiImageOn />
                    <FaCamera />
                    <IoMdMic />
                </div>
                <input type="text" 
                placeholder="Type a message..." a
                value={text}
                onChange={(e)=> setText(e.target.value)}
                />
                    <div className="emoji"> 
                        <div 
                        className={`img`} 
                        onClick={() => setOpen((prev) => !prev)}>
                        <MdEmojiEmotions />
                        </div>
                        <div className="picker">                           
                            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                        </div>
                    </div>
                <button className="sendbutton">Send</button>
            </div>
        </div>
    )
}

export default Chat