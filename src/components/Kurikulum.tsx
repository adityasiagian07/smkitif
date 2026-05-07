import { RiBookOpenLine, RiBankLine, RiBuildingLine } from 'react-icons/ri';

import imgDinas from '../assets/img/upacara 6.jpg';
import imgJSIT from '../assets/img/pramuka 3.JPG';
import imgIndustri from '../assets/img/kerjasama.JPG';

const kurikulumData = [
  {
    icon: RiBankLine,
    title: 'Kurikulum Dinas',
    image: imgDinas,
    desc: 'Mengacu pada Kurikulum Merdeka untuk kedaulatan akademik standar nasional.',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600'
  },
  {
    icon: RiBookOpenLine,
    title: 'Kurikulum JSIT',
    image: imgJSIT,
    desc: 'Basis Sekolah Islam Terpadu (JSIT) untuk pembentukan karakter dan adab islami.',
    color: 'bg-primary-600',
    lightColor: 'bg-primary-50',
    textColor: 'text-primary-600'
  },
  {
    icon: RiBuildingLine,
    title: 'Kurikulum Industri',
    image: imgIndustri,
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
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <p
            data-aos="fade-up"
            className="text-primary-600 font-semibold tracking-widest uppercase text-xs"
          >
            Pendidikan Mutu
          </p>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-heading font-semibold text-dark-900"
          > Kurikulum
            <span className="text-gradient"> Pembelajaran</span>
          </h2>
        </div>

        <div className="space-y-16">
          {kurikulumData.map((item, i) => (
            <div 
              key={item.title}
              className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
            >
              {/* Image Side */}
              <div 
                className="w-full lg:w-5/12"
                data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="relative group">
                  <div className="absolute -inset-3 bg-primary-500/5 rounded-[32px] scale-95 group-hover:scale-100 transition-transform duration-700" />
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-dark-950/30 via-transparent to-transparent" />
                  </div>
                  
                  {/* Floating Icon Box */}
                  <div className={`absolute -bottom-4 ${i % 2 === 0 ? '-right-4' : '-left-4'} w-16 h-16 ${item.lightColor} ${item.textColor} rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md border border-white/40 animate-float`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div 
                className="w-full lg:w-6/12 space-y-4"
                data-aos={i % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-1 ${item.color} rounded-full`} />
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${item.textColor}`}>
                    {item.title}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-semibold text-dark-900 leading-tight">
                  <span className="text-primary-600">{item.title}</span>
                </h3>
                <p className="text-dark-500 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
