import { RiMailLine, RiMapPinLine, RiPhoneLine, RiSendPlaneLine, RiInstagramLine, RiFacebookCircleLine, RiYoutubeLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import logo from '../assets/img/SMK.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-dark-950 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Col */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img src={logo} alt="SMKIT IF Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-heading font-semibold tracking-tighter text-white block leading-none">
                  SMKIT IF
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-primary-400 uppercase">
                  Ihsanul Fikri
                </span>
              </div>
            </div>
            <p className="text-dark-400 leading-relaxed">
              Implementasi dari Kurikulum Merdeka di SMKIT Ihsanul Fikri Mungkid adalah Merdeka Mandiri Berubah dengan menerapkan Kurikulum Merdeka menggunakan perangkat ajar yang sudah disediakan. <br />
              Untuk menjadikannya bermakna, kurikulum operasional SMK IT Ihsanul Fikri Mungkid dikembangkan sesuai  dengan konteks dan kebutuhan peserta didik dan satuan pendidikan.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: RiInstagramLine, href: 'https://www.instagram.com/smkit.ihsanulfikri/' },
                { Icon: RiFacebookCircleLine, href: 'https://www.facebook.com/smkitifmgl/' },
                { Icon: RiYoutubeLine, href: 'https://www.youtube.com/@IFBSTV' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: '#f97316' }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-dark border-white/5 flex items-center justify-center text-white/50 hover:border-primary-500/30 transition-colors"
                >
                  <item.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-heading font-semibold text-xl">NavigasiCepat</h4>
            <ul className="space-y-4">
              {[
                { name: 'Info SPMB 2026/2027', href: '#' },
                { name: 'Peta Lokasi', href: '#home' },
                { name: 'Kurikulum JSIT', href: '#kurikulum' },
                { name: 'Prestasi Siswa', href: '#prestasi' },
                { name: 'Artikel & Berita', href: '#artikel' },
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-primary-500/30 group-hover:bg-primary-500 transition-all" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-8">
            <h4 className="text-white font-heading font-semibold text-xl">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass-dark border-white/5 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <RiMapPinLine className="w-5 h-5" />
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">
                  Jl. Blabak - Mendut, Mertan, Paremono, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass-dark border-white/5 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <RiPhoneLine className="w-5 h-5" />
                </div>
                <div className="text-dark-400 text-sm leading-relaxed">
                  <p>OFFICE: (0293) 7182 874</p>
                  <p>HUMAS: 085 725 728 234</p>
                  <p>KESISWAAN: 085 729 629 508</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass-dark border-white/5 flex items-center justify-center text-primary-500 flex-shrink-0">
                  <RiMailLine className="w-5 h-5" />
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">
                  smkitifmungkid@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-dark-500 text-sm text-center md:text-left">
            © {currentYear} <span className="text-white font-semibold">SMKIT Ihsanul Fikri Mungkid</span>. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-dark-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-dark-500 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
