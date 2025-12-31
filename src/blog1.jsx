import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Blog1 = () => {
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
              Kelebihan dan Kekurangan Menggunakan AI dalam Koding
            </h2>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-purple-400">Teknologi</span>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative group mb-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" 
              alt="AI dan Koding" 
              className="relative w-full h-[300px] md:h-[400px] object-cover rounded-2xl border border-gray-800"
            />
          </div>

          {/* Article Content */}
          <div className="space-y-4 md:space-y-8 text-gray-300 text-sm md:text-lg leading-relaxed">
            <p>
              Artificial Intelligence (AI) kini menjadi bagian dari keseharian banyak programmer dan web developer. Berbagai tools berbasis AI mampu membantu menulis kode, menjelaskan error, hingga memberikan solusi pemrograman dengan cepat. Hal ini membuat proses koding terasa lebih mudah dan efisien.
            </p>

            <p>
              Namun, di balik kemudahan tersebut, penggunaan AI dalam koding juga memiliki sisi lain yang perlu diperhatikan. Tidak semua hasil dari AI selalu tepat atau sesuai dengan kebutuhan proyek. Oleh karena itu, penting untuk memahami kelebihan dan kekurangan AI agar penggunaannya tetap bijak.
            </p>

            {/* Foto 1: AI Coding Assistant */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=1200" 
                alt="AI Coding Assistant" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">AI membantu menulis kode dengan lebih cepat dan efisien</p>
              </div>
            </div>

            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Kelebihan Menggunakan AI dalam Koding
            </h3>

            <p>
              Salah satu kelebihan utama AI adalah kemampuannya mempercepat proses penulisan kode. Developer dapat menghasilkan struktur dasar HTML, CSS, atau JavaScript hanya dengan memberikan instruksi singkat. Hal ini sangat membantu untuk menghemat waktu, terutama pada pekerjaan yang bersifat repetitif.
            </p>

            <p>
              Selain itu, AI juga sangat berguna dalam membantu debugging. Ketika terjadi error, AI dapat memberikan penjelasan penyebab masalah serta solusi yang memungkinkan. Bagi pemula, AI bisa menjadi asisten belajar yang membantu memahami konsep pemrograman dengan lebih mudah.
            </p>

            {/* Foto 2: Developer Working */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=1200" 
                alt="Developer working with AI" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Debugging menjadi lebih mudah dengan bantuan AI</p>
              </div>
            </div>

            

            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Kekurangan Menggunakan AI dalam Koding
            </h3>

            <p>
              Meskipun praktis, penggunaan AI secara berlebihan dapat menyebabkan ketergantungan. Developer bisa terbiasa menyalin kode tanpa benar-benar memahami logika di baliknya. Jika hal ini terjadi, kemampuan berpikir kritis dan pemahaman dasar pemrograman bisa menurun.
            </p>

            <p>
              Selain itu, kode yang dihasilkan AI tidak selalu optimal atau aman. AI tidak sepenuhnya memahami konteks proyek, kebutuhan bisnis, maupun standar keamanan tertentu. Oleh karena itu, hasil dari AI tetap perlu ditinjau dan disesuaikan oleh developer.
            </p>

            {/* Foto 3: Code Review */}
            <div className="relative group my-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200" 
                alt="Code Review Process" 
                className="relative w-full h-[250px] md:h-[350px] object-cover rounded-xl border border-gray-800"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 to-transparent p-4">
                <p className="text-xs md:text-sm text-gray-300 font-medium">Kode dari AI perlu ditinjau dan disesuaikan dengan kebutuhan</p>
              </div>
            </div>


          
            <h3 className="text-lg md:text-2xl font-semibold text-white mt-12">
              Kesimpulan
            </h3>

            <p>
              Menggunakan AI dalam koding memiliki banyak kelebihan, terutama dalam hal efisiensi dan kemudahan belajar. Namun, AI juga memiliki kekurangan jika digunakan tanpa pemahaman yang baik.
            </p>

            <p>
              AI sebaiknya digunakan sebagai alat bantu, bukan pengganti kemampuan developer. Dengan penggunaan yang tepat, AI dapat menjadi partner yang sangat membantu dalam proses pengembangan aplikasi dan website.
            </p>

            {/* Final Call to Action */}
            
          </div>
        </article>
      </main>
    </div>
  );
};

export default Blog1;