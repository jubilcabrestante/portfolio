import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-40 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">Portfolio</div>

        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about/about_page"
              className="hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects/projects_page"
              className="hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/skills/skills_page"
              className="hover:text-blue-600 transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/experience/experience_page"
              className="hover:text-blue-600 transition-colors"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/contact/contact_page"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            {/* Social Icons */}
            <div className="flex items-center space-x-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/jubil18"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white transition"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.3 0-.5.2-.5.5v1.5h2.5l-.4 3h-2.1v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/jubil-cabrestante-4a06b4363/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-700 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h14.04a2.5 2.5 0 002.48-2.5V6a2.5 2.5 0 00-2.48-2.5H4.98zm.02 3h2.5v10h-2.5v-10zm3.2 0h2.4v1.3h.03c.33-.62 1.14-1.3 2.35-1.3 2.5 0 2.95 1.64 2.95 3.76v5.24h-2.5v-4.7c0-1.12-.02-2.56-1.56-2.56-1.57 0-1.8 1.22-1.8 2.48v4.78h-2.5v-10z" />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
