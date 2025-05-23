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
    { label: "SERVICES", to: "/services" },
    { label: "CONTACT", to: "/contact" },
  ];

  const rightMenuItems = [
    { label: "LOGIN", to: "/login" },
    { label: "SIGN UP", to: "/signup" },
  ];

  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    const matches = elements.filter((el) => {
      const textContent = el.textContent.toLowerCase();
      const isNumeric = !isNaN(textContent.trim());
      const queryLower = query.trim().toLowerCase();

      return isNumeric
        ? parseFloat(textContent.trim()) === parseFloat(queryLower)
        : textContent.includes(queryLower);
    });

    if (matches.length > 0) {
      matches.forEach((match, index) => {
        match.id = `search-result-${index}`;
      });

      setSearchResults(
        matches.map((match, index) => ({
          text: match.textContent,
          elementId: `search-result-${index}`,
        }))
      );

      const firstResultId = `search-result-0`;
      setTimeout(() => {
        document.getElementById(firstResultId)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);

      matches.forEach((el) => {
        el.style.backgroundColor = "#ffe58f";
        setTimeout(() => {
          el.style.backgroundColor = "";
        }, 2000);
      });

      setSearchQuery("");
    } else {
      setSearchResults([]);
      alert("No matches found.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const closeSearchResults = () => setSearchResults([]);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="sticky top-0 z-50 bg-[#101e2e] font-sans shadow-xl">
      {/* Top Banner */}
      <div className="bg-[#162534] py-2">
        <h1 className="text-sm md:text-lg text-center font-semibold text-[#FEC600] tracking-wide">
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
      <div className="bg-[#101e2e] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
              alt="AZLAAN Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Search Bar */}
          <div className="flex-grow flex justify-center mx-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search services, products..."
              className="w-full max-w-md px-4 py-2 rounded-full bg-white text-black text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#FEC600]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-500"
              >
                ✕
              </button>
            )}
            <button
              onClick={handleSearch}
              className="absolute right-0 top-0 bottom-0 px-4 bg-[#FEC600] rounded-r-full hover:bg-yellow-400 transition"
            >
              <img
                src="https://8upload.com/image/6797eb0d03c90/glass.png"
                alt="Search"
                className="h-4 w-4"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="block md:hidden px-3 py-2 bg-[#FEC600] rounded-md focus:outline-none"
          >
            <img
              src={
                isMobileMenuOpen
                  ? "https://8upload.com/image/6797ef8ebfe6e/close-button.png"
                  : "https://8upload.com/image/6797ef8eb0c46/line.png"
              }
              alt="Menu Toggle"
              className="h-5 w-5"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {leftMenuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FEC600] font-medium"
                    : "hover:text-[#FEC600] transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden px-4 pb-4">
            <ul className="space-y-2">
              {leftMenuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    onClick={toggleMobileMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 rounded-md bg-[#1a2a3c] text-[#FEC600]"
                        : "block px-4 py-2 rounded-md hover:bg-[#1a2a3c] transition"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="bg-gray-100 text-black p-4">
            <h2 className="font-bold text-lg mb-2">Search Results:</h2>
            <ul className="space-y-1">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <a
                    href={`#${result.elementId}`}
                    className="text-blue-500 underline hover:text-blue-700"
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
              onClick={closeSearchResults}
              className="mt-4 text-red-600 underline hover:text-red-800"
            >
              Close Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAlFWZ;
