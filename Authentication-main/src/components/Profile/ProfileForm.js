import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import axios from "axios";

const token = localStorage.getItem("token");
const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordInputRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredPassword = newPasswordInputRef.current.value;
    const obj = { token: token, password: enteredPassword };

    console.log(obj);
    const data = await axios.post(
      "http://localhost:3000/admin/update-password",
      obj,
      {
        headers: {
          token,
        },
      }
    );
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
