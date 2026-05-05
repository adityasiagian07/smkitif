import { motion } from 'framer-motion';
import { RiServerLine, RiShieldCheckLine } from 'react-icons/ri';

const programs = [
  {
    id: 'tjkt',
    title: 'Teknik Jaringan Komputer & Telekomunikasi',
    alias: 'TJKT',
    desc: 'Fokus pada infrastruktur jaringan server, keamanan cyber, dan administrasi sistem berstandar industri internasional.',
    icon: RiServerLine,
    skills: ['Network Engineer', 'System Administrator', 'Cyber Security'],
    color: 'from-blue-600 to-cyan-500'
  },
];

export default function Jurusan() {
  return (
    <section id="jurusan" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Vectors */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg fill="currentColor" viewBox="0 0 100 100" className="absolute top-[-10%] right-[-5%] w-96 h-96 text-primary-500">
           <circle cx="50" cy="50" r="50" />
        </svg>
        <svg fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100" className="absolute bottom-[-5%] left-[-5%] w-72 h-72 text-accent-500">
           <circle cx="50" cy="50" r="48" />
           <circle cx="50" cy="50" r="40" />
           <circle cx="50" cy="50" r="32" />
        </svg>
      </div>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-xs"
          >
            Pilihan Masa Depan
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-heading font-semibold text-dark-900"
          >
            Program <span className="text-gradient">Keahlian</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-500 text-lg"
          >
            Kurikulum kejuruan yang dirancang untuk mencetak tenaga ahli yang siap 
            bersaing di industri teknologi global.
          </motion.p>
        </div>

        <div className="flex justify-center max-w-6xl mx-auto">
          {programs.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-1 bg-gradient-to-br from-dark-100 to-transparent rounded-4xl hover:from-primary-500 hover:to-accent-500 transition-all duration-500 max-w-2xl w-full"
            >
              <div className="bg-white rounded-3xl p-10 h-full">
                <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-8 shadow-xl shadow-black/5 group-hover:rotate-6 transition-transform duration-500`}>
                  <item.icon className="w-10 h-10" />
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-heading font-semibold text-dark-900">{item.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-dark-50 rounded-lg text-dark-400">{item.alias}</span>
                </div>
                
                <p className="text-dark-500 leading-relaxed mb-8">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map(skill => (
                    <span key={skill} className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary-50 text-primary-700 text-xs font-semibold border border-primary-100/50">
                      <RiShieldCheckLine className="w-3 h-3" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
