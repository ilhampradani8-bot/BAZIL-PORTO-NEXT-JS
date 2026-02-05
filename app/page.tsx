"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Linkedin, Facebook, Instagram, 
  Menu, X, CheckCircle2, ArrowRight, 
  Shield, TrendingUp, Users, FileText,
  MessageCircle, Star, Globe
} from "lucide-react";

// ==========================================
// 1. DATA GAMBAR & LINK (DIPAKAI BERSAMA)
// ==========================================
const SHARED_DATA = {
  image: "/bazil.jpg",     // Pastikan nama file di folder public benar
  logo: "/logo.jpg",       // Pastikan nama file di folder public benar
  whatsapp: "https://wa.me/60137131187",
  email: "bazilsyahir360@gmail.com",
  socials: [
    { icon: Instagram, link: "#" },
    { icon: Facebook, link: "#" },
    { icon: Linkedin, link: "#" },
  ]
};

// ==========================================
// 2. TEKS BAHASA INGGRIS (ENGLISH)
// ==========================================
const EN_TEXT = {
  nav: {
    about: "About Me",
    services: "Services",
    partners: "Partners",
    faq: "FAQ",
    contact: "Contact",
    cta: "Contact Me"
  },
  hero: {
    role: "Islamic Financial Planner",
    headline_1: "Making Financial Planning",
    headline_2: "Simple, Blessed & Joyful",
    desc: "Through a modern Shariah approach, I transform how you manage wealth into something planned, secure, and peaceful. From protection to legacy planning.",
    cta: "Free Consultation"
  },
  features: [
    { title: "Practical Consultation Process", icon: MessageCircle },
    { title: "Shariah Compliant Solutions", icon: Shield },
    { title: "Fast Claim & Service", icon: TrendingUp },
  ],
  services: {
    title_1: "Learn More About",
    title_2: "Our Solutions",
    subtitle: "Financial planning innovations for your future.",
    btn: "LEARN MORE",
    items: [
      {
        title: "Wealth Accumulation",
        desc: "Shariah asset growth strategies for education & retirement funds."
      },
      {
        title: "Islamic Estate Planning",
        desc: "Inheritance solutions (Hibah, Wasiat, Faraid) for family harmony."
      },
      {
        title: "Takaful Protection",
        desc: "Best income and health protection for you and your family."
      },
      {
        title: "Business Succession",
        desc: "Business continuity planning and Keyman Insurance solutions."
      }
    ]
  },
  partners: {
    title_1: "Our",
    title_2: "Partners"
  },
  testimonials: {
    title_1: "Why Clients",
    title_2: "Trust Bazil",
    items: [
      {
        name: "Dr. Farhan",
        text: "Thank you for the extraordinary service, the explanation about Hibah was very detailed and easy to understand."
      },
      {
        name: "Siti Aminah",
        text: "I claimed medical takaful, Alhamdulillah the process helped by Mr. Bazil was very fast. Funds released directly to the hospital."
      },
      {
        name: "Rizky Pratama",
        text: "Initially confused about managing cashflow, now I feel calmer because there is a clear financial roadmap."
      }
    ]
  },
  footer: {
    info: "Information",
    services: "Services",
    office: "Office & Contact",
    address_title: "Malaysia Headquarter",
    address: "Unit B1, Level 12, Tower B \nKuala Lumpur, Malaysia",
    blog: "Blog",
    press: "Press Release",
    claim: "Submit Claim",
    rights: "© 2026 Bazil Syahir Financial Planning. All rights reserved."
  },
  floating_btn: "Need Help? Chat Me!"
};

