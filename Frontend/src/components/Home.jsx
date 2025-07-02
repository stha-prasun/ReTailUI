import React from "react";
import Navbar from "./shared/Navbar";

const features = [
  {
    title: "Buttons",
    desc: "Versatile button components with multiple variants, sizes, and states.",
  },
  {
    title: "Modals",
    desc: "Accessible modals with focus trapping and smooth transitions.",
  },
  {
    title: "Cards",
    desc: "Beautiful cards for dashboards, listings, or product previews.",
  },
  {
    title: "Forms",
    desc: "Styled form inputs, toggles, selects and checkboxes ready to use.",
  },
  {
    title: "Alerts",
    desc: "Elegant alert boxes to inform users about system actions.",
  },
  {
    title: "Navbars",
    desc: "Fully responsive and customizable navigation bars.",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="bg-base-100 text-base-content">
        {/* Hero Section */}
        <section className="relative hero min-h-screen bg-base-200 overflow-hidden">
          {/* Background Gradient Blobs */}
          <div className="absolute inset-0 z-0">
            {/* Large blobs hidden on small screens */}
            <div className="hidden md:block absolute top-[-100px] left-[-100px] w-[700px] h-[700px] bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-[120px]"></div>
            <div className="hidden md:block absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-accent to-secondary opacity-20 rounded-full blur-[100px]"></div>
          </div>

          {/* React Logo Background - scale on small screens */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0 opacity-10">
            <img
              src="./react.svg"
              alt="React Logo Background"
              className="w-48 sm:w-64 md:w-96 h-auto mx-auto"
            />
          </div>

          {/* Hero Content */}
          <div className="hero-content text-center relative z-10 px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg mb-4">
                Build UI Fast with Style
              </h1>
              <p className="py-6 text-base sm:text-lg text-gray-500">
                A React + Tailwind component library crafted for rapid development and beautiful interfaces — ReTailUI.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <button className="btn btn-primary btn-wide shadow-md">
                  Get Started
                </button>
                <button className="btn btn-outline btn-wide">GitHub</button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-base-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What You’ll Get</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-base-200 rounded-xl p-6 border border-base-300 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                >
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-24 px-6 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-10 blur-xl z-0"></div>
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Start Building Beautiful UI Today
            </h2>
            <p className="max-w-xl mx-auto text-base sm:text-lg text-gray-500 mb-6">
              Designed for developers who want speed, style, and simplicity.
            </p>
            <button className="btn btn-primary btn-lg hover:scale-105 transition shadow-lg">
              Explore Docs
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
