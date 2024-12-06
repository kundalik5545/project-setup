import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { LogInContext } from "@/App";
function Dashboard() {
  const { user } = useContext(LogInContext);
  const [data, setData] = useState("");

  const handleOnClick = () => {
    setData(user);
  };

  return (
    <div className="bg-purple-100 p-2 m-2 rounded-lg min-h-screen">
      <h2 className="text-xl">Welcome to Dashboard {data.firstName}</h2>

      <Button onClick={handleOnClick}>Get User Details</Button>

      <div className="mt-4 shadow-lg rounded-lg bg-blue-100">
        <h3>User Details:</h3>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.userName}</p>
      </div>
    </div>
  );
}

export default Dashboard;
