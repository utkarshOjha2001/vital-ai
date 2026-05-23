import {
  LayoutDashboard,
  FileText,
  Bot,
  Activity,
  HeartPulse,
} from "lucide-react";

export const menuList = [
  {
    name: 'Overview',
    icon: LayoutDashboard,
    path: '/',
    alias: '',
  },
  {
    name: 'Medical Reports',
    icon: FileText,
    path: '/report',
    alias: '',
  },
  {
    name: 'AI Consultant',
    icon: Bot,
    path: '/ai-consultant',
    alias: '',
  },
  {
    name: 'Vital Chart',
    icon: Activity,
    path: '/vital-chart',
    alias: '',
  },
  {
    name: 'Diet & Wellness',
    icon: HeartPulse,
    path: '/diet-wellness',
    alias: '',
  },
];