import { title } from "process";

export const portfolioData = {
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
      link: "#",
    },
    {
      title: "Sakayna App",
      framework: "Flutter",
      description:
        "A mobile app for booking transportation services in the Philippines, with a focus on user experience and simplicity.",
      link: "#",
    },
  ],
  skills: [
    {
      category: "Core Skills",
      items: [
        {
          title: "Mobile Development (Flutter)",
          icon: "Smartphone", // PascalCase
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
            "Have basic knowledge in building responsive web interfaces using HTML, CSS, JavaScript, and React.",
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
            "Familiar with database design and management using SQL and NoSQL databases.",
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
          title: "Communication",
          icon: "MessageCircle",
          description: [
            "Effective communicator with the ability to collaborate with team members and stakeholders.",
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
      position: "Mobile Developer & QA Engineer",
      company: "Sakayna",
      period: "Jan 2025 – May 2025",
      description:
        "Contributed to the development and testing of a ride-booking app with a focus on UI/UX, reliability, and performance.",
    },
    {
      position: "Mobile Developer",
      company: "Thesis Project – Taga-Cuyo App",
      period: "Aug 2024 – Apr 2025",
      description:
        "Developed a learning app that helps users understand and translate Tagalog and Cuyonon languages, including built-in quizzes and a trained translation model.",
    },
  ],
};