// ==========================================
// 3. TEKS BAHASA MALAYSIA (MALAY)
// ==========================================
const MY_TEXT = {
  nav: {
    about: "Tentang Saya",
    services: "Layanan",
    partners: "Rakan Niaga",
    faq: "Soalan Lazim",
    contact: "Hubungi",
    cta: "Hubungi Saya"
  },
  hero: {
    role: "Perancang Kewangan Islam",
    headline_1: "Menjadikan Perancangan Kewangan",
    headline_2: "Mudah, Berkat & Menyenangkan",
    desc: "Melalui pendekatan syariah moden, saya mengubah cara anda mengurus kekayaan menjadi lebih terancang, selamat, dan menenangkan hati. Bermula dari perlindungan hingga perwarisan.",
    cta: "Konsultasi Percuma"
  },
  features: [
    { title: "Proses Konsultasi Praktikal", icon: MessageCircle },
    { title: "Solusi Patuh Syariah", icon: Shield },
    { title: "Tuntutan & Servis Pantas", icon: TrendingUp },
  ],
  services: {
    title_1: "Ketahui Lebih Lanjut",
    title_2: "Solusi Kami",
    subtitle: "Inovasi perancangan kewangan untuk masa depan anda.",
    btn: "INFO LANJUT",
    items: [
      {
        title: "Pengumpulan Kekayaan",
        desc: "Strategi pertumbuhan aset syariah untuk dana pendidikan & persaraan."
      },
      {
        title: "Perancangan Harta Islam",
        desc: "Solusi pewarisan (Hibah, Wasiat, Faraid) untuk keharmonian keluarga."
      },
      {
        title: "Perlindungan Takaful",
        desc: "Perlindungan pendapatan dan kesihatan terbaik untuk keluarga."
      },
      {
        title: "Pewarisan Perniagaan",
        desc: "Perancangan kesinambungan perniagaan dan Takaful Keyman."
      }
    ]
  },
  partners: {
    title_1: "Rakan Niaga",
    title_2: "Kami"
  },
  testimonials: {
    title_1: "Kenapa Klien",
    title_2: "Percaya Bazil",
    items: [
      {
        name: "Dr. Farhan",
        text: "Terima kasih atas servis yang luar biasa, penerangan tentang Hibah sangat terperinci dan mudah difahami."
      },
      {
        name: "Siti Aminah",
        text: "Saya buat tuntutan takaful perubatan, Alhamdulillah proses dibantu Tuan Bazil sangat pantas. Dana terus ke hospital."
      },
      {
        name: "Rizky Pratama",
        text: "Awalnya bingung urus aliran tunai, sekarang jadi lebih tenang kerana ada pelan kewangan yang jelas."
      }
    ]
  },
  footer: {
    info: "Informasi",
    services: "Perkhidmatan",
    office: "Pejabat & Hubungi",
    address_title: "Ibu Pejabat Malaysia",
    address: "Unit B1, Level 12, Tower B \nKuala Lumpur, Malaysia",
    blog: "Blog",
    press: "Siaran Akhbar",
    claim: "Ajukan Tuntutan",
    rights: "© 2026 Bazil Syahir Financial Planning. Hak Cipta Terpelihara."
  },
  floating_btn: "Perlukan Bantuan? Chat Saya!"
};

// DATA PARTNER (Sama untuk kedua bahasa)
const PARTNERS_LIST = [
  "MFPC (ShRFP)", "Bank Negara (iFAR)", "Suruhanjaya Sekuriti (FPR)", 
  "FIMM", "As Salihin Trustee", "Phillip Wealth", "TSI Group", "IBFIM"
];

// ==========================================
// 4. KOMPONEN UI UTAMA
// ==========================================

