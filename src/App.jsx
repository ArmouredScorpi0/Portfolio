import React, { useState } from 'react';
import { 
  Heart, Users, Baby, Brain, Anchor, MessageCircle, 
  CheckCircle, Menu, X, Linkedin, Instagram, 
  ChevronDown, User, ArrowRight, BookOpen, Star, Sun, Smile, Globe, Shield
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
      description: "Support for anxiety, anger, academic stress, and behavioral modifications.",
      details: "I help individuals of all ages process emotions like anger and anxiety, offering practical tools to manage stress and find emotional balance."
    },
    {
      title: "Emotional Guidance",
      icon: <Sun size={24} color="#0d9488" />,
      description: "Navigating through emotional turbulence to find inner peace and clarity.",
      details: "Providing a safe space to express, understand and manage complex emotions effectively."
    },
    {
      title: "Teenage Challenges",
      icon: <Users size={24} color="#0d9488" />,
      description: "Bridging the gap between parents and adolescents during crucial years.",
      details: "Addressing academic pressure, peer influence, identity crises, and communication gaps unique to the teenage years."
    },
    {
      title: "Postpartum Struggles",
      icon: <Smile size={24} color="#0d9488" />,
      description: "Supporting new mothers through the emotional transitions of motherhood.",
      details: "Compassionate support for postpartum blues, anxiety, and adjusting to the new identity of being a mother."
    }
  ];

  // --- CSS STYLES ---
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
      max-width: 1600px; 
      margin: 0 auto;
      padding: 0 40px;   
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
      height: 90px;
    }
    .logo-area { display: flex; align-items: center; gap: 12px; }
    .logo-circle {
      width: 45px; height: 45px;
      background: var(--primary);
      color: white;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: bold; font-size: 22px;
      flex-shrink: 0;
    }
    .logo-text h1 { font-size: 1.2rem; font-weight: 700; line-height: 1.2; }
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
      position: absolute; width: 100%; left: 0; top: 90px;
      padding: 20px; box-shadow: 0 10px 15px rgba(0,0,0,0.1);
    }
    .mobile-menu a { display: block; padding: 12px; text-decoration: none; color: var(--text-muted); font-weight: 500; }

    /* Hero Section */
    .hero {
      padding: 60px 0 100px 0;
      background: linear-gradient(to bottom, var(--primary-light), var(--white));
      overflow: hidden;
      width: 100%;
    }
    .brand-heading {
      font-size: 2.2rem; /* Increased significantly */
      font-weight: 800;
      color: var(--primary-dark);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
      display: inline-block;
      line-height: 1.2;
      white-space: nowrap;
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
      margin-bottom: 24px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }
    
    /* Reduced Main Headline Size */
    .hero h1 { 
        font-size: 2rem; 
        font-weight: 700; 
        line-height: 1.3; 
        margin-bottom: 24px; 
        letter-spacing: -0.5px;
        color: var(--text-main);
    }
    
    /* New Bullet List Styles */
    .hero-titles {
      margin-bottom: 30px;
      color: var(--text-muted);
      font-size: 1.15rem;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .hero-title-item {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .hero-bullet {
        width: 8px;
        height: 8px;
        background: var(--primary);
        border-radius: 50%;
        flex-shrink: 0;
    }

    .hero p { font-size: 1.2rem; color: var(--text-muted); margin-bottom: 40px; max-width: 650px; line-height: 1.7; }
    
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
      max-width: 480px; 
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
      padding: 12px 20px;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      display: flex; align-items: center; gap: 16px;
      z-index: 10;
    }
    .card-top { top: 40px; right: -40px; }
    .card-bottom { bottom: 40px; left: -40px; }
    .card-icon { background: var(--primary-light); padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

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
    .highlight-quote {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-dark);
      margin-bottom: 30px;
      display: block;
      font-style: italic;
    }
    .stats-grid {
      display: grid; grid-template-columns: 1fr;
      gap: 30px; margin-top: 50px;
    }

    /* What I Offer Section */
    .offer-section {
      background: var(--primary-light);
      padding: 80px 0;
    }
    .offer-card {
      background: white;
      padding: 50px;
      border-radius: 24px;
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
      box-shadow: 0 10px 30px rgba(13, 148, 136, 0.1);
    }
    .offer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
      margin-top: 30px;
    }
    .offer-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
    .offer-text {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-main);
    }
    .offer-subtext {
      font-size: 1rem;
      color: var(--text-muted);
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
      .hero-grid { grid-template-columns: 1fr 1fr; gap: 80px; }
      .brand-heading { font-size: 2.5rem; } /* Massive on desktop */
      .hero h1 { font-size: 2.5rem; } /* Controlled size on desktop */
      .stats-grid { grid-template-columns: 1fr 1fr 1fr; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
      .offer-grid { grid-template-columns: 1fr 1fr; } 
    }
    
    @media (min-width: 1200px) {
       .container { padding: 0 60px; }
       .brand-heading { font-size: 3.5rem; } /* Even bigger on large screens */
       .services-grid { grid-template-columns: 1fr 1fr 1fr; }
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
              <p>Parenting & Relationship Coach</p>
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
            {/* New Brand Heading (Big Font) */}
            <div className="brand-heading">Shipra's Healing Circle</div>
            
            <div className="badge">
              <span style={{width: 8, height: 8, background: 'var(--primary)', borderRadius: '50%', marginRight: 8}}></span>
              Accepting New Clients
            </div>
            
            {/* Tagline (Smaller Font) */}
            <h1>Navigate Life's Emotional <span style={{color: 'var(--primary)'}}>Ups & Downs</span></h1>
            
            {/* Added Bullets */}
            <div className="hero-titles">
                <div className="hero-title-item">
                    <div className="hero-bullet"></div>
                    Parent-Child Counselling
                </div>
                <div className="hero-title-item">
                    <div className="hero-bullet"></div>
                    Guidance & Life Counselling
                </div>
                <div className="hero-title-item">
                    <div className="hero-bullet"></div>
                    Behavioural Counselling
                </div>
                <div className="hero-title-item">
                    <div className="hero-bullet"></div>
                    Relationship Counselling
                </div>
                <div className="hero-title-item">
                    <div className="hero-bullet"></div>
                    Personal Counselling
                </div>
            </div>

            <p>Helping individuals, couples, and parents find balance and healing. A safe, non-judgmental space for your journey.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">Start Your Journey</a>
              <a href="#about" className="btn-secondary">Read My Story</a>
            </div>
          </div>
          
          <div className="image-wrapper">
             <div className="profile-frame">
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
             
             {/* Under Photo Text */}
             <div style={{
               textAlign: 'center', 
               marginTop: '16px', 
               fontStyle: 'italic', 
               color: 'var(--text-muted)',
               fontWeight: '500'
             }}>
               Certified Guidance Counsellor
             </div>
             
             {/* Floating Cards */}
             <div className="floating-card card-top">
                <div className="card-icon"><Anchor size={20} color="#0d9488"/></div>
                <div>
                  <div style={{fontWeight: 'bold', fontSize: '13px', color: '#0f172a', lineHeight: '1.4'}}>
                    Part of the<br/>Indian Naval Fraternity
                  </div>
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
            <span className="highlight-quote">"Healing begins when you're heard..."</span>

            <p style={{fontSize: '1.25rem', marginBottom: '20px', lineHeight: 1.8}}>
              Hello! I'm <strong style={{color: 'var(--primary)'}}>Shipra Kiran Bansal</strong>. My path has been wonderfully unique, transitioning from a disciplined background in the <strong>Indian Navy</strong> to working with <strong style={{color: 'var(--primary)'}}>reputed schools</strong>, renowned parenting platform <strong>iMumz</strong>, and scores of satisfied individuals / defence families.
            </p>
            
            <p style={{fontSize: '1.25rem', lineHeight: 1.8}}>
              With over <strong>10 years of experience</strong> as a Counsellor & Facilitator, I’ve been helping Individuals, Couples, Children/Teens, and Parents navigate through life’s emotional ups and downs—whether it’s Relationship conflicts, Parenting challenges, Teenage issues, Anxiety, Anger, Academic stress, or Postpartum struggles.
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
              I offer <strong style={{color: 'var(--primary-dark)'}}>specialized guidance</strong> for <strong style={{color: 'var(--primary-dark)'}}>individuals</strong>, <strong style={{color: 'var(--primary-dark)'}}>couples</strong>, <strong style={{color: 'var(--primary-dark)'}}>children</strong>, <strong style={{color: 'var(--primary-dark)'}}>teens</strong>, and <strong style={{color: 'var(--primary-dark)'}}>parents</strong> tailored to your unique needs.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card" onClick={() => toggleAccordion(index)}>
                <div className="service-header">
                  <div className="service-title-group">
                    <div className="icon-box">{service.icon}</div>
                    <h3 style={{fontSize: '1.4rem', fontWeight: 'bold'}}>{service.title}</h3>
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

      {/* NEW SECTION: What I Offer */}
      <section className="offer-section">
        <div className="container">
           <div className="offer-card">
              <h2 className="section-title" style={{fontSize: '2rem'}}>What I Offer</h2>
              <div style={{height: 4, width: 60, background: 'var(--primary)', margin: '0 auto 30px', borderRadius: 2}}></div>
              
              {/* Refined Offer Grid */}
              <div className="offer-grid">
                  <div className="offer-item">
                     <Globe color="var(--primary)" size={32} />
                     <div className="offer-text">Online & In-Person Sessions</div>
                     <div className="offer-subtext">Global reach via video calls or local face-to-face meetings.</div>
                  </div>
                  <div className="offer-item">
                     <Shield color="var(--primary)" size={32} />
                     <div className="offer-text">Tailored 1-on-1 Guidance</div>
                     <div className="offer-subtext">Confidential, personalized support for your unique situation.</div>
                  </div>
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
               <MessageCircle size={24} /> DM +91 9890358011
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
          <p style={{fontSize: '1rem'}}>&copy; {new Date().getFullYear()} Shipra's Healing Circle. All rights reserved.</p>
          <p style={{marginTop: '12px', fontSize: '0.9rem', opacity: 0.6}}>Designed with ❤️ for Healing</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
