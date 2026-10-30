export const personal = {
  name: 'King Vista',
  role: 'Full-Stack Developer',
  tagline: 'Full-Stack, AI & IoT Engineer',
  bio: 'Born and raised in the Philippines, I build full-stack web applications, AI-powered systems, and IoT solutions — from the UI down to the hardware.',
  email: 'immanuelvista@gmail.com',         // ← replace
  github: 'https://github.com/uuell',
  instagram: 'https://www.instagram.com/iv_kinggg/',
  twitter: 'https://twitter.com',
  linkedin: 'https://linkedin.com/in/king-immanuel-vista',                     // ← add if you have one
  resumeUrl: '/resume.pdf',         // ← drop resume.pdf in /public
}

export const skills = [
  {
    category: 'Languages',
    short: 'LANG',
    items: ['HTML / CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'PHP', 'C++'],
  },
  {
    category: 'Frontend',
    short: 'FE',
    items: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'React Router', 'Axios'],
  },
  {
    category: 'Backend',
    short: 'BE',
    items: ['Flask', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'SQLAlchemy', 'Flask-Login'],
  },
  {
    category: 'AI / ML',
    short: 'AI',
    items: ['PyTorch', 'YOLOv8', 'Ultralytics', 'OpenCV', 'OCR', 'Groq API', 'Edge Impulse'],
  },
  {
    category: 'Database',
    short: 'DB',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Neon', 'Alembic'],
  },
  {
    category: 'Hardware / IoT',
    short: 'IOT',
    items: ['Raspberry Pi', 'ESP32', 'Arduino', 'Arduino IDE', 'Edge Impulse'],
  },
  {
    category: 'Tools',
    short: 'OPS',
    items: ['Git', 'GitHub', 'Figma', 'CI/CD', 'Cloudflare', 'Render', 'Vercel', 'Postman', 'SDLC', 'STLC'],
  },
]

export const projects = [
  {
    num: '01',
    name: 'Acadify',
    role: 'Full-Stack Developer · Thesis Project',
    description:
      'A full-stack academic management platform with AI-powered grading, YOLOv8 computer vision for output evaluation, OCR for document processing, and a complete grade tracking and course management system.',
    image: './screenshots/acadify.png',   // ← drop screenshot in /public/screenshots/
    tags: ['React', 'TypeScript', 'Flask', 'PostgreSQL', 'YOLOv8', 'PyTorch', 'OCR'],
    github: 'https://github.com/uuell/Acadify-frontend',
    live: 'https://www.acadify.online/',
  },
  {
    num: '02',
    name: 'AI Voice to Income Statement',
    role: 'Full-Stack Developer',
    description:
      'An AI-powered web application that converts voice input into structured income statements. Users speak their financial data and the app uses Groq\'s LLM API to parse, structure, and format it into a professional income statement.',
    image: '/screenshots/AI_voice-to-income.png',  // ← drop screenshot here
    tags: ['Next.js', 'TypeScript', 'Groq AI', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/uuell/Automated-Voice-to-Income-Statement',   // ← add your repo
    live: 'https://voice-statement-ai.vercel.app/',     // ← add live url
  },
  {
    num: '03',
    name: 'Pig Monitoring System',
    role: 'Full-Stack Developer · Freelance',
    description:
      'A real-time livestock monitoring system running on a Raspberry Pi server. Uses YOLOv8 to detect and track pigs via live camera feed, logging behavior patterns and activity data accessible through a web dashboard.',
    image: '/screenshots/pig_monitoring_system.jpg',  // ← drop screenshot here
    tags: ['YOLOv8', 'Python', 'Flask', 'Raspberry Pi', 'OpenCV', 'PostgreSQL'],
    github: 'https://github.com/uuell/yolov8_pig_monitoring_system',
    live: '',
  },
  {
    num: '04',
    name: 'IoT Location Tracker',
    role: 'Full-Stack Developer · Freelance',
    description:
      'A web-based IoT tracking application that displays the real-time GPS location of ESP32 devices on an interactive map. Devices send coordinates via REST API over the internet, enabling live asset or field tracking.',
    image: '/screenshots/iot_location_tracker.jpg',  // ← drop screenshot here
    tags: ['Flask', 'ESP32', 'PostgreSQL', 'IoT', 'REST API', 'JavaScript'],
    github: 'https://github.com/uuell/flask_iot_tracking_app',
    live: '',
  },
]

export const experience = [
  {
    period: '2025 — 2026',
    role: 'Full-Stack Developer',
    type: 'Thesis Project',
    company: 'Acadify',
    description:
      'Developed a full-stack academic management platform as my thesis. Built the frontend with React and TypeScript, the backend with Flask and PostgreSQL, and integrated AI models for computer vision-based grading and OCR document processing.',
    highlights: [
      'Designed and implemented RESTful APIs with Flask',
      'Integrated YOLOv8 for AI-powered output evaluation',
      'Built OCR pipeline for automated document processing',
      'Deployed frontend on Cloudflare Pages',
    ],
  },
  {
    period: '2026',
    role: 'Full-Stack & AI Developer',
    type: 'Freelance',
    company: 'Pig Monitoring System',
    description:
      'Built a real-time livestock monitoring system for a client, running on Raspberry Pi with YOLOv8 object detection on live camera feeds. Delivered a web dashboard for viewing animal activity logs.',
    highlights: [
      'Trained and deployed YOLOv8 model on Raspberry Pi',
      'Built Flask backend for real-time video processing',
      'Delivered full system from hardware setup to web dashboard',
    ],
  },
  {
    period: '2026',
    role: 'Full-Stack & IoT Developer',
    type: 'Freelance',
    company: 'IoT Location Tracker',
    description:
      'Developed a web-based IoT location tracking system for fellow students. ESP32 devices send GPS coordinates via REST API to a Flask backend, which renders live positions on a map dashboard.',
    highlights: [
      'Programmed ESP32 firmware for GPS data transmission',
      'Built REST API with Flask and PostgreSQL',
      'Rendered live device locations on an interactive map',
    ],
  },
]

export const certifications = [
  {
    name: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    instructor: 'Dr. Angela Yu',
    url: 'https://www.udemy.com/certificate/UC-c764e7da-db1c-438c-b7f7-2350838c63df/',
    year: '2024',
  },
  {
    name: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    instructor: '',
    url: '',
    year: '2024',
  },
  {
    name: 'Network Addressing and Basic Troubleshooting',
    issuer: 'Cisco Networking Academy',
    instructor: '',
    url: '',
    year: '2024',
  },
  {
    name: 'Networking Devices and Initial Configuration',
    issuer: 'Cisco Networking Academy',
    instructor: '',
    url: '',
    year: '2024',
  },
]
