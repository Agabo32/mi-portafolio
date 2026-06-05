import {
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiElementor,
  SiReact,
  SiXampp,
  SiChartdotjs,
} from 'react-icons/si';

import {
  FaWordpress,
  FaBootstrap,
  FaGitAlt,
  FaCode,
  FaSearch,
  FaServer,
  FaDatabase,
  FaCogs,
  FaMobileAlt,
} from 'react-icons/fa';

export default function TechIcon({ name, className = "w-4 h-4" }) {
  const iconMap = {
    'PHP': SiPhp,
    'PHP 8+': SiPhp,
    'MySQL': SiMysql,
    'HTML5': SiHtml5,
    'CSS3': SiCss,
    'JavaScript': SiJavascript,
    'Bootstrap': FaBootstrap,
    'Tailwind CSS': SiTailwindcss,
    'TailwindCSS': SiTailwindcss,
    'WordPress': FaWordpress,
    'Elementor Pro': SiElementor,
    'React': SiReact,
    'Git': FaGitAlt,
    'VS Code': FaCode,
    'XAMPP': SiXampp,
    'Chart.js': SiChartdotjs,
    'SEO': FaSearch,
    'AJAX': FaServer,
    'MVC': FaCode,
    'API REST': FaServer,
    'PDO': FaDatabase,
    'Diseño Responsive': FaMobileAlt,
  };

  const IconComponent = iconMap[name] || FaCogs;

  return <IconComponent className={className} />;
}
