import "./detail.css"
import { RxAvatar } from "react-icons/rx"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"
import { IoMdDownload } from "react-icons/io";;

const Detail = ({setUser}) => {
    const handleLogout = () => {
        setUser(false); 
    };

    return (
        <div className="detail">
            <div className="user">
                <RxAvatar className="img" />
                <h2>Harry Potter</h2>
                <p>The Chosen World</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <IoIosArrowDown className="img"/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <IoIosArrowDown className="img"/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Share photo</span>
                        <IoIosArrowUp className="img"/>
                    </div>
                    <div className="photos">
                        <div className="photoitem">
                            <div className="photodetail">
                                <img src="https://images.pexels.com/photos/7978850/pexels-photo-7978850.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <span>time_turner.jpg</span>
                            </div>
                            <IoMdDownload className="img"/>
                        </div>
                        <div className="photoitem">
                            <div className="photodetail">
                                <img src="https://images.pexels.com/photos/28379513/pexels-photo-28379513/free-photo-of-scotland-train.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <span>hogwarts_train.jpg</span>
                            </div>
                            <IoMdDownload className="img" />
                        </div>
                        <div className="photoitem">
                            <div className="photodetail">
                                <img src="https://images.pexels.com/photos/8391515/pexels-photo-8391515.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <span>gryffindor.jpg</span>
                            </div>
                            <IoMdDownload className="img" />
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Share Files</span>
                        <IoIosArrowDown className="img"/>
                    </div>
                </div>
                <button className="logout" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Detail