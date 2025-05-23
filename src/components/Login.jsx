import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, HERO_BACKGROUNG_IMG } from "../utils/constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}, ${errorMessage}`);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}, ${errorMessage}`);
        });
    }
  };
  return (
    <div>
      <Header />
      <form
        action=""
        className="login-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl text-white font-bold mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-[15px] mb-5 text-white border-[#9f9f9f] border-[0.6px] rounded w-full placeholder:text-[#b9b9b9]"
          />
        )}
        <input
          type="email"
          ref={email}
          placeholder="Email address"
          className="p-[15px] mb-5 text-white border-[#9f9f9f] border-[0.6px] rounded w-full placeholder:text-[#b9b9b9]"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-[15px] mb-5 text-white border-[#9f9f9f] border-[0.6px] rounded w-full placeholder:text-[#b9b9b9]"
        />
        <button
          onClick={handleButtonClick}
          className="p-3 bg-red-600 w-full font-semibold cursor-pointer text-white rounded"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-3 text-red-500 font-medium">{errorMessage}</p>
        <p className="mt-4 text-white cursor-pointer" onClick={handleLogin}>
          {isSignInForm ? (
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
      <div className="w-full h-[100vh] bg-black overflow-hidden">
        <img
          className="opacity-[0.4] object-cover z-0"
          src={HERO_BACKGROUNG_IMG}
          alt="hero bg img"
        />
      </div>
    </div>
  );
};

export default Login;
