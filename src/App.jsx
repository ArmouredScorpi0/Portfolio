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

  // --- CSS STYLES ---
  const styles = `
    :root {
      --primary: #0d9488; /* Teal 600 */
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
    }

    /* Container */
    .container {
      max-width: 1150px;
      margin: 0 auto;
      padding: 0 20px;
    }

    /* Navigation */
    nav {
      background: var(--white);
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
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
      padding: 10px 24px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.2s;
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
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 40px;
      align-items: center;
    }
    .badge {
      display: inline-flex; align-items: center;
      background: var(--primary-light); color: var(--primary-dark);
      padding: 6px 16px; border-radius: 50px; font-size: 0.85rem; font-weight: 600;
      margin-bottom: 24px;
    }
    .hero h1 { font-size: 2.5rem; font-weight: 800; line-height: 1.2; margin-bottom: 24px; }
    .hero p { font-size: 1.125rem; color: var(--text-muted); margin-bottom: 32px; max-width: 600px; }
    
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-secondary {
      background: white; color: var(--text-main);
      border: 1px solid #cbd5e1; padding: 10px 24px;
      border-radius: 50px; text-decoration: none; font-weight: 600;
      transition: 0.2s;
    }
    .btn-secondary:hover { background: #f1f5f9; }

    /* Image Styles */
    .image-wrapper {
      position: relative;
      max-width: 400px;
      margin: 0 auto;
    }
    .profile-frame {
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border: 4px solid white;
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
      padding: 12px 20px;
      border-radius: 12px;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
      display: flex; align-items: center; gap: 12px;
      z-index: 10;
    }
    .card-top { top: -20px; right: -20px; }
    .card-bottom { bottom: -20px; right: -20px; }
    .card-icon { background: var(--primary-light); pading: 8px; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; }

    /* About Section */
    .section { padding: 80px 0; }
    .bg-white { background: white; }
    .text-center { text-align: center; }
    .section-title { font-size: 2rem; font-weight: 700; margin-bottom: 16px; }
    .divider { width: 80px; height: 4px; background: var(--primary); margin: 0 auto 60px; border-radius: 2px; }
    
    .about-card {
      background: var(--bg-off-white);
      padding: 40px; border-radius: 24px;
      border: 1px solid #e2e8f0;
    }
    .stats-grid {
      display: grid; grid-template-columns: 1fr;
      gap: 20px; margin-top: 40px;
    }

    /* Services Section */
    .services-grid {
      display: grid; grid-template-columns: 1fr;
      gap: 32px;
    }
    .service-card {
      background: white; padding: 32px;
      border-radius: 16px;
      border: 1px solid #e2e8f0;
      cursor: pointer; transition: 0.2s;
    }
    .service-card:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .service-header { display: flex; justify-content: space-between; align-items: flex-start; }
    .service-title-group { display: flex; gap: 16px; align-items: center; }
    .icon-box { background: var(--primary-light); padding: 12px; border-radius: 12px; }
    .service-details {
      max-height: 0; overflow: hidden; opacity: 0;
      transition: all 0.3s ease;
    }
    .service-details.open { max-height: 200px; opacity: 1; margin-top: 16px; padding-top: 16px; border-top: 1px solid #eee; }

    /* Writing Section */
    .writing-box {
      max-width: 800px; margin: 0 auto; text-center;
    }
    .social-buttons {
      display: flex; gap: 16px; justify-content: center; margin-top: 40px; flex-wrap: wrap;
    }
    .btn-insta {
      background: linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045);
      color: white; padding: 12px 32px; border-radius: 50px;
      text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 8px;
    }
    .btn-linkedin {
      background: #0077b5;
      color: white; padding: 12px 32px; border-radius: 50px;
      text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 8px;
    }

    /* Approach */
    .approach { background: var(--primary-dark); color: white; position: relative; overflow: hidden; }
    .grid-3 { display: grid; grid-template-columns: 1fr; gap: 32px; }
    .glass-card {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 24px; border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Contact */
    .contact-card {
      background: var(--bg-off-white);
      padding: 40px; border-radius: 24px;
      max-width: 500px; margin: 0 auto;
      border: 1px solid #e2e8f0;
    }
    .btn-whatsapp {
      background: var(--primary); color: white;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 16px; border-radius: 12px; text-decoration: none; font-weight: 700;
      margin-bottom: 24px;
    }
    .social-links { display: flex; justify-content: center; gap: 16px; }
    .social-icon { 
      background: white; padding: 12px; border-radius: 50%; 
      color: var(--text-muted); border: 1px solid #e2e8f0;
      display: flex; align-items: center; justify-content: center;
    }

    /* Responsive Media Queries */
    @media (min-width: 768px) {
      .desktop-menu { display: flex; }
      .mobile-menu-btn { display: none; }
      .hero-grid { grid-template-columns: 7fr 5fr; }
      .hero h1 { font-size: 3.5rem; }
      .stats-grid { grid-template-columns: 1fr 1fr 1fr; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
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

                */}
                <img 
                  src="/profile.jpeg" 
                  alt="Shipra Kiran Bansal" 
                  className="profile-img"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none'; // Hide broken image
                    e.target.parentNode.innerHTML += '<div style="height:100%; display:flex; flex-direction:col; align-items:center; justify-content:center; color:#94a3b8; text-align:center;"><span style="font-size: 40px; margin-bottom:10px;">👤</span><p>Add profile.jpg<br>to public folder</p></div>';
                  }}
                />
             </div>
             
             {/* Floating Cards */}
             <div className="floating-card card-top">
                <div className="card-icon"><Anchor size={16} color="#0d9488"/></div>
                <div>
                  <div style={{fontSize: '10px', color: '#64748b', fontWeight: 'bold'}}>BACKGROUND</div>
                  <div style={{fontWeight: 'bold', fontSize: '12px'}}>Navy Veteran</div>
                </div>
             </div>
             
             <div className="floating-card card-bottom">
                <div className="card-icon"><CheckCircle size={16} color="#0d9488"/></div>
                <div>
                  <div style={{fontSize: '10px', color: '#64748b', fontWeight: 'bold'}}>EXPERIENCE</div>
                  <div style={{fontWeight: 'bold', fontSize: '12px'}}>10+ Years</div>
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
            <p style={{fontSize: '1.125rem', marginBottom: '20px'}}>
              Hello! I'm <strong style={{color: 'var(--primary)'}}>Shipra Kiran Bansal</strong>. My path has been wonderfully unique, transitioning from a disciplined background in the <strong>Indian Navy</strong> to working with respected schools and renowned platforms like <strong>iMumz</strong>.
            </p>
            <p style={{fontSize: '1.125rem'}}>
              With over <strong style={{color: 'var(--primary)'}}>10 years of experience</strong> as a Counsellor & Facilitator, these diverse roles have deepened my understanding of the emotional and behavioral challenges people face in today's fast-paced world.
            </p>
            
            <div className="stats-grid">
              <div className="text-center">
                <Heart size={32} color="#0d9488" style={{marginBottom: 10}} />
                <h3>Empathetic</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Deep understanding of human emotions</p>
              </div>
              <div className="text-center">
                <Users size={32} color="#2563eb" style={{marginBottom: 10}} />
                <h3>Experienced</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Diverse background in various sectors</p>
              </div>
              <div className="text-center">
                <Brain size={32} color="#9333ea" style={{marginBottom: 10}} />
                <h3>Holistic</h3>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Addressing mind, behavior, and bonds</p>
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
            <p style={{marginBottom: '40px', color: 'var(--text-muted)'}}>
              I offer specialized guidance for individuals, couples, children, teens, and parents tailored to your unique needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" onClick={() => toggleAccordion(index)}>
                <div className="service-header">
                  <div className="service-title-group">
                    <div className="icon-box">{service.icon}</div>
                    <h3 style={{fontSize: '1.25rem'}}>{service.title}</h3>
                  </div>
                  <ChevronDown size={20} style={{transform: activeAccordion === index ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s'}} />
                </div>
                <p style={{marginTop: '16px', color: 'var(--text-muted)'}}>{service.description}</p>
                <div className={`service-details ${activeAccordion === index ? 'open' : ''}`}>
                  <p style={{fontStyle: 'italic', fontSize: '0.9rem', color: '#64748b'}}>"{service.details}"</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{marginTop: '40px'}}>
             <div style={{display: 'inline-block', background: 'white', padding: '12px 24px', borderRadius: '50px', border: '1px solid #ccfbf1', fontSize: '0.9rem'}}>
                <span style={{color: 'var(--primary)', fontWeight: 'bold'}}>Note:</span> I do not prescribe medicines. My approach is purely therapeutic and behavioral.
             </div>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="section bg-white">
        <div className="container writing-box">
            <div style={{background: 'var(--primary-light)', width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
               <BookOpen size={32} color="var(--primary)" />
            </div>

            <h2 className="section-title">Writing & Daily Insights</h2>
            <p style={{fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '32px'}}>
                I actively write posts and share videos about <strong>mental health</strong>, <strong>parental guidance</strong>, and <strong>family dynamics</strong>. 
                I share all my latest thoughts, tips, and Q&As directly on my social media channels.
            </p>

            <div className="social-buttons">
                <a href="https://www.instagram.com/shipra_kiran_guidance_coach?utm_source=qr&igsh=ZmFvaDJ3ZG1kcGVq" target="_blank" rel="noopener noreferrer" className="btn-insta">
                    <Instagram size={20} /> Follow on Instagram
                </a>
                <a href="https://www.linkedin.com/in/shipra-kiran-bansal-parentingcoach" target="_blank" rel="noopener noreferrer" className="btn-linkedin">
                    <Linkedin size={20} /> Connect on LinkedIn
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
              <h3 style={{marginBottom: '12px', color: 'var(--primary-light)'}}>Safe Space</h3>
              <p>A supportive, strictly non-judgmental environment where you can express yourself freely.</p>
            </div>
            <div className="glass-card">
              <h3 style={{marginBottom: '12px', color: 'var(--primary-light)'}}>Affordable</h3>
              <p>Truly affordable sessions because I believe every person deserves mental health support.</p>
            </div>
            <div className="glass-card">
              <h3 style={{marginBottom: '12px', color: 'var(--primary-light)'}}>Tailored</h3>
              <p>No one-size-fits-all. Every session is customized to you or your family's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container text-center">
          <div style={{background: 'var(--primary-light)', width: 64, height: 64, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'}}>
            <MessageCircle size={32} color="var(--primary)" />
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px'}}>
            If this resonates with you, please reach out. A simple conversation can be the start of healing.
          </p>
          
          <div className="contact-card">
            <h3 style={{marginBottom: '10px'}}>Book a Session</h3>
            <p style={{marginBottom: '24px', color: 'var(--text-muted)'}}>Send me a direct message to inquire about details or schedule.</p>
            
            <a href="https://wa.me/919890358011" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
               <MessageCircle size={20} /> DM for Inquiry (WhatsApp)
            </a>
            
            <div className="social-links">
               <a href="https://www.linkedin.com/in/shipra-kiran-bansal-parentingcoach" target="_blank" className="social-icon"><Linkedin size={20} /></a>
               <a href="https://www.instagram.com/shipra_kiran_guidance_coach" target="_blank" className="social-icon"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: '#0f172a', color: '#94a3b8', padding: '32px 0', textAlign: 'center'}}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Shipra Kiran Bansal. All rights reserved.</p>
          <p style={{marginTop: '8px', fontSize: '0.8rem', opacity: 0.6}}>Designed with ❤️ for Healing</p>
        </div>
      </footer>
    </div>
  );
};

export default App;