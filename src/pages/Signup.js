import React, { useState } from "react";
import signup from "../assets/Sign up-amico.svg";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  //   const integrate = () => {
  //     let data = new FormData();
  //     data.append("email", email);
  //     data.append("username", username);
  //     data.append("password", password);
  //     let config = {
  //       method: "POST",
  //       url: "http://shrutiprasad.pythonanywhere.com/auth/ngo/register/",
  //       headers: { "Content-Type": " application/json" },
  //       data: data,
  //     };
  //     axios(config)
  //       .then((response) => {
  //         if (response.status === 201) {
  //           setSuccess(true);
  //           console.log("success");
  //         }
  //         console.log(JSON.stringify(response.data));
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  /* 
async function integrate() {
  console.log("hello");
  try {
    let result = await fetch(
      "http://shrutiprasad.pythonanywhere.com/auth/register/",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: email,
          password:password,
          username: username,
        }),
       
        
      }
    );
    result = await result;
    console.log(result);
    
    
  } catch (error) {
    console.log("Error" + error);
    
  }
} */

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-[#111827]">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover " src={signup} alt="" />
      </div>
      <div className="bg-[#111827] flex flex-col justify-center">
        <div className="max-w-[400px] w-full mx-auto bg-white p-4 rounded-lg">
          <h2 className="text-center text-4xl font-bold py-6">REGISTER</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="border border-[#111827] p-2 hover:border-blue-400 rounded-lg"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="email">Username</label>
            <input
              type="username"
              className="border border-[#111827] p-2 hover:border-blue-400 rounded-lg"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="email"
              required
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="password"
              className="border p-2 border-[#111827] hover:border-blue-400 rounded-lg"
              required
            />
          </div>
          {setSuccess ? (
            <Link to="/login">
              <button
                className="w-full py-2 my-4 bg-blue-600  text-white

           font-semibold"
                // onClick={integrate}
              >
                Sign Up
              </button>
            </Link>
          ) : (
            <Link to="/signup">
              <button
                className="w-full py-2 my-4 bg-blue-600  text-white

           font-semibold"
                // onClick={integrate}
              >
                Sign Up
              </button>
            </Link>
          )}

          <p
            className="text-center font-semibold text-lg
            "
          >
            Already a member?
          </p>
          <Link to="/login">
            <p className="hover:text-blue-600 font-semibold text-center text-base text-black">
              Login
            </p>
          </Link>
        </div>
      </div>
    </div>
    // <div className="w-full h-screen flex">
    //   <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-400 sm:max-w-[900px] rounded-2xl">
    //     <div className="w-full h-[550px] hidden md:block border rounded-tl-2xl rounded-bl-2xl border-rose-500">
    //       <img src={signup} className="w-full h-full" alt="/" />
    //     </div>
    //     <div className="p-4 flex flex-col justify-center border border-rose-500 lg:rounded-tr-2xl  rounded-br-2xl">
    //       <div>
    //         <h2 className="text-4xl font-bold text-center mb-12">Register</h2>
    //         <div>
    //           <input
    //             className="border p-2 mr-2 w-full my-2 hover:border-rose-400 rounded-lg"
    //             type="email"
    //             placeholder="Email"
    //             required
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           <input
    //             className="border p-2 my-2 flex w-full hover:border-rose-400 rounded-lg"
    //             type="text"
    //             placeholder="NGO Name"
    //             required
    //             value={username}
    //             onChange={(e) => setUsername(e.target.value)}
    //           />
    //           <input
    //             className="border p-2 w-full my-2 hover:border-rose-400 rounded-lg"
    //             type="password"
    //             placeholder="Password"
    //             required
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </div>
    //         <button
    //           className="w-full py-2 my-4 bg-rose-600 hover:bg-rose-500 text-white

    //        font-semibold"
    //           onClick={integrate}
    //         >
    //           Sign Up
    //         </button>
    //         <p
    //           className="text-center font-semibold text-lg
    //         "
    //         >
    //           Already a member?
    //         </p>
    //         <Link to="/login">
    //           <p className="hover:text-rose-600 font-semibold text-center text-base text-black">
    //             Login
    //           </p>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;
