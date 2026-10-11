// Import icons from the icons directory
import type { ComponentType } from "react";
import {
  Figma,
  Gradio,
  HackerNews,
  Html5,
  Jupyter,
  Openai,
  Opencv,
  Python,
  Telegram,
  Threads,
  BusinessAnalysis,
  PencilRuler,
} from "./icons";

// Define the Icon type interface
// SvgIcon: SVG component for the technology icon
// title: Display name of the technology
export type Icon = {
  SvgIcon: ComponentType<{ className?: string }>;
  title: string;
};

// Available project categories used for filtering
export type ProjectCategory =
  | "AI & Automation"
  | "Web App"
  | "Business System"
  | "E-Commerce"
  | "Landing Page"
  | "Template"
  | "Creative";

// Ordered list of categories for filter controls
export const ProjectCategories: Array<ProjectCategory> = [
  "AI & Automation",
  "Business System",
];

// Define the Project type interface
// title: Name of the project
// category: Main category of the project
// description: Brief explanation of the project
// urlDirect: Optional live demo URL
// linkText: Optional label for the demo link button (defaults apply per UI)
// srcImage: Path to project screenshot/image
// tags: Optional array of project categories/keywords
// icons: Array of technology icons used in the project
export type Project = {
  title: string;
  category: ProjectCategory;
  description: string;
  urlDirect?: string;
  linkText?: string;
  srcImage: string;
  tags?: Array<string>;
  icons: Array<Icon>;
};

// Export array of projects data
export const Projects: Array<Project> = [
  {
    title: "Aphrydite AI",
    category: "AI & Automation",
    description:
      "Aphrydite AI is a sophisticated Telegram bot designed to fetch real time news and automatically publish compiled updates directly to Threads. It streamlines content curation by providing users with instant access to the latest information without leaving their chat interface. The system ensures seamless integration between messaging and microblogging platforms.",
    urlDirect: "./img/projects/aphrydite-ai-demo.mp4",
    linkText: "Visit Video Demo",
    srcImage: "./img/projects/aphrydite-ai.jpg",
    tags: ["Telegram Bot", "News Aggregation", "Threads", "Automation"],
    icons: [
      {
        SvgIcon: Python,
        title: "Python",
      },
      {
        SvgIcon: Telegram,
        title: "Telegram API",
      },
      {
        SvgIcon: Threads,
        title: "Threads API",
      },
      {
        SvgIcon: Openai,
        title: "LLM",
      },
      {
        SvgIcon: Html5,
        title: "HTML",
      },
    ],
  },
  {
    title: "CoffeeVision Pro",
    category: "AI & Automation",
    description:
      "CoffeeVision Pro is a computer vision prototype engineered to classify the quality of raw coffee beans. Although currently limited by a restricted dataset size, the model demonstrates significant foundational capability. Considering Indonesia is one of the largest coffee producers globally, expanding this project with a more comprehensive dataset holds immense potential to revolutionize local agricultural quality control and boost the national coffee industry.",
    urlDirect: "https://huggingface.co/spaces/GaryChennn/hehecoffeee",
    linkText: "Visit Demo",
    srcImage: "./img/projects/coffee-vision-pro.jpg",
    tags: ["Computer Vision", "Classification", "Agriculture", "Machine Learning"],
    icons: [
      {
        SvgIcon: Python,
        title: "Python",
      },
      {
        SvgIcon: Jupyter,
        title: "Jupyter Notebook",
      },
      {
        SvgIcon: Opencv,
        title: "OpenCV",
      },
      {
        SvgIcon: Gradio,
        title: "Gradio Web",
      },
      {
        SvgIcon: Html5,
        title: "HTML",
      },
    ],
  },
  {
    title: "AKANG",
    category: "Business System",
    description:
      "AKANG is a modern livestock asset management platform conceptualized to help farmers efficiently track and manage their cattle. Originally developed as a comprehensive business plan project, it proposes a structured digital solution to modernize traditional farming practices. This innovative proposal successfully advanced to the semi finals of the Binus Startup Vaganza competition.",
    urlDirect: "https://linktr.ee/AKANG_BiSi",
    linkText: "Visit Project",
    srcImage: "./img/projects/akang-aset-kandang.jpg",
    tags: ["Livestock Management", "Business Plan", "Startup Competition", "UI/UX"],
    icons: [
      {
        SvgIcon: Figma,
        title: "Figma",
      },
      {
        SvgIcon: BusinessAnalysis,
        title: "Business Analysis",
      },
      {
        SvgIcon: PencilRuler,
        title: "UI/UX Design",
      },
    ],
  },
  {
    title: "TechSignal Intelligence",
    category: "AI & Automation",
    description:
      "TechSignal Intelligence is an automated analytics platform that captures real-time technology discussions from Hacker News. As the AI Engineer for this team project, I developed a Telegram bot to trigger the pipeline and integrated a custom LLM API to analyze emerging trends and community sentiment. I also designed a robust partial-failure recovery mechanism, ensuring raw data is preserved even when AI analysis timeouts occur. The processed data is then loaded into PostgreSQL and feeds into a full analytics stack—spanning Apache Spark, Google BigQuery, and Tableau—managed collaboratively to deliver end-to-end actionable trend intelligence.",
    urlDirect: "./img/projects/techsignal-demo.mp4",
    linkText: "Visit Video Demo",
    srcImage: "./img/projects/techsignal-intelligence.jpeg",
    tags: ["Hacker News", "Telegram Bot", "LLM", "Data Pipeline", "Sentiment Analysis", "Analytics"],
    icons: [
      {
        SvgIcon: Python,
        title: "Python",
      },
      {
        SvgIcon: Telegram,
        title: "Telegram Bot",
      },
      {
        SvgIcon: Openai,
        title: "LLM API",
      },
      {
        SvgIcon: HackerNews,
        title: "HackerNews API",
      },
    ],
  },
];
