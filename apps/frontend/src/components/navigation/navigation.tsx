import { NavigationDesktop, NavigationMobile } from "./components";
import { Settings, TrendingUp, Wallet } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

interface NavigationProps {}

const navItems = [
  { path: "/", label: "خانه", icon: TrendingUp },
  { path: "/dashboard", label: "داشبورد", icon: TrendingUp },
  { path: "/trading", label: "معاملات", icon: TrendingUp },
  { path: "/wallet", label: "کیف پول", icon: Wallet },
  { path: "/admin", label: "پنل مدیریت", icon: Settings, adminOnly: true },
];

const user = { role: "admin" };

export const Navigation: React.FC<NavigationProps> = ({}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return isMobile ? (
    <NavigationMobile navItems={navItems} user={user} />
  ) : (
    <NavigationDesktop navItems={navItems} user={user} />
  );
};
