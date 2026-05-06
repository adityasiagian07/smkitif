import { motion } from 'framer-motion';
import { RiBookOpenLine, RiBankLine, RiBuildingLine } from 'react-icons/ri';

const kurikulumData = [
  {
    icon: RiBankLine,
    title: 'Kurikulum Dinas',
    desc: 'Mengacu pada Kurikulum Merdeka untuk kedaulatan akademik standar nasional.',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    icon: RiBookOpenLine,
    title: 'Kurikulum JSIT',
    desc: 'Basis Sekolah Islam Terpadu (JSIT) untuk pembentukan karakter dan adab islami.',
    color: 'bg-primary-600',
    lightColor: 'bg-primary-50',
    textColor: 'text-primary-600'
  },
  {
    icon: RiBuildingLine,
    title: 'Kurikulum Industri',
    desc: 'Kurikulum berbasis kebutuhan industri IT skala internasional.',
    color: 'bg-accent-600',
    lightColor: 'bg-accent-50',
    textColor: 'text-accent-600'
  }
];

export default function Kurikulum() {
  return (
    <section id="kurikulum" className="py-24 bg-white relative">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-xs"
          >
            Pendidikan Mutu
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-heading font-semibold text-dark-900"
          > Kurikulum
            <span className="text-gradient"> Pembelajaran</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {kurikulumData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-4xl bg-dark-50 border border-dark-100 hover:bg-white hover:shadow-2xl hover:shadow-dark-200/50 transition-all duration-500 text-center"
            >
              <div className={`w-20 h-20 ${item.lightColor} ${item.textColor} rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:rotate-12`}>
                <item.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-dark-900 mb-4">{item.title}</h3>
              <p className="text-dark-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
