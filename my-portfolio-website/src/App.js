import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    console.log(`Input Changed: ${e.target.name} = ${e.target.value}`);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);
    try {
      const response = await fetch("https://ateeqmemon.app.n8n.cloud/webhook/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("Response status:", response.status);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("❌ Failed to send message. Try again.");
    }
  };

 const mainProjects = [`${process.env.PUBLIC_URL}/project1.jpg`,`${process.env.PUBLIC_URL}/project2.jpg`,`${process.env.PUBLIC_URL}/project3.jpg`,`${process.env.PUBLIC_URL}/project4.jpg`,`${process.env.PUBLIC_URL}/project5.jpg`,`${process.env.PUBLIC_URL}/project6.jpg`];
const moreProjects = [`${process.env.PUBLIC_URL}/project7.jpg`,`${process.env.PUBLIC_URL}/project8.jpg`,`${process.env.PUBLIC_URL}/project9.jpg`];

  return (
    <div className="bg-gradient-to-br from-[#0d0d0d] via-[#1a1a2e] to-[#16213e] text-gray-200 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gradient-to-r from-[#1f1c2c] via-[#2c003e] to-[#0f0c29] shadow-lg md:flex-row">
        <div className="flex items-center mb-2 md:mb-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">Mk</div>
        </div>
        <nav className="flex flex-wrap justify-center space-x-4 text-white font-semibold md:space-x-6">
          <a href="#about" className="hover:text-pink-400 transition">About Me</a>
          <a href="#services" className="hover:text-pink-400 transition">Services</a>
          <a href="#portfolio" className="hover:text-pink-400 transition">Portfolio</a>
          <a href="#contact" className="hover:text-pink-400 transition">Hire Me</a>
        </nav>
      </header>

  {/* Hero Section - Profile */}
<section
  id="about"
  className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 md:py-20 bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#f72585]"
>
  {/* Left Content */}
  <div className="md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left z-20 relative">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
      Muhammad Kamil <br />{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
        GRAPHIC DESIGNER
      </span>
    </h1>
    <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
      I am a tech-savvy individual with strong expertise in computer hardware
      and a solid command of Microsoft Office applications. I actively explore
      and utilize new features in modern PCs, including AI-powered tools, which
      enhances my overall skill set in computing.
    </p>
    <a href="#contact">
      <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition shadow-lg">
        Hire Me
      </button>
    </a>
  </div>

  {/* Profile Image */}
  <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative z-10">
    <div className="relative w-56 sm:w-64 lg:w-72 h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:scale-105 transition-transform duration-500">
      <img
            src={`${process.env.PUBLIC_URL}/profile.jpg`}
            alt="Profile"
                  className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="text-center px-12 py-20 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <h2 className="text-3xl font-bold text-white">MY SERVICES</h2>
        <p className="text-gray-300 mt-2 mb-12">I offer high-quality creative services tailored to your needs.</p>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-gradient-to-br from-[#2c003e] via-[#302b63] to-[#0f0c29] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="text-pink-400 text-5xl mb-4">✏️</div>
            <h3 className="text-xl font-semibold text-white">Graphic Design</h3>
            <p className="text-gray-300 mt-2">Creative and modern graphic design solutions.</p>
          </div>
        </div>
        <a href="#contact">
          <button className="mt-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition shadow-lg">Hire Me</button>
        </a>
      </section>


      {/* Portfolio Section with Lightbox */}
      <section id="portfolio" className="text-center px-12 py-20 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <h2 className="text-3xl font-bold text-white">PORTFOLIO</h2>
        <p className="text-gray-300 mt-2 mb-12">Some of my best design projects and creative work.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {mainProjects.map((src, idx) => (
            <img key={idx} src={src} alt={`Project ${idx + 1}`} onClick={() => setSelectedImage(src)} className="cursor-pointer rounded-xl h-48 w-full object-cover shadow-lg hover:opacity-80 transition" />
          ))}
        </div>
        <button onClick={() => setShowMore(!showMore)} className="mt-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition shadow-lg">
          {showMore ? "Show Less" : "See More"}
        </button>

        {showMore && (
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {moreProjects.map((src, idx) => (
              <img key={idx} src={src} alt={`Project ${idx + 7}`} onClick={() => setSelectedImage(src)} className="cursor-pointer rounded-xl h-48 w-full object-cover shadow-lg hover:opacity-80 transition" />
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer">
            <img src={selectedImage} alt="Selected Project" className="max-w-3xl max-h-[90vh] rounded-xl shadow-2xl" />
          </div>
        )}
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-12 py-20 bg-gradient-to-r from-[#2c003e] via-[#302b63] to-[#0f0c29]">
        <h2 className="text-3xl font-bold text-white text-center">CONTACT ME</h2>
        <p className="text-gray-300 mt-2 mb-12 text-center">Get in touch with me for collaborations and projects.</p>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="w-full p-3 rounded-xl bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="w-full p-3 rounded-xl bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <input name="phone" value={formData.phone} onChange={handleChange} type="text" placeholder="Phone" className="w-full p-3 rounded-xl bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" rows="4" className="w-full p-3 rounded-xl bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
            <button type="submit" className="px-6 py-3 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition shadow-lg">Send Message</button>
          </form>
          <div className="text-gray-300 space-y-4">
            <p><strong className="text-white">Address:</strong> Hala New</p>
            <p><strong className="text-white">Email:</strong> muhammadkamilmemon3@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
