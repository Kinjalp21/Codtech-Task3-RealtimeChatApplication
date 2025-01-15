import { RxAvatar } from "react-icons/rx";
import "./AddUser.css";

const AddUser = () => {
    return (
        <div className="adduser">
            <form>
                <input type="text" placeholder="Username" name="username"/>
                <button>Search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <RxAvatar className="img"/>
                    <span>Harry</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default AddUser