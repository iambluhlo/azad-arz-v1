import {
  Activity,
  AlertTriangle,
  BarChart3,
  DollarSign,
  Settings,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const adminStats = [
  {
    title: "کل کاربران",
    value: "12,856",
    change: "+5.2%",
    changeType: "increase",
    icon: Users,
  },
  {
    title: "حجم معاملات روزانه",
    value: "2.8B",
    change: "+12.5%",
    changeType: "increase",
    icon: TrendingUp,
  },
  {
    title: "درآمد",
    value: "850M",
    change: "+8.1%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    title: "هشدارهای امنیتی",
    value: "3",
    change: "-50%",
    changeType: "decrease",
    icon: AlertTriangle,
  },
];

const recentUsers = [
  {
    name: "علی احمدی",
    email: "ali.ahmadi@email.com",
    status: "فعال",
    joined: "۱۴۰۲/۰۹/۱۵",
    balance: "12,500,000",
  },
  {
    name: "مریم کریمی",
    email: "maryam.karimi@email.com",
    status: "در انتظار تأیید",
    joined: "۱۴۰۲/۰۹/۱۴",
    balance: "5,200,000",
  },
  {
    name: "حسن محمدی",
    email: "hasan.mohammadi@email.com",
    status: "فعال",
    joined: "۱۴۰۲/۰۹/۱۳",
    balance: "28,750,000",
  },
  {
    name: "فاطمه زارعی",
    email: "fateme.zarei@email.com",
    status: "مسدود",
    joined: "۱۴۰۲/۰۹/۱۲",
    balance: "850,000",
  },
];

const systemAlerts = [
  {
    type: "امنیتی",
    message: "تلاش ورود مشکوک از IP: 192.168.1.100",
    time: "۱۰ دقیقه پیش",
    severity: "high",
  },
  {
    type: "سیستم",
    message: "استفاده از CPU بالاتر از 85%",
    time: "۳۰ دقیقه پیش",
    severity: "medium",
  },
  {
    type: "معاملات",
    message: "حجم معاملات غیرعادی در BTC",
    time: "۱ ساعت پیش",
    severity: "low",
  },
];

const tabs = [
  { id: "dashboard", label: "داشبورد", icon: BarChart3 },
  { id: "users", label: "کاربران", icon: Users },
  { id: "transactions", label: "معاملات", icon: Activity },
  { id: "settings", label: "تنظیمات", icon: Settings },
  { id: "security", label: "امنیت", icon: Shield },
];

const AdminPanelTranslation = Object.freeze({
  adminPanel: "پنل مدیریت",
  manageSystem: "مدیریت سیستم و نظارت بر عملکرد",

  dashboard: "داشبورد",
  manageUsers: "مدیریت کاربران",
  manageTransactions: "مدیریت معاملات",
  systemSettings: "تنظیمات سیستم",
  securitySettings: "تنظیمات امنیتی",

  recentUsers: "کاربران اخیر",
  systemAlerts: "هشدارهای سیستم",

  allUsers: "همه کاربران",
  active: "فعال",
  deactive: "غیرفعال",
  blocked: "مسدود",

  addUser: "افزودن کاربر",

  user: "کاربر",
  email: "ایمیل",
  status: "وضعیت",
  joinedDate: "تاریخ عضویت",
  balance: "موجودی",
  actions: "عملیات",

  edit: "ویرایش",
  block: "مسدود",
  toman: "تومان",

  manageTransactionsInProgress: "بخش مدیریت معاملات در حال توسعه است",

  platformName: "نام پلتفرم",
  transactionFeeLimit: "حد مجاز کارمزد (%)",
  dailyWithdrawalLimit: "حد مجاز روزانه برداشت (تومان)",

  enable2FA: "فعال‌سازی احراز هویت دو مرحله‌ای اجباری",
  showMaintenanceAlert: "نمایش هشدار نگهداری",

  securityLogs: "لاگ‌های امنیتی",
  failedLoginAttempts: "تلاش ورود ناموفق",
  blockedIPs: "IP های مسدود شده",
  suspiciousTransactions: "تراکنش‌های مشکوک",

  firewallSettings: "تنظیمات فایروال",
  enabled: "فعال",
  disabled: "غیرفعال",

  requestRateLimit: "محدودیت نرخ درخواست",
  countryFilter: "فیلتر کشورها",
  ddosDetection: "تشخیص DDoS",
});

export { adminStats, recentUsers, systemAlerts, tabs, AdminPanelTranslation };
