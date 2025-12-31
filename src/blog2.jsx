import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Blog2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 selection:bg-purple-500/30 min-h-screen font-sans">
      {/* Custom Styles */}
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
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" 
          style={{ animationDelay: '2s' }}
        ></div>
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
              Perlu Takut Salah Saat Belajar Coding?
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-purple-400">Belajar Coding</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1200" 
              alt="Belajar Coding" 
              className="relative w-full h-[300px] md:h-[400px] object-cover rounded-2xl border border-gray-800"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-4 md:space-y-8 text-gray-300 text-sm md:text-lg leading-relaxed">
            <p>
              Bagi banyak orang yang baru belajar coding, rasa takut melakukan kesalahan adalah hal yang sangat umum. Error yang muncul di layar, kode yang tidak berjalan, atau hasil yang tidak sesuai harapan sering kali membuat pemula merasa frustasi dan ragu dengan kemampuannya sendiri.
            </p>

            <p>
              Tidak sedikit yang akhirnya berpikir bahwa coding itu sulit atau merasa dirinya tidak berbakat di bidang ini. Padahal, kesalahan merupakan bagian yang tidak terpisahkan dari proses belajar pemrograman.
            </p>

            {/* Foto 1: Error & Frustration */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1200" 
                alt="Menghadapi Error dalam Coding" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Error adalah bagian normal dari proses belajar coding</p>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Kesalahan Adalah Bagian dari Proses Belajar
            </h3>

            <p>
              Dalam dunia coding, error bukanlah tanda kegagalan, melainkan petunjuk bahwa ada sesuatu yang perlu diperbaiki. Bahkan developer berpengalaman pun masih sering menemui bug dan kesalahan dalam kodenya.
            </p>

            <p>
              Dengan melakukan kesalahan, kita justru belajar memahami cara kerja kode secara lebih mendalam. Setiap error yang berhasil diperbaiki akan menambah pengalaman dan memperkuat pemahaman kita terhadap konsep pemrograman.
            </p>

            {/* Foto 2: Learning Process */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Belajar dari Kesalahan" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Setiap kesalahan adalah kesempatan untuk belajar lebih dalam</p>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Takut Salah Justru Menghambat Perkembangan
            </h3>

            <p>
              Rasa takut salah sering kali membuat seseorang enggan mencoba hal baru. Akibatnya, proses belajar menjadi lambat dan tidak berkembang. Padahal, kemampuan coding hanya bisa meningkat melalui banyak percobaan.
            </p>

            <p>
              Semakin sering mencoba dan gagal, semakin besar pula kesempatan untuk memahami kesalahan dan menemukan solusi yang lebih baik. Inilah yang membedakan antara mereka yang berkembang dan yang berhenti di tengah jalan.
            </p>

            {/* Foto 3: Growth Mindset */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" 
                alt="Growth Mindset" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Berani mencoba dan gagal adalah kunci perkembangan</p>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Cara Menghadapi Kesalahan Saat Belajar Coding
            </h3>

            <p>
              Saat menemui error, cobalah untuk membacanya dengan tenang dan pahami pesan yang ditampilkan. Gunakan dokumentasi, forum, atau tools seperti AI sebagai bantuan, bukan sebagai jalan pintas.
            </p>

            <p>
              Yang terpenting, jangan membandingkan proses belajarmu dengan orang lain. Setiap developer memiliki perjalanan dan kecepatan belajar yang berbeda.
            </p>

            {/* Foto 4: Problem Solving */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=1200" 
                alt="Problem Solving" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Tenang dan fokus saat menghadapi error adalah kunci sukses</p>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Kesimpulan
            </h3>

            <p>
              Tidak perlu takut salah saat belajar coding. Kesalahan adalah guru terbaik yang akan membantu kita berkembang dan menjadi lebih baik.
            </p>

            <p>
              Selama kita mau mencoba, belajar, dan terus memperbaiki diri, kemampuan coding akan meningkat seiring waktu. Yang perlu ditakuti bukanlah kesalahan, melainkan berhenti belajar.
            </p>

            {/* Quote Box - Dark */}
            <div className="my-8 p-6 md:p-8 bg-gray-900/80 rounded-2xl border border-gray-800">
              <div className="flex items-start gap-4">
              
                <div>
                  <p className="text-base md:text-xl text-gray-200 font-medium italic mb-3">
                    "Error adalah guru terbaik dalam pemrograman. Setiap bug yang kamu perbaiki membuat kamu menjadi developer yang lebih baik."
                  </p>
                  
                  <p className="text-sm text-gray-500">— Developer Experience</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog2;