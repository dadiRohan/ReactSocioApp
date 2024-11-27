import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const users = [{ username: "Test", password: "test" },{ username: "Rohan", password: "test" }];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("loggedUserName",username);

      console.log('Authentication Done');
      
      navigate("/dashboard");
    }else{
      console.log('Authentication Fail');
    }
  };

  return (
    <div>
      <form className="text-center">
        <input
          type="text"
          name="Username"
          placeholder="Enter Email"
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <input
          type="password"
          name="Password"
          placeholder="Enter Password"
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
    </div>
  );
};


export default Login;