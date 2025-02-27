import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { FaChartBar, FaLaptopCode } from "react-icons/fa";
import { FaBrain, FaRobot } from "react-icons/fa";

// Define common type for icons
type IconComponent = React.ComponentType<{ className?: string }>;

// Interface for Experience, Education, and Volunteer Data
export interface ItemData {
  title: string;
  location: string;
  description: string;
  icon: IconComponent;
  date: string;
  type?: "experience" | "education" | "volunteer"; // string literal types
}

// Interface for Project Data
export interface Project {
  title: string;
  imageUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData: ItemData[] = [
  {
    title: "Associate Data Scientist",
    location: "Zgrow solutions pvt ltd",
    description:
      "Specialized in fine-tuning AI-driven assistants with agent-based workflows, optimizing prompt engineering, data retrieval, and model evaluation—boosting response accuracy by 76% and enhancing user engagement.",
    icon: FaChartBar,
    date: "Nov 2023 - Dec 2024",
    type: "experience",
  },
  {
    title: "Data Analyst Intern",
    location: "Senchola University",
    description:
      "Processed, cleaned, and visualized diverse datasets using Python and Power BI; assisted in data curation to enhance analysis accuracy.",
    icon: CgWorkAlt,
    date: "jul 2023 - oct 2023",
    type: "experience",
  },
  {
    title: "Data Analyst Intern",
    location: "cloud counselage",
    description:
      "Led data science initiatives, developed predictive models, and implemented machine learning solutions. Worked on data curation, feature engineering, and model optimization.",
    icon: FaLaptopCode,
    date: "May 2023 - Aug 2023",
    type: "experience",
  },
];

export const educationData: ItemData[] = [
  {
    title: "M.Sc., Mathematics",
    location: "Bharathi Women's College",
    description:
      "Specialized in advanced Deep focus on pure math, won Math Modelling and Quiz awards.",
    icon: LuGraduationCap,
    date: "2021 - 2023",
    type: "education",
  },
  {
    title: "B.Sc., Mathematics",
    location: "Valliammal College for Women",
    description:
      "Focused on programming fundamentals, mathematics, and statistics. Participated in various competitions and workshops.",
    icon: LuGraduationCap,
    date: "2018 - 2021",
    type: "education",
  },
];

export const volunteerData: ItemData[] = [
  {
    title: "AI Workshop ",
    location: " ", //empty string as this not applicable
    description:
      "Delivered an session introducing college students to the fundamentals of Artificial Intelligence, covering core concepts and real-world applications.",
    icon: FaBrain,
    date: "Sept 2024",
  },

  {
    title: "Guest Speaker on Vector DB",
    location: "Tech Community",
    description:
      "Delivered an in-depth session on Vector DB, live demos, and a mathematical approach.",
    icon: FaRobot,
    date: "May 2024",
    type: "volunteer",
  },
];

export const projectCategories = ["Python", "Math", "SQL", "Power BI"] as const;

export const categorizedProjectsData: Record<string, Project[]> = {
  Python: [
    {
      title: "Personal PA – AI Scheduling Agent",
      imageUrl: "robo.jpg",
      githubUrl: "https://github.com/yourusername/personal-ta",
    },
    {
      title: "Thirukkural Hugging Face Model",
      imageUrl: "Thirukkural image.png",
      githubUrl: "https://github.com/yourusername/thirukkural-nlp",
    },
  ],

  "Power BI": [
    {
      title: "Zomato Dashboard – Data Analysis",
      imageUrl: "zomato.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_revolutionizing-experiences-zomato-dashboard-activity-7105908147671744513-cI3d/",
    },
    {
      title: "IPL 2023 Dashboard – Cricket Analytics",
      imageUrl: "dashboard.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_ipl-dashboard-2023-activity-7104346535156482048-JoD2/",
    },
    {
      title: "Thirukkural Dataset – Data Analytics",
      imageUrl: "tamil.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_unveiling-insights-real-time-telecom-dataset-activity-7099954741106921473-gaQG/",
    },
  ],

  SQL: [
    {
      title: "Database Analytics",
      imageUrl: "sql DB.png",
      githubUrl: "#",
    },
  ],
  Math: [
    {
      title: "How Neural Networks Work with Matrices",
      imageUrl: "nn.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_neuralnetworks-matrixmath-datarepresentation-activity-7193801616997638144-0_Ml/",
    },
    {
      title: "Pi (π) – Beyond 3.14",
      imageUrl: "pi.png",
      linkedinUrl:
        "https://www.linkedin.com/in/nandhini25/recent-activity/all/",
    },
    {
      title: "Matrix Types & Their Applications in AI",
      imageUrl: "matrixs.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_matrices-and-their-significant-all-role-activity-7203216869506310145-pIIA/",
    },

    {
      title: "Semantic Search – The Mathematics Behind AI Search",
      imageUrl: "search.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_semanticsearch-ai-searchtechnology-activity-7188017228770873344-fi1t/",
    },
    {
      title: "Srinivasa Ramanujan – The Genius Mathematician",
      imageUrl: "ramanujam infinite.png",
      linkedinUrl:
        "https://www.linkedin.com/posts/nandhini25_ramanujan-mathematics-infinitepossibilities-activity-7189481800308604929-RUTf/",
    },
  ],
};

export const skillsData = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "PyTorch",
  "SQL",
  "Statistics",
  "Data Visualization",
  "Power BI",
  "Git",
  "MAthematics",
  "AWS",
  "Linear Algebra",
  "Calculus",
  "FastAPI",
] as const;
