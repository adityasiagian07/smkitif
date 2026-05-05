import { motion } from 'framer-motion';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Import Alumni Photos
import alumni1 from '../assets/img/Testimoni Alumni 1.jpeg';
import alumni2 from '../assets/img/Testimoni Alumni 2.jpeg';
import alumni3 from '../assets/img/Testimoni Alumni 4.jpeg';
import alumni5 from '../assets/img/Testimoni Alumni 6.jpeg';
import alumni6 from '../assets/img/Testimoni Alumni 7.jpeg';

const testimonials = [
  {
    name: 'M. Galang Raga',
    role: 'TNI AD',
    avatar: alumni1,
    text: 'SMK IT Ihsanul Fikri adalah tempat dimana saya dididik dan menambah ilmu. Tidak hanya dibekali ilmu IT, tetapi juga pondasi agama yang membentuk karakter mandiri, disiplin, dan bertanggung jawab sebagai pemimpin masa depan.',
    imgStyle: { transform: 'scale(3.5)', transformOrigin: '82% 25%' },
  },
  {
    name: 'Fathan Abdul Fattah',
    role: 'S2 IIUM Malaysia',
    avatar: alumni2,
    text: 'Lingkungan Islami, pendidik kompeten, dan fasilitas lengkap membuat belajar sangat nyaman. Saya belajar menyeimbangkan dunia dan akhirat, menyiapkan diri menjadi pengusaha dan profesional masa depan.',
    imgStyle: { transform: 'scale(3.5)', transformOrigin: '76% 25%' },
  },
  {
    name: 'Muhammad Ridha Hafidz',
    role: 'Univ. Airlangga',
    avatar: alumni3,
    text: 'Bersekolah di sini membuat saya menjadi pribadi yang Terampil, Mandiri, dan Qur\'ani. Saya belajar IT yang relevan dengan industri 4.0 serta leadership yang penting untuk kehidupan pasca SMK.',
    imgStyle: { transform: 'scale(3.5)', transformOrigin: '80% 25%' },
  },
  {
    name: 'M. Ayom Izzudin',
    role: 'Software Engineer',
    avatar: alumni5,
    text: 'Bukan hanya belajar akademis, tapi juga tempat membentuk disiplin diri. Rutinitas terstruktur membantu saya mengembangkan kebiasaan positif yang terus saya bawa hingga dunia kerja saat ini.',
    imgStyle: { transform: 'scale(3)', transformOrigin: '78% 30%' },
  },
  {
    name: 'Faiz Abdurrahman Mustofa',
    role: 'ACS Group',
    avatar: alumni6,
    text: 'Belajar di SMK IT Ihsanul Fikri adalah pengalaman yang luar biasa. Selain ilmu teknologi yang relevan dengan kebutuhan industri, saya juga dibentuk menjadi pribadi yang berakhlak dan berintegritas.',
    imgStyle: { transform: 'scale(3.5)', transformOrigin: '82% 30%' },
  },
];

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-24 bg-white relative overflow-hidden text-center">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-primary-600 font-bold uppercase tracking-widest text-[10px] mb-4">
            Testimoni Alumni
          </p>
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-dark-900 mb-6">
            Kisah Sukses <span className="text-primary-600">Alumni Kami</span>
          </h2>
          <p className="text-dark-500 text-lg">
            Kisah sukses mereka adalah bukti nyata kualitas pendidikan di SMKIT Ihsanul Fikri.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-20 pt-4 px-4"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <div className="h-full bg-dark-50 rounded-3xl p-10 border border-dark-100 flex flex-col items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300">
                  {/* Circular Avatar */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-primary-50">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                      style={item.imgStyle}
                    />
                  </div>
                  
                  {/* Content */}
                  <RiDoubleQuotesL className="text-primary-200 w-10 h-10 mb-6" />
                  <p className="text-dark-600 leading-relaxed font-medium text-sm mb-8 flex-1 italic">
                     "{item.text}"
                  </p>
                  
                  {/* Profile Info */}
                  <div>
                    <h4 className="font-heading font-bold text-dark-900 text-base mb-1">{item.name}</h4>
                    <p className="text-xs text-primary-600 font-bold uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
