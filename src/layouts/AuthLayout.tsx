import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side (Branding / Image) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 text-white items-center justify-center p-10">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold">Welcome Back 👋</h1>
          <p className="text-lg text-gray-200">
            Build fast, modern apps with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </div>

      {/* Right Side (Form Area) */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;