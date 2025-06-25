import React from "react";

const App = () => {
  return (
    <>

<nav className="w-full bg-white shadow-md fixed top-0 z-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center h-16 font-poppins">
      <div className="flex space-x-8 text-black font-semibold text-lg">
        <a href="#contact" className="hover:text-blue-600">Contact</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#about" className="hover:text-blue-600">About</a>
      </div>
    </div>
  </div>
</nav>





{/* <div className="flex justify-center space-x-10 font-extrabold text-lg">
  <a href="#contact" className="hover:text-blue-500 transition-colors">Contact me</a>
  <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
  <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
  <a href="#about" className="hover:text-blue-500 transition-colors">About Me</a>
</div> */}

   
    <div className="font-sans bg-black text-white transition-colors duration-500">
      {/* Hero Section */}
     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center bg-gradient-to-r from-gray-800 to-black text-white px-8">
  <div className="md:w-1/2 flex flex-col items-center md:items-start justify-center">
    <h1 className="text-5xl sm:text-6xl font-bold mb-6">Hi, I'm Samay Verma</h1>
    <p className="text-xl mb-6">Full Stack Developer | MERN Stack Enthusiast</p>
    <a
      href="https://Samay2006.github.io/portfolio-web/update-resume.pdf"
      className="px-6 py-3 bg-white text-black rounded-xl shadow-lg hover:bg-gray-200 transition font-poppins font-semibold"
    >
      Download Resume
    </a>
  </div>

  <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
    <img
      src={`${import.meta.env.BASE_URL}img2.png`}
      alt="Samay Verma"
      className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-cover rounded-full border-4 border-green-600 shadow-xl"
    />
  </div>
</section>


      {/* Skills Section */}
      <section className="bg-black py-12 px-8" id="skills">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <span className="bg-gray-800 py-3 rounded-xl">HTML & CSS</span>
            <span className="bg-gray-800 py-3 rounded-xl">JavaScript</span>
            <span className="bg-gray-800 py-3 rounded-xl">React.js</span>
            <span className="bg-gray-800 py-3 rounded-xl">Node.js</span>
            <span className="bg-gray-800 py-3 rounded-xl">Express.js</span>
            <span className="bg-gray-800 py-3 rounded-xl">MongoDB</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto p-8" id="projects">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-900 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">Creator Dashboard</h3>
            <p className="text-sm mb-4">MERN stack project with auth, credit points, and API aggregation.</p>
            <a href="#" className="text-indigo-400 hover:underline">View Project</a>
          </div>
          <div className="bg-gray-900 shadow-lg rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">YouTube Clone</h3>
            <p className="text-sm mb-4">React + MongoDB video streaming layout with dynamic routing.</p>
            <a href="#" className="text-indigo-400 hover:underline">View Project</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto p-8" id="about">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          I’m <strong>Samay Verma</strong>, a BCA student at Dayanand Academy of Management Studies, affiliated with CSJMU, Kanpur. Passionate about full-stack development and data structures, I’m currently focused on building real-world MERN stack applications and exploring AI-driven solutions for project management.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I’m actively building my career in tech by developing impactful projects like an AI-powered chat app using Google GenAI, and constantly improving my problem-solving skills with DSA.
        </p>
        <p className="text-lg leading-relaxed">
          I’m open to internship and job opportunities in frontend or backend roles. Feel free to connect with me or check out my work!
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-12 px-8" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <div className="flex justify-center space-x-6 text-lg">
            <a href="https://github.com/Samay2006" className="hover:underline text-indigo-400">GitHub</a>
            <a href="https://linkedin.com/in/samay-verma-3797b422b" className="hover:underline text-indigo-400">LinkedIn</a>
            <a href="mailto:samayverma11@gmail.com" className="hover:underline text-indigo-400">Email</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm py-4 bg-black text-white">
        © {new Date().getFullYear()} Samay Verma. All rights reserved.
      </footer>
    </div>
    </>
  );
};

export default App;
