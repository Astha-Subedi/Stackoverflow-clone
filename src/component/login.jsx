import React, { useState } from 'react';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 rounded-l ${isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-r ${!isLogin ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <input type="password" placeholder="Password" className="p-2 border rounded" />
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Login
            </button>
          </form>
        ) : (
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Username" className="p-2 border rounded" />
            <input type="email" placeholder="Email" className="p-2 border rounded" />
            <input type="password" placeholder="Password" className="p-2 border rounded" />
            <input type="password" placeholder="Confirm Password" className="p-2 border rounded" />
            <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginRegister;
