import { Activity, DollarSign, TrendingDown, TrendingUp, Wallet } from "lucide-react";

const dashboardStats = [
  {
    title: "موجودی کل",
    value: "۱۲۵,۰۰۰,۰۰۰",
    unit: "تومان",
    change: "+۱۲.۵%",
    changeType: "increase",
    icon: Wallet,
  },
  {
    title: "سود امروز",
    value: "۸,۵۰۰,۰۰۰",
    unit: "تومان",
    change: "+۸.۲%",
    changeType: "increase",
    icon: TrendingUp,
  },
  {
    title: "تعداد معاملات",
    value: "۴۷",
    unit: "معامله",
    change: "+۳.۱%",
    changeType: "increase",
    icon: Activity,
  },
  {
    title: "ارزش پرتفوی",
    value: "۰.۰۰۴۵",
    unit: "BTC",
    change: "-۱.۲%",
    changeType: "decrease",
    icon: DollarSign,
  },
];

const recentTransactions = [
  {
    type: "خرید",
    crypto: "بیت‌کوین",
    amount: "۰.۰۰۱۲",
    value: "۳,۱۸۰,۰۰۰",
    time: "۲ ساعت پیش",
    status: "موفق",
  },
  {
    type: "فروش",
    crypto: "اتریوم",
    amount: "۰.۰۵",
    value: "۸,۲۵۰,۰۰۰",
    time: "۴ ساعت پیش",
    status: "موفق",
  },
  {
    type: "خرید",
    crypto: "کاردانو",
    amount: "۱۰۰",
    value: "۱,۸۵۰,۰۰۰",
    time: "۶ ساعت پیش",
    status: "در حال پردازش",
  },
];

const portfolioItems = [
  {
    crypto: "بیت‌کوین",
    symbol: "BTC",
    amount: "۰.۰۰۴۵",
    value: "۱۱۹,۲۵۰,۰۰۰",
    percentage: "۷۵.۲%",
    change: "+۲.۵%",
  },
  {
    crypto: "اتریوم",
    symbol: "ETH",
    amount: "۰.۱۲۳",
    value: "۲۰,۲۹۵,۰۰۰",
    percentage: "۱۲.۸%",
    change: "-۱.۲%",
  },
  {
    crypto: "کاردانو",
    symbol: "ADA",
    amount: "۸۵۰",
    value: "۱۵,۷۲۵,۰۰۰",
    percentage: "۹.۹%",
    change: "+۵.۸%",
  },
  {
    crypto: "سولانا",
    symbol: "SOL",
    amount: "۱.۲۳",
    value: "۳,۳۲۰,۰۰۰",
    percentage: "۲.۱%",
    change: "+۸.۲%",
  },
];

const dashboardTranslations = Object.freeze({
  dashboard: "داشبورد",
  overview: "مرور کلی از پرتفوی و معاملات شما",
  portfolio: "پرتفوی",
  recentTransactions: "معاملات اخیر",
  quickActions: "عملیات سریع",
  buy: "خرید سریع",
  sell: "فروش سریع",
  convert: "تبدیل ارز",
  currency: "تومان",
  portfolioChangePositive: "+",
});

export { dashboardStats, recentTransactions, portfolioItems, dashboardTranslations };
