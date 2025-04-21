import React, { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div className="container">
      <img
        className="w-48 absolute z-10 mt-2.5"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      <form
        action=""
        className="login-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl text-white font-bold mb-7">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-[15px] mb-5 border-[#9f9f9f] border-[0.6px] rounded w-full placeholder:text-[#b9b9b9]"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-[15px] mb-5 border-[#9f9f9f] border-[0.6px] rounded w-full placeholder:text-[#b9b9b9]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-[15px] mb-5 border-[#9f9f9f] border-[0.6px] rounded w-full placeholder:text-[#b9b9b9]"
        />
        <button className="p-3 bg-red-600 w-full font-semibold cursor-pointer text-white rounded">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        <p className="mt-4 text-white cursor-pointer" onClick={handleLogin}>
          {isLogin ? (
            <p>
              New to Netflix? <b>Sign Up Now</b>
            </p>
          ) : (
            <p>
              Already registered? <b>Sign In Now</b>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Header;
