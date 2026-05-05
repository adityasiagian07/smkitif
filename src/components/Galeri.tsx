import { motion } from 'framer-motion';
import Stack from './Stack';

// Import Assets
import g1 from '../assets/img/pramuka 1.JPG';
import g2 from '../assets/img/pramuka 2.JPG';
import g3 from '../assets/img/pramuka 3.JPG';
import g4 from '../assets/img/pramuka 4.JPG';
import g5 from '../assets/img/pramuka 5.JPG';
import g6 from '../assets/img/pramuka 6.JPG';
import g7 from '../assets/img/pramuka 7.JPG';

import g8 from '../assets/img/upacara.jpg';
import g9 from '../assets/img/upacara 2.JPG';
import g10 from '../assets/img/upacara 3.JPG';
import g11 from '../assets/img/upacara 4.JPG';
import g12 from '../assets/img/upacara 5.jpg';
import g13 from '../assets/img/upacara 6.jpg';

import g14 from '../assets/img/guru dan karyawan.jpg';
import g15 from '../assets/img/halbi.jpg';
import g16 from '../assets/img/kerjasama.JPG';
import g17 from '../assets/img/panahan.JPG';
import g18 from '../assets/img/NetFest 1.jpg';

const galleryImages = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18];

export default function Galeri() {
  return (
    <section id="galeri" className="py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary-600 font-semibold tracking-widest uppercase text-xs mb-4"
              >
                Suasana kami di pondok & sekolah
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-heading font-semibold text-dark-900 leading-tight mb-6"
              > <span className="text-gradient">Galeri</span> Kami
              </motion.h2>
              <p className="text-dark-500 text-lg leading-relaxed max-w-xl">
                Dokumentasi berbagai kegiatan siswa mulai dari kepramukaan, upacara bendera, hingga kebersamaan guru dan karyawan yang membangun ekosistem pendidikan yang hangat dan profesional.
              </p>
            </div>
          </motion.div>

          <div className="relative flex justify-center items-center h-[500px]">
            <div className="w-full max-w-[400px] h-full">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={true}
                cards={galleryImages.map((src, i) => (
                  <div key={i} className="w-full h-full p-2 bg-white rounded-3xl shadow-xl">
                    <img 
                      src={src} 
                      alt={`gallery-image-${i + 1}`} 
                      className="w-full h-full object-cover rounded-2xl" 
                    />
                  </div>
                ))}
              />
            </div>
            
            {/* Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-2xl shadow-xl z-20 animate-bounce">
               <p className="text-xs font-bold text-primary-600">Geser Kartunya! →</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
