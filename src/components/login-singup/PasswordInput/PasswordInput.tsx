import "./PasswordInput.scss";
import passwordIcon from "../../../assets/images/Login/password.svg";

const PasswordInput = () => {
  return (
    <div className="password-input-component">
      <p>رمز الدخول</p>
      <input type="password" required placeholder="رمز الدخول" />
      <img src={passwordIcon} alt="" />
    </div>
  );
};

export default PasswordInput;
