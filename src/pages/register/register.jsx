import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import "./register.scss";

const Register = () => {
  const [inputs,setInputs]= useState({
    username:"",
    email:"",
    password:"",
    name:""
  })
  const [err,setErr] = useState(null);
  const handleOnChange=(e)=>{
    setInputs((prev)=>({...prev, [e.target.name]: e.target.value}))
  };
  
  const navigate = useNavigate()
  const handleClick = async (e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/api/auth/register",inputs)
      
      navigate("/login")
    }catch(err){
      setErr(err.response.data)
    }
  }
  console.log(err);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Child Side.</h1>
          <p>
          Let them earn knowledge, not money.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleOnChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleOnChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleOnChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleOnChange} />
            {/* <span className="alert alert-danger"> */}
            {err && err}
            {/* </span> */}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;