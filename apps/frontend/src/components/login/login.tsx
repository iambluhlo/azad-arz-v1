import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { loginTranslations } from "./components";
import { login } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const loginMutation = useMutation({
    mutationFn: () => login(formData.email, formData.password),
    onSuccess: ({ token, user }) => {
      console.log(token);
      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(user));
      setErrorMessage("");
      setStatusMessage(loginTranslations.success);
      navigate("/dashboard");
    },
    onError: (error: Error) => {
      setStatusMessage("");
      setErrorMessage(error.message || "Login failed");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setStatusMessage("");
    loginMutation.mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Shield className="mx-auto h-12 w-12 text-primary-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">
            {loginTranslations.title}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {loginTranslations.subtitle}{" "}
            <Link
              to="/register"
              className="font-medium text-primary-400 hover:text-primary-300"
            >
              {loginTranslations.createAccount}
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-dark-800 p-8 rounded-lg shadow-xl">
            {statusMessage && (
              <div className="mb-4 p-3 rounded-md bg-green-900/40 text-green-200 text-sm">
                {statusMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 p-3 rounded-md bg-red-900/40 text-red-200 text-sm">
                {errorMessage}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  {loginTranslations.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-dark-600 placeholder-gray-400 text-white bg-dark-700 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder={loginTranslations.emailPlaceholder}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  {loginTranslations.passwordLabel}
                </label>
                <div className="mt-1 relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none relative block w-full px-3 py-2 pr-10 border border-dark-600 placeholder-gray-400 text-white bg-dark-700 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder={loginTranslations.passwordPlaceholder}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-dark-600 rounded bg-dark-700"
                  />
                  <label
                    htmlFor="remember-me"
                    className="mr-2 block text-sm text-gray-300"
                  >
                    {loginTranslations.rememberMe}
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-primary-400 hover:text-primary-300"
                  >
                    {loginTranslations.forgotPassword}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={loginMutation.isPending}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50"
              >
                {loginMutation.isPending ? "..." : loginTranslations.continue}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
