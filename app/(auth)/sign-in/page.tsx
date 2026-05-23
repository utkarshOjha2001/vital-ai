"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Mail, Lock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
  e.preventDefault();

  try {
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    });
    if (result?.error) {
      console.log(result.error);
      alert("Invalid credentials");
      return;
    }
    router.push("/report");
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <div className="min-h-screen flex bg-[#050816] text-white overflow-hidden">
      <div className="hidden lg:flex w-1/2 relative">
        {/* <img
          src="/loginPage.png"
          alt="workspace"
          className="h-full w-full object-cover"
        /> */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video/LoginAnim.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-6">

        <div className="w-120 scale-90 flex flex-col gap-8">
          <div className="mb-8">

            <div className="flex items-center justify-start overflow-hidden w-[90px]">
              <Image
                src={"/logo.png"}
                alt={"Vital AI"}
                width={190}
                height={190}
                className="-ml-6"
              />
            </div>

            <h1 className="text-3xl font-bold mb-2">
              Sign in to your account
            </h1>

            <p className="text-gray-400 text-sm">
              Not a member?{" "}
              <span className="text-indigo-500 hover:text-indigo-400 cursor-pointer transition">
                Start a 14 day free trial
              </span>
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Email address
              </label>

              <div className="relative">

                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#111827] border border-[#1F2937] rounded-lg h-12 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full bg-[#111827] border border-[#1F2937] rounded-lg h-12 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 transition-all"
                />
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">

              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="w-4 h-4 accent-indigo-500"
                />

                Remember me
              </label>

              <button
                type="button"
                className="text-indigo-500 hover:text-indigo-400 text-sm transition"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all font-medium text-sm"
            >
              Sign In
            </button>
            <div className="">
              Don’t have an account? <span
                className="cursor-pointer"
                onClick={() => router.push("/sign-up")}
              >Sign up
              </span>
            </div>
          </form>
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-[1px] bg-[#1F2937]" />
            <span className="text-gray-500 text-sm">
              Or continue with
            </span>
            <div className="flex-1 h-[1px] bg-[#1F2937]" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="h-12 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-indigo-500 transition flex items-center justify-center gap-2 text-sm"
            >
              <img
                src="/icons/googleLogo.png"
                alt="google"
                className="w-4 h-4"
              />

              <span>Google</span>
            </button>
            <button
              className="h-12 rounded-lg bg-[#111827] border border-[#1F2937] hover:border-indigo-500 transition flex items-center justify-center gap-2 text-sm"
            >
              <img
                src="/icons/gitHubLogo.png"
                alt="github"
                className="w-4 h-4"
              />

              <span>GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

