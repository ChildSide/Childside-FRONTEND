import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [inputs,setInputs]= useState({
    email:"",
    password:"",
  })
  const [err,setErr] = useState(null);

  const navigate = useNavigate()

  const handleOnChange=(e)=>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
  };
  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/")
    }catch{
      setErr(err.response.data)
    }
  };

  return (
    <div className="login">
      <div className="card1">
        <div className="left">
          <h1>Child Side.</h1>
          <p>
           <i>
            “There’s nothing more satisfying than seeing a happy and smiling child. I always help in any way I can, even if it’s just by signing an autograph. A child’s smile is worth more than all the money in the world” 
            </i> 
            <span className="ps-4">
            – Lionel Messi
            </span>
            </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleOnChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleOnChange}/>
            <button onClick={handleLogin}>Login</button>
          </form>
          {/* {err & err} */}
          <Link to="/withoutLogin">
            <a>Go to Website without Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;