import { useState } from "react";

const Register = () => {

    const [username,setUsername] = useState();
    const [userEmail,setUserEmail] = useState();
    const [password,setPassword] = useState();

    const handleRegister = (e) => {
      e.preventDefault();

      if((username === undefined) || (userEmail === undefined) || (password === undefined)){
        alert("Kindly enter all Fields for Registration !");
        return ;
      }

      const dataInput = {
        username : username,
        email : userEmail,
        password : password
      };

      console.log(dataInput);

      try {
        fetch("http://localhost:3000/profile",{
          headers:{"cors":"no-cors", "Content-Type":"application/json"},
          method: 'POST',
          body: JSON.stringify(dataInput),
        }).then(res=>{
          console.log("res status " + res.status);
          alert('Congratulations '+username+' you have been Successfully Registered !');
        });
      } catch (error) {
        console.log("error "+error);
      }
    };

    return (
        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="max-w-30" src="https://cdn.prod.website-files.com/6099f7f90695175cbbb1b376/609a23821585d2e81eaa30cb_sociologo.png" alt="Your Company" />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up to your account</h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" >
                
                <div>
                  <div className="mt-2">
                    <input placeholder="Enter Username" onChange={(e) => {setUsername(e.target.value)}} value={username}
                    id="username" name="username" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input placeholder="Enter Email" onChange={(e) => {setUserEmail(e.target.value)}} value={userEmail}
                    id="email" name="email" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                  </div>
                </div>
    
                <div>
                  <div className="mt-2">
                    <input placeholder="Enter Password" onChange={(e) => {setPassword(e.target.value)}} value={password}
                    id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2  " />
                  </div>
                </div>
    
                <a href="login" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Login Here</a>
    
                <div>
                  <button onClick={handleRegister} type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                </div>
              </form>
            </div>
          </div>      
        </div>
      );
};

export default Register;