import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Blog0 = () => {
  const navigate = useNavigate();

  // Scroll ke atas otomatis saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 selection:bg-purple-500/30 min-h-screen font-sans">
      {/* Custom Styles (Dikonversi dari <style>) */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s infinite ease-in-out;
          }
        `}
      </style>

      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="relative z-20 border-b border-gray-800 bg-gray-900/40 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">
            BLOG
          </h1>
          <nav className="flex justify-center items-center gap-3 text-gray-400 font-medium">
            <HashLink 
              to={"/#blog"} 
              smooth 
              className="hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Blog
            </HashLink>
            <span className="text-gray-700">/</span>
            <span className="text-pink-400/90">Artikel Detail</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        <article>
          <header className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
              Apakah AI Akan Menggantikan Web Developer? Inilah Pendapatku
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-purple-400">Teknologi</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200" 
              alt="Masa Depan Web Dev" 
              className="relative w-full h-[300px] md:h-[400px] object-cover rounded-2xl border border-gray-800"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-4 md:space-y-8 text-gray-300 text-sm md:text-lg leading-relaxed">
            <p>
              Perkembangan Artificial Intelligence (AI) dalam dunia teknologi semakin terasa nyata, terutama di bidang web development. Saat ini, banyak tools berbasis AI yang mampu membuat tampilan website, menuliskan kode, hingga memperbaiki error hanya dalam hitungan detik. Hal ini membuat banyak orang mulai mempertanyakan masa depan profesi web developer.
            </p>
            <p>Kekhawatiran tersebut wajar, terutama bagi pelajar, mahasiswa, dan freelancer yang baru terjun ke dunia pengembangan web. Muncul anggapan bahwa jika AI sudah bisa membuat website sendiri, maka peran web developer akan semakin berkurang atau bahkan hilang.</p>
            <p>Namun, benarkah demikian? Untuk menjawab pertanyaan tersebut, kita perlu memahami apa saja kemampuan AI saat ini, keterbatasannya, serta bagaimana peran web developer justru berkembang di era AI.</p>
            
            {/* Foto 1: AI Tools */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Tools untuk Development" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">AI Tools membantu mempercepat proses development</p>
              </div>
            </div>
            
            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">Apa yang Bisa Dilakukan AI dalam Web Development?</h3>
            <p>
              AI saat ini sangat membantu dalam mempercepat proses pengembangan website. Dengan bantuan AI, developer bisa menghasilkan struktur HTML, styling CSS, dan bahkan logika JavaScript hanya dari deskripsi singkat. Hal ini tentu menghemat waktu, terutama untuk pekerjaan yang bersifat repetitif.
            </p>
            <p>Selain itu, AI juga banyak digunakan untuk membantu debugging. Ketika terjadi error pada kode, AI dapat memberikan saran perbaikan atau menjelaskan penyebab masalah dengan bahasa yang mudah dipahami. Bagi pemula, ini sangat membantu dalam proses belajar.</p>
            
            {/* Foto 2: Coding dengan AI */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
                alt="Developer bekerja dengan AI" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Developer menggunakan AI untuk meningkatkan produktivitas</p>
              </div>
            </div>
            
            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">Apakah Web Developer Masih Dibutuhkan di Era AI?</h3>
            <p>
               Meskipun AI mampu membantu menulis kode, membuat desain, dan mempercepat proses pengembangan website, hal ini tidak berarti web developer menjadi tidak dibutuhkan. AI bekerja berdasarkan pola dan data yang sudah ada, sehingga belum mampu memahami konteks bisnis, kebutuhan klien, dan tujuan pengguna secara mendalam. Web developer tetap memiliki peran penting dalam menerjemahkan kebutuhan tersebut ke dalam solusi teknis yang tepat, aman, dan berkelanjutan.
            </p>
            
            {/* Foto 3: Kolaborasi Human & AI */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200" 
                alt="Kolaborasi tim developer" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Kolaborasi antara developer dan AI menghasilkan solusi terbaik</p>
              </div>
            </div>
            
            <p>Di era AI, peran web developer justru berkembang. Developer tidak hanya menulis kode, tetapi juga mengarahkan penggunaan AI, mengambil keputusan teknis, menentukan arsitektur sistem, serta memastikan performa dan keamanan aplikasi. Dengan memanfaatkan AI sebagai alat bantu, web developer dapat bekerja lebih efisien dan fokus pada hal-hal strategis. Oleh karena itu, AI bukan pengganti web developer, melainkan partner yang memperkuat peran mereka.</p>
            
            {/* Foto 4: Future of Web Development */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                alt="Masa depan web development" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Masa depan web development dengan AI yang lebih cerah</p>
              </div>
            </div>
            
            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">Kesimpulan</h3>
            <p>AI tidak menggantikan web developer, tetapi mengubah cara kerja dalam pengembangan web. Web developer tetap dibutuhkan, terutama untuk pekerjaan yang membutuhkan pemahaman mendalam, kreativitas, dan pengambilan keputusan.</p>
            <p>Web developer yang mampu memanfaatkan AI sebagai alat bantu akan bekerja lebih efektif dan efisien. Mereka justru akan semakin relevan di masa depan.</p>
            
            {/* Call to Action */}
            
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog0;