export default function Portfolio() {
  // STATE UNTUK BAHASA (Default: English 'en')
  const [lang, setLang] = useState<'en' | 'my'>('en');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Pilih teks berdasarkan state lang
  const t = lang === 'en' ? EN_TEXT : MY_TEXT;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'my' : 'en');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] font-sans text-slate-700 overflow-x-hidden selection:bg-blue-200">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-4"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={SHARED_DATA.logo} alt="Logo" className="h-10 w-auto object-contain" />
            <div className="hidden md:block leading-tight">
              <span className="block font-bold text-blue-900 text-lg">BS Financial</span>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#partners" className="hover:text-blue-600 transition-colors">{t.nav.partners}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t.nav.contact}</a>
            
            {/* LANGUAGE SWITCHER BUTTON */}
            <div className="flex items-center gap-3 border-l border-slate-300 pl-6 ml-2">
               <button 
                 onClick={toggleLanguage}
                 className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
               >
                 <Globe size={16} className="text-slate-400 group-hover:text-blue-600"/>
                 <span className={`text-sm font-bold ${lang === 'en' ? 'text-blue-600' : 'text-slate-400'}`}>EN</span>
                 <span className="text-slate-300">|</span>
                 <span className={`text-sm font-bold ${lang === 'my' ? 'text-blue-600' : 'text-slate-400'}`}>MY</span>
               </button>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex items-center gap-4 md:hidden">
             {/* Mobile Lang Switcher */}
             <button onClick={toggleLanguage} className="font-bold text-sm text-blue-900 border border-blue-100 px-2 py-1 rounded">
                {lang.toUpperCase()}
             </button>
             <button onClick={() => setMobileMenu(!mobileMenu)} className="text-blue-900">
                {mobileMenu ? <X size={28}/> : <Menu size={28}/>}
             </button>
          </div>
        </div>
        
        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div 
              initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl"
            >
              <div className="flex flex-col p-6 gap-4 font-medium text-slate-600">
                <a href="#about" onClick={() => setMobileMenu(false)}>{t.nav.about}</a>
                <a href="#services" onClick={() => setMobileMenu(false)}>{t.nav.services}</a>
                <a href="#partners" onClick={() => setMobileMenu(false)}>{t.nav.partners}</a>
                <a href="#contact" onClick={() => setMobileMenu(false)}>{t.nav.contact}</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="about" className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* LEFT TEXT */}
            <motion.div 
               key={lang} // Animasi ulang saat ganti bahasa
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               className="md:w-1/2 z-10"
            >
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                {t.hero.role}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-800 leading-[1.15] mb-6">
                <span className="text-blue-600">{t.hero.headline_1}</span> <br/>
                {t.hero.headline_2}
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                {t.hero.desc}
              </p>
              <a 
                href={SHARED_DATA.whatsapp}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1"
              >
                {t.hero.cta} <ArrowRight size={20}/>
              </a>
            </motion.div>

            {/* RIGHT IMAGE */}
            <div className="md:w-1/2 relative flex justify-center md:justify-end">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl -z-10"></div>
               <img 
                 src={SHARED_DATA.image} 
                 alt="Bazil Syahir"
                 className="relative z-10 w-full max-w-[450px] h-auto object-contain drop-shadow-2xl"
               />
            </div>

          </div>
        </div>
      </section>

      {/* --- FEATURE BAR --- */}
      <section className="bg-blue-600 py-10 text-white relative z-20 -mt-6 mx-4 md:mx-0 rounded-2xl md:rounded-none shadow-xl md:shadow-none">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-blue-500/50">
              {t.features.map((feat, i) => (
                <div key={i} className="pt-4 md:pt-0 px-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <feat.icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg leading-tight">{feat.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800">
              <span className="text-blue-600">{t.services.title_1}</span> {t.services.title_2}
            </h2>
            <p className="text-slate-500 mt-4">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((svc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 flex-1">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                     <Shield size={28}/>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{svc.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                   <a href={SHARED_DATA.whatsapp} className="block w-full py-3 border border-blue-600 text-blue-600 font-bold text-center rounded-lg hover:bg-blue-600 hover:text-white transition-all text-sm tracking-wider">
                     {t.services.btn}
                   </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS --- */}
      <section id="partners" className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
           <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">
             {t.partners.title_1} <span className="text-blue-600">{t.partners.title_2}</span>
           </h3>
           
           <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {PARTNERS_LIST.map((partner, i) => (
                <div key={i} className="px-6 py-4 bg-slate-50 border border-slate-100 rounded-lg font-bold text-slate-400 text-sm md:text-base flex items-center justify-center min-w-[120px]">
                  {partner}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-10 text-center">
            <span className="text-blue-600">{t.testimonials.title_1}</span> {t.testimonials.title_2}
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {t.testimonials.items.map((testi, i) => (
               <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor"/>)}
                  </div>
                  <p className="text-slate-600 mb-6 italic text-sm leading-relaxed">"{testi.text}"</p>
                  <div>
                    <h4 className="font-bold text-slate-800">{testi.name}</h4>
                    <p className="text-xs text-slate-400 uppercase">Client</p>
                  </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-[#1A1F2B] text-slate-400 py-16 text-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            
            <div className="md:col-span-1">
               <h4 className="text-white font-bold text-lg mb-6">{t.footer.info}</h4>
               <ul className="space-y-3">
                 <li><a href="#" className="hover:text-blue-400 transition-colors">{t.footer.blog}</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors">{t.footer.press}</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors">{t.footer.claim}</a></li>
                 <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
               </ul>
            </div>

            <div className="md:col-span-1">
               <h4 className="text-white font-bold text-lg mb-6">{t.footer.services}</h4>
               <ul className="space-y-3">
                 <li><a href="#" className="hover:text-blue-400 transition-colors">Wealth Planning</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors">Estate Planning</a></li>
                 <li><a href="#" className="hover:text-blue-400 transition-colors">Takaful</a></li>
               </ul>
            </div>

            <div className="md:col-span-2">
               <h4 className="text-white font-bold text-lg mb-6">{t.footer.office}</h4>
               <div className="space-y-4">
                 <p className="text-white">{t.footer.address_title}</p>
                 <p className="whitespace-pre-line">{t.footer.address}</p>
                 <div className="pt-4">
                   <p><span className="text-white font-bold">P:</span> {SHARED_DATA.whatsapp.replace('https://wa.me/', '+')}</p>
                   <p><span className="text-white font-bold">E:</span> {SHARED_DATA.email}</p>
                 </div>
                 
                 <div className="flex gap-4 pt-4">
                   {SHARED_DATA.socials.map((soc, i) => (
                     <a key={i} href={soc.link} className="w-8 h-8 bg-white/10 flex items-center justify-center rounded hover:bg-blue-600 hover:text-white transition-all">
                       <soc.icon size={16}/>
                     </a>
                   ))}
                 </div>
               </div>
            </div>

          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
             {t.footer.rights}
          </div>
        </div>
      </footer>

      {/* --- FLOATING "POLI" BUTTON --- */}
      <motion.a
        href={SHARED_DATA.whatsapp}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer group"
      >
        <div className="bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
           {t.floating_btn}
        </div>
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all relative">
           <MessageCircle size={32} className="text-white" />
           <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
      </motion.a>

    </div>
  );
}