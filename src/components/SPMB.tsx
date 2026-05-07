import { motion } from 'framer-motion';
import { RiFileTextLine, RiGroupLine, RiCheckboxCircleLine, RiCalendarEventLine, RiArrowRightLine, RiTrophyLine, RiBookOpenLine, RiHandHeartLine, RiGlobalLine, RiBuilding4Line, RiShieldCheckLine, RiArrowRightSLine } from 'react-icons/ri';
import spmbImg from '../assets/img/spmb.jpeg';

const steps = [
  {
    icon: RiFileTextLine,
    title: 'Pendaftaran',
    desc: 'Pengisian formulir online melalui portal resmi SPMB.',
    color: 'text-orange-600',
    bg: 'bg-orange-50'
  },
  {
    icon: RiGroupLine,
    title: 'Seleksi',
    desc: 'Ujian pemetaan akademik dan wawancara.',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: RiCheckboxCircleLine,
    title: 'Pengumuman',
    desc: 'Hasil seleksi diakses secara real-time.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
  {
    icon: RiCalendarEventLine,
    title: 'Daftar Ulang',
    desc: 'Verifikasi berkas dan aktivasi murid.',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  },
];

const scholarshipPaths = [
  {
    title: 'Jalur Prestasi',
    icon: RiTrophyLine,
    color: 'text-amber-500',
    desc: 'O2SN, FLS2N, MAPSI, POPDA, dsb.',
    benefits: [
      'Lolos Nasional: Beasiswa 40% SPP & Infaq',
      'Lolos Provinsi: Beasiswa 20% SPP & Infaq',
      'Juara 1/2/3 Nasional: Bebas Infaq + 40% SPP',
      'Sertifikat Lain: Masuk Tanpa Tes',
    ]
  },
  {
    title: 'Jalur Tahfidz',
    icon: RiBookOpenLine,
    color: 'text-emerald-500',
    desc: 'Penghafal Al-Qur\'an.',
    benefits: [
      '30 Juz Mutqin: Tanpa Tes + 40% Infaq + 30% SPP',
    ]
  },
  {
    title: 'Jalur Dhuafa',
    icon: RiHandHeartLine,
    color: 'text-blue-500',
    desc: 'Siswa Kurang Mampu.',
    benefits: [
      'Beasiswa penuh sesuai kriteria seleksi',
    ]
  }
];

export default function SPMB() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="ppdb" className="py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            className="space-y-8"
            data-aos="fade-right"
          >
            <div>
              <div className="text-primary-600 font-bold uppercase tracking-widest text-[10px] mb-4">SMKIT Ihsanul Fikri Mungkid</div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark-900 leading-tight mb-6">
                Seleksi Penerimaan <br />
                <span className="text-gradient">Murid Baru 2026/2027</span>
              </h2>
              <p className="text-dark-500 text-lg leading-relaxed max-w-xl">
                Bergabunglah dengan ekosistem pendidikan IT terbaik yang memadukan keunggulan kompetensi industri dengan kedalaman akhlak islami.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-4 bg-dark-50 rounded-2xl flex items-center gap-4 border border-dark-100">
                  <RiGlobalLine className="w-5 h-5 text-orange-500" />
                  <span className="font-bold text-dark-900">Kelas Reguler</span>
               </div>
               <div className="px-6 py-4 bg-dark-50 rounded-2xl flex items-center gap-4 border border-dark-100">
                  <RiBuilding4Line className="w-5 h-5 text-purple-500" />
                  <span className="font-bold text-dark-900">Kelas Industri</span>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://ppdb.ihsanulfikri.sch.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary-600 text-white rounded-xl font-bold shadow-lg shadow-primary-600/20 hover:bg-primary-700 transition-all"
              >
                Daftar Sekarang
                <RiArrowRightLine className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-2 text-dark-400 text-xs font-medium italic">
                <RiShieldCheckLine className="text-emerald-500 w-4 h-4" />
                Proses pendaftaran 100% online
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            data-aos="fade-left"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-dark-100 group">
              <img src={spmbImg} alt="SPMB" className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-dark-900/10" />
            </div>
          </motion.div>
        </div>

        {/* Scholarships simplified - No Background Card */}
        <div className="mb-24">
          <div className="mb-12">
             <h3 className="text-2xl font-heading font-bold text-dark-900 mb-2">Jalur Pendaftaran & Beasiswa</h3>
             <div className="w-20 h-1.5 bg-primary-600 rounded-full" />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {scholarshipPaths.map((path) => (
              <motion.div
                key={path.title}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center gap-4 mb-6">
                   <div className={`w-10 h-10 ${path.color} flex items-center justify-center`}>
                      <path.icon className="w-10 h-10" />
                   </div>
                   <h4 className="text-xl font-heading font-bold text-dark-900">{path.title}</h4>
                </div>
                <p className="text-[10px] text-dark-400 font-bold uppercase mb-6 tracking-widest">{path.desc}</p>
                <ul className="space-y-4">
                   {path.benefits.map((benefit, j) => (
                     <li key={j} className="flex items-start gap-3 text-sm text-dark-600 leading-snug">
                        <div className="w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center shrink-0 mt-0.5">
                           <RiArrowRightSLine className="w-3 h-3 text-primary-600" />
                        </div>
                        {benefit}
                     </li>
                   ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Alur simplified - No Background Card */}
        <div className="pt-16 border-t border-dark-100">
          <div className="mb-12">
             <h3 className="text-2xl font-heading font-bold text-dark-900 mb-2">Alur Pendaftaran</h3>
             <div className="w-20 h-1.5 bg-dark-200 rounded-full" />
          </div>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative group"
              >
                <div className={`w-14 h-14 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <h4 className="text-dark-900 font-bold mb-3">{step.title}</h4>
                <p className="text-dark-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
