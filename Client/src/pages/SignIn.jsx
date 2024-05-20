import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAth from "../compontent/OAth";

const SignIn = () => {
  const [formdata, setformdata] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page for ref
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));

        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold flex text-3xl justify-center pt-5">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 ">
        <input
          type="text"
          placeholder="email"
          id="email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handlechange}
        />

        <button
          disabled={loading}
          className="bg-black text-white p-3 rounded-lg">
          {loading ? "Loading..." : "SIGN IN"}
        </button>
        <OAth />
      </form>

      <div className="flex gap-2 m-5 ">
        <p>Dont Have an account?</p>
        <Link to="/signup" className="text-blue-600">
          Sign Up
        </Link>
      </div>

      <div>
        <p className="text-red-700 mt-5">
          {(error && error.message) || "Something went wrong!"}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
