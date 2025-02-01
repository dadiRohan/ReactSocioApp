import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // const users = [{ username: "Test", password: "test" },{ username: "Rohan", password: "test" }];

  // based on API for users
  const [userData,setUserData] = useState([]);
  const fetchUsers = async () => {
    const userList = await fetch("http://localhost:3000/profile",{
      headers:{"cors":"no-cors"}
    });
    const userJson = await userList.json();
    setUserData(userJson);
  }
  useEffect(()=>{
    fetchUsers();
  },[]);
  const users = userData;

  const handleSubmit = (e) => {
    e.preventDefault();

    if((username === undefined) || (password === undefined)){
      alert("Kindly enter all Fields for Login !");
      return ;
    }
    
    const account = users.find((user) => user.username === username);
    console.log(account);
    if (account && account.password === password) {
      localStorage.setItem("authenticated", true);
      localStorage.setItem("loggedUserName",username);

      sessionStorage.setItem("loggedUserName",username); //Session start

      console.log('Authentication Done');
      
      navigate("/dashboard");
    }else{
      console.log('Authentication Fail');
      alert('You have entered wrong username or password !');
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="max-w-30" src="https://cdn.prod.website-files.com/6099f7f90695175cbbb1b376/609a23821585d2e81eaa30cb_sociologo.png" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
            <div>
              <div className="mt-2">
                <input onChange={(e) => {setUsername(e.target.value)}}  placeholder="Enter Username"
                id="username" name="username" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input onChange={(e) => {setPassword(e.target.value)}}  placeholder="Enter Password"
                id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2  " />
              </div>
            </div>

            <a href="register" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Register Here</a>

            <div>
              <button onClick={handleSubmit} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>
        </div>
      </div>      
    </div>
  );
};


export default Login;