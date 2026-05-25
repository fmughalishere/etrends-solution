// src/constants/index.ts
import { 
  Globe, Megaphone, Search, Palette, 
  MessageSquare, Settings, Layout, Share2 
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { label: "Digital Marketing", href: "/services/marketing" },
      { label: "Lead Generation", href: "/services/leadgen" },
      { label: "SEO Optimization", href: "/services/seo" },
      { label: "Web Development", href: "/services/web" },
      { label: "AI & Automation", href: "/services/ai" },
      { label: "CRM Development", href: "/services/crm" },
    ]
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PORTFOLIO_STATS = [
  { label: "Avg lead volume increase within 90 days", value: "3.8x" },
  { label: "Median CPL reduction vs existing accounts", value: "-52%" },
  { label: "Client retention rate at 12-month mark", value: "97%" },
  { label: "Median time to first qualified lead", value: "14 Days" },
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
    image: "/3.jpg"
  },
];

export const SERVICES_DATA = [
  { 
    id: "marketing",
    title: "Digital Marketing", 
    icon: Megaphone, 
    desc: "Result-driven marketing strategies that build your brand and boost online presence.",
    detailedContent: "Our Digital Marketing services are designed specifically for travel and service-based businesses looking to grow online. We create data-driven strategies that include paid advertising, audience targeting, and conversion optimization. Our campaigns are focused on generating real ROI, increasing brand awareness, and attracting high-intent customers. With expertise in UK, USA, and Pakistan markets, we ensure your business reaches the right audience at the right time."
  },
  { 
    id: "leadgen",
    title: "Lead Generation", 
    icon: Share2, 
    desc: "High quality leads that convert into bookings and grow your business.",
    detailedContent: "We specialize in generating high-quality leads for travel agencies, Umrah services, Flights (including African Sector from UK), and tour operators. Using advanced funnel strategies, landing pages, and targeted ads, we bring customers who are ready to book. Our system ensures consistent lead flow, better conversions, and reduced cost per acquisition. We help you scale your business with predictable and reliable lead generation systems."
  },
  { 
    id: "seo",
    title: "SEO Optimization", 
    icon: Search, 
    desc: "Rank higher, get found by more travelers and increase organic traffic.",
    detailedContent: "Our SEO services help your website rank higher on Google and attract organic traffic. We perform keyword research, on-page optimization, technical SEO, and backlink building. Our focus is on travel-related keywords that bring real customers. With long-term SEO strategies, we ensure your business gains visibility and authority in search engines."
  },
  { 
    id: "web",
    title: "Website Design & Development", 
    icon: Globe, 
    desc: "Modern, responsive and conversion focused websites that convert visitors into customers.",
    detailedContent: "We design modern, fast, and mobile-friendly websites that convert visitors into customers. Our websites are optimized for speed, user experience, and SEO. Whether it's a travel booking site or a corporate website, we build solutions that reflect your brand identity and drive business growth."
  },
  { 
    id: "ai",
    title: "AI & Automation", 
    icon: MessageSquare, 
    desc: "Smart automation that engages visitors, answers queries and boosts satisfaction.",
    detailedContent: "Our AI chatbot solutions automate your customer support and lead handling process. We build intelligent chatbots that can answer queries, capture leads, and guide customers 24/7. Automation reduces workload, improves response time, and increases conversion rates for your business."
  },
  { 
    id: "crm",
    title: "CRM Development", 
    icon: Settings, 
    desc: "Custom CRM solutions to manage leads, bookings and relationships efficiently.",
    detailedContent: "We develop custom CRM systems tailored to your business needs. Our CRM solutions help you manage leads, track customer interactions, and automate workflows. With a centralized system, you can improve efficiency, enhance customer relationships, and increase sales performance."
  },
  { 
    id: "content",
    title: "Content Creation", 
    icon: Layout, 
    desc: "Engaging content that informs, inspires and drives action across all platforms.",
    detailedContent: "We create high-quality, engaging, and SEO-optimized content for your brand. From website content to blogs and marketing copy, our content is designed to attract, engage, and convert your audience. We focus on storytelling and value-driven content that builds trust and authority."
  },
  { 
    id: "social",
    title: "Social Media Handling", 
    icon: Palette, 
    desc: "Managing your social presence to build engagement and loyal communities.",
    detailedContent: "We manage your social media presence professionally across platforms like Facebook, Instagram, and more. Our services include content posting, audience engagement, and ad management. We help you build a strong brand presence, increase followers, and generate leads through social media marketing."
  }
];

