import { NavLink } from "react-router-dom";
import Typed from "react-typed";
import { useState } from "react";

const HeaderAlFWZ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftMenuItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about" },
    { label: "SERVICES", to: "/service" },
    { label: "CONTACT", to: "/contact" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return alert("Please enter a search term.");

    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    const matches = elements.filter((el) => {
      const text = el.textContent.toLowerCase();
      const isNumeric = !isNaN(text.trim());
      return isNumeric
        ? parseFloat(text.trim()) === parseFloat(query)
        : text.includes(query);
    });

    if (matches.length > 0) {
      matches.forEach((match, index) => (match.id = `search-result-${index}`));
      setSearchResults(
        matches.map((match, i) => ({
          text: match.textContent,
          elementId: `search-result-${i}`,
        }))
      );
      setTimeout(() => {
        document.getElementById("search-result-0")?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
      matches.forEach((el) => {
        el.style.backgroundColor = "#fef9c3";
        setTimeout(() => (el.style.backgroundColor = ""), 2000);
      });
      setSearchQuery("");
    } else {
      setSearchResults([]);
      alert("No matches found.");
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#f8fafc] text-[#1e293b] shadow-lg font-sans">
    {/* Top Banner */}
<div className="bg-gray-100 dark:bg-gray-800 py-2">
  <h1 className="text-sm md:text-lg text-center font-semibold text-yellow-500 dark:text-yellow-300 tracking-wide">
    <Typed
      strings={[
        "Welcome to AZLAAN CONTRACTING W.L.L",
        "Experts in Event Management & Interior Solutions in Qatar",
        "Office & Home Designs | Kiosks | Flooring | Curtains | Exhibition Stands",
      ]}
      typeSpeed={50}
      backSpeed={30}
      loop
    />
  </h1>
</div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img
            src="https://8upload.com/image/6830a9e51b351/Azlaan_Logo_Black.png"
            alt="AZLAAN Logo"
            className="h-10 w-auto"
          />
        </NavLink>

        {/* Search */}
        <div className="flex-grow mx-4 relative max-w-xl">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search services, products..."
            className="w-full px-4 py-2 text-sm rounded-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
            >
              ✕
            </button>
          )}
          <button
            onClick={handleSearch}
            className="absolute right-0 top-0 bottom-0 px-4 bg-[#facc15] rounded-r-full hover:bg-yellow-300"
          >
            <img
              src="https://8upload.com/image/6797eb0d03c90/glass.png"
              alt="Search"
              className="h-4 w-4"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden px-3 py-2 bg-yellow-300 rounded-md"
        >
          <img
            src={
              isMobileMenuOpen
                ? "https://8upload.com/image/6797ef8ebfe6e/close-button.png"
                : "https://8upload.com/image/6797ef8eb0c46/line.png"
            }
            alt="Menu"
            className="h-5 w-5"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {leftMenuItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-500 font-medium"
                  : "hover:text-yellow-500 transition"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#f1f5f9]">
          <ul className="space-y-2">
            {leftMenuItems.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 rounded-md bg-yellow-100 text-yellow-700"
                      : "block px-4 py-2 rounded-md hover:bg-yellow-50"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-yellow-50 text-gray-800 px-6 py-4 shadow-inner">
          <h2 className="font-bold text-md mb-2">Search Results:</h2>
          <ul className="list-disc pl-5 space-y-1">
            {searchResults.map((result, index) => (
              <li key={index}>
                <a
                  href={`#${result.elementId}`}
                  className="text-blue-600 underline hover:text-blue-800"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(result.elementId)?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                >
                  {result.text}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setSearchResults([])}
            className="mt-3 text-sm text-red-600 underline hover:text-red-800"
          >
            Close Results
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderAlFWZ;
