import "./userinfo.css"
import { RxAvatar } from "react-icons/rx"
import { IoIosMore } from "react-icons/io"
import { IoVideocam } from "react-icons/io5"
import { BiSolidEdit } from "react-icons/bi";

const Userinfo = () => {
    return (
        <div className="userinfo">
            <div className="user">
                <RxAvatar className="img" />
                <h2>Harry Potter</h2>
            </div>
            <div className="icons">
                    <IoIosMore className="img" />
                    <IoVideocam className="img" />
                    <BiSolidEdit className="img" />
                </div>
        </div>
    ) 
}

export default Userinfo