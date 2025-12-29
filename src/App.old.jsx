import React, { useState, useEffect, useRef } from 'react';
import { Globe, Github, Linkedin, Mail, ExternalLink, Music, ChevronDown, Filter } from 'lucide-react';

const App = () => {
  const [language, setLanguage] = useState('id');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all'); // 'all', 'ongoing', 'finished'
  const imageRef = useRef(null);

  // Konten multi-bahasa
  const content = {
    id: {
      nav: {
        home: 'Beranda',
        about: 'Tentang',
        skills: 'Keahlian',
        projects: 'Proyek',
        contact: 'Kontak'
      },
      hero: {
        greeting: 'HALO, SAYA',
        name: 'indra syah putra',
        lastName: 'Pratama Busroni',
        location: 'Surabaya',
        title: 'UI/UX Designer & Web Developer',
        description: 'Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan berfungsi.',
        availability: 'Tersedia untuk project',
        viewProjects: 'Lihat Proyek',
        contactMe: 'Kontak Saya',
        socialLabel: 'Temukan saya di'
      },
      about: {
        title: 'Tentang Saya',
        description: 'Saya adalah seorang developer yang passionate dalam menciptakan solusi digital inovatif. Dengan pengalaman dalam pengembangan web full-stack, saya fokus pada pembuatan aplikasi yang user-friendly dan berkinerja tinggi. Saya selalu bersemangat untuk belajar teknologi baru dan menghadapi tantangan yang kompleks.',
        experience: 'Pengalaman',
        years: '3+ Tahun',
        experienceDesc: 'Pengembangan Web',
        projects: 'Proyek',
        projectCount: '20+',
        projectDesc: 'Proyek Selesai'
      },
      skills: {
        title: 'Keahlian & Teknologi',
        subtitle: 'Tools dan teknologi yang saya gunakan untuk membuat solusi digital'
      },
      projects: {
        title: 'Proyek Saya',
        viewAll: 'Lihat Selengkapnya',
        showLess: 'Tutup',
        filterAll: 'Semua',
        filterOngoing: 'Sedang Berjalan',
        filterFinished: 'Selesai',
        status: {
          ongoing: 'Sedang Berjalan',
          finished: 'Selesai'
        }
      },
      contact: {
        title: 'Mari Bekerja Sama',
        subtitle: 'Punya proyek atau ide? Saya siap membantu mewujudkannya!',
        description: 'Tertarik untuk berkolaborasi? Mari terhubung!',
        email: 'Email',
        phone: 'Telepon',
        address: 'Alamat',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        sendMessage: 'Kirim Pesan',
        availability: 'Tersedia untuk project freelance',
        responseTime: 'Respon dalam 24 jam'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        greeting: 'HELLO, I AM',
        name: 'indra syah putra',
        lastName: 'Pratama Busroni',
        location: 'mojokerto',
        title: 'UI/UX Designer & Web Developer',
        description: 'I help businesses and individuals transform ideas into beautiful and functional digital solutions.',
        availability: 'Available for projects',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
        socialLabel: 'Find me on'
      },
      about: {
        title: 'About Me',
        description: 'I am a passionate developer dedicated to creating innovative digital solutions. With experience in full-stack web development, I focus on building user-friendly and high-performance applications. I am always excited to learn new technologies and tackle complex challenges.',
        experience: 'Experience',
        years: '3+ Years',
        experienceDesc: 'Web Development',
        projects: 'Projects',
        projectCount: '20+',
        projectDesc: 'Completed Projects'
      },
      skills: {
        title: 'Skills & Technologies',
        subtitle: 'Tools and technologies I use to create digital solutions'
      },
      projects: {
        title: 'My Projects',
        viewAll: 'View All Projects',
        showLess: 'Show Less',
        filterAll: 'All',
        filterOngoing: 'Ongoing',
        filterFinished: 'Finished',
        status: {
          ongoing: 'Ongoing',
          finished: 'Finished'
        }
      },
      contact: {
        title: 'Let\'s Work Together',
        subtitle: 'Have a project or idea? I\'m ready to help bring it to life!',
        description: 'Interested in collaborating? Let\'s connect!',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        instagram: 'Instagram',
        sendMessage: 'Send Message',
        availability: 'Available for freelance projects',
        responseTime: 'Response within 24 hours'
      }
    }
  };

  // Data proyek
  const projects = [
    {
      id: 1,
      name: {
        id: 'E-Commerce Platform',
        en: 'E-Commerce Platform'
      },
      description: {
        id: 'Platform e-commerce modern dengan fitur lengkap',
        en: 'Modern e-commerce platform with complete features'
      },
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      status: 'finished',
      tech: ['React', 'Node.js', 'MongoDB'],
      featured: true
    },
    {
      id: 2,
      name: {
        id: 'Dashboard Analytics',
        en: 'Analytics Dashboard'
      },
      description: {
        id: 'Dashboard untuk visualisasi data real-time',
        en: 'Dashboard for real-time data visualization'
      },
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      status: 'ongoing',
      tech: ['React', 'D3.js', 'Firebase'],
      featured: false
    },
    {
      id: 3,
      name: {
        id: 'Aplikasi Mobile Banking',
        en: 'Mobile Banking App'
      },
      description: {
        id: 'Aplikasi banking dengan fitur keamanan tinggi',
        en: 'Banking app with high security features'
      },
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
      status: 'finished',
      tech: ['React Native', 'Express', 'PostgreSQL'],
      featured: false
    },
    {
      id: 4,
      name: {
        id: 'Social Media Dashboard',
        en: 'Social Media Dashboard'
      },
      description: {
        id: 'Kelola semua media sosial dalam satu tempat',
        en: 'Manage all social media in one place'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      status: 'ongoing',
      tech: ['Vue.js', 'Laravel', 'MySQL'],
      featured: true
    },
    {
      id: 5,
      name: {
        id: 'Restaurant Booking System',
        en: 'Restaurant Booking System'
      },
      description: {
        id: 'Sistem reservasi restoran online',
        en: 'Online restaurant reservation system'
      },
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      status: 'finished',
      tech: ['React', 'Firebase', 'Stripe'],
      featured: false
    },
    {
      id: 6,
      name: {
        id: 'Portfolio Website Builder',
        en: 'Portfolio Website Builder'
      },
      description: {
        id: 'Platform untuk membuat website portfolio',
        en: 'Platform to create portfolio websites'
      },
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      status: 'ongoing',
      tech: ['Next.js', 'Tailwind', 'Prisma'],
      featured: false
    },
    {
      id: 7,
      name: {
        id: 'Fitness Tracking App',
        en: 'Fitness Tracking App'
      },
      description: {
        id: 'Aplikasi untuk tracking aktivitas fitness',
        en: 'App for tracking fitness activities'
      },
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      status: 'finished',
      tech: ['React Native', 'Firebase', 'Charts'],
      featured: false
    },
    {
      id: 8,
      name: {
        id: 'Learning Management System',
        en: 'Learning Management System'
      },
      description: {
        id: 'Platform e-learning untuk kursus online',
        en: 'E-learning platform for online courses'
      },
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      status: 'ongoing',
      tech: ['React', 'Node.js', 'MongoDB'],
      featured: false
    }
  ];

  const skills = [
    {
      name: 'HTML',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 17.56l-5.33-1.96l-.31-3.45h2.13l.16 1.77l2.9 1.05l2.92-1.05l.31-3.38H9.21l-.14-1.95h6.51l.21-2.25H6.18l.43 6.27h5.18l-.13 1.96l-1.93.52l-1.93-.52l-.13-1.42H5.51l.25 2.69L12 19.44z"/>
          <path d="M4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8L4.07 3z"/>
        </svg>
      ),
      color: 'text-orange-500'
    },
    {
      name: 'CSS',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M4.192 3.143h15.615l-1.42 16.034-6.404 1.812-6.369-1.813L4.192 3.143zM16.9 6.424l-9.8-.002.158 1.949 7.529.002-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62-2.164.598-2.197-.603-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137.905-9.923z"/>
        </svg>
      ),
      color: 'text-blue-500'
    },
    {
      name: 'JavaScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      color: 'text-yellow-400'
    },
    {
      name: 'Tailwind',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"/>
        </svg>
      ),
      color: 'text-cyan-400'
    },
    {
      name: 'SQL',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 3.79 2 6v12c0 2.21 4.48 4 10 4s10-1.79 10-4V6c0-2.21-4.48-4-10-4zm0 2c4.41 0 8 1.12 8 2s-3.59 2-8 2-8-1.12-8-2 3.59-2 8-2zm0 14c-4.41 0-8-1.12-8-2v-2.3c1.88 1.05 4.92 1.3 8 1.3s6.12-.25 8-1.3V16c0 .88-3.59 2-8 2zm0-5c-4.41 0-8-1.12-8-2V8.7c1.88 1.05 4.92 1.3 8 1.3s6.12-.25 8-1.3V11c0 .88-3.59 2-8 2z"/>
        </svg>
      ),
      color: 'text-blue-600'
    },
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9-.82-.08-1.63-.2-2.4-.36-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96.77-.16 1.58-.28 2.4-.36.48-.67.99-1.31 1.51-1.9z"/>
        </svg>
      ),
      color: 'text-cyan-500'
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.51-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.2 1.09.73l1.31-.87c-.55-.97-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.17c.77.33 1.24.53 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zM13 11.25H8.5V13h1.75v5h2v-5H13v-1.75z"/>
        </svg>
      ),
      color: 'text-blue-600'
    },
    {
      name: 'Figma',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/>
        </svg>
      ),
      color: 'text-purple-500'
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.924 3.035 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.848 1.848 0 0 1 0 2.6 1.844 1.844 0 0 1-2.609 0 1.834 1.834 0 0 1 0-2.598c.182-.217.407-.364.648-.488V8.835c-.241-.093-.465-.233-.648-.421a1.843 1.843 0 0 1-.405-2.024L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187"/>
        </svg>
      ),
      color: 'text-orange-600'
    },
    {
      name: 'Canva',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-3.962-1.444-3.962-3.565 0-2.017 1.723-3.685 3.963-3.685.524 0 1.078.105 1.467.262.067-.104.134-.209.209-.314.111-.157.227-.314.35-.471-.742-.314-1.561-.471-2.34-.471-3.116 0-5.644 2.558-5.644 5.644 0 3.087 2.528 5.645 5.644 5.645 1.19 0 2.342-.393 3.3-1.07a7.925 7.925 0 0 1-.628-.602 4.526 4.526 0 0 1-2.359.627zm-4.046-3.023c0-2.175 1.78-3.95 3.965-3.95.596 0 1.192.157 1.723.445.104-.105.21-.21.314-.314.14-.14.286-.286.431-.418a5.64 5.64 0 0 0-2.468-.576c-3.116 0-5.644 2.558-5.644 5.644 0 3.087 2.528 5.645 5.644 5.645.889 0 1.723-.262 2.468-.654a14.24 14.24 0 0 1-.419-.445c-.104-.104-.209-.209-.314-.314a3.892 3.892 0 0 1-1.735.419c-2.185 0-3.965-1.78-3.965-3.95z"/>
        </svg>
      ),
      color: 'text-sky-400'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Interactive image movement
      if (imageRef.current && isImageHovered) {
        const rect = imageRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const moveX = (e.clientX - centerX) / 30;
        const moveY = (e.clientY - centerY) / 30;
        
        setImagePosition({ x: moveX, y: moveY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isImageHovered]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Animated Blur Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
          }}
        />
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            <div className="flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('skills')} className="hover:text-purple-400 transition-colors">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400 transition-colors">
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
                {t.nav.contact}
              </button>
              
              {/* Language Switcher */}
              <button 
                onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <Globe size={18} />
                <span className="uppercase font-semibold">{language}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-400 mb-4 tracking-widest uppercase">
                    {t.hero.greeting}
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold mb-2">
                    <span className="text-white">{t.hero.name}</span>
                  </h1>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="text-white">{t.hero.lastName}</span>
                  </h1>
                  
                  <p className="text-gray-400 text-lg mb-4">{t.hero.location}</p>
                  <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6">
                    {t.hero.title}
                  </h2>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all hover:scale-110"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://tiktok.com/@yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all hover:scale-110"
                  >
                    <Music size={20} />
                  </a>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                  {t.hero.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-950 rounded-lg text-base font-semibold transition-all flex items-center gap-2"
                  >
                    {t.hero.viewProjects}
                    <ExternalLink size={18} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 bg-white text-gray-950 hover:bg-gray-200 rounded-lg text-base font-semibold transition-all"
                  >
                    {t.hero.contactMe}
                  </button>
                </div>
              </div>

              {/* Right Content - Interactive Photo */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
                  
                  {/* Main Photo Container */}
                  <div 
                    ref={imageRef}
                    onMouseEnter={() => setIsImageHovered(true)}
                    onMouseLeave={() => {
                      setIsImageHovered(false);
                      setImagePosition({ x: 0, y: 0 });
                    }}
                    className="relative group cursor-pointer"
                    style={{
                      transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                      transition: isImageHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
                    }}
                  >
                    {/* Photo Frame with Border */}
                    <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden border-4 border-gray-800 bg-gray-900">
                      {/* Placeholder - Ganti dengan foto Anda */}
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
                        alt="Profile"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Name Tag Overlay */}
                      <div className="absolute top-6 right-6 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-700">
                        <p className="text-white font-bold text-lg">{t.hero.name}</p>
                        <p className="text-gray-400 text-sm">Engineer</p>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-lg border border-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-300">{t.hero.availability}</span>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-xl group-hover:bg-purple-600/40 transition-all"></div>
                    <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-600/20 rounded-full blur-xl group-hover:bg-pink-600/40 transition-all"></div>
                  </div>

                  {/* Small Avatar at Bottom */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border-2 border-gray-600"
                    />
                    <div>
                      <p className="text-sm text-gray-300 font-medium">@hafidzhumaidi</p>
                      <p className="text-xs text-green-400">● Online</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.about.title}
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Photo */}
              <div className="relative">
                <div className="relative group">
                  {/* Decorative Background */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  
                  {/* Photo Container */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-gray-800">
                    <img 
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop"
                      alt="Working"
                      className="w-full h-[500px] object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50"></div>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-md p-6 rounded-xl border border-gray-700 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-purple-400 mb-1">{t.about.years}</div>
                    <div className="text-sm text-gray-300">{t.about.experienceDesc}</div>
                  </div>

                  <div className="absolute -top-6 -right-6 bg-gray-900/90 backdrop-blur-md p-6 rounded-xl border border-gray-700 transform hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-pink-400 mb-1">{t.about.projectCount}</div>
                    <div className="text-sm text-gray-300">{t.about.projectDesc}</div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="space-y-6">
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {t.about.description}
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all group cursor-pointer">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">💼</div>
                    <div className="text-sm text-gray-400">{t.about.experience}</div>
                    <div className="text-xl font-bold text-white mt-1">{t.about.years}</div>
                  </div>

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-pink-500 transition-all group cursor-pointer">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🚀</div>
                    <div className="text-sm text-gray-400">{t.about.projects}</div>
                    <div className="text-xl font-bold text-white mt-1">{t.about.projectCount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.skills.title}
              </h2>
              <p className="text-gray-400 text-lg">{t.skills.subtitle}</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">{skill.name}</div>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-20 blur`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all transform hover:scale-105"
                >
                  {/* Project Image with Grayscale Effect */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.name[language]}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    
                    {/* Overlay with Project Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            project.status === 'finished' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500'
                          }`}>
                            {t.projects.status[project.status]}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {project.name[language]}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6">
                    <p className="text-gray-400 mb-4">{project.description[language]}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.contact.title}
              </h2>
              <p className="text-gray-400 text-xl">{t.contact.subtitle}</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Photo & Info */}
              <div className="space-y-6">
                {/* Photo Card */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 group-hover:border-purple-500 transition-all">
                    <div className="flex items-center gap-6 mb-6">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
                        alt="Profile"
                        className="w-24 h-24 rounded-full border-4 border-gray-700 group-hover:border-purple-500 transition-all"
                      />
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{t.hero.name} {t.hero.lastName}</h3>
                        <p className="text-gray-400">{t.hero.title}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-400">{t.contact.availability}</span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                      <a 
                        href="mailto:hafidz.humaidi@example.com"
                        className="flex items-center gap-4 p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all group/item"
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-purple-600/20 rounded-lg group-hover/item:bg-purple-600 transition-all">
                          <Mail size={24} className="text-purple-400 group-hover/item:text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{t.contact.email}</div>
                          <div className="text-white font-medium">hafidz.humaidi@example.com</div>
                        </div>
                      </a>

                      <a 
                        href="tel:+6281234567890"
                        className="flex items-center gap-4 p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all group/item"
                      >
                        <div className="w-12 h-12 flex items-center justify-center bg-green-600/20 rounded-lg group-hover/item:bg-green-600 transition-all">
                          <svg className="w-6 h-6 text-green-400 group-hover/item:text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{t.contact.phone}</div>
                          <div className="text-white font-medium">+62 812-3456-7890</div>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600/20 rounded-lg">
                          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{t.contact.address}</div>
                          <div className="text-white font-medium">Surabaya, Jawa Timur, Indonesia</div>
                        </div>
                      </div>
                    </div>

                    {/* Response Time Badge */}
                    <div className="mt-6 flex items-center justify-center gap-2 p-3 bg-purple-600/10 border border-purple-600/30 rounded-lg">
                      <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      <span className="text-purple-400 text-sm font-medium">⚡ {t.contact.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Social & CTA */}
              <div className="space-y-6">
                {/* Main CTA Card */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all"></div>
                  
                  <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 border border-purple-500">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {language === 'id' ? 'Siap Memulai Proyek?' : 'Ready to Start a Project?'}
                    </h3>
                    <p className="text-purple-100 mb-6">
                      {language === 'id' 
                        ? 'Mari diskusikan ide Anda dan wujudkan bersama menjadi solusi digital yang luar biasa!' 
                        : 'Let\'s discuss your ideas and bring them to life together as an amazing digital solution!'}
                    </p>
                    <button 
                      onClick={() => window.location.href = 'mailto:hafidz.humaidi@example.com'}
                      className="w-full px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-xl text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      {t.contact.sendMessage}
                      <Mail size={20} />
                    </button>
                  </div>
                </div>

                {/* Social Media Grid */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {language === 'id' ? 'Temukan Saya Di' : 'Find Me On'}
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <a 
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all group transform hover:scale-105"
                    >
                      <Github size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                    </a>

                    <a 
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 hover:bg-blue-600 rounded-xl transition-all group transform hover:scale-105"
                    >
                      <Linkedin size={28} className="text-gray-400 group-hover:text-white transition-colors" />
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
                    </a>

                    <a 
                      href="https://instagram.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 bg-gray-800/50 hover:bg-pink-600 rounded-xl transition-all group transform hover:scale-105"
                    >
                      <svg className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Instagram</span>
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-2xl font-bold text-white mb-1">24h</div>
                    <div className="text-sm text-gray-400">{language === 'id' ? 'Waktu Respon' : 'Response Time'}</div>
                  </div>

                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center">
                    <div className="text-3xl mb-2">🌟</div>
                    <div className="text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-sm text-gray-400">{language === 'id' ? 'Kepuasan Klien' : 'Client Satisfaction'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
          <p>© 2024 John Doe. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
