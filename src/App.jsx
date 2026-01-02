import React, { useState } from 'react';
import { 
  Heart, Users, Baby, Brain, Anchor, MessageCircle, 
  CheckCircle, Menu, X, Linkedin, Instagram, 
  ChevronDown, User, ArrowRight, BookOpen 
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleAccordion = (index) => setActiveAccordion(activeAccordion === index ? null : index);

  const services = [
    {
      title: "Relationship Counseling",
      icon: <Heart size={24} color="#0d9488" />,
      description: "Healing conflicts and strengthening bonds for couples and families.",
      details: "Whether you are facing communication breakdowns, trust issues, or just drifting apart, I provide a neutral ground to rebuild connection and intimacy."
    },
    {
      title: "Parenting Coaching",
      icon: <Baby size={24} color="#0d9488" />,
      description: "Navigating the beautiful yet challenging journey of raising children and teens.",
      details: "From toddler tantrums to teenage rebellion, I help you understand the 'why' behind the behavior and equip you with effective, compassionate strategies."
    },
    {
      title: "Behavioural Guidance",
      icon: <Brain size={24} color="#0d9488" />,
      description: "Support for anxiety, anger, academic stress, and postpartum struggles.",
      details: "I help individuals of all ages process emotions like anger and anxiety, offering practical tools to manage stress and find emotional balance."
    },
    {
      title: "1-on-1 Sessions",
      icon: <Users size={24} color="#0d9488" />,
      description: "Tailored private sessions designed for your unique personal needs.",
      details: "A completely confidential, non-judgmental space focused entirely on you. We work at your pace to achieve your personal goals."
    }
  ];

  // --- CSS STYLES (UPDATED FOR WIDE SCREENS) ---
  const styles = `
    :root {
      --primary: #0d9488;
      --primary-dark: #0f766e;
      --primary-light: #ccfbf1;
      --text-main: #0f172a;
      --text-muted: #475569;
      --bg-off-white: #f8fafc;
      --white: #ffffff;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body { 
      font-family: 'Segoe UI', system-ui, sans-serif; 
      color: var(--text-main); 
      background-color: var(--bg-off-white);
      line-height: 1.6;
      width: 100%;
      overflow-x: hidden;
    }

    /* WIDE CONTAINER FIX */
    .container {
      width: 100%;
      max-width: 1600px; /* Increased from 1150px to fill laptop screens */
      margin: 0 auto;
      padding: 0 40px;   /* More breathing room on sides */
    }

    /* Navigation */
    nav {
      background: var(--white);
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
      width: 100%;
    }
    .nav-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    .logo-area { display: flex; align-items: center; gap: 12px; }
    .logo-circle {
      width: 40px; height: 40px;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: bold; font-size: 20px;
    }
    .logo-text h1 { font-size: 1.1rem; font-weight: 700; line-height: 1.2; }
    .logo-text p { font-size: 0.75rem; color: var(--primary); text-transform: uppercase; font-weight: 600; }

    .desktop-menu { display: none; gap: 32px; align-items: center; }
    .desktop-menu a { text-decoration: none; color: var(--text-muted); font-weight: 500; transition: 0.2s; }
    .desktop-menu a:hover { color: var(--primary); }
    .btn-primary {
      background: var(--primary);
      color: white !important;
      padding: 12px 28px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s;
      white-space: nowrap;
    }
    .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); }

    .mobile-menu-btn { background: none; border: none; cursor: pointer; display: block; }
    .mobile-menu {
      background: white; border-top: 1px solid #eee;
      position: absolute; width: 100%; left: 0; top: 80px;
      padding: 20px; box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    }
    .mobile-menu a { display: block; padding: 12px; text-decoration: none; color: var(--text-muted); font-weight: 500; }

    /* Hero Section */
    .hero {
      padding: 80px 0;
      background: linear-gradient(to bottom, var(--primary-light), var(--white));
      overflow: hidden;
      width: 100%;
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 60px;
      align-items: center;
    }
    .badge {
      display: inline-flex; align-items: center;
      background: var(--white); color: var(--primary-dark);
      padding: 8px 20px; border-radius: 50px; font-size: 0.9rem; font-weight: 600;
      margin-bottom: 32px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    .hero h1 { font-size: 3rem; font-weight: 800; line-height: 1.1; margin-bottom: 24px; letter-spacing: -1px; }
    .hero p { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 40px; max-width: 650px; line-height: 1.7; }
    
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-secondary {
      background: white; color: var(--text-main);
      border: 1px solid #cbd5e1; padding: 12px 28px;
      border-radius: 50px; text-decoration: none; font-weight: 600;
      transition: 0.2s;
    }
    .btn-secondary:hover { background: #f1f5f9; }

    /* Image Styles */
    .image-wrapper {
      position: relative;
      max-width: 480px; /* Bigger image for bigger screens */
      margin: 0 auto;
      width: 100%;
    }
    .profile-frame {
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      border: 6px solid white;
      aspect-ratio: 4/5;
      background: #e2e8f0;
      position: relative;
    }
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .floating-card {
      position: absolute;
      background: white;
      padding: 16px 24px;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      display: flex; align-items: center; gap: 16px;
      z-index: 10;
      white-space: nowrap;
    }
    .card-top { top: 40px; right: -40px; }
    .card-bottom { bottom: 40px; left: -40px; }
    .card-icon { background: var(--primary-light); padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

    /* About Section */
    .section { padding: 100px 0; }
    .bg-white { background: white; }
    .text-center { text-align: center; }
    .section-title { font-size: 2.5rem; font-weight: 800; margin-bottom: 20px; letter-spacing: -0.5px; }
    .divider { width: 100px; height: 5px; background: var(--primary); margin: 0 auto 60px; border-radius: 10px; }
    
    .about-card {
      background: var(--bg-off-white);
      padding: 60px; border-radius: 32px;
      border: 1px solid #e2e8f0;
      max-width: 1000px;
      margin: 0 auto;
    }
    .stats-grid {
      display: grid; grid-template-columns: 1fr;
      gap: 30px; margin-top: 50px;
    }

    /* Services Section */
    .services-grid {
      display: grid; grid-template-columns: 1fr;
      gap: 32px;
    }
    .service-card {
      background: white; padding: 40px;
      border-radius: 24px;
      border: 1px solid #e2e8f0;
      cursor: pointer; transition: 0.2s;
      height: 100%;
    }
    .service-card:hover { 
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); 
      border-color: var(--primary-light);
    }
    .service-header { display: flex; justify-content: space-between; align-items: flex-start; }
    .service-title-group { display: flex; gap: 20px; align-items: center; }
    .icon-box { background: var(--primary-light); padding: 16px; border-radius: 16px; }
    .service-details {
      max-height: 0; overflow: hidden; opacity: 0;
      transition: all 0.3s ease;
    }
    .service-details.open { max-height: 300px; opacity: 1; margin-top: 24px; padding-top: 24px; border-top: 1px solid #f1f5f9; }

    /* Writing Section */
    .writing-box {
      max-width: 900px; margin: 0 auto; text-center;
    }
    .social-buttons {
      display: flex; gap: 20px; justify-content: center; margin-top: 40px; flex-wrap: wrap;
    }
    .btn-insta {
      background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
      color: white; padding: 16px 40px; border-radius: 50px;
      text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 10px; font-size: 1.1rem;
      transition: transform 0.2s;
    }
    .btn-insta:hover, .btn-linkedin:hover { transform: scale(1.05); }

    .btn-linkedin {
      background: #0077b5;
      color: white; padding: 16px 40px; border-radius: 50px;
      text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 10px; font-size: 1.1rem;
      transition: transform 0.2s;
    }

    /* Approach */
    .approach { background: var(--primary-dark); color: white; position: relative; overflow: hidden; }
    .grid-3 { display: grid; grid-template-columns: 1fr; gap: 32px; }
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 40px; border-radius: 24px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Contact */
    .contact-card {
      background: var(--bg-off-white);
      padding: 60px; border-radius: 32px;
      max-width: 600px; margin: 0 auto;
      border: 1px solid #e2e8f0;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
    }
    .btn-whatsapp {
      background: #25D366; color: white;
      display: flex; align-items: center; justify-content: center; gap: 10px;
      padding: 20px; border-radius: 16px; text-decoration: none; font-weight: 700; font-size: 1.1rem;
      margin-bottom: 32px;
      transition: background 0.2s;
    }
    .btn-whatsapp:hover { background: #22c55e; }
    .social-links { display: flex; justify-content: center; gap: 20px; }
    .social-icon { 
      background: white; padding: 16px; border-radius: 50%; 
      color: var(--text-muted); border: 1px solid #e2e8f0;
      display: flex; align-items: center; justify-content: center;
      transition: 0.2s;
    }
    .social-icon:hover { color: var(--primary); border-color: var(--primary); transform: translateY(-2px); }

    /* Responsive Media Queries */
    @media (min-width: 768px) {
      .desktop-menu { display: flex; }
      .mobile-menu-btn { display: none; }
      .hero-grid { grid-template-columns: 1fr 1fr; gap: 80px; } /* Wider grid gap */
      .hero h1 { font-size: 4rem; } /* Bigger text */
      .stats-grid { grid-template-columns: 1fr 1fr 1fr; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
    }
    
    @media (min-width: 1200px) {
       .container { padding: 0 60px; }
       .hero h1 { font-size: 5rem; }
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      
      {/* Navigation */}
      <nav>
        <div className="container nav-content">
          <div className="logo-area">
            <div className="logo-circle">S</div>
            <div className="logo-text">
              <h1>Shipra Kiran Bansal</h1>
              <p>Coach & Facilitator</p>
            </div>
          </div>
          
          <div className="desktop-menu">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#writing">Writing</a>
            <a href="#approach">My Approach</a>
            <a href="#contact" className="btn-primary">Book a Session</a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#about" onClick={toggleMenu}>About Me</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#writing" onClick={toggleMenu}>Writing</a>
            <a href="#approach" onClick={toggleMenu}>My Approach</a>
            <a href="#contact" onClick={toggleMenu} style={{color: 'var(--primary)'}}>Book a Session</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">
              <span style={{width: 8, height: 8, background: 'var(--primary)', borderRadius: '50%', marginRight: 8}}></span>
              Accepting New Clients
            </div>
            <h1>Navigate Life's Emotional <span style={{color: 'var(--primary)'}}>Ups & Downs</span></h1>
            <p>Helping individuals, couples, and parents find balance and healing. A safe, non-judgmental space for your journey.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Start Your Journey</a>
              <a href="#about" className="btn-secondary">Read My Story</a>
            </div>
          </div>
          
          <div className="image-wrapper">
             <div className="profile-frame">
                {/* IMPORTANT: 
                   1. Rename your photo to "profile.jpg"
                   2. Put it in the "public" folder of your GitHub project
                */}
                <img 
                  src="/profile.jpeg" 
                  alt="Shipra Kiran Bansal" 
                  className="profile-img"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML += '<div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#94a3b8; text-align:center; padding:20px;"><span style="font-size: 40px; margin-bottom:10px;">👤</span><p style="font-size:14px"><strong>Photo Missing</strong><br>Put <code>profile.jpg</code> in the <code>public</code> folder</p></div>';
                  }}
                />
             </div>
             
             {/* Floating Cards */}
             <div className="floating-card card-top">
                <div className="card-icon"><Anchor size={20} color="#0d9488"/></div>
                <div>
                  <div style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold', letterSpacing: '0.5px'}}>BACKGROUND</div>
                  <div style={{fontWeight: 'bold', fontSize: '14px', color: '#0f172a'}}>Navy Veteran</div>
                </div>
             </div>
             
             <div className="floating-card card-bottom">
                <div className="card-icon"><CheckCircle size={20} color="#0d9488"/></div>
                <div>
                  <div style={{fontSize: '11px', color: '#64748b', fontWeight: 'bold', letterSpacing: '0.5px'}}>EXPERIENCE</div>
                  <div style={{fontWeight: 'bold', fontSize: '14px', color: '#0f172a'}}>10+ Years</div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">About Me</h2>
            <div className="divider"></div>
          </div>
          
          <div className="about-card">
            <p style={{fontSize: '1.25rem', marginBottom: '20px', lineHeight: 1.8}}>
              Hello! I'm <strong style={{color: 'var(--primary)'}}>Shipra Kiran Bansal</strong>. My path has been wonderfully unique, transitioning from a disciplined background in the <strong>Indian Navy</strong> to working with respected schools and renowned platforms like <strong>iMumz</strong>.
            </p>
            <p style={{fontSize: '1.25rem', lineHeight: 1.8}}>
              With over <strong style={{color: 'var(--primary)'}}>10 years of experience</strong> as a Counsellor & Facilitator, these diverse roles have deepened my understanding of the emotional and behavioral challenges people face in today's fast-paced world.
            </p>
            
            <div className="stats-grid">
              <div className="text-center">
                <Heart size={40} color="#0d9488" style={{marginBottom: 16}} />
                <h3>Empathetic</h3>
                <p style={{fontSize: '1rem', color: 'var(--text-muted)'}}>Deep understanding of human emotions</p>
              </div>
              <div className="text-center">
                <Users size={40} color="#2563eb" style={{marginBottom: 16}} />
                <h3>Experienced</h3>
                <p style={{fontSize: '1rem', color: 'var(--text-muted)'}}>Diverse background in various sectors</p>
              </div>
              <div className="text-center">
                <Brain size={40} color="#9333ea" style={{marginBottom: 16}} />
                <h3>Holistic</h3>
                <p style={{fontSize: '1rem', color: 'var(--text-muted)'}}>Addressing mind, behavior, and bonds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">How I Can Help</h2>
            <div className="divider"></div>
            <p style={{marginBottom: '60px', color: 'var(--text-muted)', fontSize: '1.2rem'}}>
              I offer specialized guidance for individuals, couples, children, teens, and parents tailored to your unique needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" onClick={() => toggleAccordion(index)}>
                <div className="service-header">
                  <div className="service-title-group">
                    <div className="icon-box">{service.icon}</div>
                    <h3 style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{service.title}</h3>
                  </div>
                  <ChevronDown size={24} style={{transform: activeAccordion === index ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s'}} />
                </div>
                <p style={{marginTop: '20px', color: 'var(--text-muted)', fontSize: '1.1rem'}}>{service.description}</p>
                <div className={`service-details ${activeAccordion === index ? 'open' : ''}`}>
                  <p style={{fontStyle: 'italic', fontSize: '1rem', color: '#64748b'}}>"{service.details}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{marginTop: '60px'}}>
             <div style={{display: 'inline-block', background: 'white', padding: '16px 32px', borderRadius: '50px', border: '1px solid #ccfbf1', fontSize: '1rem', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'}}>
                <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>Note:</span> I do not prescribe medicines. My approach is purely therapeutic and behavioral.
             </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="section bg-white">
        <div className="container writing-box">
            <div style={{background: 'var(--primary-light)', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px'}}>
               <BookOpen size={40} color="var(--primary)" />
            </div>

            <h2 className="section-title">Writing & Daily Insights</h2>
            <p style={{fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.8}}>
                I actively write posts and share videos about <strong>mental health</strong>, <strong>parental guidance</strong>, and <strong>family dynamics</strong>. 
                I share all my latest thoughts, tips, and Q&As directly on my social media channels.
            </p>

            <div className="social-buttons">
                <a href="https://www.instagram.com/shipra_kiran_guidance_coach?utm_source=qr&igsh=ZmFvaDJ3ZG1kcGVq" target="_blank" rel="noopener noreferrer" className="btn-insta">
                    <Instagram size={24} /> Follow on Instagram
                </a>
                <a href="https://www.linkedin.com/in/shipra-kiran-bansal-parentingcoach" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
                    <Linkedin size={24} /> Connect on LinkedIn
                </a>
            </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="section approach">
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div className="text-center">
            <h2 className="section-title">My Promise To You</h2>
            <div className="divider" style={{background: 'white', opacity: 0.5}}></div>
          </div>
          
          <div className="grid-3">
            <div className="glass-card">
              <h3 style={{marginBottom: '16px', fontSize: '1.5rem', color: 'var(--primary-light)'}}>Safe Space</h3>
              <p style={{fontSize: '1.1rem', opacity: 0.9}}>A supportive, strictly non-judgmental environment where you can express yourself freely.</p>
            </div>
            <div className="glass-card">
              <h3 style={{marginBottom: '16px', fontSize: '1.5rem', color: 'var(--primary-light)'}}>Affordable</h3>
              <p style={{fontSize: '1.1rem', opacity: 0.9}}>Truly affordable sessions because I believe every person deserves mental health support.</p>
            </div>
            <div className="glass-card">
              <h3 style={{marginBottom: '16px', fontSize: '1.5rem', color: 'var(--primary-light)'}}>Tailored</h3>
              <p style={{fontSize: '1.1rem', opacity: 0.9}}>No one-size-fits-all. Every session is customized to you or your family's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container text-center">
          <div style={{background: 'var(--primary-light)', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px'}}>
            <MessageCircle size={40} color="var(--primary)" />
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{fontSize: '1.3rem', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px', lineHeight: 1.6}}>
            If this resonates with you, please reach out. A simple conversation can be the start of healing.
          </p>
          
          <div className="contact-card">
            <h3 style={{marginBottom: '12px', fontSize: '1.5rem'}}>Book a Session</h3>
            <p style={{marginBottom: '32px', color: 'var(--text-muted)', fontSize: '1.1rem'}}>Send me a direct message to inquire about details or schedule.</p>
            
            <a href="https://wa.me/919890358011" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
               <MessageCircle size={24} /> DM for Inquiry (WhatsApp)
            </a>
            
            <div className="social-links">
               <a href="https://www.linkedin.com/in/shipra-kiran-bansal-parentingcoach" target="_blank" className="social-icon"><Linkedin size={24} /></a>
               <a href="https://www.instagram.com/shipra_kiran_guidance_coach" target="_blank" className="social-icon"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: '#0f172a', color: '#94a3b8', padding: '40px 0', textAlign: 'center'}}>
        <div className="container">
          <p style={{fontSize: '1rem'}}>&copy; {new Date().getFullYear()} Shipra Kiran Bansal. All rights reserved.</p>
          <p style={{marginTop: '12px', fontSize: '0.9rem', opacity: 0.6}}>Designed with ❤️ for Healing</p>
        </div>
      </footer>
    </div>
  );
};

export default App;