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
    tesla,
    shopify,
    threejs,
    blogging,
    drumset,
    twitter,
    food,
    python
  } from "../components/assets";
  
  const navLinks = [
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Mern Developer",
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
    name:"Python",
    icon:python
},
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    
  ];
  
  const experiences = [
    {
      title: "Mern Stack Development",
      company_name: "Food Delivery App",
      icon: food,
      iconBg: "#383E56",
      link:"https://github.com/hellorocky007/Food_Delivery_website",
      date: "Oct 2023 -  Dec 2023",
      points: [
        "Developed a MERN stack food delivery application.",
        "Utilized React.js, Bootstrap, Node.js, Express and MongoDB technologies.",
        "Implemented secure authentication, search functionality, cart management, and efficient order processing features.",
        "Employed Redux for seamless state management, focusing on scalability and performance optimization.",
      ],
    },
    {
      title: "Full Stack Developement",
      company_name: "blogging platform",
      icon: blogging,
      iconBg: "#E6DEDD",
      link:"https://github.com/hellorocky007/Bloging_website",
      date: "Jun 2023 - Sept 2023",
      points: [
        "Created a dynamic blogging platform using HTML/CSS/JavaScript for frontend and Node.js/Express.js for backend.",
        "Integrated MongoDB for efficient data storage and management.",
        "Implemented secure user authentication, post management, and messaging functionalities.",
        "Ensured responsive design for compatibility across devices, optimizing user experience.",
      ],
    },
    {
      title: "Frontend Development",
      company_name: "Virtual Drumkit",
      link: "https://magical-axolotl-39dca6.netlify.app/",
      icon: drumset,
      iconBg: "#383E56",
      date: " Feb 2023 - May 2023",
      points: [
        "Developed a Virtual Drum Kit web application using HTML, CSS, and JavaScript.",
        "Enables users to play various drum sounds via keyboard or interactive virtual drums.",
        "Designed to provide an engaging and interactive experience for music and rhythm enthusiasts."
      ],
    },
    {
      title: "Frontend Development",
      company_name: "Twitter Clone",
      icon: twitter,
      link:"https://idyllic-custard-b16641.netlify.app/",
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Created a Twitter clone using HTML, CSS, and JavaScript.",
        "Designed and styled the user interface to closely resemble the look and feel of Twitter's interface.",
        "Implemented functionality for posting tweets, following users, liking and retweeting posts, and displaying timelines.",
        "Utilized JavaScript for dynamic interactions, such as updating timelines in real-time and handling user interactions smoothly.",
      ],
    },
  ];
  
  
  export { navLinks, services, technologies, experiences};