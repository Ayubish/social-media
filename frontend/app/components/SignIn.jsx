'use client'
import React, { useState, useContext } from 'react';
import { AuthContext } from "@/context/AuthCotext";
import { useRouter } from 'next/navigation';

const SignIn = ({setRegistered}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsondata = JSON.stringify({
      email,
      password,
    });

    try {
      const res = await fetch("http://192.168.137.1:5000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsondata,
      });

      if (res.ok) {
          const data = await res.json();
          login(data.user, data.token);
          alert(`user: ${data.user.username} logged in`);       
        // Redirect to another page or perform other actions
      } else {
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const errorData = await res.json();
          setError(errorData.message || "An error occurred");
        } else {
          setError("An error occurred");
        }
      }
    } catch (err) {
      console.error("Error logging in user", err);
      setError("An error occurred");
    }
  };

  const handleRegisterRedirect = () => {
    //router.push('/auth/signup');
    setRegistered(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
        </form>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <p className="mt-4 text-gray-700">
          Don't have an account?{' '}
          <button onClick={handleRegisterRedirect} className="text-blue-500 hover:underline">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;