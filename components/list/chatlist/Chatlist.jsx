import "./chatlist.css"
import { IoSearch } from "react-icons/io5"
import { FiPlus } from "react-icons/fi"
import { FiMinus } from "react-icons/fi"
import { RxAvatar } from "react-icons/rx"
import { useState } from "react";
import AddUser from "../../addUser/AddUser"

const Chatlist = () => {
    const [addMode, setAddMode] = useState(false)
    return (
        <div className="chatlist">
            <div className="search">
                <div className="searchbar">
                    <IoSearch className="img" />
                    <input type="text" placeholder="Search" />
                </div>
                <div 
                className={`add ${addMode ? "active" : ""}`}
                onClick={() => setAddMode((prev) => !prev)}
                >
                    {addMode ? <FiMinus /> : <FiPlus />}        
                </div>
            </div>
            <div className="item">
                <RxAvatar />
                <div className="texts">
                    <span>Ginny</span>
                    <p>Good luck with your Quidditch match.</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar />
                <div className="texts">
                    <span>Hermione</span>
                    <p>Lets go grab some butterbeer.</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar />
                <div className="texts">
                    <span>Ron</span>
                    <p>Lets go grab some butterbeer.</p>
                </div>
            </div>
            <div className="item">
                <RxAvatar />
                <div className="texts">
                    <span>Neville</span>
                    <p>You done with your history class?</p>
                </div>
            </div>
            {addMode && <AddUser/>}
        </div>
    )
}

export default Chatlist