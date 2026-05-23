import { Globe, Megaphone, Search, Palette, MessageSquare, Settings, Layout, Share2 } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const PORTFOLIO_STATS = [
  { label: "Average lead volume increase within 90 days of campaign launch.", value: "3.8x", sub: "Across all active accounts" },
  { label: "Median cost-per-lead reduction when we take over an existing account.", value: "-52%", sub: "Efficiency Gain" },
  { label: "Client retention rate at the 12-month mark — a direct reflection of results.", value: "97%", sub: "Retention Rate" },
  { label: "Median time from signed agreement to first qualified lead delivered.", value: "14 days", sub: "Fast Launch" },
];

export const CASE_STUDIES = [
    {
    title: "312% Organic Traffic Lift",
    category: "SEO — B2B SaaS Client",
    description: "Structured a full technical audit, rebuilt the content architecture, and deployed a targeted backlink system. Keyword rankings moved from page 4 to position 1–3 across 18 commercial terms.",
    stats: "312% Growth",
    image: "/1.jpg"
  },
  {
    title: "Conversion rate up 4.1x after redesign",
    category: "Web Design — Law Firm",
    description: "Replaced a 7-year-old site with a performance-first redesign. Page speed score moved from 34 to 91. Contact form submissions increased 4.1× in the first 30 days post-launch.",
    stats: "4.1x Up",
    image: "/4.jpg"
  },
  {
    title: "Cost-per-lead cut by 58% in week one",
    category: "Google Ads — E-Commerce",
    description: "Audited an inherited account with $40 monthly spend. Restructured campaign groups, rewrote ad copy, and tightened negative keyword lists. Spend held flat; qualified leads nearly doubled.",
    stats: "3.5x ROAS",
    image: "/2.jpg"
  },
  {
    title: "94 qualified leads in 30 days, $15 CPL",
    category: "Immigration Marketing — Law Group",
    description: "Deployed our immigration-specific Meta and Google funnel — pre-screened audiences, compliant ad copy, and a dedicated intake landing page. Average CPL held at $15 against a $70 industry benchmark.",
    stats: "$15 CPL",
    image: "/2.jpg"
  },

];

export const REVIEWS = [
  { name: "Sajid Mahmood", company: "Al Rahma Travel (UK)", content: "The SEO work significantly improved our Google rankings. We started receiving organic Umrah inquiries regularly.", rating: 5 },
  { name: "Highbrow International", company: "PK (UK)", content: "Their marketing strategies helped us reach students and immigration clients effectively. Great experience.", rating: 5 },
  { name: "Faisal Khan", company: "London Travel Hub (UK)", content: "The campaigns were very well managed and delivered excellent ROI. Highly recommended.", rating: 5 },
];

export const CONTACT_INFO = {
  address: "Al-Qadir Heights, 4th Floor, Office No 413, Lahore, Pakistan",
  whatsapp: "923167929279",
  phone: "0304 4430866, 03006224370",
  email: "info@etrendssolutions.com",
  socials: {
    facebook: "https://web.facebook.com/etrendssolutions",
    instagram: "https://www.instagram.com/etrendssolutions/",
    linkedin: "https://www.linkedin.com/company/109129070/",
  }
};

export const PORTFOLIO_CLIENTS = [
  "HSB Travels (UK)", "Paige Roberts (USA)", "Starway Travels (UK)", "7 Sky Tours (UK)", 
  "Ziyarat e Umrah (UK)", "Al Haram Travels (UK)", "Travelpedia (USA)", "Al Rahma Travel (UK)", 
  "Highbrow Int", "Umrah Tours (UK, USA)", "Good Day Travel", "Panama Travel (UK)", 
  "Hajj Umrah Travels (UK)", "MPS Tours (USA)", "ITM Travel Solutions", "Sufi Travels & Tours (UK)", 
  "Kaaba Travels (UK)", "Lynxclub", "Zair e Hussain", "24 Travel Ltd", "Next Visa Step", 
  "Naseebi", "Pilgrims Taxi", "Pace Travel (UK)", "Adventure Flights (UK)", "Axen Holidays (UK, USA)", 
  "Worldflyer Travel (UK)", "Ayat Travel (UK)", "Travel Experts (UK)", "Nayyar Expeditions (UK)"
];

export const SERVICES_DATA = [
  { title: "SEO Optimization", icon: Search, desc: "Technical audits, on-page fixes, and keyword targeting engineered to move rankings and drive qualified organic traffic." },
  { title: "Website Design", icon: Globe, desc: "Conversion-structured websites built for speed, mobile performance, and lead capture — not just visual polish." },
  { title: "Digital Marketing", icon: Megaphone, desc: "Multi-channel campaign execution with clear attribution — every dollar mapped to a pipeline stage." },
  { title: "Lead Generation", icon: Share2, desc: "Specialized systems for Travel agencies and B2B clients — every campaign runs on a proven framework." },
  { title: "Social Media", icon: Palette, desc: "Building brand authority and community engagement through strategic content and paid social acceleration." },
  { title: "Google Ads", icon: Settings, desc: "High-intent search campaigns focused on ROAS and lowering the cost of customer acquisition." }
];


