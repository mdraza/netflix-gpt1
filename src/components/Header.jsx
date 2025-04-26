import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userProfile = useSelector((store) => store.user);
  console.log(userProfile);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div
      className={`fixed z-10 w-full ${
        userProfile && "border-b-2 border-slate-300 bg-slate-100"
      }`}
    >
      <div className="flex justify-between mx-[120px] items-center">
        <div className="">
          <img
            className="w-48"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
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
