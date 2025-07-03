import React from "react";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-md z-50 sticky top-0">
      <div className="navbar max-w-screen-xl mx-auto px-4">
        {/* Left - Logo */}
        <div className="navbar-start">
          <a className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer">
            ReTailUI
          </a>
        </div>

        {/* Center - Links (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-medium text-gray-600">
            <li>
              <a className="hover:text-primary transition">Home</a>
            </li>
            <li>
              <a className="hover:text-primary transition">Components</a>
            </li>
            <li>
              <a className="hover:text-primary transition">Docs</a>
            </li>
            <li>
              <a className="hover:text-primary transition">Blog</a>
            </li>
          </ul>
        </div>

        {/* Right - GitHub Icon & Hamburger */}
        <div className="navbar-end gap-2">
          {/* GitHub Icon */}
          <a
            href="https://github.com/stha-prasun/ReTailUI.git"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle text-xl tooltip tooltip-bottom"
            data-tip="Star on GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.582 0 8a8 8 0 005.47 7.59c.4.075.547-.173.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.727-.498.055-.488.055-.488.803.057 1.226.825 1.226.825.714 1.223 1.872.87 2.328.665.072-.517.28-.87.508-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.588.823-2.148-.083-.202-.357-1.015.078-2.117 0 0 .672-.215 2.2.82a7.633 7.633 0 012.003-.27c.68.003 1.364.092 2.003.27 1.528-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.822 1.275.822 2.148 0 3.073-1.87 3.752-3.65 3.948.287.246.543.735.543 1.481 0 1.07-.01 1.933-.01 2.195 0 .214.146.463.55.384A8.001 8.001 0 0016 8c0-4.418-3.582-8-8-8z" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52 text-sm"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Docs</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li className="mt-2">
                <a
                  href="https://github.com/stha-prasun/ReTailUI.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
