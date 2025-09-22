import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();

  return (
    <nav className="bg-black text-white font-pixel p-4 flex justify-center gap-6 fixed top-0 left-0 w-full shadow-md z-10">
      <Link to="/" className="hover:text-gray-400">Home</Link>
      <Link to="/about" className="hover:text-gray-400">About</Link>
      {/* <Link to="/projects" className="hover:text-gray-400">Projects</Link> */}
      <Link to="/contact" className="hover:text-gray-400">Contact</Link>

      {/* Toggle button */}
      <button
        onClick={toggleLang}
        className="ml-6 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
      >
        {lang === "vi" ? "EN" : "VI"}
      </button>
    </nav>
  );
}
