import { Globe, BarChart, Palette, Megaphone, Search, Smartphone } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating high-performance Next.js and WordPress websites.",
    icon: Globe,
    color: "blue"
  },
  {
    id: 2,
    title: "Digital Marketing",
    description: "Targeted strategies to boost your brand's ROI and presence.",
    icon: Megaphone,
    color: "purple"
  },
  {
    id: 3,
    title: "Graphic Design",
    description: "Visual storytelling through professional logo and UI designs.",
    icon: Palette,
    color: "pink"
  },
  {
    id: 4,
    title: "SEO Optimization",
    description: "Rank higher on Google and dominate your niche market.",
    icon: Search,
    color: "green"
  },
  {
    id: 5,
    title: "App Development",
    description: "Mobile-first solutions with React Native and Flutter.",
    icon: Smartphone,
    color: "orange"
  }
];

export const PROJECTS = [
  { title: "E-Commerce Platform", category: "Web Dev", image: "/p1.jpg" },
  { title: "SaaS Dashboard", category: "UI/UX", image: "/p2.jpg" },
  { title: "Real Estate App", category: "App Dev", image: "/p3.jpg" },
];

export const CONTACT_INFO = {
  address: "Your Office Address, City, Country",
  phone: "+92 3XX XXXXXXX",
  email: "info@etrendssolutions.com",
  whatsapp: "923XXXXXXXXX"
};