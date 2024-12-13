import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Listpost from "./Listpost";
const Dashboard = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [personName,setPersonName] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");

    if (loggedInUser === "true") {
      setAuth(true);
      setPersonName(localStorage.getItem("loggedUserName"));
    } else {
      setAuth(false);
    }
  }, []);

  if (auth === null) {
    return <p>Loading...</p>;
  }

  const handleLogout = (e) => {
    e.preventDefault();
    // console.log('Logout Clicked');
    localStorage.removeItem("authenticated");
    localStorage.removeItem("loggedUserName");

    sessionStorage.removeItem("loggedUserName");  //Session end

    navigate("/");
  };

  if (auth) {
    return (
      <>
        <div className="min-h-full">
          <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img className="max-w-16" src="https://cdn.prod.website-files.com/6099f7f90695175cbbb1b376/609a23821585d2e81eaa30cb_sociologo.png" alt="Your Company" />
                  </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                      <h1 className="text-3xl font-bold tracking-tight text-white">Welcome, {personName} !!!</h1>
                    </div>
                  
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">View notifications</span>
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                      </svg>
                    </button>

                    <div className="relative ml-3">
                      <div onClick={()=>{
                                                setShowProfileMenu(!showProfileMenu)
                                                // console.log("clicked")
                      }
                      }>
                        <button type="button" className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                          <span className="absolute -inset-1.5"></span>
                          <span className="sr-only">Open user menu</span>
                          <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        </button>
                      </div>
                    {
                      showProfileMenu && (
                        <>
                          <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                            <p href="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</p>
                            <p href="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</p>
                            <p href="" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">
                              <form>
                              <button type="submit" onClick={handleLogout}>Logout</button>
                              </form>
                            </p>
                          </div>
                        </>
                      )
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <Listpost/>
            </div>
          </main>
        </div>        
      </>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
};

export default Dashboard;
