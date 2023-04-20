import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  const {user} = useContext(AuthContext);
  console.log(user)
  return (
    <div>
      <h1>home {user && <span>{user.displayName}</span>}</h1>
    </div>
  );
};

export default Home;
