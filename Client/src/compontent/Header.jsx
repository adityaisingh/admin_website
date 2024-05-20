import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const currentUser = useSelector((state) => state.user);
  return (
    <div className="bg-white shadow-xl">
      <div className="flex justify-between items-center max-w-4xl mx-auto p-2">
        <Link to="/">
          <h1 className="font-bold text-xl text-black">Auth App</h1>
        </Link>
        <ul className="flex gap-5">
          <Link to="/about">
            <li className="font-bold">About</li>
          </Link>
          <Link to="/">
            <li className="font-bold">Home</li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-lg"
              />
            ) : (
              <li className="font-bold">SignIn</li>
            )}
            7
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
