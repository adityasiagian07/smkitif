import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { motion } from 'framer-motion';
import { SiCisco, SiRedhat, SiMikrotik, SiFortinet } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { RiShieldStarFill } from 'react-icons/ri';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

const partners = [
  { name: 'Mikrotik Academy', icon: SiMikrotik, color: 'text-black' },
  { name: 'Redhat Academy', icon: SiRedhat, color: 'text-red-700' },
  { name: 'Cisco Academy', icon: SiCisco, color: 'text-blue-600' },
  { name: 'AWS Academy', icon: FaAws, color: 'text-orange-500' },
  { name: 'Fortinet Academy', icon: SiFortinet, color: 'text-red-600' },
  { name: 'EC-Council', icon: RiShieldStarFill, color: 'text-indigo-800' },
];

// Duplicate partners multiple times for ultra-smooth infinite loop
const duplicatedPartners = [...partners, ...partners, ...partners];

export default function Mitra() {
  return (
    <section className="py-16 bg-white border-y border-dark-100 overflow-hidden">
      <div className="section-container">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 40 },
            768: { slidesPerView: 3, spaceBetween: 60 },
            1024: { slidesPerView: 4, spaceBetween: 80 },
            1280: { slidesPerView: 5, spaceBetween: 100 },
          }}
          className="partner-swiper"
        >
          {duplicatedPartners.map((partner, index) => (
            <SwiperSlide key={`${partner.name}-${index}`}>
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                }}
                className="flex items-center gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 py-4 cursor-pointer group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-dark-50 rounded-2xl group-hover:bg-white group-hover:shadow-xl group-hover:shadow-primary-500/10 transition-all duration-500">
                   <partner.icon className={`w-10 h-10 object-contain ${partner.color} transition-all duration-500 group-hover:rotate-12`} />
                </div>
                <span className="text-lg font-heading font-semibold text-dark-900 tracking-tighter uppercase whitespace-nowrap group-hover:text-primary-600 transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="text-center text-dark-300 text-[10px] font-bold uppercase tracking-[0.3em] mt-12 opacity-50">
          Official Education Partners & Industry Certifications
        </p>
      </div>
    </section>
  );
}
