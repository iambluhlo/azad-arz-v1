import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

import { NavigationConstants } from "./constants";

interface AuthButtonsProps {}
export const AuthButtons: React.FC<AuthButtonsProps> = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isLogin = localStorage.getItem("authToken") ? true : false;

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <div
      className="hidden md:flex items-center space-x-4 space-x-reverse"
      ref={menuRef}
    >
      {isLogin ? (
        <div className="relative">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-dark-700 text-gray-200 hover:bg-dark-600 transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="User menu"
          >
            <User />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-md bg-dark-800 border border-dark-700 shadow-lg py-1">
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-200 hover:bg-dark-700 transition-colors"
                onClick={handleLogout}
              >
                <span>خروج</span>
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {NavigationConstants.login}
          </Link>
          <Link
            to="/register"
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {NavigationConstants.register}
          </Link>
        </>
      )}
    </div>
  );
};
