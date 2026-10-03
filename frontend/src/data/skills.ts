// Import SVG icons from the icons file
import {
  Html5,
  Css3,
  Javascript,
  Typescript,
  Python,
  C,
  Java,
  Php,
  Sql,
  ReactJS,
  Laravel,
  Tailwindcss,
  Json,
  Mysql,
  Opencv,
  Googlecloud,
  Figma,
  Vscode,
  Jupyter,
} from "./icons";

// Interface for basic skill items with icon and tooltip
type Item = {
  SvgIcon: any; // SVG component for the skill icon
  tooltip: string; // Tooltip text to display on hover
};

// Main Skills type definition containing different skill categories
type Skills = {
  language?: Array<Item>; // Languages & core web
  frontend?: Array<Item>; // Frameworks & web tech
  backend?: Array<Item>; // Data & AI
  other?: Array<Item>; // Tools & cloud
};

// Export the Skills object with type checking
export const Skills: Skills = {
  language: [
    { SvgIcon: Html5, tooltip: "HTML" },
    { SvgIcon: Css3, tooltip: "CSS" },
    { SvgIcon: Javascript, tooltip: "JavaScript" },
    { SvgIcon: Typescript, tooltip: "TypeScript" },
    { SvgIcon: Python, tooltip: "Python" },
    { SvgIcon: C, tooltip: "C" },
    { SvgIcon: Java, tooltip: "Java" },
    { SvgIcon: Php, tooltip: "PHP" },
    { SvgIcon: Sql, tooltip: "SQL" },
  ],
  frontend: [
    { SvgIcon: ReactJS, tooltip: "React" },
    { SvgIcon: Laravel, tooltip: "Laravel" },
    { SvgIcon: Tailwindcss, tooltip: "Tailwind CSS" },
    { SvgIcon: Json, tooltip: "JSON" },
  ],
  backend: [
    { SvgIcon: Mysql, tooltip: "MySQL" },
    { SvgIcon: Opencv, tooltip: "OpenCV" },
  ],
  other: [
    { SvgIcon: Googlecloud, tooltip: "Google Cloud Platform" },
    { SvgIcon: Figma, tooltip: "Figma" },
    { SvgIcon: Vscode, tooltip: "VS Code" },
    { SvgIcon: Jupyter, tooltip: "Jupyter" },
  ],
};
