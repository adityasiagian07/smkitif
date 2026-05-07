import { motion } from 'framer-motion';
import { RiServerLine, RiShieldCheckLine, RiArrowRightUpLine } from 'react-icons/ri';

// Import Assets
import netfest from '../assets/img/NetFest 1.jpg';

const programs = [
  {
    id: 'tjkt',
    title: 'Teknik Jaringan Komputer & Telekomunikasi',
    alias: 'TJKT',
    desc: 'Fokus pada infrastruktur jaringan server, keamanan cyber, dan administrasi sistem berstandar industri internasional.',
    icon: RiServerLine,
    image: netfest,
    skills: ['Network Engineer', 'System Administrator', 'Cyber Security'],
    color: 'from-blue-600 to-cyan-500'
  },
];

export default function Jurusan() {
  return (
    <section id="jurusan" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Vectors */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-primary-500">
        <svg fill="currentColor" viewBox="0 0 100 100" className="absolute top-[-10%] right-[-5%] w-96 h-96">
            <circle cx="50" cy="50" r="50" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-xs mb-4"
          >
            Pilihan Masa Depan
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-semibold text-dark-900 mb-6"
          >
            Program <span className="text-gradient">Keahlian</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-dark-500 text-lg"
          >
            Kurikulum kejuruan yang dirancang untuk mencetak tenaga ahli yang siap 
            bersaing di industri teknologi global.
          </motion.p>
        </div>

        <div className="flex justify-center">
          {programs.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group w-full max-w-xl aspect-square rounded-none overflow-hidden bg-white border border-dark-100 shadow-2xl shadow-dark-900/10"
            >
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-950 via-dark-950/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <div className={`w-14 h-14 rounded-none bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-xl group-hover:rotate-6 transition-transform`}>
                  <item.icon className="w-7 h-7" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-md">
                    {item.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.skills.map(skill => (
                      <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white/10 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20 uppercase tracking-wider">
                        <RiShieldCheckLine className="w-3 h-3" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                   <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                     <RiArrowRightUpLine className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
