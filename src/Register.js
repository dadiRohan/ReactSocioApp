
const Register = () => {

    return (
        <div>
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign up to your account</h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" >
                
                <div>
                  <div className="mt-2">
                    <input placeholder="Enter Username"
                    id="username" name="username" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <input placeholder="Enter Email"
                    id="email" name="email" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                  </div>
                </div>
    
                <div>
                  <div className="mt-2">
                    <input placeholder="Enter Password"
                    id="password" name="password" type="password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-center focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2  " />
                  </div>
                </div>
    
                <a href="login" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Login Here</a>
    
                <div>
                  <button onClick="" type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                </div>
              </form>
            </div>
          </div>      
        </div>
      );
};

export default Register;