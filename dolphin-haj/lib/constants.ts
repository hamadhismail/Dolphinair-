export const siteConfig = {
  name: "Dolphin Haj",
  legalName: "Dolphin Air Services Pvt. Ltd.",
  tagline: "Your Sacred Journey, Perfected",
  description:
    "Government-approved Haj Group Organiser & IATA-accredited travel agent since 1995. Complete Hajj & Umrah packages, visa services, air tickets from Trichy, Tamil Nadu.",
  url: "https://dolphinhaj.com",
  phone: "+91-97919 69994",
  phoneRaw: "+919791969994",
  whatsapp: "919791969994",
  email: "dolphinairservices@gmail.com",
  address: {
    street: "13A Williams Road, Opp. Femina Shopping Mall",
    city: "Trichy",
    state: "Tamil Nadu",
    zip: "620001",
    country: "India",
  },
  social: {
    facebook: "https://www.facebook.com/hajdolphin/",
    twitter: "https://twitter.com/HajDolphin",
    instagram: "#",
  },
  established: 1995,
  stats: {
    years: 29,
    pilgrims: 16500,
    tickets: 58000,
    trips: 490,
  },
  hours: "Mon–Sat: 9:00 AM – 6:00 PM",
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
  icon?: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Packages",
    href: "/packages",
    children: [
      { label: "Hajj Packages", href: "/packages/hajj", icon: "kaaba" },
      { label: "Umrah Packages", href: "/packages/umrah", icon: "mosque" },
      {
        label: "Ramadan Umrah",
        href: "/packages/ramadan-umrah",
        icon: "moon",
      },
      { label: "VIP Packages", href: "/packages/vip", icon: "crown" },
      { label: "Family Packages", href: "/packages/family", icon: "users" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Visa Services", href: "/services/visa", icon: "passport" },
      { label: "Air Tickets", href: "/services/air-tickets", icon: "plane" },
      {
        label: "Attestation",
        href: "/services/attestation",
        icon: "stamp",
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const packages = [
  {
    id: "classic-umrah",
    title: "Classic Umrah Package",
    category: "Umrah",
    tier: "Economy",
    tierBadge: "badge-primary",
    featured: false,
    popular: false,
    price: 98000,
    priceLabel: "₹98,000",
    priceSuffix: "/person (Approx)",
    duration: "14 Days",
    description:
      "Best hotels in proximity of Haram Sharif. Perfect for pilgrims seeking comfort at an affordable price.",
    features: [
      "14 Days Duration",
      "3-Star Hotels in Makkah & Madinah",
      "Return Air Tickets Included",
      "Umrah Visa Included",
      "Group Transportation",
    ],
    image: "/images/madinah-mosque.jpg",
  },
  {
    id: "premium-umrah",
    title: "Premium Umrah Package",
    category: "Umrah",
    tier: "Premium",
    tierBadge: "badge-gold",
    featured: true,
    popular: true,
    price: 129000,
    priceLabel: "₹1,29,000",
    priceSuffix: "/person (Approx)",
    duration: "13–14 Days",
    description:
      "Star hotels closer to Haram Sharif with superior amenities and a more comfortable spiritual experience.",
    features: [
      "13–14 Days Duration",
      "4-Star Hotels near Haram",
      "Return Air Tickets Included",
      "Umrah Visa Included",
      "Private Air-conditioned Coach",
    ],
    image: "/images/luxury-hotel.jpg",
  },
  {
    id: "ramadan-umrah",
    title: "Ramadan Umrah Package",
    category: "Ramadan Special",
    tier: "Ramadan Special",
    tierBadge: "badge-success",
    featured: false,
    popular: false,
    price: 135000,
    priceLabel: "₹1,35,000",
    priceSuffix: "/person*",
    duration: "12 or 30 Days",
    description:
      "Experience the blessed month of Ramadan in the holy cities. Available in 12-day and 30-day options.",
    features: [
      "12 or 30 Days Duration",
      "Premium Hotels near Haram",
      "Return Air Tickets Included",
      "Umrah Visa Included",
      "Iftar & Suhoor Arrangements",
    ],
    image: "/images/kaaba.jpg",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Abdul Mujeeb",
    location: "Trichy, Tamil Nadu",
    initials: "AM",
    rating: 5,
    text: "Alhamdulillah! Dolphin Haj made our Umrah journey absolutely seamless. From visa processing to hotel arrangements — everything was perfect. The team's dedication is unmatched. JazakAllahu Khayran!",
  },
  {
    id: 2,
    name: "Shaikh Khaleel",
    location: "Chennai, Tamil Nadu",
    initials: "SK",
    rating: 5,
    text: "We travelled with Dolphin Haj for Hajj 2024. The hotel was very close to Haram, food was excellent, and the guides were very knowledgeable. Highly recommend to every Muslim family!",
  },
  {
    id: 3,
    name: "Fatima Habeeba",
    location: "Madurai, Tamil Nadu",
    initials: "FH",
    rating: 5,
    text: "Best travel agency for Umrah in Tamil Nadu! The visa was processed in record time, our flights were comfortable, and the team was available 24/7. Will definitely book again for Ramadan Umrah.",
  },
  {
    id: 4,
    name: "Mohammed Rafique",
    location: "Trichy, Tamil Nadu",
    initials: "MR",
    rating: 5,
    text: "I've been using Dolphin Air Services for air tickets for many years. They always get me the best prices and the service is always reliable. Extremely trustworthy company with a very professional team.",
  },
  {
    id: 5,
    name: "Zainab Anwar",
    location: "Thanjavur, Tamil Nadu",
    initials: "ZA",
    rating: 5,
    text: "We are a family of 5 and performed Umrah through Dolphin Haj. The experience was spiritually enriching. The team took very good care of our elderly parents. Cannot thank them enough!",
  },
  {
    id: 6,
    name: "Ibrahim Hussain",
    location: "Tiruchirappalli",
    initials: "IH",
    rating: 5,
    text: "Excellent attestation service! Got my documents attested for UAE in very quick time. Very professional staff and transparent pricing. Dolphin Haj is my go-to for all travel needs.",
  },
];

export const faqs = [
  {
    question: "What documents are required for Umrah?",
    answer:
      "You will need: (1) A valid Indian passport with minimum 6 months validity and at least 2 blank pages, (2) 2 passport-size photographs with white background (4×6 cm), (3) PAN Card copy, (4) Confirmed return tickets, (5) Hotel booking confirmation. For female pilgrims under 45, a Mahram (male guardian) must accompany them.",
  },
  {
    question: "How long does Umrah visa processing take?",
    answer:
      "Umrah visa processing typically takes 5–10 working days from the date of document submission. During peak seasons (Ramadan, school holidays), it may take a few extra days. We submit passports the same day they are received to minimize delays. Express processing is also available.",
  },
  {
    question: "What is included in the Umrah package price?",
    answer:
      "Our standard packages include: Economy class return air tickets, Umrah visa fees, hotel accommodation in Makkah & Madinah, internal transportation by air-conditioned coach, daily meals (breakfast, lunch & dinner in some packages), Ziyarat tours of both cities, and 5 litres of Zamzam water. GST (5%) is included in the listed price.",
  },
  {
    question: "Can I book only air tickets without a package?",
    answer:
      "Yes! As an IATA-accredited travel agent, we offer standalone air ticket booking for all domestic and international routes. We provide highly competitive group and individual fares. Contact us via phone or WhatsApp with your travel dates for the best available rates.",
  },
  {
    question: "What is your cancellation and refund policy?",
    answer:
      "Our booking policy: (1) Minimum deposit of ₹50,000/person is NON-REFUNDABLE. (2) 50% of tour cost if cancelled 22–30 days before departure. (3) NO REFUND if cancelled within 21 days of departure. (4) Balance payment must be made 30 days before departure. We recommend travel insurance for added protection.",
  },
  {
    question: "Do you offer attestation services for Gulf countries?",
    answer:
      "Yes, we offer MEA attestation and apostille services for UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain, UK, USA, Canada, Australia, and more countries. We handle educational documents, personal documents, and commercial documents. Same-day submission available.",
  },
];

export const whyChooseUs = [
  {
    icon: "Award",
    title: "29+ Years Expertise",
    description:
      "One of the longest-running Haj Group Organisers in Tamil Nadu with unmatched experience since 1995.",
  },
  {
    icon: "IndianRupee",
    title: "Transparent Pricing",
    description:
      "No hidden charges. All costs including visa, flights, hotels and meals are clearly stated upfront.",
  },
  {
    icon: "HeartHandshake",
    title: "End-to-End Support",
    description:
      "From documentation to departure and return — we handle every detail so you can focus on worship.",
  },
  {
    icon: "ShieldCheck",
    title: "Licensed & Accredited",
    description:
      "Government of India approved Haj organiser & IATA accredited travel agent — fully licensed and trusted.",
  },
  {
    icon: "Users",
    title: "Expert Group Coordination",
    description:
      "Dedicated group leaders ensure smooth travel, rituals guidance, and care for all pilgrims throughout.",
  },
  {
    icon: "Headset",
    title: "24/7 Customer Care",
    description:
      "Our dedicated customer care team is available round-the-clock during your pilgrimage journey.",
  },
];

export const services = [
  {
    icon: "Landmark",
    title: "Hajj Packages",
    description:
      "Government-approved Haj group organiser. Classic, Premium & VIP packages with guided rituals.",
    href: "/packages/hajj",
  },
  {
    icon: "Building",
    title: "Umrah Packages",
    description:
      "Year-round Umrah packages including Ramadan Umrah with best hotels near Haram Sharif.",
    href: "/packages/umrah",
  },
  {
    icon: "BookOpen",
    title: "Visa Processing",
    description:
      "Fast & reliable Umrah, Tourist, Visit and Business visa services with expert documentation support.",
    href: "/services/visa",
  },
  {
    icon: "Plane",
    title: "Air Ticketing",
    description:
      "IATA accredited agent offering best rates for domestic & international air tickets with group booking.",
    href: "/services/air-tickets",
  },
  {
    icon: "CreditCard",
    title: "Passport Assistance",
    description:
      "Guidance and support for fresh passport applications, renewals, and tatkal services.",
    href: "/services",
  },
  {
    icon: "Stamp",
    title: "Attestation Services",
    description:
      "MEA attestation/apostille for UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain and more countries.",
    href: "/services/attestation",
  },
  {
    icon: "Globe",
    title: "Tourist Visa",
    description:
      "Tourist and visit visa processing for UAE, Malaysia, Singapore, Europe, USA, and more destinations.",
    href: "/services/visa",
  },
  {
    icon: "HeadphonesIcon",
    title: "Travel Consultation",
    description:
      "Personalized travel consultation to plan your perfect pilgrimage or holiday package.",
    href: "/contact",
  },
];

export const processSteps = [
  {
    icon: "Phone",
    title: "Enquiry",
    description: "Call, WhatsApp or fill our form to begin",
  },
  {
    icon: "FileText",
    title: "Documentation",
    description: "Collect and verify all required documents",
  },
  {
    icon: "BookOpen",
    title: "Visa Processing",
    description: "We handle visa application and approval",
  },
  {
    icon: "Plane",
    title: "Flight Booking",
    description: "Secure best rates and confirm tickets",
  },
  {
    icon: "Landmark",
    title: "Departure & Support",
    description: "Travel with full support & guided rituals",
  },
];
