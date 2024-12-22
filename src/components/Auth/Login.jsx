/* eslint-disable react/prop-types */
import { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault(); // prevent page from refresh
    console.log("Hello");
    console.log(`Your email is ${email} and password is ${password}`)
    
    handleLogin(email, password);

    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              setEmail(e.target.value)
            }}
            value={email}
            required
            className="border-2 text-lg font-medium outline-none bg-transparent border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email" 
          />
          <input
            onChange={(e) => {
              // console.log(e.target.value)
              setPassword(e.target.value)
            }}
            value={password}
            required
            className="border-2 text-lg font-medium mt-4 outline-none bg-transparent border-emerald-600 rounded-full py-2 px-6 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className=" text-white text-lg font-semibold hover:bg-emerald-700  mt-7 outline-none bg-emerald-600 rounded-full w-full py-2 px-8">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
