const resumeData = {
  personal: {
    name: "Uday",
    title: "Software Engineer",
    location: "Sarjapur Road, Bangalore - 560035",
    phone: "+91 9918514781",
    email: "guptauday594@gmail.com",
    linkedin: "https://linkedin.com/in/uday-profile",
    github: "https://github.com/uday5629",
    summary: "Full Stack Software Engineer with expertise in Java, Spring Boot, React, and Microservices. Passionate about building scalable applications and delivering high-quality software solutions."
  },

  education: [
    {
      id: 1,
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Internet of Things",
      cgpa: "9.45",
      duration: "Sep 2020 – Jun 2024",
      courses: [
        "Operating Systems",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Networking",
        "Database Management Systems",
        "SDLC"
      ]
    }
  ],

  experience: [
    {
      id: 1,
      title: "Software Engineer",
      company: "Unisys India",
      location: "Bangalore, K.A.",
      duration: "July 2024 – Present",
      type: "full-time",
      highlights: [
        "Contributed to the development of a MicroFrontEnd Platform implementing backend services, API architecture, data processing, and seamless integrations to improve system efficiency",
        "Collaborated on 20+ RESTful APIs/MySQL integrations, logging, and error-handling, and assisted with GitRepos (GitHub) to deliver on key projects",
        "Improved backend reliability by reducing API response errors by 15% and streamlining database queries for faster execution"
      ]
    },
    {
      id: 2,
      title: "Associate Intern",
      company: "Unisys India",
      location: "Bangalore, K.A.",
      duration: "Feb 2024 – July 2024",
      type: "internship",
      highlights: [
        "Developed a comprehensive MicroFrontEnd Platform using React/Angular, Redux, and TypeScript to improve interface for 10,000+ active users",
        "Optimized responsiveness with SCSS, Material UI reducing overall bounce rate by 15%",
        "Collaborated effectively on 20+ RESTful APIs integrations"
      ]
    },
    {
      id: 3,
      title: "Data Analyst Intern & Team Lead",
      company: "Technocolabs",
      location: "Remote",
      duration: "Jan 2023 – Mar 2023",
      type: "internship",
      highlights: [
        "Led a team of 5, reducing project duration by 20%, and analyzed 10,000+ data entries using statistical methods to improve accuracy by 25%",
        "Built machine learning models for delinquency prediction (85% accuracy), disease prediction (90% accuracy), and sales forecasting (20% improvement)"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Warehouse Management System",
      subtitle: "Full Stack",
      technologies: ["Java", "Spring Boot", "JDBC", "MySQL", "Git", "Docker"],
      date: "",
      github: "",
      highlights: [
        "Contributed to the development of a Warehouse Management System using Java and Spring Boot, handling 5,000+ daily transactions and optimizing data processing efficiency by 30%",
        "Designed and implemented 10+ RESTful APIs for inventory, order tracking, and reporting, and optimized MySQL database queries to reduce response time by 25%"
      ]
    },
    {
      id: 2,
      title: "Multilevel Parking Solution",
      subtitle: "",
      technologies: ["Java", "Spring Boot", "Maven", "GitHub", "JDBC", "Docker"],
      date: "Jan 2025",
      github: "https://github.com/uday5629",
      highlights: [
        "Built a scalable parking management system supporting 10+ levels and 500+ vehicles, with automated ticketing, slot allocation, digital payments, backend processing, and real-time monitoring",
        "Improved operational efficiency by reducing manual effort by 80%, optimizing parking space utilization by 30%, and cutting user wait time by 40% through real-time tracking and advance booking"
      ]
    },
    {
      id: 3,
      title: "iNotebook",
      subtitle: "Web Development",
      technologies: ["React JS", "MongoDB", "Node.js", "SCSS", "HTML/CSS"],
      date: "Jan 2024",
      github: "https://github.com/uday5629",
      highlights: [
        "Built a full-stack note-taking web application using React.js, Node.js and MongoDB, implementing JWT authentication and secure RESTful APIs",
        "Developed reusable React components with Context API for state management, enabling smooth user experience and efficient note CRUD operations"
      ]
    }
  ],

  skills: {
    languages: ["Java", "SQL", "JavaScript", "HTML/CSS", "C++"],
    frameworks: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data",
      "Spring Security",
      "Hibernate/JPA",
      "JDBC",
      "React",
      "Material-UI",
      "Bootstrap",
      "REST API",
      "Microservices"
    ],
    tools: [
      "Git",
      "Docker",
      "VS Code",
      "IntelliJ IDEA",
      "RabbitMQ",
      "SonarQube",
      "Postman",
      "Swagger"
    ],
    concepts: [
      "Data Analytics",
      "IoT",
      "DBMS",
      "Operating Systems"
    ],
    soft: [
      "Team Leadership",
      "Problem Solving",
      "Self-learning",
      "Presentation",
      "Decision Making"
    ]
  },

  certifications: [
    {
      id: 1,
      title: "Database Management System",
      issuer: "NPTEL"
    },
    {
      id: 2,
      title: "Data Analytics with Python - Elite Level",
      issuer: "NPTEL"
    },
    {
      id: 3,
      title: "Azure AZ-900 Cloud Fundamentals",
      issuer: "Microsoft Azure"
    }
  ]
};

export default resumeData;
