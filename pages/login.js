import { handleClientScriptLoad } from "next/script";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginhandler = () => {
    setEmail();
    setPassword();
  };

  return (
    <section className="flex w-full h-[100vh] justify-center items-center text-center">
      <div className="login w-96 h-80  bg-slate-100">
        <h2 className="mb-10 mt-10 font-bold italic text-red-500 text-2xl">
          makeMytrip
        </h2>
        <form action="">
          <div>
            <input
              className="w-80 h-12 pl-4 mb-4 outline-none border-2 border-gray-300"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-80 h-12 pl-4 mb-4 outline-none border-2 border-gray-300"
              type="password"
              placeholder="Password"
              value={password}
              min="8"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
        <button
          className="w-80 bg-green-600 p-2 text-white font-bold"
          onClick={loginhandler}
        >
          Login
        </button>
      </div>
    </section>
  );
}

export default Login;
