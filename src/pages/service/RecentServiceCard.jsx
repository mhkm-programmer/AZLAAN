import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";

import { Transition } from "react-transition-group";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import useTruncatedText from "../reusable/useTruncatedText";

const MyServices = () => { 

const [Services, setServices] = useState([
  {
  id: 1,
  title: "Exhibition Stand Design & Build",
  description:
    "AZLAAN CONTRACTING W.L.L delivers creative and fully customized exhibition stands that captivate attention and enhance brand presence at trade shows and expos.",
  image: [
    "https://8upload.com/image/6835d5dfe8653/IMG-20250518-WA0028.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/6835d417e23af/IMG-20250518-WA0011-min-compressed.jpg",
    "https://8upload.com/image/6835d409c9074/IMG-20250518-WA0006-min-compressed.jpg",
    "https://8upload.com/image/6835d5e0228b3/IMG-20250518-WA0043.jpg",
     "https://8upload.com/image/6835d5df9735b/IMG-20250518-WA0027.jpg",
    "https://8upload.com/image/6835d40f62194/IMG-20250518-WA0008-min-compressed.jpg",
    "https://8upload.com/image/6835d41235075/IMG-20250518-WA0010-min-compressed.jpg"
  ],
  keyFeatures: [
    "Custom-built to brand specifications",
    "Modern and eye-catching designs",
    "Durable materials and quick installation",
    "Interactive and functional layouts",
    "Lighting and branding integration"
  ],
  technologies: [
    "3D CAD modeling",
    "Lightweight aluminum framing",
    "Modular display systems",
    "Digital printing & LED lighting",
    "Sustainable construction materials"
  ],
  githubLink: "https://github.com/your-username/exhibition-stands",
  liveDemoLink: "https://www.example.com/azlaan-exhibition-stands",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
  {
  id: 2,
  title: "Event Planning & Management",
  description:
    "We provide end-to-end event planning services, from concept to execution, ensuring flawless experiences for all types of corporate and private gatherings.",
  image: [
    "https://8upload.com/image/6835d83e5eeb5/IMG-20250518-WA0044.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/6835d83e97fac/IMG-20250524-WA0010.jpg",
    "https://8upload.com/image/6835d83d41e93/IMG-20250518-WA0034.jpg",
    "https://8upload.com/image/6835d83e212f2/IMG-20250518-WA0043.jpg",
    "https://8upload.com/image/6835d83dcdb2b/IMG-20250518-WA0042.jpg",
    "https://8upload.com/image/6835d83d0d358/IMG-20250518-WA0029.jpg",
    "https://8upload.com/image/6835d83cc4f6f/IMG-20250518-WA0021.jpg"
  ],
  keyFeatures: [
    "Customized themes and setups",
    "Full logistics and coordination",
    "On-site support and execution",
    "Audio-visual & lighting services",
    "Vendor and guest management"
  ],
  technologies: [
    "Project management tools",
    "Automated guest check-ins",
    "Event mapping software",
    "High-end AV systems",
    "Smart scheduling solutions"
  ],
  githubLink: "https://github.com/your-username/event-management",
  liveDemoLink: "https://www.example.com/azlaan-events",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
  
  {
  id: 3,
  title: "Wedding Decorations & Setup",
  description:
    "AZLAAN CONTRACTING W.L.L offers stunning and personalized wedding decoration services, creating unforgettable atmospheres with elegance and creativity.",
  image: [
    "https://8upload.com/image/68358ff2790ed/qatariweddings__1682460102_3089021684216554656.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/68358ff1a64ac/IMG-20250518-WA0037.jpg",
    "https://8upload.com/image/68358ff20edcb/qatariweddings__1678644605_3057014971319711486.jpg",
    "https://8upload.com/image/68358ff25d1d5/qatariweddings__1678644605_3057014971546123337.jpg",
    "https://8upload.com/image/68358ff243a75/qatariweddings__1678644605_3057014971520998657.jpg",
    "https://8upload.com/image/68358ff1988af/7d43cf9d9a7aab21cc46b2a9bce3abce.jpg",
    "https://8upload.com/image/68358ff22a9bd/qatariweddings__1678644605_3057014971336330602.jpg"
  ],
  keyFeatures: [
    "Custom wedding stage and aisle design",
    "Floral arrangements and lighting",
    "Venue theming and drapery",
    "Guest seating and décor planning",
    "Pre-event consultation and planning"
  ],
  technologies: [
    "3D event layout software",
    "LED lighting and effects",
    "Fabric draping systems",
    "Floral preservation techniques",
    "Mood and ambiance control tech"
  ],
  githubLink: "https://github.com/your-username/wedding-services",
  liveDemoLink: "https://www.example.com/azlaan-weddings",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
  {
  id: 4,
  title: "Conference Setup & Solutions",
  description:
    "We provide turnkey conference setup services including stage design, seating, lighting, sound, and branding — ideal for corporate and business events.",
  image: [
    "https://8upload.com/image/6835876c50cbf/IMG-20250518-WA0019.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/6835876c719dc/IMG-20250518-WA0020.jpg",
    "https://8upload.com/image/68358a5042e4a/IMG-20250518-WA0041.jpg",
    "https://8upload.com/image/68358a5008341/IMG-20250518-WA0038.jpg",
    "https://8upload.com/image/68358a4fb8388/IMG-20250518-WA0037.jpg",
    "https://8upload.com/image/68358a4f31468/IMG-20250518-WA0025.jpg",
    "https://8upload.com/image/68358afb0a71f/IMG-20250524-WA0010.jpg"
  ],
  keyFeatures: [
    "Complete audio-visual setup",
    "Podium and stage setup",
    "Backdrops and branding",
    "Delegate seating arrangements",
    "Networking and lounge zones"
  ],
  technologies: [
    "Professional AV systems",
    "Wireless mic & PA systems",
    "Modular stage platforms",
    "Branded projection screens",
    "Lighting control software"
  ],
  githubLink: "https://github.com/your-username/conference-solutions",
  liveDemoLink: "https://www.example.com/azlaan-conferences",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
  
  {
  id: 5,
  title: "Custom Furniture Supply",
  description:
    "AZLAAN provides premium-quality, custom-built furniture for homes, offices, and event setups, blending comfort, design, and functionality.",
  image: [
    "https://8upload.com/image/6835db5b82ac4/IMG-20250113-WA0008.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/6835db5ba0248/IMG-20250112-WA0883.jpg",
    "https://8upload.com/image/6835db5bc8df3/IMG-20250112-WA0387.jpg",
    "https://8upload.com/image/6835db5c664f0/IMG-20250112-WA0087.jpg",
      "https://8upload.com/image/6835db5c22fd7/IMG-20250112-WA0176.jpg",
    "https://8upload.com/image/6835db5bebc96/IMG-20250112-WA0291.jpg",
    "https://8upload.com/image/6835db5c4392f/IMG-20250112-WA0090.jpg"
  ],
  keyFeatures: [
    "Modern and ergonomic designs",
    "High-quality wood and upholstery",
    "Custom dimensions and finishes",
    "Bulk supply for events and offices",
    "Delivery and on-site setup"
  ],
  technologies: [
    "3D furniture modeling",
    "Precision CNC cutting",
    "Anti-scratch laminate finishes",
    "Eco-friendly materials",
    "Ergonomic design tools"
  ],
  githubLink: "https://github.com/your-username/furniture-supply",
  liveDemoLink: "https://www.example.com/azlaan-furniture",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
  
  
  {
  id: 6,
  title: "Curtains Fabrics & Installation",
  description:
    "AZLAAN CONTRACTING W.L.L provides premium curtain fabrics and expert installation services for residential and commercial spaces.",
  image: [
    "https://8upload.com/image/683573291f1ad/IMG-20250524-WA0025.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/683573295785c/IMG-20250524-WA0026.jpg",
    "https://8upload.com/image/68357328da86a/IMG-20250524-WA0024.jpg",
    "https://8upload.com/image/683579d08bc61/IMG-20250112-WA0326.jpg",
    "https://8upload.com/image/683579d0b9dcd/IMG-20250112-WA0337.jpg",
     "https://8upload.com/image/6835732839614/IMG-20250524-WA0021.jpg",
    "https://8upload.com/image/683573281acb3/IMG-20250524-WA0017.jpg"
  ],
  keyFeatures: [
    "Wide variety of fabrics and patterns",
    "Precision measurements and fitting",
    "Elegant and modern designs",
    "Motorized curtain systems available",
    "Customizable solutions for any space"
  ],
  technologies: [
    "Automated curtain systems",
    "Eco-friendly fabric options",
    "UV-resistant materials",
    "3D curtain visualization",
    "Noise-reducing fabrics"
  ],
  githubLink: "https://github.com/your-username/curtains-installation",
  liveDemoLink: "https://www.example.com/azlaan-curtains",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
  
  {
  id: 7,
  title: "Carpet Flooring Supply & Installation",
  description:
    "We supply and install high-quality carpets tailored to enhance the comfort and aesthetics of your interior spaces.",
  image: [
    "https://8upload.com/image/6835830a01f20/IMG-20250518-WA0046.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/6835830a3b578/IMG-20250518-WA0047.jpg",
    "https://8upload.com/image/68358488d33b5/IMG-20250518-WA0004.jpg",
    "https://8upload.com/image/683583093e1e5/IMG-20250518-WA0034.jpg",
     "https://8upload.com/image/6835830901a3b/IMG-20250518-WA0031.jpg",
    "https://8upload.com/image/68358308af632/IMG-20250518-WA0027.jpg",
    "https://8upload.com/image/6835830855894/IMG-20250518-WA0005.jpg"
  ],
  keyFeatures: [
    "Residential and commercial solutions",
    "Stain and wear-resistant options",
    "Custom patterns and sizes",
    "Anti-slip backing available",
    "Expert measurement and fitting"
  ],
  technologies: [
    "Advanced tufting techniques",
    "Anti-static fibers",
    "Thermal insulation materials",
    "Eco-friendly adhesives",
    "Modular carpet tiles"
  ],
  githubLink: "https://github.com/your-username/carpet-installation",
  liveDemoLink: "https://www.example.com/azlaan-carpet",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
{
  id: 8,
  title: "Parquet Flooring Solutions",
  description:
    "AZLAAN CONTRACTING W.L.L offers elegant parquet flooring that blends durability, style, and natural beauty for luxury interiors.",
  image: [
    "https://8upload.com/image/683586063a259/IMG-20250518-WA0032.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/683584fa3fcc4/WhatsApp_Image_2025-05-24_at_19.54.58_2d06d044.jpg",
    "https://8upload.com/image/683586065c70f/IMG-20250518-WA0033.jpg",
    "https://8upload.com/image/6835860699589/IMG-20250518-WA0034.jpg",
    "https://8upload.com/image/68358606df569/IMG-20250518-WA0035.jpg",
    "https://8upload.com/image/683586afbc756/SPC5__1_-min.jpg",
    "https://8upload.com/image/683584fa786d5/WhatsApp_Image_2025-05-24_at_19.54.59_cbc3e988.jpg"
  ],
  keyFeatures: [
    "Premium hardwood and laminate options",
    "Geometric and classic styles",
    "Scratch and moisture resistant",
    "Precision installation",
    "Low maintenance finish"
  ],
  technologies: [
    "Tongue-and-groove locking system",
    "UV-cured coating",
    "Moisture barrier underlay",
    "Acoustic dampening layers",
    "3D layout planning tools"
  ],
  githubLink: "https://github.com/your-username/parquet-flooring",
  liveDemoLink: "https://www.example.com/azlaan-parquet",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},
{
  id: 9,
  title: "Hospital Vinyl Flooring",
  description:
    "We provide hygienic, anti-bacterial vinyl flooring solutions ideal for hospitals, clinics, and healthcare facilities.",
  image: [
    "https://8upload.com/image/68357f0719d72/Polyflor_Vinyl_Flooring_For_The_Health_and_Care_Sectors_1.jpg"
  ],
  galleryImage: [
    "https://8upload.com/image/68357f07970ea/clinics-vinyl-flooring-s1__1_.jpg",
    "https://8upload.com/image/68357f07824a2/clinics-vinyl-flooring-s2.jpg",
    
   
    
    "https://8upload.com/image/68357f06da18c/Polyflor_Vinyl_Flooring_For_The_Health_and_Care_Sectors_11__1_.jpg",
     "https://8upload.com/image/68357f076ded8/hospital-flooring-s2-qz642y3prqarlwu0xbk1zfq2pzqc8ltw9y35e7t93s.jpg",
    "https://8upload.com/image/68357f075abf7/Hospital-vinyl-flooring-s1-e1727084667601-quixuxlqewisallwj741hntv7756kr8dsdimo1abv0.jpg",
    "https://8upload.com/image/68357f0732529/Polyflor_Vinyl_Flooring_for_Health_and_Care_Industry_4.jpg"
    
  ],
  keyFeatures: [
    "Seamless and easy to clean",
    "Anti-bacterial and slip-resistant",
    "Durable in high-traffic areas",
    "Chemical and stain resistant",
    "Meets healthcare safety standards"
  ],
  technologies: [
    "Seam-welded installation",
    "Anti-microbial coatings",
    "Cushioned back layers",
    "Non-toxic adhesives",
    "Color-coded zoning designs"
  ],
  githubLink: "https://github.com/your-username/hospital-vinyl",
  liveDemoLink: "https://www.example.com/azlaan-hospital-vinyl",
  faceBook: "https://www.facebook.com/azlaan.contracting",
  instaGram: "https://www.instagram.com/azlaan.contracting"
},

  
  
  
 
    // Add more Services here...
  ]);   
   
  const [activeTheme] = useThemeSwitcher();
  const [selectedProject, setSelectedProject] = useState(null); // Stores the currently selected project 
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0); // Saves the previous scroll position
  const [showAllServices, setShowAllServices] = useState(false); // Toggles between limited and full service list

  // Reference for the services section (used for scrolling back)
  const servicesRef = useRef(null);

  // Reference for the details section (used for scrolling to details)
  const detailsRef = useRef(null);

 

  /**
 * Handles clicking on a project to display its details.
 * Scrolls smoothly to the project details section.
 */
const handleProjectClick = (project) => {
  // Save the current scroll position
  setPreviousScrollPosition(window.scrollY);

  // Set the selected project for detailed view
  setSelectedProject(project);

  // Scroll to the details section manually
  requestAnimationFrame(() => { // Ensure layout has settled before scrolling
    if (detailsRef.current) {
      const rect = detailsRef.current.getBoundingClientRect(); // Get the element's position
      const scrollPosition = rect.top + window.scrollY; // Calculate exact position

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // Smooth scrolling for a better user experience
      });
    }
  });
};


const [expandedCards, setExpandedCards] = useState({});

const toggleReadMore = (id) => {
  setExpandedCards((prevState) => ({
    ...prevState,
    [id]: !prevState[id],
  }));
};

const shortTextLength = 100; // Adjust the character limit


  /**
   * Handles closing the project details view.
   * Scrolls back to the previous position in the services section.
   */
  const handleCloseProject = () => {
    setSelectedProject(null);

    // Scroll back to the previously saved scroll position
    window.scrollTo({
      top: previousScrollPosition,
      behavior: "smooth", // Smooth scrolling for better UX
    });
  };

  /**
   * Toggles displaying all services.
   */
  const handleShowAllServices = () => {
    setShowAllServices(true);
  };

  /**
   * CSS transition styles for animating the project details.
   */
  const articleTransitionStyles = {
    entering: "opacity-0 transform scale-75",
    entered: "opacity-100 transform scale-100",
    exiting: "opacity-0 transform scale-75",
    exited: "opacity-0 transform scale-0",
  };

  // Display limited or all services based on the `showAllServices` state
  const displayedServices = showAllServices ? Services : Services.slice(0, 15);

  return (
  <div className="px-6 py-8 lg:py-10 bg-[#F2EDE6] dark:bg-gray-800 dark:text-gray-100">
    {/* Header Section */}
    <h1 className="text-center text-3xl font-bold mb-4">
      Explore Our <span className="text-[#6B4226]">Specialized Services</span>
    </h1>
    <h2 className="text-center text-lg font-medium text-gray-700 mb-12">
      Innovative Event & Interior Solutions Designed to Transform Spaces and Experiences
    </h2>

    {/* Reference for scrolling back */}
    <div ref={servicesRef}></div>

    {selectedProject ? (
      <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            ref={detailsRef}
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="mb-8 overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full object-cover h-[320px] sm:h-[400px] rounded-2xl"
              />
            </div>

            {/* Title & Description */}
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-[#3E2723] mb-4">
                {selectedProject.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedProject.description}
              </p>
            </div>

            {/* Key Features */}
            {selectedProject.keyFeatures?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#3E2723] mb-3">Key Features</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                  {selectedProject.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Used */}
            {selectedProject.technologies?.length > 0 && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-[#3E2723] mb-3">Technologies Used</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
                  {selectedProject.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Gallery */}
            {selectedProject.galleryImage?.length > 0 && (
              <div className="mt-10">
                <h2 className="text-center text-3xl font-bold text-[#3E2723] mb-6">
                  Work Gallery of {selectedProject.title}
                </h2>

                <div className="flex flex-wrap -m-1">
                  {/* Left Column */}
                  <div className="flex flex-wrap w-full md:w-1/2">
                    {selectedProject.galleryImage.slice(0, 3).map((gallery, index) => (
                      <div
                        key={index}
                        className={`p-1 w-full ${index === 2 ? "md:w-full" : "md:w-1/2"}`}
                      >
                        <img
                          src={gallery}
                          alt={`Gallery ${index + 1}`}
                          className="w-full object-cover h-48 md:h-[200px] rounded-lg shadow-md border border-gray-100"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-wrap w-full md:w-1/2">
                    {selectedProject.galleryImage.slice(3, 6).map((gallery, index) => (
                      <div
                        key={index}
                        className={`p-1 w-full ${index === 0 ? "md:w-full" : "md:w-1/2"}`}
                      >
                        <img
                          src={gallery}
                          alt={`Gallery ${index + 4}`}
                          className="w-full object-cover h-48 md:h-[200px] rounded-lg shadow-md border border-gray-100"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex justify-center pt-10 gap-4 flex-wrap">
              <button
                onClick={handleCloseProject}
                className={`flex items-center justify-center bg-[#3E2723] text-white px-8 py-3 rounded-2xl font-medium shadow-md hover:bg-[#5D4037] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg md:text-xl ${
                  activeTheme === "dark" ? "dark-mode-text" : ""
                }`}
              >
                <FaArrowLeft className="mr-2 text-lg sm:text-xl" />
                Back to Services
              </button>

              <a
                href="https://wa.me/+97455760872"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-[#1F8A5F] text-white px-8 py-3 rounded-2xl font-medium shadow-md hover:bg-[#157347] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg md:text-xl"
              >
                Book an Appointment
                <FaWhatsapp className="ml-2 text-lg sm:text-xl" />
              </a>
            </div>
          </div>
        )}
      </Transition>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {displayedServices.map((project) => (
          <Transition key={project.id} in={true} timeout={300} mountOnEnter unmountOnExit>
            {(state) => (
              <div
                className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ${state} flex flex-col`}
              >
                {/* Project Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Project Title */}
                <h2 className="text-2xl font-bold text-gray-800 px-6 pt-5">
                  {project.title}
                </h2>

                {/* Project Description with Read More */}
                <p className="text-gray-600 text-base px-6 pt-3 pb-5 leading-relaxed">
                  {expandedCards[project.id]
                    ? project.description
                    : `${project.description.slice(0, shortTextLength)}...`}
                  {project.description.length > shortTextLength && (
                    <button
                      onClick={() => toggleReadMore(project.id)}
                      className="text-[#1976D2] font-medium hover:underline ml-2"
                    >
                      {expandedCards[project.id] ? "Show Less" : "Read More"}
                    </button>
                  )}
                </p>

                {/* Action Buttons */}
                <div className="px-6 pb-6 mt-auto flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleProjectClick(project)}
                    className="flex-1 bg-[#3E2723] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#5D4037] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    View Details
                    <FaArrowRight className="ml-2" />
                  </button>

                  <a
                    href="https://wa.me/+97455760872"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#1F8A5F] text-white py-3 rounded-xl font-semibold shadow-md hover:bg-[#157347] hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                  >
                    Book Appointment
                    <FaWhatsapp className="ml-2" />
                  </a>
                </div>
              </div>
            )}
          </Transition>
        ))}
      </div>
    )}
  </div>
);
};

export default MyServices;


