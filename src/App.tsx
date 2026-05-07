import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Jurusan from './components/Jurusan';
import Mitra from './components/Mitra';
import PPDB from './components/SPMB';
import Kurikulum from './components/Kurikulum';
import ProgramUnggulan from './components/ProgramUnggulan';
import Prestasi from './components/Prestasi';
import Testimoni from './components/Testimoni';
import Galeri from './components/Galeri';
import Artikel from './components/Artikel';
import Maps from './components/Maps';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Profil />
      <Jurusan />
      <Mitra />
      <PPDB />
      <Kurikulum />
      <ProgramUnggulan />
      <Prestasi />
      <Testimoni />
      <Galeri />
      <Artikel />
      <Maps />
      <Footer />
    </div>
  );
}
