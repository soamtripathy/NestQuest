import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
       await axios.post("/register", {
        username,
        email,
        password,
      });
      alert("Registration successful. Now you can log in ");
    } catch (e) {
      alert("Registration failed. Please try again later");
    }

  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
          />
          <input
            type="email"
            placeholder={"your@email.com"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{" "}
            <Link to={"/login"} className="underline text-black ">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
