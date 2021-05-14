import React from "react";
import google from "../../assets/Google.svg";
import dribbble from "../../assets/dribbble.svg";
import github from "../../assets/github.svg";
import btnarrow from "../../assets/btnarrow.svg";
import Button from "../../components/shared/Button";
import "./Signup.css";


// interfac for user details
interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const Signup = () => {
  const googleIcon = google;
  const dribbbleIcon = dribbble;
  const githubIcon = github;
  const arrowIcon = btnarrow;
//user info state hook
  const [signup, setSignup] = React.useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
// handleInput ()=> handles input states
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignup({ ...signup, [name]: value });
  };
// handleSubmit ()=> handles form submission
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const userData = { ...signup };
    console.log(userData);
  };

  return (
    <div className="signup-card">
      <h2 className="signup-header">Register To HustlersVillage</h2>
      <div className="social-btns">
        <Button label="Google" btn_icon={googleIcon} />
        <Button label="Github" btn_icon={githubIcon} />
        <Button label="Dribble" btn_icon={dribbbleIcon} />
      </div>

      <div className="division">
        <div className="div--line" />
        <p className="divide-line">or log in with email</p>
        <div className="div--line" />
      </div>
      <div className="registraton-from">
        <form action="" onSubmit={handleSubmit}>
          <div className="user-name" id="user-name">
            <div id="first-name" className="input-elems">
              <label htmlFor="firstname">First name</label>
              <input
                type="text"
                name="firstname"
                value={signup.firstname}
                onChange={handleInput}
                placeholder="first name"
              />
            </div>

            <div id="last-name" className="input-elems">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                value={signup.lastname}
                onChange={handleInput}
                placeholder="last name"
              />
            </div>
          </div>

          <div className="input-elems outer-elems" id="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={signup.email}
              onChange={handleInput}
              placeholder="email"
            />
          </div>

          <div className="input-elems  outer-elems" id="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={signup.password}
              onChange={handleInput}
              placeholder="password"
            />
          </div>

          <Button
            label="Take Me To The Village"
            type="submit"
            btn_icon={arrowIcon}
          />
          <div className="have-account">
            <p className="subtitles">
              Already have an account? <a href="#password"> Sign in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
