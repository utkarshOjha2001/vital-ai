"use client";

import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch("/api/auth/sign-up", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.message || "Something went wrong");
                return;
            }

            console.log("User Created:", data);
            router.push("/sign-in");

        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex bg-[#050816] text-white overflow-hidden">
            <div className="hidden lg:flex w-1/2 relative overflow-hidden">

                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover scale-105"
                >
                    <source src="/video/LoginAnim.mp4" type="video/mp4" />
                </video>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-6">

                <div className="w-[480px] scale-90 flex flex-col gap-8">

                    {/* HEADER */}
                    <div className="mb-4">

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
                            Create your account
                        </h1>

                        <p className="text-gray-400 text-sm">
                            Already have an account?{" "}
                            <span
                                className="text-indigo-500 hover:text-indigo-400 cursor-pointer transition"
                                onClick={() => router.push("/sign-in")}
                            >
                                Sign in
                            </span>
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div>
                            <label className="text-sm text-gray-300 mb-2 block">
                                Username
                            </label>

                            <div className="relative">

                                <User
                                    size={16}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                />

                                <input
                                    type="text"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Enter username"
                                    className="w-full bg-[#111827] border border-[#1F2937] rounded-lg h-12 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 transition-all"
                                />
                            </div>
                        </div>
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
                                    placeholder="Create password"
                                    className="w-full bg-[#111827] border border-[#1F2937] rounded-lg h-12 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 transition-all"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full h-12 mt-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all font-medium text-sm"
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="flex items-center gap-3">

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

export default SignUp;