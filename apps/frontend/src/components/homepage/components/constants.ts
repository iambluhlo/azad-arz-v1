import { ArrowLeft, Shield, TrendingUp, Users, Zap } from "lucide-react";

const cryptoPrices = [
  { name: "بیت‌کوین", symbol: "BTC", price: "2,650,000,000", change: "+2.5%", changeColor: "text-green-400" },
  { name: "اتریوم", symbol: "ETH", price: "165,000,000", change: "-1.2%", changeColor: "text-red-400" },
  { name: "تتر", symbol: "USDT", price: "42,000", change: "+0.1%", changeColor: "text-green-400" },
  { name: "کاردانو", symbol: "ADA", price: "18,500", change: "+5.8%", changeColor: "text-green-400" },
  { name: "پولکادات", symbol: "DOT", price: "285,000", change: "-3.1%", changeColor: "text-red-400" },
  { name: "سولانا", symbol: "SOL", price: "4,200,000", change: "+8.2%", changeColor: "text-green-400" },
];

const features = [
  {
    icon: Shield,
    title: "امنیت بالا",
    description: "استفاده از جدیدترین تکنولوژی‌های امنیتی و رمزنگاری",
  },
  {
    icon: Zap,
    title: "سرعت بالا",
    description: "اجرای فوری سفارشات و پردازش سریع تراکنش‌ها",
  },
  {
    icon: Users,
    title: "پشتیبانی ۲۴/۷",
    description: "تیم پشتیبانی حرفه‌ای در تمام ساعات شبانه‌روز",
  },
  {
    icon: TrendingUp,
    title: "ابزارهای پیشرفته",
    description: "نمودارهای تکنیکال و ابزارهای تحلیل بازار",
  },
];

const homepageTranslations = Object.freeze({
  heroTitle: "معاملات ارزهای دیجیتال",
  heroDescription: "با امنیت بالا، سرعت فوق‌العاده و کارمزدهای رقابتی، بهترین تجربه معاملات ارزهای دیجیتال را داشته باشید",
  startTrading: "شروع معاملات",
  viewMarket: "مشاهده بازار",
  marketTitle: "بازار ارزهای دیجیتال",
  marketSubtitle: "آخرین قیمت‌ها و تغییرات بازار",
  currency: "تومان",
  whyTitle: "چرا آزاد ارز؟",
  whySubtitle: "امکانات و مزایای منحصر به فرد پلتفرم ما",
  startNowTitle: "همین الان شروع کنید",
  startNowSubtitle: "ثبت نام کنید و اولین معامله خود را انجام دهید",
  freeRegister: "ثبت نام رایگان",
  registerPath: "/register",
  tradingPath: "/trading",
});

export { cryptoPrices, features, homepageTranslations };
