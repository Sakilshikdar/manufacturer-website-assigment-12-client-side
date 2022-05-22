import "./Register.css";
import loginIcon from "../../../images/icon/login.ico";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification} from "react-firebase-hooks/auth";
import Social from "../../Hooks/Social";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendEmailVerification } from "firebase/auth";
import Loading from "../../Share/Loading/Loading";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(
      auth
    )
  const navigate = useNavigate();
  if (user) {
    navigate("/login");

  }

  const handleVerification = async () => {
    await sendEmailVerification();
    alert('Sent Verification Email');
  }

  if(error || error1){
   return toast(error)
  }

  const handleLogin = () => {
    navigate("/login");
  };

  if (loading||sending) {
    return <Loading></Loading>
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
      createUserWithEmailAndPassword(email, password);
      handleVerification()
  };

  return (
    <div>
      <h2 className="d-flex justify-center text-primary text-4xl mt-3">Please Register</h2>
      <form onSubmit={handleRegister} className="form my-5">
        <input type="text" name="name" id="" placeholder="Your name" />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Email-Address"
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          required
        />
        <input
          className="btn btn-primary mx-auto w-50 mt-2"
          type="submit"
          value="Register"
        />
        <div className=" d-flex  align-items-center ">
          <div>
            <img className="w-7" src={loginIcon} alt="" />
          </div>
          <div className="register">
            Already have an Account?
            <span
              style={{ cursor: "pointer" }}
              className="text-danger "
              onClick={handleLogin}
              >
              Please Login
            </span>
          </div>
        </div>
        <Social></Social>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
