import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { RiTrophyLine, RiMedalLine } from 'react-icons/ri';

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { label: 'Penghargaan', value: 105, icon: RiTrophyLine, color: 'text-amber-500', bg: 'bg-amber-50' },
  { label: 'Juara LKS IT', value: 36, icon: RiMedalLine, color: 'text-red-500', bg: 'bg-red-50' },
];

export default function Prestasi() {
  return (
    <section id="prestasi" className="py-24 bg-white relative">
      <div className="section-container relative">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-600 font-semibold tracking-widest uppercase text-xs"
          >
            Statistik Keunggulan
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
             whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="text-4xl md:text-5xl font-heading font-semibold text-dark-900"
          >
            Prestasi <span className="text-gradient">SMKIT Ihsanul Fikri</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-dark-500 text-lg"
          >
            Rekam jejak keberhasilan siswa dalam berbagai kompetisi.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
           {stats.map((stat, i) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex-1 min-w-[280px] p-10 rounded-4xl bg-dark-50 border border-dark-100 flex flex-col items-center text-center group hover:bg-white hover:border-primary-200 transition-all duration-500 shadow-sm hover:shadow-xl"
             >
                <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                   <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="text-5xl md:text-6xl font-heading font-bold text-dark-900 mb-3 tracking-tight">
                   <Counter value={stat.value} />
                </div>
                <div className="text-dark-400 text-xs font-bold uppercase tracking-[0.2em]">
                   {stat.label}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
