import {signOut } from "next-auth/react";
import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
          //on click ridirect to next js authentication
          //whatever authentication provider we have configured (Facebook), all the links will be there and we can login with those
            onClick={signOut}
            className="rounded bg-blue-600 text-white px-6 py-2 font-semibold">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
