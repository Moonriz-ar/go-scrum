import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("no pusiste email contraseña");
    } else {
      alert("todo bien");
    }
  };

  return (
    <section className="min-h-screen flex justify-center items-center sm:bg-gray-50	">
      <form
        className="w-full py-10 px-5 flex flex-col flex-wrap justify-center space-y-2 sm:bg-white sm:border-gray-100 sm:max-w-md sm:rounded sm:shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-wrap flex-col justify-center ">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="border border-gray-900 p-1"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div className="flex flex-wrap flex-col justify-center ">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="border border-gray-900 p-1"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <div className="flex flex-wrap flex-col justify-center border border-gray-900 p-1">
          <button type="submit">Login</button>
        </div>
      </form>
    </section>
  );
}

export default Login;
