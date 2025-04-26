import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const userProfile = useSelector((store) => store.user);
  console.log(userProfile);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div
      className={`fixed z-10 w-full ${
        userProfile && "border-b-2 border-slate-300 bg-slate-100"
      }`}
    >
      <div className="flex justify-between mx-[120px] items-center">
        <div className="">
          <img className="w-48" src={LOGO} alt="logo" />
        </div>
        {userProfile && (
          <div className="flex gap-2 items-center">
            <img
              className="w-10 h-10 rounded"
              src={userProfile?.photoURL}
              alt="user photo"
            />
            <p className="font-medium">{userProfile?.displayName}</p>
            <button
              onClick={handleSignOut}
              className="text-slate-900 font-medium cursor-pointer px-5 py-[7px] rounded-full bg-[#cecece]"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
