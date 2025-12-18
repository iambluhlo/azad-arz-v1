import { Link, useLocation } from "react-router-dom";
import { AppLogo } from "../../app-logo";
import { NavigationConstants } from "./constants";

interface NavigationDesktopProps {
  navItems: any[];
  user: { role: string };
}
export const NavigationDesktop: React.FC<NavigationDesktopProps> = ({
  navItems,
  user,
}) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-dark-800 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <AppLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item) => {
              if (item.adminOnly && user.role !== "admin") return null;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-primary-600 text-white"
                      : "text-gray-300 hover:bg-dark-700 hover:text-white"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
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
          </div>
        </div>
      </div>
    </nav>
  );
};
