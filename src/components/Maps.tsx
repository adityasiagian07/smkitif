import { motion } from 'framer-motion';
import { RiMapPin2Line, RiNavigationLine, RiExternalLinkLine } from 'react-icons/ri';

export default function Maps() {
  return (
    <section id="maps" className="py-24 bg-dark-50 relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12 items-stretch">
          
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 card-modern bg-white p-10 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 mb-8">
                <RiMapPin2Line className="w-7 h-7" />
              </div>
              <motion.h2 
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-heading font-semibold text-dark-900 mb-6 font-primary text-gradient"
              >
                Lokasi Kami
              </motion.h2>
              <p className="text-dark-500 leading-relaxed mb-8">
                Lokasi SMK IT Ihsanul Fikri Mungkid yang berada di Jalan tembus antar objek wisata, tepatnya di Jalan Tembus Blabak-Mendut KM.03 lokasinya sangat strategis. Disamping di pinggir jalan besar, keberadaanya dekat dengan pasar, pusat perkantoran pemerintah, dekat dengan UMKM – UMKM yang berkembang dengan pesat.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-dark-50 flex items-center justify-center text-dark-400 shrink-0">
                    <RiNavigationLine className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900">Alamat Lengkap</h4>
                    <p className="text-sm text-dark-500">Jl. Blabak - Mendut, Mertan, Paremono, Kec. Mungkid, Kabupaten Magelang, Jawa Tengah 56512</p>
                  </div>
                </div>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/oTbVXBsTxN5i3peT9" 
              rel="noreferrer"
              className="mt-12 btn-primary flex items-center justify-center gap-3"
            >
              Buka di Google Maps
              <RiExternalLinkLine className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-[3rem] overflow-hidden border border-dark-100 shadow-2xl relative min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.059419940341!2d110.2370877750027!3d-7.568501192445591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8c0bca92a083%3A0x10a7dd67213c8005!2sIhsanul%20Fikri%20Vocational%20High%20School!5e0!3m2!1sen!2sid!4v1777979590445!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
