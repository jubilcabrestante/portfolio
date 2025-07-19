// portfolioData.ts

import { PortfolioData } from "../types/skill_types";

export const portfolioData: PortfolioData = {
  header: {
    title: "Mobile & Flutter Developer",
    description:
      "Creating seamless user experiences with high standards in quality and performance.",
  },
  about: {
    content:
      "I'm Jubil L. Cabrestante, a 25-year-old graduating Information Technology student from Palawan State University. I specialize in mobile and web development, with a strong emphasis on Flutter. While I have full-stack experience across both frontend and backend technologies, my core strength lies in building high-quality, user-friendly mobile applications. My background in quality assurance further enhances my ability to deliver reliable, thoroughly tested solutions.",
  },
  projects: [
    {
      title: "Taga-Cuyo App",
      framework: "Flutter",
      description:
        "A mobile application designed to help users learn the Tagalog and Cuyonon languages through translation tools and quizzes.",
      // link: "#",
      images: [
        "/assets/taga-cuyo/1.png",
        "/assets/taga-cuyo/2.png",
        "/assets/taga-cuyo/3.png",
        "/assets/taga-cuyo/4.png",
        "/assets/taga-cuyo/5.png",
        "/assets/taga-cuyo/6.png",
        "/assets/taga-cuyo/7.jpg",
        "/assets/taga-cuyo/8.jpg",
      ],
    },
    {
      title: "Sakayna App",
      framework: "Flutter",
      description:
        "A mobile app for booking transportation services in the Philippines, with a focus on user experience and simplicity.",
      link: "https://play.google.com/store/apps/details?id=com.app.sakayna_app",
      images: [
        "/assets/sakayna/1.png",
        "/assets/sakayna/2.png",
        "/assets/sakayna/3.png",
        "/assets/sakayna/4.jpg",
        "/assets/sakayna/5.jpg",
        "/assets/sakayna/6.jpg",
      ],
    },
    {
      title: "PBNHS Web App",
      framework: "Flutter Web",
      description:
        "A web app developed for Port Barton National High School to streamline teachers’ report submissions.",
      // link: "#",
      images: [
        "/assets/pbnhs/1.png",
        "/assets/pbnhs/2.png",
        "/assets/pbnhs/3.png",
      ],
    },
    {
      title: "Movie Website",
      framework: "HTML, CSS, JavaScript",
      description:
        "A simple movie website showcasing popular films with a responsive design.",
      link: "https://jubilcabrestante.github.io/movie_website/",
      images: [
        "/assets/movie/1.png",
        "/assets/movie/2.png",
        "/assets/movie/3.png",
        "/assets/movie/4.png",
      ],
    },
    {
      title: "Portfolio Website",
      framework: "Next.js, React",
      description:
        "A personal portfolio website built with Next.js and React, showcasing my projects and skills.",
      // link: "https://jubilcabrestante.github.io/portfolio/",
      images: ["/assets/portfolio/1.png", "/assets/portfolio/2.png"],
    },
  ],
  skills: [
    {
      category: "Core Skills",
      items: [
        {
          title: "Mobile Development (Flutter)",
          icon: "Smartphone",
          description: [
            "Proficient in building native mobile applications for iOS and Android platforms.",
          ],
        },
        {
          title: "Quality Assurance (QA)",
          icon: "Bug",
          description: [
            "Experienced in testing mobile applications to ensure high quality and reliability.",
          ],
        },
        {
          title: "Frontend Web Development",
          icon: "Layout",
          description: [
            "Have basic knowledge in building responsive web interfaces using HTML, CSS, JavaScript, React and NextJs.",
          ],
        },
      ],
    },
    {
      category: "Additional Skills",
      items: [
        {
          title: "Database Management",
          icon: "Database",
          description: [
            "Familiar with database design and management using NoSQL databases.",
          ],
        },
        {
          title: "Google Cloud Platform (GCP)",
          icon: "Cloud",
          description: [
            "Basic understanding of GCP services for deploying and managing applications.",
          ],
        },
      ],
    },
    {
      category: "Tools & Technologies",
      items: [
        {
          title: "Version Control",
          icon: "GitBranch",
          description: [
            "Familiar with Git for version control and collaboration on projects.",
          ],
        },
        {
          title: "Jira",
          icon: "ClipboardList",
          description: [
            "Basic knowledge in using Jira for task management, sprint planning, and team collaboration.",
          ],
        },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        {
          title: "Problem Solving",
          icon: "Puzzle",
          description: [
            "Strong analytical skills with a focus on finding effective solutions to complex problems.",
          ],
        },
        {
          title: "Critical Thinking",
          icon: "Brain",
          description: [
            "Able to assess situations logically, evaluate options objectively, and make informed decisions based on evidence.",
          ],
        },
        {
          title: "Adaptability",
          icon: "Repeat",
          description: [
            "Quick learner who can adapt to new technologies and methodologies as needed.",
          ],
        },
      ],
    },
  ],
  experience: [
    {
      position: "Flutter Developer & QA Engineer (Intern)",
      company: "Sakayna",
      period: "Jan 2025 – May 2025",
      description:
        "Contributed to the development and quality assurance of a ride-booking mobile application based in Tagum City, Davao. Played a key role in testing user flows, enhancing UI/UX design, and ensuring app reliability and performance across devices to provide a seamless experience for local commuters.",
    },
    {
      position: "FLutter Developer (Team Leader)",
      company: "Thesis Project – Taga-Cuyo App",
      period: "Aug 2024 – Apr 2025",
      description:
        "Developed as a college thesis project, this comprehensive learning app aims to help users understand and translate Tagalog and Cuyonon languages. It includes interactive built-in quizzes to reinforce learning and features a custom-trained translation model that enhances accuracy and user engagement. The app is designed with user-friendly navigation and supports language preservation and cultural education.",
    },
  ],
};
