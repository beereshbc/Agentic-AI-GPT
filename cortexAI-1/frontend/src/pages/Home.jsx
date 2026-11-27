import React from "react";
import { FcGoogle } from "react-icons/fc";
import api from "../utils/axios";
import { auth, googleProvider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const Home = () => {
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token: token });
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      const token = await data.user.getIdToken();
      await handleLogin(token);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
 <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] flex items-center justify-center px-5 py-10 relative overflow-hidden">

  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

  <div className="relative w-full max-w-md">
    <div className="bg-white/[0.97] backdrop-blur-xl rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/10 px-8 py-12 sm:px-12 text-center">

      <h1 className="text-[28px] sm:text-3xl font-bold tracking-tight text-gray-900">
        Welcome to UnKnowN
      </h1>

      <p className="mt-3 text-[15px] leading-relaxed text-gray-500 max-w-xs mx-auto">
        Let's explore new things, discover possibilities,
        and build something amazing together.
      </p>

      <div className="flex items-center gap-4 my-9">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
        <span className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.15em]">
          Get started
        </span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
      </div>

      <button
        onClick={googleLogin}
        className="group w-full flex items-center justify-center gap-3 py-3.5 px-5 border border-gray-200 rounded-xl bg-white text-gray-700 font-semibold text-[15px] hover:bg-gray-50 hover:border-gray-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        Continue with Google
      </button>

      <p className="mt-6 text-[11px] leading-relaxed text-gray-400">
        By continuing, you agree to our{" "}
        <a href="#" className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors">
          Privacy Policy
        </a>
        .
      </p>

    </div>

    <p className="mt-6 text-center text-xs text-gray-500">
      Secure authentication powered by Google
    </p>
  </div>
</div>
  );
};

export default Home;
