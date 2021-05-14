import google from "../../assets/Google.svg";
import dribbble from "../../assets/dribbble.svg";
import github from "../../assets/github.svg";
import btnarrow from "../../assets/btnarrow.svg";
import Button from "../../components/shared/Button";
import "./Signup.css";

const Signup = () => {
  const googleIcon = google;
  const dribbbleIcon = dribbble;
  const githubIcon = github;
  const arrowIcon = btnarrow;

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
        <form action="">
          <div className="user-name" id="user-name">
            <div id="first-name" className="input-elems">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                name="firstName"
                value=""
                placeholder="first name"
              />
            </div>

            <div id="last-name" className="input-elems">
              <label htmlFor="lastname">Last name</label>
              <input
                type="text"
                name="lastname"
                value=""
                placeholder="last name"
              />
            </div>
          </div>

          <div className="input-elems outer-elems" id="email">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value="" placeholder="email" />
          </div>

          <div className="input-elems  outer-elems" id="password">
            <label htmlFor="pssword">Password</label>
            <input
              type="password"
              name="password"
              value=""
              placeholder="password"
            />
          </div>
        </form>
        <Button label="Take Me To The Village" btn_icon={arrowIcon} />
        <div className="have-account">
          <p className="subtitles">
            Already have an account? <a href="#password"> Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
