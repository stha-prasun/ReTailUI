import React from "react";
import Navbar from "./shared/Navbar";

const DocsPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-indigo-50 via-purple-50 to-pink-50 text-gray-900 px-10 py-16">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Title */}
          <header className="text-center">
            <h1 className="text-6xl font-extrabold text-transparent bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text mb-3 drop-shadow-md">
              Documentation
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Copy-paste ready React components styled with Tailwind CSS. Fully
              customizable with utility classes — no external dependencies.
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-700 rounded mx-auto"></div>
          </header>

          {/* Getting Started */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-indigo-700">
              <span role="img" aria-label="rocket" className="text-3xl">
                🚀
              </span>{" "}
              Getting Started
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Copy the component code from the examples below and paste it
              directly into your React project. Each component is built with
              pure Tailwind CSS utility classes — no DaisyUI or other UI
              libraries required.
            </p>
            <p className="text-sm text-gray-500">
              Make sure Tailwind CSS is properly configured in your project to
              render styles correctly.
            </p>
          </section>

          {/* Usage & Examples */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-indigo-700">
              <span role="img" aria-label="light bulb" className="text-3xl">
                💡
              </span>{" "}
              Usage & Examples
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Here’s an example of a simple custom button component using
              Tailwind CSS:
            </p>
            <pre className="bg-indigo-100 rounded-lg p-6 overflow-x-auto border border-indigo-300 text-indigo-900 font-mono text-sm shadow-sm">
              <code>{`<button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-200">
  Click Me
</button>`}</code>
            </pre>
            <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
              <li>
                Change colors by modifying <code>bg-indigo-600</code> and{" "}
                <code>hover:bg-indigo-700</code>.
              </li>
              <li>
                Adjust padding with <code>py-2 px-6</code> for different sizes.
              </li>
              <li>
                Combine Tailwind utilities for shadows, borders, or typography
                enhancements.
              </li>
            </ul>
          </section>

          {/* Customization */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-indigo-700">
              <span role="img" aria-label="palette" className="text-3xl">
                🎨
              </span>{" "}
              Customization
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              All components are built with Tailwind CSS utility classes,
              allowing you to easily customize:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Colors:</strong> Modify background, text, and border
                colors by changing class names.
              </li>
              <li>
                <strong>Size:</strong> Tweak padding, margins, and font sizes as
                needed.
              </li>
              <li>
                <strong>States:</strong> Use <code>hover:</code>,{" "}
                <code>focus:</code>, and other state variants for interactive
                effects.
              </li>
              <li>
                <strong>Layout:</strong> Adjust flex, grid, width, and height
                classes to fit your design.
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic">
              You can also combine with custom CSS or Tailwind plugins for more
              advanced styles.
            </p>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-indigo-700">
              <span role="img" aria-label="question" className="text-3xl">
                ❓
              </span>{" "}
              FAQ
            </h2>
            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Do I need DaisyUI to use these components?
                </h3>
                <p>
                  No, all components are built with pure Tailwind CSS utility
                  classes only, so there is no dependency on DaisyUI or other UI
                  frameworks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  How do I add these components to my project?
                </h3>
                <p>
                  Simply copy the component's JSX code and paste it into your
                  React component files. Ensure Tailwind CSS is configured in
                  your project.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Can I customize the styles?
                </h3>
                <p>
                  Absolutely! Tailwind's utility-first approach lets you easily
                  tweak class names to fit your design requirements.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
