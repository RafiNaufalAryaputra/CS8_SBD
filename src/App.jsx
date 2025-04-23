import './App.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import DownloadPage from './pages/download';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExploreVisible, setIsExploreVisible] = useState(false);
  const [language, setLanguage] = useState('id');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const exploreRef = useRef(null);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);

  const texts = {
    id: {
      title: 'Snap. Share. Chat.',
      description: 'Ngobrol, kirim Snap, dan lakukan panggilan video dengan teman-temanmu. Tonton Cerita dan Spotlight langsung dari komputermu.',
      download: 'Unduh Sekarang',
      whySnapchat: 'Mengapa Snapchat?',
      exploreFeatures: 'Jelajahi Fitur Lainnya',
      fastCommunication: 'Komunikasi Cepat',
      creativeTools: 'Alat Kreatif',
      stayConnected: 'Selalu Terhubung',
      snapMap: 'Peta Snap',
      spotlight: 'Sorotan',
      featureDescriptions: {
        fastCommunication: 'Kirim Snap dan pesan dengan cepat ke teman-temanmu.',
        creativeTools: 'Gunakan filter, lensa, dan stiker untuk mengekspresikan dirimu.',
        stayConnected: 'Tetap terhubung dengan Cerita dan Sorotan dari teman-temanmu.',
      },
    },
    en: {
      title: 'Snap. Share. Chat.',
      description: 'Chat, Snap, and make video calls with your friends. Watch Stories and Spotlight, all from your computer.',
      download: 'Download Now',
      whySnapchat: 'Why Snapchat?',
      exploreFeatures: 'Explore More Features',
      fastCommunication: 'Fast Communication',
      creativeTools: 'Creative Tools',
      stayConnected: 'Stay Connected',
      snapMap: 'Snap Map',
      spotlight: 'Spotlight',
      featureDescriptions: {
        fastCommunication: 'Send snaps and messages instantly to your friends.',
        creativeTools: 'Use filters, lenses, and stickers to express yourself.',
        stayConnected: 'Keep up with Stories and Spotlight from your friends.',
      },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsExploreVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (exploreRef.current) observer.observe(exploreRef.current);

    return () => {
      if (exploreRef.current) observer.unobserve(exploreRef.current);
    };
  }, []);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen w-screen overflow-x-hidden">
      {/* Navbar */}
      <header className="fixed top-0 z-50 flex justify-between items-center p-4 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b border-gray-800 shadow-lg">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/LogoSnapchat.svg" alt="Snapchat" className="w-12 h-12 shadow-lg rounded-lg" />
          <div className="text-yellow-300 text-2xl font-bold">Snapchat</div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-1 justify-center space-x-8">
          <button
            onClick={() => scrollToSection(heroRef)}
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
          >
            {language === 'id' ? 'Beranda' : 'Home'}
          </button>
          <button
            onClick={() => scrollToSection(sectionRef)}
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
          >
            {texts[language].whySnapchat}
          </button>
          <button
            onClick={() => scrollToSection(exploreRef)}
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
          >
            {texts[language].exploreFeatures}
          </button>
        </nav>

        {/* Login and Sign Up */}
        <div className="flex items-center space-x-4">
          <button
            onClick={openLoginModal}
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
          >
            Login
          </button>
          <button
            onClick={openSignupModal}
            className="text-gray-300 hover:text-yellow-300 transition duration-300"
          >
            Sign Up
          </button>
          {/* Language Selector */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white px-2 py-1 rounded-lg hover:bg-gray-700 transition duration-300"
          >
            <option value="id">Indonesia</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-yellow-400 via-yellow-300 to-black text-center"
      >
        <h1 className="text-6xl font-extrabold mb-4 text-white drop-shadow-lg">{texts[language].title}</h1>
        <p className="text-lg text-gray-200 mb-6 max-w-2xl">{texts[language].description}</p>
        <button
          onClick={() => navigate('/download')}
          className="bg-yellow-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          {texts[language].download}
        </button>
      </section>

      {/* Features Section */}
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-black via-gray-700 to-black text-center"
      >
        <h2
          className={`text-4xl font-bold mb-8 text-yellow-300 transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {texts[language].whySnapchat}
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 px-4 w-full transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{texts[language].fastCommunication}</h3>
            <p className="text-gray-400">{texts[language].featureDescriptions.fastCommunication}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{texts[language].creativeTools}</h3>
            <p className="text-gray-400">{texts[language].featureDescriptions.creativeTools}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-300">{texts[language].stayConnected}</h3>
            <p className="text-gray-400">{texts[language].featureDescriptions.stayConnected}</p>
          </div>
        </div>
      </section>

      {/* Explore More Features Section */}
      <section
        ref={exploreRef}
        className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-black via-gray-700 to-black text-center"
      >
        <h2
          className={`text-4xl font-bold mb-8 text-yellow-300 transition-all duration-1000 ease-in-out ${
            isExploreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {texts[language].exploreFeatures}
        </h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full transition-all duration-1000 ease-in-out ${
            isExploreVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Snap Map */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center space-x-4">
            <img src="/snapchatmap.jpg" alt="Snap Map" className="w-16 h-16 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{texts[language].snapMap}</h3>
              <p className="text-gray-400">
                {language === 'id'
                  ? 'Lihat di mana teman-temanmu berada dan jelajahi dunia melalui Snap.'
                  : 'See where your friends are and explore the world through Snaps.'}
              </p>
            </div>
          </div>

          {/* Friend Stories */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center space-x-4">
            <img src="/snapchatstories.jpg" alt="Friend Stories" className="w-16 h-16 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                {language === 'id' ? 'Cerita Teman' : 'Friend Stories'}
              </h3>
              <p className="text-gray-400">
                {language === 'id'
                  ? 'Tonton cerita temanmu dan tetap terhubung dengan kehidupan mereka.'
                  : 'Watch your friends’ stories and stay connected with their lives.'}
              </p>
            </div>
          </div>

          {/* Creative Filters */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center space-x-4">
            <img src="/snapchatfilter.png" alt="Creative Filters" className="w-16 h-16 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                {language === 'id' ? 'Filter Kreatif' : 'Creative Filters'}
              </h3>
              <p className="text-gray-400">
                {language === 'id'
                  ? 'Gunakan filter kreatif untuk membuat Snap lebih menarik.'
                  : 'Use creative filters to make your Snaps more engaging.'}
              </p>
            </div>
          </div>

          {/* AR Lenses */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center space-x-4">
            <img src="/snapchatar.jpg" alt="AR Lenses" className="w-16 h-16 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                {language === 'id' ? 'Lensa AR' : 'AR Lenses'}
              </h3>
              <p className="text-gray-400">
                {language === 'id'
                  ? 'Cobalah lensa augmented reality untuk pengalaman yang menyenangkan.'
                  : 'Try augmented reality lenses for a fun experience.'}
              </p>
            </div>
          </div>

          {/* Instant Messaging */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center space-x-4">
            <img src="/snapchatchat.jpg" alt="Instant Messaging" className="w-16 h-16 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">
                {language === 'id' ? 'Pesan Instan' : 'Instant Messaging'}
              </h3>
              <p className="text-gray-400">
                {language === 'id'
                  ? 'Kirim pesan instan ke temanmu dengan mudah.'
                  : 'Send instant messages to your friends effortlessly.'}
              </p>
            </div>
          </div>

          {/* Streak */}
          <div className="bg-gray-800 p-6 rounded-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg flex items-center space-x-4">
            <img src="/snapchatstreak.jpg" alt="Streak" className="w-16 h-16 rounded-lg" />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{language === 'id' ? 'Streak' : 'Streak'}</h3>
              <p className="text-gray-400">
                {language === 'id'
                  ? 'Pertahankan Snap Streak-mu dengan teman-temanmu setiap hari.'
                  : 'Keep your Snap Streak alive with your friends every day.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Login</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Login
              </button>
            </form>
            <button
              onClick={closeLoginModal}
              className="mt-4 text-gray-400 hover:text-yellow-300 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Sign Up</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-300 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={closeSignupModal}
              className="mt-4 text-gray-400 hover:text-yellow-300 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="flex items-center justify-center h-16 w-screen bg-gradient-to-r from-black-900 via-black to-gray-900 text-center text-gray-500">
        <p className="hover:text-yellow-300 transition duration-300">
          &copy; 2025 Snapchat Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}

export default App;