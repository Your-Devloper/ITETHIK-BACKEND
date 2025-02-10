import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ComingSoon() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
        {/* Logo */}
        <div className="text-2xl font-bold">ItEthik</div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/company/itethik" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/ITEthik" className="hover:text-sky-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/_itethik_/" className="hover:text-pink-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </nav>

      {/* Coming Soon Section */}
      <div className="flex flex-grow items-center justify-center text-center p-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg text-gray-400">We're launching something exciting. Stay tuned!</p>
        </div>
      </div>
    </div>
  );
}
