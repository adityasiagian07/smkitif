import { motion } from 'framer-motion';
import { RiCalendarLine, RiTimeLine, RiArrowRightLine, RiUserLine, RiHashtag } from 'react-icons/ri';

// Import Assets
import art1 from '../assets/img/NetFest 1.jpg';
import art2 from '../assets/img/kerjasama.JPG';
import art3 from '../assets/img/upacara 2.JPG';

const articles = [
  {
    image: art1,
    category: 'Kegiatan',
    title: 'SMKIT IF Juara Umum Lomba IT se-Jawa Tengah 2026',
    excerpt: 'Siswa-siswi kami kembali mendominasi ajang bergengsi tingkat provinsi...',
    author: 'Admin IF',
    date: '28 Apr 2026',
    readTime: '5 min'
  },
  {
    image: art2,
    category: 'Akademik',
    title: 'Kunjungan Industri ke Data Center Telkom',
    excerpt: 'Melihat langsung bagaimana data center raksasa beroperasi...',
    author: 'Admin IF',
    date: '20 Apr 2026',
    readTime: '4 min'
  },
  {
    image: art3,
    category: 'Tahfidz',
    title: 'Wisuda Tahfidz 30 Juz Angkatan ke-5',
    excerpt: 'Lulusan terbaik dengan hafalan mutqin siap mengabdi...',
    author: 'Admin IF',
    date: '15 Apr 2026',
    readTime: '3 min'
  }
];

export default function Artikel() {
  return (
    <section id="artikel" className="py-24 bg-white relative">
      <div className="section-container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-600 font-semibold tracking-widest uppercase text-xs mb-4"
            >
              Update Informasi
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-dark-900">
              Wawasan & <span className="text-gradient">Berita Sekolah</span>
            </h2>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.smkitihsanulfikri.sch.id/blog/"
            className="group flex items-center gap-3 px-8 py-3 rounded-2xl bg-dark-50 border border-dark-100 font-semibold text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-all"
          >
            Lihat Semua Artikel
            <RiArrowRightLine className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {articles.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 rounded-4xl overflow-hidden mb-6 shadow-lg shadow-dark-950/5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full glass-dark text-white text-[10px] font-semibold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-dark-400 text-[10px] font-semibold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <RiCalendarLine className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RiTimeLine className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-semibold text-dark-900 group-hover:text-primary-600 transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-dark-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-dark-100">
                  <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                     <RiUserLine className="w-3 h-3 text-primary-600" />
                   </div>
                    <span className="text-xs font-semibold text-dark-700">{post.author}</span>
                  </div>
                  <RiHashtag className="w-4 h-4 text-dark-200" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
