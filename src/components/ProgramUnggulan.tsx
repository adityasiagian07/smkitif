import { motion } from 'framer-motion';
import { 
  RiBuilding2Line, 
  RiBookOpenLine, 
  RiHeart2Line, 
  RiSchoolLine, 
  RiGroupLine,
  RiTentLine, 
  RiMicLine,
  RiArrowRightLine
} from 'react-icons/ri';

const programs = [
  { title: 'Kelas Industri', desc: 'Pembelajaran berfokus pada muatan kejuruan standar industri.', icon: RiBuilding2Line, color: 'text-orange-500' },
  { title: 'Tahfidz Intensif 30 Juz', desc: 'Program tahfidz terukur dengan target hafalan optimal.', icon: RiBookOpenLine, color: 'text-primary-600' },
  { title: 'Bina Pribadi Islami', desc: 'Pengembangan diri menjadi pribadi yang sholih dan beradab.', icon: RiHeart2Line, color: 'text-accent-600' },
  { title: 'Kunjungan Kampus & Industri', desc: 'Wawasan dunia kerja dan pendidikan tinggi secara langsung.', icon: RiSchoolLine, color: 'text-blue-600' },
  { title: 'Santri Masuk Kampung', desc: 'Pengabdian masyarakat untuk melatih jiwa sosial siswa.', icon: RiGroupLine, color: 'text-emerald-600' },
  { title: 'Leadership Scout Camp', desc: 'Pelatihan kepemimpinan melalui kepanduan SIT.', icon: RiTentLine, color: 'text-amber-700' },
  { title: 'Kajian & Outing Class', desc: 'Rutin asrama dan pembelajaran kontekstual luar kelas.', icon: RiMicLine, color: 'text-rose-600' },
];

export default function ProgramUnggulan() {
  return (
    <section id="program" className="py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Sticky Header Info */}
          <div className="lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-[10px] font-bold uppercase tracking-wider"
            >
              Excellence Programs
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-dark-900 leading-tight"
            >
              Program <br />
              <span className="text-primary-600">Unggulan</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-dark-500 text-lg leading-relaxed max-w-md"
            >
              Kurikulum khas yang dirancang secara khusus untuk membentuk kompetensi teknis 
              dan kedalaman karakter islami siswa secara holistik.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-primary-600 font-bold group cursor-pointer"
            >
            </motion.div>
          </div>

          {/* Clean Vertical List */}
          <div className="space-y-4">
            {programs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98] 
                }}
                className="group relative p-6 bg-dark-50 rounded-3xl border border-transparent hover:border-primary-100 hover:bg-white hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-500 flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-primary-50 transition-colors">
                  <item.icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-heading font-semibold text-dark-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-dark-500 text-sm opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-dark-200 flex items-center justify-center text-dark-300 group-hover:border-primary-500 group-hover:text-primary-500 transition-all">
                   <RiArrowRightLine className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
