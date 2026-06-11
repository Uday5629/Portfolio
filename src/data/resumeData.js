const resumeData = {
  personal: {
    name: "Uday",
    title: "Software Engineer",
    tagline: "I build scalable Java backends and distributed systems — Spring Boot, microservices & cloud.",
    location: "Bangalore, India",
    phone: "+91 9918514781",
    email: "guptauday594@gmail.com",
    linkedin: "https://linkedin.com/in/uday-profile",
    github: "https://github.com/uday5629",
    available: true,
    summary: "Software Engineer specializing in Java Backend Development and Distributed Systems. Expert in Spring Boot Microservices, API Design, and Cloud Infrastructure. Proven track record of enhancing system performance by 25% and managing high-throughput architectures handling 5,000+ daily transactions."
  },

  stats: [
    { id: 1, to: 20, suffix: "+", label: "REST APIs Built" },
    { id: 2, to: 5, suffix: "K+", label: "Daily Transactions" },
    { id: 3, to: 25, suffix: "%", label: "Faster API Latency" },
    { id: 4, to: 9.45, decimals: 2, label: "Academic GPA" }
  ],

  education: [
    {
      id: 1,
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Internet of Things",
      cgpa: "9.45",
      duration: "Sep 2020 – Jun 2024",
      courses: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Object Oriented Programming",
        "Database Management Systems",
        "Computer Networks",
        "Distributed Systems"
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
        "Spearheaded the development of backend services for a Warehouse Execution System using Java 17 and Spring Boot, supporting a high-concurrency environment handling 5,000+ daily transactions and real-time task orchestration across a distributed microservices architecture",
        "Architected and deployed 20+ production-grade REST APIs for inventory, order, and task management modules, enabling seamless data flow across microservices and robotic system integrations",
        "Optimized complex database schemas and SQL queries, improving API response latency by 25% and ensuring efficient processing of high-volume warehouse and AMR task operations",
        "Improved system reliability by reducing API failure rates by 15% through robust exception handling, centralized logging, and Agile collaboration with React micro-frontend and robotics integration teams"
      ]
    },
    {
      id: 2,
      title: "Associate Software Intern",
      company: "Unisys India",
      location: "Bangalore, K.A.",
      duration: "Feb 2024 – July 2024",
      type: "internship",
      highlights: [
        "Developed a comprehensive Micro-FrontEnd for a Java backend platform using React, Redux, and TypeScript, improving the interface for 10,000+ active users",
        "Optimized responsiveness using SCSS and Material UI, reducing overall bounce rate by 15% and collaborating on the integration of 20+ RESTful APIs"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "UrbanFlow",
      subtitle: "Microservices-Based Parking Management System",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "Docker",
        "Eureka",
        "Spring Cloud Gateway",
        "Spring Security",
        "JWT"
      ],
      date: "",
      github: "https://github.com/Uday5629/ValetGo",
      highlights: [
        "Developed a distributed system using 8 Spring Boot microservices for real-time parking operations including spot allocation, with REST APIs designed for a scalable architecture handling high-concurrency scenarios",
        "Orchestrated containerized microservices using Docker with service discovery via Eureka and routing through Spring Cloud Gateway, reducing latency through optimized inter-service communication and caching",
        "Implemented JWT-based authentication and role-based authorization using Spring Security at the API Gateway layer, ensuring secure, stateless communication with centralized request validation across services"
      ]
    }
  ],

  skills: {
    languages: ["Java", "SQL", "HTML/CSS", "C++"],
    frameworks: [
      "Spring Boot",
      "Spring MVC",
      "Spring Data",
      "Spring Security",
      "Hibernate/JPA",
      "JDBC",
      "React",
      "REST APIs",
      "Microservices Architecture"
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "DBMS",
      "Operating Systems",
      "SDLC"
    ],
    tools: [
      "Git",
      "Docker",
      "AWS",
      "IntelliJ IDEA",
      "VS Code",
      "RabbitMQ",
      "SonarQube",
      "Postman",
      "Swagger"
    ],
    soft: [
      "Team Leadership",
      "Problem Solving",
      "Self-Learning",
      "Decision Making"
    ]
  },

  certifications: [
    {
      id: 1,
      title: "AWS Certified Developer – Associate (DVA-C02)",
      issuer: "Amazon Web Services"
    },
    {
      id: 2,
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft"
    },
    {
      id: 3,
      title: "Claude Certified Architect – Foundations (CCA-F)",
      issuer: "Anthropic"
    },
    {
      id: 4,
      title: "Database Management Systems",
      issuer: "NPTEL"
    }
  ]
};

export default resumeData;
