export const projects = [
  {
    name: "Go Pro Ksa",
    slug: "go-pro-ksa",
    url: "https://gopro-ksa.com",
    association: null,
    role: "Fullstack Developer",
    nextProject: "tasharuk",
    prevProject: "us-incorporated",
    showcase: {
      type: "images",
      data: [
        "goproksa-1.webp",
        "goproksa-2.webp",
        "goproksa-3.webp",
        "goproksa-4.webp",
        "goproksa-5.webp",
        "goproksa-6.webp",
        "goproksa-7.webp",
        "goproksa-8.webp",
      ],
    },
    skills: [
      {
        name: "nest",
        image: "/images/logos/nest.webp",
      },
      {
        name: "sequelize",
        image: "/images/logos/sequelize.webp",
      },
      {
        name: "postgres",
        image: "/images/logos/postgres.webp",
      },
      {
        name: "vite",
        image: "/images/logos/vite.svg",
      },
      {
        name: "react",
        image: "/images/logos/react.webp",
      },
      {
        name: "tailwind",
        image: "/images/logos/tailwind.svg",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Experience a curated selection of precision cart parts, including cutting-edge offerings like nano-ceramic components and more, on our dedicated ecommerce platform. Elevate your cart's performance and style with our high-quality products.",
        order: 1,
      },
      {
        type: "list",
        order: 2,
        items: [
          {
            order: 1,
            body: "Implemented the project dashboard",
            attachments: [],
          },
          {
            order: 2,
            body: "Successfully maintained the backend system",
            attachments: [],
          },
          {
            order: 3,
            body: "Added payment processing functionality to the backend",
            attachments: [],
          },
          {
            order: 4,
            body: "Deployed website, dashboard and backend on a VPS server using Nginx",
            attachments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Tasharuk",
    slug: "tasharuk",
    url: null,
    association: null,
    role: "Backend Developer",
    nextProject: "shazarat-medical",
    prevProject: "go-pro-ksa",
    showcase: null,
    skills: [
      {
        name: "laravel",
        image: "/images/logos/laravel.webp",
      },
      {
        name: "mysql",
        image: "/images/logos/mysql.png",
      },
      {
        name: "pusher",
        image: "/images/logos/pusher.png",
      },
      {
        name: "firebase",
        image: "/images/logos/firebase.png",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Innovative system bridges the gap between generous donors and individuals in need, creating a seamless connection for meaningful support and positive change.",
        order: 1,
      },
      {
        type: "list",
        order: 2,
        items: [
          {
            order: 1,
            body: "Worked as Backend Laravel developer with a team of two members",
            attachments: [],
          },
          {
            order: 2,
            body: "Implemented API interface for the admin dashboard and the mobile app",
            attachments: [],
          },
          {
            order: 3,
            body: "Developed a real-time counter that dynamically tracked and displayed donation counts, utilizing Pusher technology to relay the data to the client app in real-time",
            attachments: [],
          },
          {
            order: 4,
            body: "Developed real-time notifications to be sent to the clients and the admin dashboard",
            attachments: [],
          },
          {
            order: 5,
            body: "Designed and implemented Role-Based Access Control (RBAC) system. This RBAC system provided granular permission management, specifically tailored for moderators working on the admin dashboard",
            attachments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shazarat Medical",
    slug: "shazarat-medical",
    url: "https://shazarat-medical.com",
    association: {
      name: "Pancode",
      url: "https://pan-code.com",
    },
    role: "Fullstack Developer",
    nextProject: "syria-kfc",
    prevProject: "tasharuk",
    showcase: {
      type: "grid",
      cols: 3,
      data: [
        "shaza-1.webp",
        "shaza-2.webp",
        "shaza-3.webp",
        "shaza-4.webp",
        "shaza-5.webp",
        "shaza-6.webp",
        "shaza-7.webp",
        "shaza-8.webp",
        "shaza-9.webp",
      ],
    },
    skills: [
      {
        name: "laravel",
        image: "/images/logos/laravel.webp",
      },
      {
        name: "mysql",
        image: "/images/logos/mysql.png",
      },
      {
        name: "vite",
        image: "/images/logos/vite.svg",
      },
      {
        name: "tailwind",
        image: "/images/logos/tailwind.svg",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "Intuitive ecommerce platform, empowering customers to effortlessly explore and purchase a diverse range of products while ensuring a streamlined and user-friendly shopping experience.",
        order: 1,
      },
      {
        type: "list",
        order: 2,
        items: [
          {
            order: 1,
            body: "Took on the responsibility of maintaining and fixing issues in an existing application built on legacy code",
            attachments: [],
          },
          {
            order: 2,
            body: "Implemented new features and functionalities",
            attachments: [],
          },
          {
            order: 3,
            body: "Identified pain points and bottlenecks within the payment process, proposing and implementing solutions to streamline and refactor the payment workflow",
            attachments: [],
          },
          {
            order: 4,
            body: "Replaced all customer interfaces within the application and there backend codebase, optimizing performance, improving maintainability",
            attachments: [],
          },
          {
            order: 5,
            body: "Designed and implementing promotion offers system",
            attachments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Syria KFC",
    slug: "syria-kfc",
    url: "https://syriakfc.sy",
    association: {
      name: "Pancode",
      url: "https://pan-code.com",
    },
    role: "Fullstack Developer",
    nextProject: "us-incorporated",
    prevProject: "shazarat-medical",
    showcase: {
      type: "images",
      data: [
        "syriakfc-1.webp",
        "syriakfc-2.webp",
        "syriakfc-3.webp",
        "syriakfc-4.webp",
        "syriakfc-5.webp",
        "syriakfc-6.webp",
        "syriakfc-7.webp",
        "syriakfc-8.webp",
        "syriakfc-9.webp",
      ],
    },
    skills: [
      {
        name: "laravel",
        image: "/images/logos/laravel.webp",
      },
      {
        name: "mysql",
        image: "/images/logos/mysql.png",
      },
      {
        name: "vite",
        image: "/images/logos/vite.svg",
      },
      {
        name: "tailwind",
        image: "/images/logos/tailwind.svg",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "An online platform for a restaurant where customers can view a list of available menu items and products.",
        order: 1,
      },
      {
        type: "list",
        order: 2,
        items: [
          {
            order: 1,
            body: "Gathered requirements and led the design process for the KFC project, resulting in a comprehensive Entity-Relationship Diagram (ERD)",
            attachments: [],
          },
          {
            order: 2,
            body: "Implemented the admin dashbaord",
            attachments: [],
          },
          {
            order: 3,
            body: "Implemented API interface for the landing website.",
            attachments: [],
          },
        ],
      },
    ],
  },
  {
    name: "Us Incorporated",
    slug: "us-incorporated",
    url: "https://us-incorporated.com",
    association: {
      name: "Pancode",
      url: "https://pan-code.com",
    },
    role: "Fullstack Developer",
    nextProject: "go-pro-ksa",
    prevProject: "syria-kfc",
    showcase: {
      type: "images",
      data: ["us-1.webp", "us-2.webp", "us-3.webp"],
    },
    skills: [
      {
        name: "nest",
        image: "/images/logos/nest.webp",
      },
      {
        name: "laravel",
        image: "/images/logos/laravel.webp",
      },
      {
        name: "mysql",
        image: "/images/logos/mysql.png",
      },
      {
        name: "vite",
        image: "/images/logos/vite.svg",
      },
    ],
    sections: [
      {
        type: "paragraph",
        body: "US Companies manufacture and distribute commercial kitchen equipment, scientific, medical instruments, solar & battery, and pharmaceuticals.",
        order: 1,
      },
      {
        type: "list",
        order: 2,
        items: [
          {
            order: 1,
            body: "Took on the responsibility of maintaining and fixing issues in an existing application",
            attachments: [],
          },
          {
            order: 2,
            body: "Implemented an http service for registering products warranties",
            attachments: [],
          },
        ],
      },
    ],
  },
];
