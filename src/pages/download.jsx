import React from 'react';
import { useNavigate } from 'react-router-dom';

function DownloadPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // Kembali ke halaman utama
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white text-center">
      <h1 className="text-5xl font-bold mb-6 text-yellow-300">Download Snapchat</h1>
      <p className="text-lg text-gray-300 mb-8">
        Terima kasih telah memilih Snapchat! Klik tombol di bawah untuk memulai pengunduhan.
      </p>
      <a
        href="https://www.snapchat.com/download"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-300 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
      >
        Start Download
      </a>
      <button
        onClick={handleBack}
        className="mt-6 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-all duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}

export default DownloadPage;