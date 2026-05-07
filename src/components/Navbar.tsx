import { useState, useEffect } from 'react';
import { RiMenu4Line, RiCloseLine, RiArrowRightLine, RiArrowDownSLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/img/SMK.png';

const navLinks = [
  { name: 'BERANDA', href: '#home' },
  { 
    name: 'PROFIL', 
    href: '#profil-sekolah',
    dropdown: [
      { name: 'Profil Sekolah', href: 'https://www.smkitihsanulfikri.sch.id/profil-sekolah/' },
      { name: 'Visi Misi', href: 'https://www.smkitihsanulfikri.sch.id/visi-misi/' },
    ]
  },
  {
    name: 'AKADEMI',
    href: '#kurikulum',
    dropdown: [
      { name: 'Mikrotik Academy', href: 'https://mikrotikacademy.smkitihsanulfikri.sch.id/' },
      { name: 'AWS Academy', href: '#kurikulum' },
      { name: 'Redhat Academy', href: '#kurikulum' },
      { name: 'Fortinet Academy', href: '#kurikulum' },
    ]
  },
  { name: 'PRESTASI', href: 'https://www.smkitihsanulfikri.sch.id/prestasi/' },
  { name: 'BKK', href: 'https://bkksmkitihsanulfikri.career.support/' },
  { name: 'ARTIKEL', href: 'https://www.smkitihsanulfikri.sch.id/blog/' },
  { 
    name: 'SPMB', 
    href: '#ppdb',
    dropdown: [
      { name: 'Info SPMB', href: 'https://www.smkitihsanulfikri.sch.id/ppdb2627/' },
      { name: 'Isi Data Pendaftaran', href: 'https://spmbsmk.ihsanulfikri.sch.id/login' },
    ]
  },
  { name: 'KONTAK', href: '#footer' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Navbar height offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-dark-950/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            href="/"
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={logo} alt="SMKIT IF Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className={`text-xl font-heading font-semibold tracking-tighter block leading-none ${scrolled ? 'text-dark-900' : 'text-white'}`}>
                SMKIT
              </span>
              <span className={`text-xl font-semibold tracking-widest uppercase ${scrolled ? 'text-primary-600' : 'text-primary-400'}`}>
                Ihsanul Fikri
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <div 
                key={link.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    scrolled ? 'text-dark-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && <RiArrowDownSLine className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl shadow-dark-950/10 border border-dark-100 overflow-hidden py-2"
                    >
                      {link.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target={subItem.href.startsWith('http') ? '_blank' : '_self'}
                          onClick={(e) => scrollToSection(e, subItem.href)}
                          className="px-5 py-3 text-xs font-semibold text-dark-600 hover:bg-primary-50 hover:text-primary-600 transition-all flex items-center justify-between group/sub"
                        >
                          {subItem.name}
                          <RiArrowRightLine className="w-3 h-3 opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-dark-900 hover:bg-dark-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu4Line className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-dark-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="space-y-1">
                  <div className="flex items-center justify-between p-4 rounded-xl text-dark-900 font-bold hover:bg-primary-50 transition-all">
                    <a 
                      href={link.href} 
                      onClick={(e) => {
                        scrollToSection(e, link.href);
                        if (!link.dropdown) setIsOpen(false);
                      }}
                    >
                      {link.name}
                    </a>
                  </div>
                  {link.dropdown && (
                    <div className="pl-6 space-y-1">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          onClick={(e) => {
                            scrollToSection(e, sub.href);
                            setIsOpen(false);
                          }}
                          className="block p-3 text-sm font-semibold text-dark-500 hover:text-primary-600 transition-all"
                        >
                          • {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
