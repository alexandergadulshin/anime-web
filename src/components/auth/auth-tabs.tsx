"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";

export function AuthTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "signup") {
      setActiveTab("signup");
    } else {
      setActiveTab("login");
    }
  }, [searchParams]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex mb-6 bg-white/20 light:bg-gray-100 rounded-lg p-1 backdrop-blur-sm">
        <button
          onClick={() => {
            setActiveTab("login");
            router.push("/auth");
          }}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "login"
              ? "bg-white/90 light:bg-white text-purple-600 light:text-blue-600 shadow-sm backdrop-blur-sm"
              : "text-gray-300 light:text-gray-600 hover:text-white light:hover:text-gray-800"
          }`}
        >
          Sign In
        </button>
        <button
          onClick={() => {
            setActiveTab("signup");
            router.push("/auth?tab=signup");
          }}
          className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
            activeTab === "signup"
              ? "bg-white/90 light:bg-white text-purple-600 light:text-blue-600 shadow-sm backdrop-blur-sm"
              : "text-gray-300 light:text-gray-600 hover:text-white light:hover:text-gray-800"
          }`}
        >
          Create Account
        </button>
      </div>
      
      {activeTab === "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
}