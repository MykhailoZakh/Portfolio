import {Collapse} from "flowbite";
import {useState} from "react";

export default function NavBar() {
  const [colap, setColap] = useState(true);
  function collapseHandler() {
    const $targetEl = document.getElementById("navbar-default");
    const $triggerEl = document.getElementById("click-collapse");
    const options = {
      onCollapse: () => {},
      onExpand: () => {},
      onToggle: () => {},
    };
    const instanceOptions = {
      id: "navbar-default",
      override: true,
    };
    const collapse = new Collapse(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions
    );
    if (colap) {
      collapse.expand();
      setColap(!colap);
    } else {
      collapse.collapse();
      setColap(!colap);
    }
  }

  return (
    <>
      <nav className="fixed  w-full top-0 left-0 bg-gray-900 nav">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Mykhailo
            </span>
          </a>
          <button
            id="click-collapse"
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={collapseHandler}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          {/* bg-blue-700 */}
          {/* md:text-blue-700 */}
          {/* md:dark:text-blue-500 */}
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 text-white  hover:text-blue-400  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-blue-400  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" // aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  className="block py-2 px-3 text-white  hover:text-blue-400  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-blue-400  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="/resume"
                  className="block py-2 px-3 text-white  hover:text-blue-400  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-blue-400  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-white  hover:text-blue-400  rounded md:bg-transparent  md:p-0 dark:text-white md:hover:text-blue-400  md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
