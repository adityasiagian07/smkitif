import { motion } from 'framer-motion';
import { RiFocus3Line } from 'react-icons/ri';

const misiList = [
  'Menyelenggarakan pendidikan dan pelatihan dengan mengkombinasikan Kurikulum Nasional JSIT Indonesia dan Kepesantrenan.',
  'Menyelenggarakan pendidikan yang mengarah pada pengabdian masyarakat dalam upaya memberikan kontribusi nyata bagi kemaslahatan bangsa dan negara.',
  'Menyelenggarakan pendidikan keahlian dengan model-model pembelajaran yang mengarah pada pembekalan Life Skill dan Berwawasan Lingkungan.',
  'Membina siswa menguasai Bahasa Internasional (Bahasa Arab dan Bahasa Inggris), berjiwa kewirausahaan dan unggul dalam Ilmu Pengetahuan dan Teknologi.',
  'Menghasilkan Lulusan yang mampu bersaing di dunia kerja, study lanjut dan berwirausaha'
];

export default function Profil() {
  return (
    <section id="profil-sekolah" className="py-24 bg-dark-50 relative overflow-hidden">
      {/* Decorative Vectors */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <svg className="absolute top-0 right-0 w-full h-full text-dark-200/50" viewBox="0 0 100 100" preserveAspectRatio="none">
           <defs>
             <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
               <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
             </pattern>
           </defs>
           <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary-200/40 rounded-full blur-[100px] -translate-x-1/2" 
        />
      </div>

      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Vision */}
          <div 
            className="lg:sticky lg:top-32 space-y-10"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 bg-primary-500 rounded-full" />
              <h2 className="text-4xl font-heading font-semibold text-dark-900">Visi Sekolah</h2>
            </div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="flex gap-5 p-8 bg-white rounded-4xl border border-dark-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-12 transition-all duration-500">
                <RiFocus3Line className="w-7 h-7" />
              </div>
              <div>
                <p className="text-2xl text-dark-800 leading-relaxed font-semibold italic">
                  "Terwujudnya lulusan yang berkarakter islami, berwawasan kebangsaan dan berdaya saing global."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Mission */}
          <div 
            className="space-y-10"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-10 bg-primary-500 rounded-full" />
              <h2 className="text-4xl font-heading font-semibold text-dark-900">Misi Kami</h2>
            </div>
            
            <div className="space-y-6">
              {misiList.map((misi, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-dark-100/50 shadow-sm hover:border-primary-200 hover:shadow-md transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 font-bold text-sm shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {i + 1}
                  </div>
                  <p className="text-dark-600 leading-relaxed font-medium">
                    {misi}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
