import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Vaiju Patil",
  initials: "DV",
  url: "https://dillion.io",
  location: "Bengaluru, KA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer . I love building things and helping people.",
  summary:
    "I break things, learn fast, and get things done. Deep into code, computer science, and anything that pushes the boundaries of what’s possible. My journey’s been shaped by curiosity, history, football, and great books — and I’m still chasing mastery every day.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Javascript",
    "TailwindCSS",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Java",
    "C",
    "Git",
    "Figma",
    "Appwrite",
    "Prisma",,
    "Express.js",
    "Socket.io",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vaijuwalker111@gmail.com",
    tel: "+91 6361557704",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vaijaaaaa",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaiju-patil-585555310/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Vaijaaaaaaa",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Google Developer Group",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "UI/UX Designer",
      logoUrl: "/gdg.png",
      start: "May 2024",
      end: "Till now",
      description:
        "Designed and implemented UI/UX systems for Google Developer Group (GDG) events and platforms, focusing on user-centered design principles and accessibility. Created responsive, high-fidelity mockups and design systems using Figma. Collaborated with developers to ensure pixel-perfect implementation across web and mobile. Delivered branding and visual assets that elevated community engagement and event experience.",
    },
    {
      company: "Microsoft Learn Student Ambassador",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Secretary",
      logoUrl: "/mlsa.png",
      start: "January 2024",
      end: "Till now",
      description:
        "Served as the Secretary of the Microsoft Learn Student Ambassadors (MLSA) chapter, managing communication, coordination, and event logistics for the community. Maintained detailed documentation of meetings, streamlined collaboration between core teams, and ensured timely execution of initiatives. Played a key role in planning and organizing workshops, hackathons, and outreach programs to grow community engagement and impact.",
    },
  ],
  education: [
    {
      school: "Cambridge Institute of Technology",
      href: "https://engg.cambridge.edu.in/",
      degree: "Computer Science Engineering - B.E",
      location: "Bengaluru, KA",
      logoUrl: "/cit.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Gossip",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the rise of real-time communication apps, I decided to build Gossip — a full-stack chat platform that enables users to engage in seamless, live conversations. It was a great way to explore sockets, authentication, and scalable messaging systems from the ground up.",
      technologies: [
        "React.js",
        "javascript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "TailwindCSS",
        "DasiyUI",
      ],
      links: [
        {
          type: "Website",
          href: "https://gossip-613v.onrender.com/login",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type:"source",
          href: "https://github.com/vaijaaaaa/Gossip-A-Real-Time-Chat-Application",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/gossipproject.png",
    },
    {
      title: "Quick Note",
      href: "https://magicui.design",
      dates: "June 2024 - July 2024",
      active: true,
      description:
         "Developed Quick Note, a Next.js app that allows users to easily create, organize, and access their notes in a sleek and efficient interface. With features like quick search and seamless note categorization, it’s perfect for students and professionals looking to stay organized.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Shadcn UI",
        "TailwindCSS", 
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaijaaaaa/QuickNote",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/note.png",
     
    },
    {
      title: "Space",
      href: "https://llm.report",
      dates: "Feb 2025 - April 2025",
      active: true,
      description:
        "Built a social media app with React Native: Post updates, connect with friends, and explore real-time feeds — designed for fast, smooth performance across iOS and Android.",
      technologies: [
       "React Native",
        "TypeScript",
        "Expo",
      "Redux Toolkit",
        "Convex",
        "React Navigation",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vaijaaaaa/Space",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Spaceproject.png",
    },
    {
      title: "Jammify",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed a full-stack music streaming app — Jammify, a Spotify clone with real-time playback, custom playlists, and seamless UI powered by modern web tech.",
        technologies: [
          "Next.js",
          "TypeScript",
          "TailwindCSS",
          "Prisma",
          "PostgreSQL",
          "Shadcn UI",
          "Zustand",
          "Stripe",
          "NextAuth.js",
          "UploadThing",
          "Clerk",
          "React Hook Form",
        ], 
      links: [
        {
          type: "Source",
          href: "https://github.com/vaijaaaaa/Jammify",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jammifylogo.png",
    },
  ],
  hackathons: [
    {
      title: "CodeVolt 2025",
      dates: "March 3rd - 4th, 2025",
      location: "Chennai, Tamil Nadu",
      description:
        "Developed an AI-powered automation tool — AutoClaim AI — that streamlines the insurance claim process using intelligent document analysis and decision-making algorithms.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/003/269/741/datas/large.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
         title:"Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/vaijaaaaa/AutoClaim-AI", 
        }
      ],
    },
    {
      title: "Great Bengaluru Hackathon",
      dates: "March 15th - 16th, 2025",
      location: "Bengaluru, Karnataka",
      description:
        "Developed a mobile application — Ecometer — that helps users track and manage household waste, promoting eco-friendly habits through real-time insights and gamified sustainability challenges.",
      image:
        "https://cse.noticebard.com/wp-content/uploads/sites/23/2025/02/IMG_2128-1024x683.jpeg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/vaijaaaaa/EcoMeter",
        }
      ],
    },
    {
      title: "GDSC Hackathon",
      dates: "June 23rd - 24th, 2024",
      location: "Bengaluru, Karnataka",
      description:
        "Participated in a hackathon where I solved 10 real-world problems using Java, focusing on efficiency, scalability, and clean code practices across domains like healthcare, automation, and data handling..",
      icon: "public",
      image:
        "https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-02-17T17%3A06%3A43.180Z-GDSC%20FEST%E2%80%9924%20%2812%29.png",
      links: [],
    },
    {
      title: "Icube Codeathon",
      dates: "April 25th - 26th, 2024",
      location: "Bengaluru, Karnataka",
      description:
       "Won 3rd prize at the Codeathon event during iCube 2025 by solving LeetCode-style problems with a focus on clean and efficient Java solutions.",
      icon: "public",
      image:
        "https://i.pinimg.com/736x/95/e9/d8/95e9d8383e89e22f39f49efc9f217e70.jpg",
      links: [],
    },
  ],
 
  
} as const;
