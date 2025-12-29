import React, { useState, useEffect, useRef } from 'react';
import { Globe, Github, Mail, ExternalLink, Send, User, MessageSquare, CheckCircle, Home as HomeIcon, UserCircle, Award, Briefcase, Phone } from 'lucide-react';

// Import images dari folder img (akan fallback ke CDN jika tidak ada)
const getSkillImage = (name) => {
  try {
    return `/src/img/${name.toLowerCase()}.png`;
  } catch {
    return null;
  }
};

const App = () => {
  const [language, setLanguage] = useState('id');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ username: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  const [activeNav, setActiveNav] = useState('home');
  
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };

  const content = {
    id: {
      nav: { home: 'Beranda', about: 'Tentang', skills: 'Keahlian', projects: 'Proyek', contact: 'Kontak' },
      hero: {
        greeting: 'HALO, SAYA',
        name: 'Indra Syah Putra',
        location: 'Mojokerto',
        title: 'UI/UX Designer & Web Developer',
        description: 'Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan berfungsi.',
        availability: 'Tersedia untuk project',
        viewProjects: 'Lihat Proyek',
        contactMe: 'Kontak Saya',
        instagram: '@isp_indra'
      },
      about: {
        title: 'Tentang Saya',
        description: "Saya adalah Indra Syah Putra, seorang full-stack developer yang passionate dalam membangun aplikasi modern dan berkinerja tinggi dengan pengalaman pengguna yang intuitif. Saya senang bekerja dengan teknologi terbaru seperti React, TypeScript, dan Tailwind CSS, memadukan kreativitas dengan presisi untuk memberikan solusi yang berdampak. Saya berkomitmen untuk membantu pengguna dan bisnis tumbuh di era digital melalui produk digital yang fungsional, estetis, dan skalabel.",
        tagline: 'Working with heart, creating with mind.'
      },
      skills: {
        title: 'Keahlian & Teknologi',
        subtitle: 'Tools dan teknologi yang saya gunakan untuk membuat solusi digital'
      },
      projects: {
        title: 'Proyek Saya',
        status: { ongoing: 'Sedang Berjalan', finished: 'Selesai' }
      },
      contact: {
        title: 'Mari Bekerja Sama',
        subtitle: 'Punya proyek atau ide? Saya siap membantu mewujudkannya!',
        email: 'Email',
        phone: 'Telepon',
        address: 'Alamat',
        availability: 'Tersedia untuk project freelance',
        message: {
          title: 'Kirim Pesan',
          subtitle: 'Hubungi saya untuk diskusi project atau kolaborasi',
          usernamePlaceholder: 'Username Anda',
          emailPlaceholder: 'Email Anda',
          messagePlaceholder: 'Pesan Anda...',
          submit: 'Kirim Pesan',
          success: 'Pesan berhasil terkirim!'
        }
      }
    },
    en: {
      nav: { home: 'Home', about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact' },
      hero: {
        greeting: 'HELLO, I AM',
        name: 'Indra Syah Putra',
        location: 'Mojokerto',
        title: 'UI/UX Designer & Web Developer',
        description: 'I help businesses and individuals transform ideas into beautiful and functional digital solutions.',
        availability: 'Available for projects',
        viewProjects: 'View Projects',
        contactMe: 'Contact Me',
        instagram: '@isp_indra'
      },
      about: {
        title: 'About Me',
        description: "I'm Indra Syah Putra, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like React, TypeScript, and Tailwind CSS, blending creativity with precision to deliver impactful solutions. I'm committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products.",
        tagline: 'Working with heart, creating with mind.'
      },
      skills: {
        title: 'Skills & Technologies',
        subtitle: 'Tools and technologies I use to create digital solutions'
      },
      projects: {
        title: 'My Projects',
        status: { ongoing: 'Ongoing', finished: 'Finished' }
      },
      contact: {
        title: 'Let\'s Work Together',
        subtitle: 'Have a project or idea? I\'m ready to help bring it to life!',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        availability: 'Available for freelance projects',
        message: {
          title: 'Send Message',
          subtitle: 'Contact me to discuss projects or collaborations',
          usernamePlaceholder: 'Your Username',
          emailPlaceholder: 'Your Email',
          messagePlaceholder: 'Your Message...',
          submit: 'Send Message',
          success: 'Message sent successfully!'
        }
      }
    }
  };

  const projects = [
    { id: 1, name: { id: 'Website Portfolio Personal', en: 'Personal Portfolio Website' }, description: { id: 'Portfolio interaktif dengan animasi smooth', en: 'Interactive portfolio with smooth animations' }, image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop', status: 'finished', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 2, name: { id: 'Landing Page Restoran', en: 'Restaurant Landing Page' }, description: { id: 'Landing page modern untuk restoran', en: 'Modern landing page for restaurant' }, image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop', status: 'finished', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 3, name: { id: 'Dashboard Analytics', en: 'Analytics Dashboard' }, description: { id: 'Dashboard untuk visualisasi data bisnis', en: 'Dashboard for business data visualization' }, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop', status: 'ongoing', tech: ['React', 'Tailwind', 'SQL'] },
    { id: 4, name: { id: 'Website Company Profile', en: 'Company Profile Website' }, description: { id: 'Website profil perusahaan teknologi', en: 'Tech company profile website' }, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop', status: 'finished', tech: ['HTML', 'CSS', 'JavaScript'] },
    { id: 5, name: { id: 'E-Commerce Platform', en: 'E-Commerce Platform' }, description: { id: 'Platform belanja online dengan cart', en: 'Online shopping platform with cart' }, image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop', status: 'ongoing', tech: ['React', 'TypeScript', 'Tailwind'] },
    { id: 6, name: { id: 'Aplikasi Todo List', en: 'Todo List Application' }, description: { id: 'Manajemen tugas dengan fitur lengkap', en: 'Task management with full features' }, image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop', status: 'finished', tech: ['React', 'CSS', 'Git'] }
  ];

  const skills = [
    { 
      name: 'HTML', 
      icon: (
        <svg viewBox="0 0 452 520" className="w-full h-full">
          <path fill="#E34F26" d="M41 460L0 0h451l-41 460-185 52"/>
          <path fill="#EF652A" d="M226 472l149-41 35-394H226"/>
          <path fill="#EBEBEB" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/>
          <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/>
        </svg>
      ),
      color: 'from-orange-500 to-red-600' 
    },
    { 
      name: 'CSS', 
      icon: (
        <svg viewBox="0 0 452 520" className="w-full h-full">
          <path fill="#0C73B8" d="M41 460L0 0h451l-41 460-185 52"/>
          <path fill="#30A9DC" d="M226 472l149-41 35-394H226"/>
          <path fill="#EBEBEB" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"/>
          <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-7 58h-73z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      name: 'JavaScript', 
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <rect width="256" height="256" fill="#F7DF1E"/>
          <path fill="#000" d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574"/>
        </svg>
      ),
      color: 'from-yellow-400 to-yellow-500' 
    },
    { 
      name: 'Tailwind', 
      icon: (
        <svg viewBox="0 0 256 154" className="w-full h-full">
          <path fill="#06B6D4" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"/>
        </svg>
      ),
      color: 'from-cyan-400 to-cyan-500' 
    },
    { 
      name: 'SQL', 
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <rect width="256" height="256" fill="#00758F" rx="28"/>
          <ellipse cx="128" cy="77" rx="100" ry="30" fill="#FFF"/>
          <path fill="#FFF" d="M28 77v102c0 16.569 44.772 30 100 30s100-13.431 100-30V77"/>
          <ellipse cx="128" cy="179" rx="100" ry="30" fill="#00758F" opacity="0.5"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700' 
    },
    { 
      name: 'React', 
      icon: (
        <svg viewBox="0 0 256 228" className="w-full h-full">
          <path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86z"/>
        </svg>
      ),
      color: 'from-cyan-500 to-cyan-600' 
    },
    { 
      name: 'TypeScript', 
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <rect width="256" height="256" fill="#3178C6" rx="28"/>
          <path fill="#FFF" d="M56.611 128.85l-.081 10.483h33.32v94.68H113.42v-94.68h33.32v-10.28c0-5.69-.122-10.444-.284-10.566-.122-.162-20.399-.244-44.983-.203l-44.739.122-.122 10.443zm149.956-10.742c6.498 1.703 11.683 5.205 14.828 10.078 1.622 2.598 3.326 6.66 3.326 7.923 0 .406-13.577 9.595-21.72 14.718-.284.162-1.379-1.014-2.598-2.802-3.731-5.368-7.665-7.72-13.577-8.085-8.898-.568-14.626 4.027-14.626 11.79 0 2.315.284 3.326 1.379 5.002 1.582 2.396 4.557 4.149 12.263 7.233 16.533 6.579 23.62 10.932 27.838 17.024 4.76 6.904 5.855 17.917 2.802 26.245-3.407 9.432-11.952 15.832-24.296 18.106-3.895.731-13.129.893-16.981.284-8.531-1.257-16.615-4.637-22.065-9.23-3.042-2.558-8.898-9.269-8.409-9.676.162-.122 1.582-.854 3.123-1.663 1.541-.772 7.274-4.19 12.75-7.598l9.961-6.17 1.825 2.68c2.558 3.73 8.167 8.817 11.79 10.644 10.078 5.205 23.78 4.473 28.784-1.582 1.988-2.396 2.396-6.498.934-9.635-1.298-2.802-4.068-4.881-11.709-8.817-12.14-6.295-17.348-10.24-21.964-16.615-2.68-3.65-5.043-9.433-5.855-14.03-.528-3.123-.406-10.811.203-13.853 1.947-9.839 8.613-17.51 18.387-21.295 4.8-1.866 6.701-2.152 12.628-2.03 3.895.081 7.68.447 10.078 1.014z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700' 
    },
    { 
      name: 'Figma', 
      icon: (
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <path fill="#0ACF83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/>
          <path fill="#A259FF" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/>
          <path fill="#F24E1E" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/>
          <path fill="#FF7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/>
          <path fill="#1ABCFE" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/>
        </svg>
      ),
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      name: 'Git', 
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <path fill="#DE4C36" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 0 1 6.421-4.281V94.196a19.378 19.378 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"/>
        </svg>
      ),
      color: 'from-orange-600 to-orange-700' 
    },
    { 
      name: 'VS Code', 
      icon: (
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <path fill="#0078D4" d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571zm10.464-183.649l-76.262 57.889 76.262 57.888z"/>
          <path fill="#0098FF" d="M191.292 68.956l-76.262 57.889 76.262 57.888V68.956z" opacity="0.7"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600' 
    }
  ];

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
          setActiveNav(entry.target.id);
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const messages = JSON.parse(localStorage.getItem('messages') || '[]');
    messages.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('messages', JSON.stringify(messages));
    
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ username: '', email: '', message: '' });
    }, 3000);
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-x-hidden">
      {/* Fixed background to prevent white on overscroll */}
      <div className="fixed inset-0 bg-gray-950 -z-10"></div>
      
      {/* Background blur dengan delay sedang */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl transition-all duration-300 ease-out" style={{ left: `${mousePosition.x - 192}px`, top: `${mousePosition.y - 192}px` }} />
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 pb-20 md:pb-0">
        {/* Mobile Top Nav with Portfolio text */}
        <nav className="md:hidden fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="flex justify-between items-center px-4 py-3">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent leading-none" style={{ paddingTop: '2px', paddingBottom: '2px' }}>Portfolio</div>
            <button 
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')} 
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/90 hover:bg-gray-700 rounded-lg transition-colors duration-500 backdrop-blur-md"
            >
              <Globe size={16} />
              <span className="uppercase font-semibold text-sm">{language}</span>
            </button>
          </div>
        </nav>

        {/* Desktop Nav - Hidden on mobile */}
        <nav className="hidden md:block fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ lineHeight: '2' }}>Portfolio</div>
            <div className="flex items-center gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button key={section} onClick={() => scrollToSection(section)} className="hover:text-purple-400 transition-colors duration-500 capitalize py-2" style={{ lineHeight: '2' }}>{t.nav[section]}</button>
              ))}
              <button onClick={() => setLanguage(language === 'id' ? 'en' : 'id')} className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-500">
                <Globe size={18} />
                <span className="uppercase font-semibold">{language}</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 z-50">
          <div className="flex justify-around items-center px-4 py-3">
            {[
              { id: 'home', icon: HomeIcon, label: 'Home' },
              { id: 'about', icon: UserCircle, label: 'About' },
              { id: 'skills', icon: Award, label: 'Skills' },
              { id: 'projects', icon: Briefcase, label: 'Portfolio' },
              { id: 'contact', icon: Phone, label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center gap-1 transition-colors duration-300 ${
                  activeNav === item.id ? 'text-purple-400' : 'text-gray-400'
                }`}
              >
                <item.icon size={22} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Hero Section - UPDATED MOBILE LAYOUT */}
        <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center px-4 md:px-6 pt-20 md:pt-20 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
              {/* Mobile: 2 Kolom Vertikal (Teks 3/4 | Foto 1/4) | Desktop: Text only */}
              <div className="w-full lg:space-y-8 animate-slideInLeft">
                <div className="flex lg:block items-start gap-4 lg:gap-0">
                  {/* Teks (3/4 lebar pada mobile) */}
                  <div className="w-3/4 lg:w-full space-y-3 md:space-y-6">
                    <div>
                      <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4 tracking-widest uppercase">{t.hero.greeting}</p>
                      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-6 text-white leading-tight">{t.hero.name}</h1>
                      <p className="text-gray-400 text-sm md:text-lg mb-2 md:mb-4">{t.hero.location}</p>
                      <h2 className="text-base md:text-2xl lg:text-3xl text-white font-semibold mb-3 md:mb-6">{t.hero.title}</h2>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                      {[{ href: 'https://github.com/indrasyah923-oss', Icon: Github }, { href: 'https://www.instagram.com/isp_indra?igsh=c2lkZGtjN2h1M2Jz', Icon: 'instagram' }, { href: 'https://www.tiktok.com/@isp.ygy?_r=1&_t=ZS-92cdqIXXI29', Icon: 'tiktok' }].map((social, i) => (
                        <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-gray-800/50 hover:bg-purple-600 rounded-lg transition-all duration-500 hover:scale-110">
                          {social.Icon === 'instagram' ? (
                            <svg width="18" height="18" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                            </svg>
                          ) : social.Icon === 'tiktok' ? (
                            <svg width="18" height="18" className="md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                            </svg>
                          ) : <social.Icon size={18} className="md:w-[18px] md:h-[18px]" />}
                        </a>
                      ))}
                    </div>
                    <p className="text-gray-300 text-xs md:text-lg leading-relaxed hidden md:block">{t.hero.description}</p>
                  </div>
                  
                  {/* Foto (1/4 lebar pada mobile) */}
                  <div className="w-1/4 lg:hidden relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl"></div>
                    <div className="relative group cursor-pointer">
                      <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden border-2 border-gray-800">
                        <img 
                          src="/images/home-photo.png" 
                          alt="Profile" 
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Description & Buttons */}
                <div className="space-y-3 mt-3 lg:mt-0">
                  <p className="text-gray-300 text-xs md:text-lg leading-relaxed md:hidden">{t.hero.description}</p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <button onClick={() => scrollToSection('projects')} className="px-4 md:px-8 py-2.5 md:py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-950 rounded-lg font-semibold transition-all duration-500 flex items-center justify-center gap-2 text-sm md:text-base">
                      {t.hero.viewProjects}<ExternalLink size={14} className="md:w-4 md:h-4" />
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="px-4 md:px-8 py-2.5 md:py-3 bg-white text-gray-950 hover:bg-gray-200 rounded-lg font-semibold transition-all duration-500 text-sm md:text-base">
                      {t.hero.contactMe}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Desktop foto besar (hidden di mobile) */}
              <div className="hidden lg:flex relative justify-end animate-slideInUp">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
                  <div className="relative group cursor-pointer">
                    <div className="relative w-96 h-[500px] rounded-2xl overflow-hidden border-4 border-gray-800">
                      <img 
                        src="/images/home-photo.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Instagram link */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <a 
                          href="https://www.instagram.com/isp_indra?igsh=c2lkZGtjN2h1M2Jz" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                          </svg>
                          <span className="text-lg font-semibold">{t.hero.instagram}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - UPDATED MOBILE LAYOUT */}
        <section id="about" ref={sectionRefs.about} className={`min-h-screen flex items-center px-4 md:px-6 py-20 md:py-32 mb-20 md:mb-32 transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-16 items-start lg:items-center">
              {/* Mobile: 2 Kolom Vertikal (Foto 1/4 | Teks 3/4) | Desktop: Foto only */}
              <div className="w-full lg:relative lg:flex lg:justify-start order-1">
                <div className="flex lg:block items-start gap-4 lg:gap-0">
                  {/* Foto (1/4 lebar pada mobile) */}
                  <div className="w-1/4 lg:w-full flex-shrink-0 relative">
                    <div className="absolute -inset-1 lg:-inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl lg:rounded-3xl blur-xl lg:blur-2xl"></div>
                    <div className="relative rounded-xl lg:rounded-2xl overflow-hidden border-2 lg:border-4 border-gray-800">
                      <img src="/images/about-photo.png" alt="Profile" className="w-full aspect-[3/4] lg:w-full lg:h-[500px] object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* Teks (3/4 lebar pada mobile) */}
                  <div className="w-3/4 lg:hidden space-y-3">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t.about.title}</h2>
                    <p className="text-xs text-gray-300 leading-relaxed">{t.about.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Desktop: Text full | Mobile: Quote only */}
              <div className="space-y-4 md:space-y-8 order-2 w-full">
                {/* Desktop text (hidden di mobile) */}
                <h2 className="hidden lg:block text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t.about.title}</h2>
                <p className="hidden lg:block text-lg text-gray-300 leading-relaxed">{t.about.description}</p>
                
                {/* Quote (semua device) */}
                <div className="flex items-center gap-3 md:gap-4 text-gray-400 italic pt-2 md:pt-4">
                  <div className="w-1 h-8 md:h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded"></div>
                  <p className="text-xs md:text-base">"{t.about.tagline}"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" ref={sectionRefs.skills} className="min-h-screen flex items-center px-4 md:px-6 py-20 md:py-32 mb-20 md:mb-32">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t.skills.title}</h2>
              <p className="text-gray-400 text-sm md:text-lg">{t.skills.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {skills.map((skill, i) => (
                <div key={i} className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 hover:border-purple-500 cursor-pointer ${visibleSections.skills ? 'animate-fadeInUp' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s`, transition: 'all 0.5s ease-in-out' }}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2`}>
                    {skill.icon}
                  </div>
                  <div className="text-center text-white font-semibold text-xs md:text-sm" style={{ lineHeight: '1.6' }}>{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects - 2 columns on mobile */}
        <section id="projects" ref={sectionRefs.projects} className="min-h-screen px-4 md:px-6 py-20 md:py-32 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t.projects.title}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {projects.map((project, i) => (
                <div key={project.id} className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 ${visibleSections.projects ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s`, transition: 'all 0.5s ease-in-out' }}>
                  <div className="relative h-40 md:h-64 overflow-hidden">
                    <img src={project.image} alt={project.name[language]} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 md:p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                        <span className={`inline-block px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold mb-1 md:mb-2 ${project.status === 'finished' ? 'bg-green-500/20 text-green-400 border border-green-500' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500'}`}>
                          {t.projects.status[project.status]}
                        </span>
                        <h3 className="text-sm md:text-xl font-bold text-white">{project.name[language]}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 md:p-6">
                    <p className="text-gray-400 mb-2 md:mb-4 text-xs md:text-base line-clamp-2">{project.description[language]}</p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.map((tech, j) => (<span key={j} className="px-2 md:px-3 py-0.5 md:py-1 bg-gray-800 text-gray-300 rounded-md text-[10px] md:text-sm">{tech}</span>))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" ref={sectionRefs.contact} className="min-h-screen flex items-center px-4 md:px-6 py-20 md:py-32 mb-20">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{t.contact.title}</h2>
              <p className="text-gray-400 text-base md:text-xl">{t.contact.subtitle}</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column - Contact Info */}
              <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
                <div className="relative group">
                  <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800 group-hover:border-purple-500 transition-all duration-700">
                    <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-6">
                      <img src="/images/profile.png" alt="Profile" className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-gray-700 group-hover:border-purple-500 transition-all duration-700 object-cover object-top" />
                      <div>
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{t.hero.name}</h3>
                        <p className="text-gray-400 text-sm md:text-base">{t.hero.title}</p>
                        <div className="flex items-center gap-2 mt-1 md:mt-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs md:text-sm text-green-400">{t.contact.availability}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 md:space-y-4">
                      {[{ icon: Mail, label: t.contact.email, value: 'indrasyah923@gmail.com', href: 'mailto:indrasyah923@gmail.com', color: 'purple' }, { icon: 'phone', label: t.contact.phone, value: '+62 85732489554', href: 'tel:+6285732489554', color: 'green' }, { icon: 'location', label: t.contact.address, value: 'Mojokerto, Jawa Timur, Indonesia', color: 'blue' }].map((item, i) => (
                        <a key={i} href={item.href || '#'} className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-800/50 hover:bg-gray-800 rounded-xl transition-all duration-700 group/item">
                          <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-${item.color}-600/20 rounded-lg group-hover/item:bg-${item.color}-600 transition-all duration-700`}>
                            {item.icon === 'phone' ? (
                              <svg className={`w-5 h-5 md:w-6 md:h-6 text-${item.color}-400 group-hover/item:text-white transition-colors duration-700`} fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            ) : item.icon === 'location' ? (
                              <svg className={`w-5 h-5 md:w-6 md:h-6 text-${item.color}-400 transition-colors duration-700`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                            ) : <item.icon size={20} className={`md:w-6 md:h-6 text-${item.color}-400 group-hover/item:text-white transition-colors duration-700`} />}
                          </div>
                          <div>
                            <div className="text-xs md:text-sm text-gray-400">{item.label}</div>
                            <div className="text-white font-medium text-sm md:text-base">{item.value}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800">
                  <h4 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">{language === 'id' ? 'Temukan Saya Di' : 'Find Me On'}</h4>
                  <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[{ href: 'https://github.com/indrasyah923-oss', icon: Github, name: 'GitHub', hoverColor: 'gray' }, { href: 'https://www.tiktok.com/@isp.ygy?_r=1&_t=ZS-92cdqIXXI29', icon: 'tiktok', name: 'TikTok', hoverColor: 'pink' }, { href: 'https://www.instagram.com/isp_indra?igsh=c2lkZGtjN2h1M2Jz', icon: 'instagram', name: 'Instagram', hoverColor: 'pink' }].map((social, i) => (
                      <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center gap-2 p-3 md:p-4 bg-gray-800/50 hover:bg-${social.hoverColor}-600 rounded-xl transition-all duration-700 group transform hover:scale-105`}>
                        {social.icon === 'instagram' ? (
                          <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors duration-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                          </svg>
                        ) : social.icon === 'tiktok' ? (
                          <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors duration-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        ) : <social.icon size={24} className="md:w-7 md:h-7 text-gray-400 group-hover:text-white transition-colors duration-700" />}
                        <span className="text-[10px] md:text-xs text-gray-400 group-hover:text-white transition-colors duration-700">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Column - Message Form */}
              <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-br from-pink-600/30 to-purple-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 md:p-8 border border-purple-500">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{t.contact.message.title}</h3>
                    <p className="text-purple-100 mb-4 md:mb-6 text-sm md:text-base">{t.contact.message.subtitle}</p>
                    {formSubmitted ? (
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                        <CheckCircle size={40} className="md:w-12 md:h-12 mx-auto mb-4 text-white" />
                        <p className="text-white text-base md:text-lg font-semibold">{t.contact.message.success}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-3 md:space-y-4">
                        <div>
                          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                            <User size={18} className="md:w-5 md:h-5 text-white" />
                            <input type="text" required value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} placeholder={t.contact.message.usernamePlaceholder} className="flex-1 bg-transparent text-white placeholder-purple-200 outline-none text-sm md:text-base" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                            <Mail size={18} className="md:w-5 md:h-5 text-white" />
                            <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder={t.contact.message.emailPlaceholder} className="flex-1 bg-transparent text-white placeholder-purple-200 outline-none text-sm md:text-base" />
                          </div>
                        </div>
                        <div>
                          <div className="flex gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 md:p-4">
                            <MessageSquare size={18} className="md:w-5 md:h-5 text-white mt-1" />
                            <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder={t.contact.message.messagePlaceholder} rows="4" className="flex-1 bg-transparent text-white placeholder-purple-200 outline-none resize-none text-sm md:text-base"></textarea>
                          </div>
                        </div>
                        <button type="submit" className="w-full px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-xl text-base md:text-lg font-semibold transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-2">
                          {t.contact.message.submit}
                          <Send size={18} className="md:w-5 md:h-5" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideInLeft { animation: slideInLeft 1.2s ease-out; }
        .animate-slideInUp { animation: slideInUp 1.2s ease-out 0.4s both; }
        .animate-fadeIn { animation: fadeIn 1s ease-out both; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out both; }
        
        /* Prevent white background on overscroll */
        html, body {
          background-color: #030712;
          overscroll-behavior: none;
        }
      `}</style>
    </div>
  );
};

export default App;