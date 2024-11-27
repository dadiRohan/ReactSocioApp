import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const [auth, setAuth] = useState(null);
  const [personName,setPersonName] = useState(null);

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

  if (auth) {
    console.log('Entered');
    return (
      <div>
        <p>Welcome <b>{personName}</b> to your Dashboard</p>
      </div>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
};

export default Dashboard;
