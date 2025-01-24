'use client'
import React, { useState, useContext } from 'react';
import { registerUser } from '@/lib/api';
import { AuthContext } from "@/context/AuthCotext";
import { useRouter } from 'next/navigation';


const SignUp = ({setRegistered}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const {login} = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await registerUser({ username, email, password });
    if(res.ok){
      alert('User registered successfully');
      login(res.user, res.token);
    }else{
      alert(`Erroru: ${res.error}`);
    }
  };

  const handleRegisterRedirect = () => {
    //router.push('/auth/signin');
    setRegistered(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-gray-700">
          Already have an account?{' '}
          <button onClick={handleRegisterRedirect} className="text-blue-500 hover:underline">
            Signin here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;