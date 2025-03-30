export const NAV_ITEMS = [
  { name: "About", href: "" },
  { name: "Experience", href: "" },
  { name: "Projects", href: "" },
];

// export const SOCIAL_ITEMS = [
//     {icon: "", }
// ]

export const TECHSTACK_KEYS = {
  JAVASCRIPT: "javascript",
  TYPESCRIPT: "typescript",
  PHP: "php",
  REACT: "react",
  NEXTJS: "next.js",
  REACT_NATIVE: "react-native",
  TAILWIND: "tailwind-css",
  MUI: "mui",
  SHADCN: "shadcn-ui",
  // REACT_HOOK_FORM: "react-hook-form",
  REDUX: "redux",
  ZUSTAND: "zustand",
  VITE: "vite.js",
  TANSTACK_QUERY: "tanstack-query",
  LARAVEL: "laravel",
  EXPRESS: "express.js",
  MYSQL: "mysql",
};

export const PERSONAL_DETAILS = {
  name: "Bryan Sim",
  position: "Software Engineer",
  location: "Kuala Lumpur & Petaling Jaya, Malaysia",
  slogan: "Engineering the frontend, enhancing the experience.",
  description:
    "I'm a software engineer with 4 years of experience, specializing in frontend development. I build scalable and high-performance web applications with modern technologies. 🚀",
  experience: [
    {
      startDate: "2023",
      endDate: "",
      logo: "",
      company: "Boost Credit",
      title: "Software Engineer",
      description:
        "Developed Boost PayFlex, enabling seamless payment flexibility for millions of merchants, while enhancing SME lending applications, internal management tools, and scalable admin panel templates. Focused on improving user experience, streamlining workflows, and optimizing application performance.",
      techStack: [
        TECHSTACK_KEYS.JAVASCRIPT,
        TECHSTACK_KEYS.TYPESCRIPT,
        TECHSTACK_KEYS.REACT,
        TECHSTACK_KEYS.NEXTJS,
        TECHSTACK_KEYS.MUI,
        TECHSTACK_KEYS.REDUX,
        TECHSTACK_KEYS.VITE,
      ],
    },
    {
      startDate: "2020",
      endDate: "2023",
      logo: "",
      company: "Komaci Network",
      title: "Software Engineer",
      description:
        "Developed and improved Komaci, a data-driven micro-influencing solution, and EZlife, a social commerce management system with over 250 sellers and 210,000 transactions. Led UI/UX collaboration to create reusable components and pages, designed API and database structures, and planned seamless integrations for new features. Worked on API consumption, dynamic state updates, and contributed to backend enhancements and bug fixes.",
      techStack: [
        TECHSTACK_KEYS.PHP,
        TECHSTACK_KEYS.JAVASCRIPT,
        TECHSTACK_KEYS.TYPESCRIPT,
        TECHSTACK_KEYS.REACT,
        TECHSTACK_KEYS.LARAVEL,
        TECHSTACK_KEYS.MYSQL,
      ],
    },
    {
      startDate: "2019",
      endDate: "2019",
      logo: "",
      company: "Eboss Group Holdings",
      title: "Intern, Software Developer",
      description: "Minor enhancements & bugs fixing backend logic.",
      techStack: [],
    },
  ],
};

export const PROJECTS_DETAILS = {};
