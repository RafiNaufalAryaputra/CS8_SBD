import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Navigasi ke halaman login
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white text-center">
      <h1 className="text-5xl font-bold mb-6 text-yellow-300">Sign Up</h1>
      <p className="text-lg text-gray-300 mb-8">Buat akun baru untuk mulai menggunakan Snapchat.</p>
      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Nama Lengkap"
          className="w-80 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-80 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-80 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-gray-400">
        Sudah punya akun?{' '}
        <button
          onClick={handleLoginRedirect}
          className="text-yellow-300 hover:underline"
        >
          Masuk di sini
        </button>
      </p>
    </div>
  );
}

export default SignupPage;