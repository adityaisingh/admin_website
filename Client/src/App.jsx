import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Header from "./compontent/Header";
import PrivateRoute from "./compontent/PrivateRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route element={<PrivateRoute />}>
          <Route path="/signIn" element={<SignIn />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
