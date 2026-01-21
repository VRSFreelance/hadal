
import React from 'react';
import { 
  Monitor, 
  Layout, 
  Smartphone, 
  TrendingUp, 
  Palette, 
} from 'lucide-react';
import { Service, Project, Experience, Education, Skill } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    icon: <Monitor className="w-6 h-6" />,
    items: ['Corporate Portals', 'Responsive Design', 'Speed Optimization']
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    icon: <Layout className="w-6 h-6" />,
    items: ['SaaS Development', 'Custom CRM Systems', 'Workflow Automation']
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    icon: <Smartphone className="w-6 h-6" />,
    items: ['iOS Development', 'Android Apps', 'Hybrid Solutions']
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    icon: <Palette className="w-6 h-6" />,
    items: ['Brand Identity', 'UI/UX Prototypes', 'Marketing Assets']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: <TrendingUp className="w-6 h-6" />,
    items: ['SEO Strategies', 'Social Media Management', 'Paid Campaigns']
  }
];

export const PROJECTS: Project[] = [
  {
    name: 'Lesoko Dashboards',
    techStack: ['Django', 'PostgreSQL', 'AWS', 'Leaflet'],
    link: 'https://lesoko.in/',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  },
  {
    name: 'Enterprise Landing Pages',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'SEO'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  },
  {
    name: 'ISSS & Ergonomic AI',
    techStack: ['Flutter', 'Python', 'TensorFlow', 'Firebase'],
    link: 'https://isss.bz',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  },
  {
    name: 'Butterfly Ragland Portal',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://butterflyragland.in',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  },
  {
    name: 'E-commerce Platforms',
    techStack: ['PHP', 'Laravel', 'MySQL', 'SEO'],
    link: 'https://buycrackersonline.in/',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  },
  {
    name: 'Hospital Management',
    techStack: ['Django', 'Python', 'PostgreSQL', 'REST API'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    status: 'completed'
  }
];

export const EXPERIENCE: Experience[] = [];
export const EDUCATION: Education[] = [];
export const SKILLS: Skill[] = [];
