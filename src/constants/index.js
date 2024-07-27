import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Web Developer",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "Data Structures and Algorithms",
    icon: backend,
  },
  {
    title: "Creative Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Intel OneAPI Students Club",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developed and maintaining the IoSC-USAR's main web application using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, content writers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Chayan",
    icon: tesla,
    iconBg: "#383E56",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining Chayan's web application using React.js and other related technologies.",
      "Collaborating with designers, content writers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-end Web Developer",
    company_name: "Azintek tech fest",
    icon: shopify,
    iconBg: "#383E56",
    date: "12 & 13 October 2023",
    points: [
      "Developed the Azintek's main web application using React.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, content writers, and other developers and created a high-quality product.",
      "Implemented a responsive design and ensured cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Various hackathons, competitions and etc",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "February 2023 - May 2023",
    points: [
      "Finished at 2nd position in Shark Tank at GGSIPU, USMS",
      "Finished at 4th position in HackEDCode - A hackathon at USAR, GGSIPU EDC",
      "Been a participant in Smart India hackathon- 2023, InnovateNSUT- A hackathon at NSUT, Creative writing competition in IIT Delhi",
      "Finished at 2nd position in Roaster Boaster, E-Buzz 2.0 at Delhi Technological University",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "He's a Good Web Deveoper, exactly the deveoper i keep in mind while designing something",
    name: "Jay Tomar",
    designation: "Team Xeon Lead",
    company: "Intel oneAPI Students club",
    image: "#",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their projects like Parth does.",
    name: "Ishan",
    designation: "Lead Web Developer",
    company: "Chayan",
    image: "#",
  },
  {
    testimonial:
      "Mast londa h, genwin",
    name: "Vishal Singh",
    designation: "Teacher",
    company: "Gareeb people",
    image: "#",
  },
];

const projects = [
  {
    name: "Chayan",
    description:
      "Web-based platform that allows users to search, comprehend, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
