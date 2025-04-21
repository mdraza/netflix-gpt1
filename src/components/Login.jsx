import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-[100vh] bg-black overflow-hidden">
        <img
          className="opacity-[0.4] object-cover z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_large.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
