import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";

import { Transition } from "react-transition-group";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import useTruncatedText from "../reusable/useTruncatedText";

const MyServices = () => { 

const [Services, setServices] = useState([
  {
    id: 2,
    title: "Supply and Installation of Premium Carpets",
    description:
      "AZLAAN CONTRACTING W.L.L provides high-quality carpet supply and expert installation services tailored to residential, commercial, and hospitality environments. Our carpets are selected for durability, comfort, and style, enhancing any space with professional craftsmanship.",
    image: [
      "https://example.com/images/carpets-main.jpg" // Replace with your real main carpet image URL
    ],
    galleryImage: [
      "https://example.com/images/carpet1.jpg",
      "https://example.com/images/carpet2.jpg",
      "https://example.com/images/carpet3.jpg",
      "https://example.com/images/carpet4.jpg",
      "https://example.com/images/carpet5.jpg"
    ],
    keyFeatures: [
      "Wide range of carpet types: wool, nylon, polypropylene, and blends",
      "Custom sizing and fitting for any room shape",
      "Professional cleaning and maintenance services available",
      "Durable, stain-resistant, and fade-resistant options",
      "Eco-friendly and hypoallergenic carpet options"
    ],
    technologies: [
      "Advanced carpet laying techniques ensuring smooth finish",
      "Use of high-quality adhesives and tack strips for secure installation",
      "Anti-microbial and anti-static treatments available",
      "Precision cutting with modern carpet knives and tools",
      "Moisture barrier and underlay installation for comfort and durability"
    ],
    githubLink: "https://github.com/your-username/carpets-project", // if applicable
    liveDemoLink: "https://www.example.com/azlaan-carpets", // your live demo or website page
    faceBook: "https://www.facebook.com/azlaan.contracting", // replace with real page if exists
    instaGram: "https://www.instagram.com/azlaan.contracting"  // replace with real page if exists
  },
  {
    id: 3,
    title: "Supply and Installation of Premium Parquet Flooring",
    description:
      "AZLAAN CONTRACTING W.L.L specializes in supplying and installing high-quality parquet flooring that combines elegance and durability. Our parquet floors are crafted from premium woods, designed to enhance the aesthetics of residential, commercial, and hospitality spaces with timeless patterns and expert workmanship.",
    image: [
      "https://example.com/images/parquet-main.jpg" // Replace with your actual parquet main image URL
    ],
    galleryImage: [
      "https://example.com/images/parquet1.jpg",
      "https://example.com/images/parquet2.jpg",
      "https://example.com/images/parquet3.jpg",
      "https://example.com/images/parquet4.jpg",
      "https://example.com/images/parquet5.jpg"
    ],
    keyFeatures: [
      "Wide selection of wood species including oak, maple, and walnut",
      "Various parquet patterns: herringbone, chevron, basket weave, and more",
      "Precision installation ensuring smooth, level surfaces",
      "Durable finishes that resist wear, scratches, and stains",
      "Customizable options to match your interior design"
    ],
    technologies: [
      "Advanced wood treatment for moisture resistance and longevity",
      "State-of-the-art sanding and polishing equipment",
      "Eco-friendly finishes with low VOC emissions",
      "Precision cutting tools for perfect pattern alignment",
      "Use of high-quality adhesives and underlays for stability"
    ],
    githubLink: "https://github.com/your-username/parquet-flooring-project", // optional
    liveDemoLink: "https://www.example.com/azlaan-parquet", // your project or company site
    faceBook: "https://www.facebook.com/azlaan.contracting", // your FB page
    instaGram: "https://www.instagram.com/azlaan.contracting" // your Instagram page
  },
  
  {
    id: 4,
    title: "Supply and Installation of Hospital-Grade Vinyl Flooring",
    description:
      "AZLAAN CONTRACTING W.L.L provides specialized supply and installation of hospital-grade vinyl flooring designed to meet stringent healthcare standards. Our vinyl flooring solutions offer durability, easy maintenance, and superior hygiene, making them ideal for medical facilities, clinics, and laboratories.",
    image: [
      "https://example.com/images/hospital-vinyl-main.jpg" // Replace with your actual hospital vinyl main image URL
    ],
    galleryImage: [
      "https://example.com/images/hospital-vinyl1.jpg",
      "https://example.com/images/hospital-vinyl2.jpg",
      "https://example.com/images/hospital-vinyl3.jpg",
      "https://example.com/images/hospital-vinyl4.jpg",
      "https://example.com/images/hospital-vinyl5.jpg"
    ],
    keyFeatures: [
      "Antimicrobial and hygienic surface",
      "Slip-resistant and safe for high-traffic areas",
      "Chemical and stain resistant",
      "Seamless installation to prevent bacterial growth",
      "Easy to clean and maintain with hospital-grade disinfectants"
    ],
    technologies: [
      "Heterogeneous and homogeneous vinyl formulations",
      "Heat-welded seams for moisture protection",
      "Advanced anti-slip coatings",
      "Low-VOC and eco-friendly materials",
      "Precision installation tools for smooth, gap-free surfaces"
    ],
    githubLink: "https://github.com/your-username/hospital-vinyl-flooring-project", // optional
    liveDemoLink: "https://www.example.com/azlaan-hospital-vinyl", // your project or company site
    faceBook: "https://www.facebook.com/azlaan.contracting",
    instaGram: "https://www.instagram.com/azlaan.contracting"
  },
  {
    id: 5,
    title: "Design and Build of Mall Kiosks",
    description:
      "AZLAAN CONTRACTING W.L.L specializes in designing and building custom mall kiosks that attract customers and maximize retail space efficiency. Our turnkey solutions include concept development, construction, and installation, tailored to meet your brand identity and business needs.",
    image: [
      "https://example.com/images/mall-kiosk-main.jpg" // Replace with your actual image URL
    ],
    galleryImage: [
      "https://example.com/images/mall-kiosk1.jpg",
      "https://example.com/images/mall-kiosk2.jpg",
      "https://example.com/images/mall-kiosk3.jpg",
      "https://example.com/images/mall-kiosk4.jpg"
    ],
    keyFeatures: [
      "Custom design matching your brand",
      "Efficient use of limited mall space",
      "Durable and attractive materials",
      "Compliance with mall regulations",
      "Turnkey service from design to installation"
    ],
    technologies: [
      "3D modeling and rendering",
      "Modular construction techniques",
      "High-quality wood, glass, and metal materials",
      "LED lighting integration",
      "Precision fabrication tools"
    ],
    githubLink: "https://github.com/your-username/mall-kiosk-project",
    liveDemoLink: "https://www.example.com/azlaan-mall-kiosk",
    faceBook: "https://www.facebook.com/azlaan.contracting",
    instaGram: "https://www.instagram.com/azlaan.contracting"
  },
  
  {
    id: 6,
    title: "Design and Build of Exhibition Stands",
    description:
      "AZLAAN CONTRACTING W.L.L offers professional design and build services for exhibition stands, helping your brand stand out at trade shows and events. We provide innovative and customizable stands designed to engage visitors and showcase your products effectively.",
    image: [
      "https://example.com/images/exhibition-stand-main.jpg"
    ],
    galleryImage: [
      "https://example.com/images/exhibition-stand1.jpg",
      "https://example.com/images/exhibition-stand2.jpg",
      "https://example.com/images/exhibition-stand3.jpg",
      "https://example.com/images/exhibition-stand4.jpg"
    ],
    keyFeatures: [
      "Customizable modular designs",
      "Quick assembly and disassembly",
      "Integrated lighting and multimedia",
      "Sturdy and transport-friendly materials",
      "Brand-focused creative concepts"
    ],
    technologies: [
      "CAD and 3D design software",
      "Lightweight aluminum framing",
      "Digital printing and graphics",
      "LED and ambient lighting systems",
      "Efficient logistics and installation tools"
    ],
    githubLink: "https://github.com/your-username/exhibition-stands-project",
    liveDemoLink: "https://www.example.com/azlaan-exhibition-stands",
    faceBook: "https://www.facebook.com/azlaan.contracting",
    instaGram: "https://www.instagram.com/azlaan.contracting"
  },
  
  
  {
    id: 7,
    title: "Premium Curtains Fabrics Supply",
    description:
      "AZLAAN CONTRACTING W.L.L supplies high-quality curtains fabrics that combine elegance, durability, and ease of maintenance. Our wide selection caters to both residential and commercial needs, available in various textures, colors, and patterns.",
    image: [
      "https://example.com/images/curtains-fabric-main.jpg"
    ],
    galleryImage: [
      "https://example.com/images/curtains-fabric1.jpg",
      "https://example.com/images/curtains-fabric2.jpg",
      "https://example.com/images/curtains-fabric3.jpg",
      "https://example.com/images/curtains-fabric4.jpg"
    ],
    keyFeatures: [
      "Wide variety of fabric types and colors",
      "Fade and stain resistant materials",
      "Eco-friendly and non-toxic fabrics",
      "Soft textures suitable for all interiors",
      "Custom fabric sourcing upon request"
    ],
    technologies: [
      "Advanced fabric weaving and dyeing",
      "UV-resistant treatments",
      "Fire-retardant coatings",
      "Eco-friendly production processes",
      "Quality control for durability"
    ],
    githubLink: "https://github.com/your-username/curtains-fabrics-project",
    liveDemoLink: "https://www.example.com/azlaan-curtains-fabrics",
    faceBook: "https://www.facebook.com/azlaan.contracting",
    instaGram: "https://www.instagram.com/azlaan.contracting"
  },
  
  {
    id: 8,
    title: "Curtains Fittings and Accessories",
    description:
      "AZLAAN CONTRACTING W.L.L offers a comprehensive range of curtains fittings and accessories, including rods, tracks, hooks, and decorative elements. Our products are designed for easy installation, durability, and seamless integration with various curtain styles.",
    image: [
      "https://example.com/images/curtains-fittings-main.jpg"
    ],
    galleryImage: [
      "https://example.com/images/curtains-fittings1.jpg",
      "https://example.com/images/curtains-fittings2.jpg",
      "https://example.com/images/curtains-fittings3.jpg",
      "https://example.com/images/curtains-fittings4.jpg"
    ],
    keyFeatures: [
      "Wide selection of materials and finishes",
      "Easy to install and maintain",
      "Compatible with all curtain types",
      "Strong and corrosion-resistant hardware",
      "Customizable decorative options"
    ],
    technologies: [
      "Precision metal and wood crafting",
      "Durable powder coating finishes",
      "Smooth-operating track systems",
      "Innovative curtain automation options",
      "Ergonomic and aesthetic designs"
    ],
    githubLink: "https://github.com/your-username/curtains-fittings-project",
    liveDemoLink: "https://www.example.com/azlaan-curtains-fittings",
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
    <div className="  px-6 py-8 lg:py-10 bg-[#F5F5DC] dark:bg-gray-800 dark:text-gray-100">
      {/* Header Section */}
      <h1 className="text-center text-3xl font-bold mb-4">Our <span className="text-[#6B4226]">Services</span></h1>
      <h2 className="text-center text-lg font-semibold mb-12">
        Delivering High-Quality Solutions to Meet Your Needs
      </h2>

      {/* Reference for scrolling back */}
      <div ref={servicesRef}></div>

      {/* Display Project Details or Services */}
      {selectedProject ? (
        <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
      ref={detailsRef} // Attach ref for scrolling to details section
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className=" w-full object-cover"
        />
      </div>

      {/* Project Title & Description */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {selectedProject.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
      </div>

      {/* Key Features Section */}
      {selectedProject.keyFeatures?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedProject.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies Section */}
      {selectedProject.technologies?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedProject.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Work Gallery Section */}
      {selectedProject.galleryImage?.length > 0 && (
        <div className="mt-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Work Gallery of {selectedProject.title}
          </h1>
        

          <div className="flex flex-wrap -m-1">
  {/* First Column */}
  <div className="flex flex-wrap w-full md:w-1/2">
    {selectedProject.galleryImage.slice(0, 3).map((gallery, index) => (
      <div
        key={index}
        className={`p-1 w-full ${index === 2 ? "md:w-full" : "md:w-1/2"}`}
      >
        <img
          alt="gallery"
          className="w-full object-cover h-48 md:h-full rounded-lg shadow-md"
          src={gallery}
        />
      </div>
    ))}
  </div>

  {/* Second Column */}
  <div className="flex flex-wrap w-full md:w-1/2">
    {selectedProject.galleryImage.slice(3, 6).map((gallery, index) => (
      <div
        key={index}
        className={`p-1 w-full ${index === 0 ? "md:w-full" : "md:w-1/2"}`}
      >
        <img
          alt="gallery"
          className="w-full object-cover h-48 md:h-full rounded-lg shadow-md"
          src={gallery}
        />
      </div>
    ))}
  </div>
</div>
        </div>
      )}

      {/* Back to Services Button */}
      {/* <div className="flex justify-center pt-6">
        <button
          className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:drop-shadow-lg  transition"
          onClick={handleCloseProject}
        >
          <FaArrowLeft className="mr-2" size={16} /> Back to Services
        </button>
      </div> */}
      <div className="flex justify-center pt-6 gap-4 flex-wrap">
  {/* Back to Services Button */}
  <div>
    <button
      className={`btn-hero bg-[#6B4226] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300 ${
        activeTheme === "dark" ? "dark-mode-text" : ""
      } text-base sm:text-lg md:text-xl`}
      onClick={handleCloseProject}
    >
      <FaArrowLeft className="mr-2 text-lg sm:text-xl" /> Back to Services
    </button>
  </div>

  {/* Book an Appointment Button (WhatsApp) */}
  <div>
    <a
      href="https://wa.me/+97455760872" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="w-full btn-hero flex items-center bg-[#27ae60] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300 text-base sm:text-lg md:text-xl"
    >
      Book an Appointment <FaWhatsapp className="ml-2 text-lg sm:text-xl" />
    </a>
  </div>
</div>



      
    </div>
          )}
        </Transition>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {displayedServices.map((project) => (
        <Transition key={project.id} in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
              className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${state} flex flex-col`}
            >
              {/* Project Image */}
              <img src={project.image} alt={project.title} className="w-full rounded-lg mb-4" />

              {/* Project Title */}
              <h2 className="text-xl font-semibold mb-2 px-4">{project.title}</h2>

              {/* Project Description with Read More */}
              <p className="text-gray-500 mb-4 px-4">
                {expandedCards[project.id]
                  ? project.description
                  : `${project.description.slice(0, shortTextLength)}...`}
                {project.description.length > shortTextLength && (
                  <button
                    onClick={() => toggleReadMore(project.id)}
                    className="text-blue-600 hover:underline ml-2"
                  >
                    {expandedCards[project.id] ? "Show Less" : "Read More"}
                  </button>
                )}
              </p>

              {/* Buttons Section */}
              <div className="p-4 flex flex-wrap justify-center mt-auto gap-4">
                {/* Details More Button */}
                <button
                  className="w-full btn-hero bg-[#6B4226] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B5A2B] transition-all duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  Details More <FaArrowRight className="ml-2 text-xl sm:text-2xl" />
                </button>

                {/* Book an Appointment Button (WhatsApp) */}
                <a
                  href="https://wa.me/+97455760872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-hero flex items-center bg-[#27ae60] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#219653] transition-all duration-300"
                >
                  Book an Appointment <FaWhatsapp className="ml-2 text-xl sm:text-2xl" />
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


