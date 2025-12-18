import { Link, useLocation } from "react-router-dom";
import { AppLogo } from "../../app-logo";
import { NavigationConstants } from "./constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AuthButtons } from "./auth-buttons";

interface NavigationMobileProps {
  navItems: any[];
  user: { role: string };
}

export const NavigationMobile: React.FC<NavigationMobileProps> = ({
  navItems,
  user,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <AppLogo />

          {/* Auth Buttons */}
          <AuthButtons />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => {
                if (item.adminOnly && user.role !== "admin") return null;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "bg-primary-600 text-white"
                        : "text-gray-300 hover:bg-dark-700 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}

              <div className="border-t border-dark-700 pt-4">
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-dark-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {NavigationConstants.login}
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors mt-2"
                  onClick={() => setIsOpen(false)}
                >
                  {NavigationConstants.register}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
