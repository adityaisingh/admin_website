import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAth from "../compontent/OAth";

const SignUp = () => {
  const [formdata, setformdata] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page for ref
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signIn");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="font-bold flex text-3xl justify-center pt-5">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 ">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handlechange}
        />
        <input
          type="text"
          placeholder="email"
          id="Email"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          id="Password"
          className="bg-slate-200 p-3 rounded-lg"
          onChange={handlechange}
        />

        <button
          disabled={loading}
          className="bg-black text-white p-3 rounded-lg">
          {loading ? "Loading..." : "SIGN UP"}
        </button>
        <OAth />
      </form>
      <div className="flex gap-2 m-5 ">
        <p>Have an account?</p>
        <Link to="/signIn" className="text-blue-600">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
