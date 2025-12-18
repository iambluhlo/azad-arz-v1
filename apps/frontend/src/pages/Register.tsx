import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, ShieldCheck, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { register } from "../services/auth";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerMutation = useMutation({
    mutationFn: () => register(formData.email, formData.password),
    onSuccess: () => {
      setErrorMessage("");
      setStatusMessage("حساب کاربری با موفقیت ایجاد شد. اکنون می‌توانید وارد شوید.");
      navigate("/login");
    },
    onError: (error: Error) => {
      setStatusMessage("");
      setErrorMessage(error.message || "ثبت نام با مشکل مواجه شد");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setStatusMessage("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("رمز عبور و تکرار آن یکسان نیست");
      return;
    }

    registerMutation.mutate();
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
          <UserPlus className="mx-auto h-12 w-12 text-primary-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">ایجاد حساب کاربری</h2>
          <p className="mt-2 text-sm text-gray-400">
            یا {" "}
            <Link to="/login" className="font-medium text-primary-400 hover:text-primary-300">
              وارد حساب خود شوید
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="bg-dark-800 p-8 rounded-lg shadow-xl space-y-4">
            {statusMessage && (
              <div className="p-3 rounded-md bg-green-900/40 text-green-200 text-sm">{statusMessage}</div>
            )}
            {errorMessage && (
              <div className="p-3 rounded-md bg-red-900/40 text-red-200 text-sm">{errorMessage}</div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                آدرس ایمیل
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-dark-600 placeholder-gray-400 text-white bg-dark-700 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                رمز عبور
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
                  placeholder="رمز عبور قوی انتخاب کنید"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300">
                تکرار رمز عبور
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none relative block w-full px-3 py-2 pr-10 border border-dark-600 placeholder-gray-400 text-white bg-dark-700 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                  placeholder="رمز عبور را مجدداً وارد کنید"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-2 space-x-reverse text-sm text-gray-300">
              <ShieldCheck className="h-5 w-5 text-primary-400" />
              <p>رمز عبور قوی شامل حروف بزرگ، کوچک و عدد انتخاب کنید.</p>
            </div>

            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50"
            >
              {registerMutation.isPending ? "..." : "ساخت حساب"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
