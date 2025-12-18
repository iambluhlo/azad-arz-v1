import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
interface AppLogoProps {}

const Translate = {
  azadArz: "آزاد ازر",
};

export const AppLogo: React.FC<AppLogoProps> = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 space-x-reverse">
      <TrendingUp className="h-8 w-8 text-primary-500" />
      <span className="text-xl font-bold text-white">{Translate.azadArz}</span>
    </Link>
  );
};
