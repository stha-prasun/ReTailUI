import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Navbar from "./shared/Navbar";

const ComponentsPage = () => {
  const [selectedComponent, setSelectedComponent] = useState("");

  const componentList = [
    "Button",
    "Card",
    "Modal",
    "Navbar",
    "Tooltip",
    "Avatar",
    "Badge",
    "Toast",
    "Drawer",
    "Tabs",
    "Accordion",
    "Progress",
    "Dropdown",
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen w-full flex text-base-content bg-base-100">
        {/* Sidebar */}
        <aside className="w-64 h-full border-r border-base-300 p-6 bg-base-200">
          <h2 className="text-xl font-bold text-primary mb-6">Components</h2>
          <ul className="space-y-2">
            {componentList.map((item, idx) => (
              <li key={idx}>
                <a
                  onClick={() => setSelectedComponent(item)}
                  className={`block px-3 py-2 rounded-lg cursor-pointer transition ${
                    selectedComponent === item
                      ? "bg-primary text-primary-content"
                      : "hover:bg-primary hover:text-primary-content"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 overflow-y-auto">
          {/* Top bar with search button */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Component Library</h1>
            <button className="btn btn-outline btn-primary gap-2">
              <FiSearch className="text-lg" />
              Search
            </button>
          </div>

          {/* Placeholder Preview Area */}
          <div className="border border-base-300 rounded-xl bg-base-200 p-10 text-center text-gray-500">
            <h2 className="text-2xl font-semibold text-base-content mb-2">
              {selectedComponent}
            </h2>
            <p>
              Preview and documentation for the "{selectedComponent}" component
              will appear here.
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default ComponentsPage;