export const REVIEWS = [
  // Additional SEO Reviews
  { name: "Sajid Mahmood", company: "Al Rahma Travel (UK)", content: "The SEO work significantly improved our Google rankings in the UK market. We started receiving organic Umrah inquiries regularly. Highly professional service.", rating: 5 },
  { name: "Hamid Khan", company: "Kaaba Travels (UK)", content: "Excellent SEO strategy and execution. Our visibility improved and we saw a steady increase in Umrah and Hajj leads.", rating: 5 },
  { name: "Chris Walker", company: "Panama Travel (UK)", content: "Their SEO services helped us dominate local search results. Great communication and strong results.", rating: 5 },
  { name: "James Carter", company: "Good Day Travel (USA)", content: "Outstanding SEO and content strategy. Our traffic increased, and we started generating quality travel inquiries consistently.", rating: 5 },
  
  // Standard Testimonials
  { name: "Umair Mushtaq Kamboh", company: "Fly Unique (PK)", content: "We saw a massive improvement in our online presence after working with this team. Our website looks professional and our leads increased significantly.", rating: 5 },
  { name: "Sharjeel Naviwala", company: "Al Haram Travel", content: "The performance marketing campaigns delivered outstanding results. Consistent Umrah inquiries within weeks. Results-driven team.", rating: 5 },
  { name: "Sharafat Ali", company: "Hajj Umrah Planner UK", content: "They completely transformed our social media and lead flow. The content was engaging and our bookings improved a lot.", rating: 5 },
  { name: "Shafqat Ali", company: "Flight Planner (UK)", content: "Excellent service and great communication. Our travel campaigns performed really well and we received quality leads.", rating: 5 },
  { name: "Mahad Ali", company: "MPS Tours USA", content: "The team delivered beyond expectations. Our US campaigns for tours and Umrah performed very well and generated strong ROI.", rating: 5 },
  { name: "Highbrow International", company: "PK (UK)", content: "Their marketing strategies helped us reach students and immigration clients effectively. Great experience working with them.", rating: 5 },
];

export const PORTFOLIO_CLIENTS = [
  "HSB Travels (UK)", "Paige Roberts (USA)", "Starway Travels (UK)", "7 Sky Tours (UK)", 
  "Ziyarat e Umrah (UK)", "Al Haram Travels (UK)", "Travelpedia (USA)", "Al Rahma Travel (UK)", 
  "Highbrow Int", "Umrah Tours (UK, USA)", "Good Day Travel", "Panama Travel (UK)", 
  "Hajj Umrah Travels (UK)", "MPS Tours (USA)", "ITM Travel Solutions", "Sufi Travels & Tours (UK)", 
  "Kaaba Travels (UK)", "Lynxclub", "Zair e Hussain", "24 Travel Ltd", "Starway Travel", 
  "Travelopedia Ltd", "Next Visa Step", "Naseebi", "Pilgrims Taxi", "Pace Travel (UK)", 
  "Adventure Flights (UK)", "Axen Holidays (UK, USA)", "Worldflyer Travel (UK)", "Ayat Travel (UK)", 
  "Travel Experts (UK)", "Nayyar Expeditions (UK)", "Mark-Us Digital Agency"
];

export const ABOUT_DATA = {
  hero_title: "Transforming Travel Businesses Digitally",
  hero_subtitle: "Empowering Travel & Service-Based Companies across the UK, USA, and Pakistan with cutting-edge digital solutions.",
  about_us_title: "Who We Are",
  about_us_desc: "We are a results-driven digital solutions agency with more than 7 years of experience in the UK, USA, and Pakistan. Our mission is to revolutionize the travel industry by bringing innovation, automation, and powerful marketing strategies. We specialize in helping travel agencies grow their business, generate high-quality leads, and build strong online brands. Our team combines creativity, data, and technology to deliver measurable results.",
  ceo_message: "Our mission is to bring a digital revolution in the travel industry. We aim to empower travel businesses with the latest technology, smart automation, and data-driven strategies. With years of experience across global markets, we understand the challenges and opportunities in the travel sector. Our goal is simple: to help businesses grow, scale, and dominate their markets. We believe in innovation, trust, and delivering excellence in everything we do."
};

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