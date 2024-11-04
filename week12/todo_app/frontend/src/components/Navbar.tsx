import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to=".." className="flex items-center">
              <svg
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-primary">
                TodoApp
              </span>
            </Link>
          </div>

          {/* Todos Heading (centered) */}
          <div className="hidden sm:flex flex-1 justify-center">
            <h1 className="text-2xl font-semibold text-foreground">Todos</h1>
          </div>

          {/* Login/Signup Buttons */}
          <div className="flex items-center">
            <Link to="/login">
              <button className="mr-2">Log in</button>
            </Link>
            <Link to={"/signup"}>
              <button>Sign up</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view: Todos Heading */}
      <div className="sm:hidden text-center py-2">
        <h1 className="text-2xl font-semibold text-foreground">Todos</h1>
      </div>
    </nav>
  );
};

export default Navbar;
