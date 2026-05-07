import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { RiArrowRightLine, RiYoutubeFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";

// Import Assets
import hero1 from "../assets/img/upacara.jpg";
import hero2 from "../assets/img/kerjasama.JPG";
import hero3 from "../assets/img/spmb.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: hero1,
    title: "Terampil,\nMandiri,\nQur'ani.",
    subtitle: "SMKIT IHSANUL FIKRI MUNGKID",
    description: "Integrasi Kurikulum Industri & Nilai Keislaman Terpadu.",
    typewriter: true,
  },
  {
    image: hero2,
    title: "Keahlian IT Berstandar\nInternasional",
    subtitle: "READY FOR INDUSTRY 5.0",
    description: "Bekerjasama dengan industri teknologi internasional.",
  },
  {
    image: hero3,
    title: "Informasi SPMB\nTahun Ajaran 2026/2027",
    subtitle: "SPMB TAHUN 2026/2027",
    description: "Pendaftaran gelombang pertama telah resmi dibuka.",
  },
];



export default function Hero() {
  const [textColor, setTextColor] = useState("text-white");

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden bg-dark-950"
    >
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as any
        }
        speed={1200}
        parallax={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Parallax, Pagination, Autoplay]}
        className="w-full h-full"
      >
        <div
          slot="container-start"
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${hero1})`,
          }}
          data-swiper-parallax="-23%"
        >
          <div className="absolute inset-0 bg-dark-950/70 backdrop-blur-[2px]" />
        </div>

        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/60 to-transparent" />
            </div>

            <div className="section-container relative z-10 w-full h-full flex items-center">
              <div className="max-w-4xl">
                <div data-swiper-parallax="-100" className="mb-6">
                  <span className="px-5 py-2 rounded-full glass border-white/10 text-white text-[10px] font-semibold tracking-widest uppercase inline-block">
                    {slide.subtitle}
                  </span>
                </div>

                {slide.typewriter ? (
                  <div
                    data-swiper-parallax="-300"
                    className={`text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8 transition-colors duration-500 ${textColor}`}
                  >
                    <TypeAnimation
                      sequence={[
                        slide.title.split('\n')[0],
                        800,
                        () => setTextColor("text-primary-500"),
                        slide.title,
                        2000,
                        () => setTextColor("text-white"),
                        "",
                      ]}
                      wrapper="div"
                      speed={50}
                      style={{ whiteSpace: "pre-line", display: "block" }}
                      repeat={Infinity}
                    />
                  </div>
                ) : (
                  <h1
                    data-swiper-parallax="-300"
                    className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8"
                  >
                    {slide.title.split("\n").map((line, i) => (
                      <span
                        key={i}
                        className={`block ${i % 2 !== 0 ? "text-primary-500" : ""}`}
                      >
                        {line}
                      </span>
                    ))}
                  </h1>
                )}

                <p
                  data-swiper-parallax="-500"
                  className="text-lg md:text-xl text-white/70 max-w-xl mb-12 font-medium leading-relaxed"
                >
                  {slide.description}
                </p>

                <div
                  data-swiper-parallax="-700"
                  className="flex flex-wrap items-center gap-6"
                >
                  <a
                    href="https://ppdb.ihsanulfikri.sch.id/"
                    className="btn-primary px-12 py-5 flex items-center gap-3"
                  >
                    Mulai Pendaftaran
                    <RiArrowRightLine className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=MW8P9pB9lDI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white font-semibold group transition-all hover:opacity-80"
                  >
                    <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-red-500/20 group-hover:border-red-500/50 transition-all">
                      <RiYoutubeFill className="w-6 h-6 fill-white group-hover:fill-red-500 transition-colors" />
                    </div>
                    Tonton Profil
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
