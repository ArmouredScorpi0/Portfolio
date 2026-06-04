import React, { useState } from 'react';
import { 
  Heart, Users, Baby, Brain, Anchor, MessageCircle, 
  CheckCircle, Menu, X, Linkedin, Instagram, Facebook,
  ChevronDown, ArrowRight, BookOpen, Sun, Smile, Globe, Shield, Mic, Quote, User, Mail, Star,
  BookMarked, Award, HeartHandshake
} from 'lucide-react';

const TestimonialCard = ({ data }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="testimonial-card">
      <div style={{marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Quote size={40} color="#e2e8f0" fill="#e2e8f0" />
          {/* 5-Star Rating */}
          <div style={{display: 'flex', gap: 4, marginTop: 10}}>
             {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
             ))}
          </div>
      </div>
      <p className="testimonial-content">
        "{data.content}"
      </p>
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="testimonial-author">
             <div className="author-avatar">
                {data.image && !imgError ? (
                   <img 
                      src={data.image} 
                      alt={data.label} 
                      style={data.imageStyle || {}} 
                      onError={() => setImgError(true)}
                   />
                ) : (
                   <User size={24} />
                )}
             </div>
             <div className="author-info">
                <h4>{data.label}</h4>
                <span>{data.location}</span>
             </div>
          </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  
  // State for the new Profile Qualifications Accordion (0 opens the first tab by default)
  const [activeProfileAccordion, setActiveProfileAccordion] = useState(0); 
  
  // State to handle broken images safely for profile
  const [profileImgError, setProfileImgError] = useState(false);

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

  const podcasts = [
    {
      id: "m6biILIheqI",
      title: "The Emotional Crisis of Gen Z Teens",
      desc: "A deep dive into why today's teens feel lonely despite being connected, and how parents can bridge the emotional gap.",
      link: "https://youtu.be/m6biILIheqI?si=l_rrlug8xZ1e_HfO"
    },
    {
      id: "cRP-Ke00x7s",
      title: "Relationship Mistakes That Kill Love",
      desc: "Discussing the silent habits that erode intimacy and how to build a conscious, lasting partnership.",
      link: "https://youtu.be/cRP-Ke00x7s?si=TeJOZfBL5I2sMxek"
    }
  ];

  const testimonials = [
    // --- NEW VIP TESTIMONIALS ---
    {
      type: "named",
      content: "Mrs Shipra Kiran Bansal, Parenting, Relationship, Life Coach and Counsellor is a through professional. Caring, Discreet and Understanding. She helps by understanding the problem as a family member yet keeping the focus always. Highly Recommended.",
      label: "Syed Faisal Rizvi",
      location: "Chairman & Managing Director, United Sustainable Developments Pvt Ltd, Bangalore",
      image: "/Syed.jpeg"
    },
    {
      type: "named",
      content: "Shipra Kiran has a unique ability to truly hear and hold space for her clients. Her coaching is a perfect blend of deep warmth, heartfelt guidance, and empowering support. If you are looking to rediscover your strength in a safe, comforting environment, she is an exceptional choice.",
      label: "Ankush",
      location: "Director, UBS Business Solutions",
      image: "/Ankush.jpeg"
    },
    {
      type: "named",
      content: "Ms. Shipra has a rare and special ability to truly identify your concerns and connect with you at a deeper level. Speaking with her feels effortless and safe, and every conversation leaves you feeling lighter almost as if a weight has been gently lifted off your shoulders. She is a remarkably gifted guidance counsellor with vast experience and an intuitive understanding of how to put you at ease, while thoughtfully guiding you toward the best possible solutions. Her presence itself brings clarity and calm. Highly recommended for anyone seeking direction, balance, and clarity in life.",
      label: "Cdr Amit",
      location: "(Retd) Indian Navy | Senior Captain (Indigo Airlines)",
      image: "/Amit.jpeg",
      // Applied the specific fix requested
      imageStyle: { transform: 'scale(1.15) translateX(7px)' }
    },
    {
      type: "named",
      content: "Being with Mrs. Shipra Kiran feels safe and comforting. She listens with her heart, understands without judgment, and makes you feel truly seen. In moments when you feel lost or overwhelmed, her presence brings calm, clarity, and quiet strength. She has a gentle way of reminding you of your own inner courage and hope. Anyone seeking sincere guidance, emotional support, and a compassionate life coach will find her support truly meaningful.",
      label: "Sanjay Goyal",
      location: "Director & SVP, Daikin Airconditioning India Pvt. Ltd.",
      image: "/Sanjay.jpeg"
    },
    // --- EXISTING TESTIMONIALS ---
    {
      type: "named",
      content: "Ms.Shipra Kiran is an exceptionally compassionate and a highly dedicated guidance counselor whose unwavering work ethic and wisdom have profoundly impacted both my son's life and mine. Her genuine presence, patience, and commitment to truly helping the children and parents shine through in all her interactions, thus, creating trust and healing, alongwith a meaningful and lasting growth.",
      label: "Ritu Negi",
      location: "Head Co-ordinate & Senior Educator (Bangalore)",
      image: "/Ritu.jpeg"
    },
    {
      type: "named",
      content: "Mrs. Shipra Kiran has a rare gift for truly feeling what her clients experience, offering deep warmth, understanding, and support. She creates a safe, comforting space where people feel genuinely seen and valued. In her presence, hope and inner strength are restored. For compassionate life coaching and heartfelt guidance, she’s an exceptional choice.",
      label: "Shaifaali Poonam",
      location: "Mentor, Guide & Educator (Faridabad)",
      image: "/Shaifaali.jpeg"
    },
    {
      type: "named",
      content: "Ms. Shipra is an exceptional guidance counsellor who truly cares about children's well-being and success. Her empathetic approach and insightful advice have helped me navigate challenges and discover my strengths. I appreciate how she takes the time to understand each child's unique needs and provides personalized support. Her guidance has been instrumental in shaping my child's academic and personal growth.",
      label: "Soumi Kesh",
      location: "Senior Faculty Member & Master Teacher (Dubai)",
      image: "/Soumi.jpeg"
    },
    {
      type: "named",
      content: "Mrs.Shipra Kiran has the skill of understanding and empathising with a client's feelings and effectively making them feel heard,validated and safe.She is the right person to approach as a Life Coach or as a Guidance Counselor. Best of luck in your endeavour.",
      label: "Elizabeth Valsan",
      location: "Ex-Principal of Bharatiya Vidya Bhavan, Goa. Academic Director of Shree Niketan Childcare and Education Centre, Goa",
      image: "/Elizabeth.jpeg",
      imageStyle: { objectPosition: 'center' }
    },
    {
      type: "named",
      content: "During one of the most challenging phases of my life, Shipra Kiran Bansal became a source of strength and clarity for me. Her guidance counselling sessions were filled with empathy, patience, and deep understanding. She listened without judgment, helped me reframe my thoughts, and gently guided me toward practical solutions. I am truly grateful for her support and guidance.",
      label: "Sanchit Goyal",
      location: "Consultant, BCG | Alumnus, IIT Kanpur",
      image: "/Sanchit.jpeg"
    },
    {
      type: "named",
      content: "The counselling sessions were extremely helpful for my elder daughter. She gained a clear understanding of her interests, strengths, and possible career paths. Shipra Kiran guided her with immense patience, empathy, and deep insight, which greatly boosted her confidence and self-belief. Her gentle yet structured approach made my daughter feel heard, supported, and motivated throughout the journey.",
      label: "Anusuya",
      location: "Dedicated Educator & Teacher (30+ Years Exp.)",
      image: "/Anusuya.jpeg"
    },
    {
      type: "anonymous",
      content: "Working with Shipra Kiran Bansal has been a truly transformative experience for our relationship. Her guidance counselling sessions provided us with a safe, non-judgmental space to express our thoughts and emotions openly. With deep empathy, patience, and clarity, she helped us understand each other better and navigate our challenges with maturity and compassion.",
      label: "Anonymous",
      location: "Bangalore"
    },
    {
      type: "anonymous",
      content: "Shipra has truly pushed and challenged me to reconnect with who I once was—my passions and interests. We are now working together on setting new goals, and I feel a renewed enthusiasm for life. I’m beginning to look forward to what lies ahead and see it all as an adventure.",
      label: "Anonymous",
      location: "Bangalore"
    },
    {
      type: "anonymous",
      content: "Shipra is an exceptionally compassionate and insightful life coach who brings both warmth and clarity to every interaction. Her caring, positive approach creates a safe and trusting space where one can openly explore a wide range of life challenges. With her thoughtful guidance, I gained clarity, emotional strength, and a renewed sense of direction.",
      label: "Anonymous",
      location: "Kolkata"
    },
    {
      type: "anonymous",
      content: "My postpartum journey had been a struggle, and I truly needed the right guidance and emotional support. Throughout the session, I felt genuinely heard and supported. After our discussion, I felt more confident, relaxed, and motivated to move forward. Shipra’s commitment to making the session meaningful was evident.",
      label: "Anonymous",
      location: "Bangalore"
    },
    {
      type: "anonymous",
      content: "It was wonderful speaking with Shipra. I’m so grateful to have found her—just sharing and venting during the session helped lift a huge emotional weight off me. Her presence made me feel heard, understood, and lighter.",
      label: "Anonymous",
      location: "Hyderabad"
    },
    {
      type: "anonymous",
      content: "The session with Shipra was extremely clear and meaningful. I felt highly motivated after our discussion and truly supported throughout. She helped me boost my positivity, especially while navigating this phase and managing my mood swings. For me, it was a truly fruitful and empowering experience.",
      label: "Anonymous",
      location: "Ranchi"
    },
    {
      type: "anonymous",
      content: "I’m deeply grateful to Shipra for her constant motivation and inspiration throughout my postpartum journey. The way she listens and guides with such care feels heartfelt—more like a trusted friend than just a coach. Her kindness, reassurance, and guidance have made a meaningful and lasting difference in my life.",
      label: "Anonymous",
      location: "Pune"
    },
    {
      type: "anonymous",
      content: "The parenting session with Shipra was extremely clear and insightful. I received the guidance I needed and felt supported throughout the discussion. Her commitment to making the session truly valuable was evident, and it helped me feel motivated and confident about my parenting journey.",
      label: "Anonymous",
      location: "Goa"
    },
    {
      type: "anonymous",
      content: "During a phase filled with emotional ups and downs, I felt genuinely heard and supported throughout our discussion. Her guidance helped me regain my positivity and confidence while managing my mood swings. For me, it was a deeply reassuring, fruitful, and empowering experience.",
      label: "Anonymous",
      location: "Delhi"
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
      font-size: 2.2rem; 
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
    
    .hero h1 { 
        font-size: 2rem; 
        font-weight: 700; 
        line-height: 1.3; 
        margin-bottom: 24px; 
        letter-spacing: -0.5px;
        color: var(--text-main);
    }
    
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

    /* About & Profile Qualifications Sections */
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

    /* Profile Qualifications Accordion Styles */
    .profile-acc-container {
      max-width: 1000px;
      margin: 0 auto; /* Removed top margin since it's its own section now */
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .profile-acc-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .profile-acc-header {
      padding: 20px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      background: white;
      transition: background 0.2s;
    }
    .profile-acc-header:hover { background: var(--bg-off-white); }
    .profile-acc-title-group {
      display: flex; align-items: center; gap: 16px;
      font-weight: 700; font-size: 1.2rem; color: var(--text-main);
    }
    .profile-acc-icon {
      background: var(--primary-light);
      padding: 12px; border-radius: 14px; color: var(--primary);
    }
    .profile-acc-body {
      padding: 0 24px;
      max-height: 0; overflow: hidden; opacity: 0;
      transition: all 0.3s ease;
      background: var(--bg-off-white);
    }
    .profile-acc-body.open {
      max-height: 600px; opacity: 1; padding: 24px;
      border-top: 1px solid #e2e8f0;
    }
    .profile-acc-body ul {
      margin: 0; padding-left: 20px; color: var(--text-muted); line-height: 1.8; font-size: 1.1rem;
    }
    .profile-acc-body li { margin-bottom: 16px; }
    .profile-acc-body li:last-child { margin-bottom: 0; }
    .profile-acc-body strong { color: var(--text-main); font-weight: 600; }

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
    .services-bg-fix {
        background-color: var(--bg-off-white); /* Ensure this matches body bg */
        width: 100%;
    }
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

    /* Testimonials Section */
    .testimonials-section {
      background: white;
      padding: 100px 0;
      overflow: hidden;
    }
    .testimonial-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }
    .testimonials-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .testimonial-card {
      background: var(--bg-off-white);
      border-radius: 32px;
      padding: 40px;
      text-align: center;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      border: 1px solid #e2e8f0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .testimonial-content {
      font-size: 1.1rem;
      color: var(--text-main);
      font-style: italic;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    .testimonial-author {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      text-align: left;
    }
    .author-avatar {
      width: 70px; height: 70px; 
      background: #e2e8f0;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      color: var(--text-muted);
      overflow: hidden;
      flex-shrink: 0;
    }
    .author-avatar img {
      width: 100%; height: 100%; 
      object-fit: cover;
      object-position: top;
    }
    .author-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .author-info h4 {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 2px;
    }
    .author-info span {
      font-size: 0.85rem;
      color: var(--primary);
      font-weight: 600;
    }

    /* Writing Section */
    .writing-box {
      max-width: 900px; margin: 0 auto; text-align: center;
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
    .btn-insta:hover, .btn-linkedin:hover, .btn-facebook:hover { transform: scale(1.05); }

    .btn-linkedin {
      background: #0077b5;
      color: white; padding: 16px 40px; border-radius: 50px;
      text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 10px; font-size: 1.1rem;
      transition: transform 0.2s;
    }
    
    .btn-facebook {
      background: #1877F2;
      color: white; padding: 16px 40px; border-radius: 50px;
      text-decoration: none; font-weight: 700; display: flex; align-items: center; gap: 10px; font-size: 1.1rem;
      transition: transform 0.2s;
    }

    /* Podcast Section */
    .podcast-grid {
      display: grid; grid-template-columns: 1fr; gap: 40px;
    }
    .podcast-card {
      background: white; border-radius: 24px; overflow: hidden;
      box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
      border: 1px solid #e2e8f0; transition: 0.3s;
      display: block; text-decoration: none; color: inherit;
    }
    .podcast-card:hover { transform: translateY(-5px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    .thumb-wrapper {
      position: relative; padding-top: 56.25%; /* 16:9 Aspect Ratio */
      background: #f1f5f9;
    }
    .thumb-img {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;
    }
    .play-icon {
      position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 60px; height: 60px; background: rgba(0,0,0,0.7);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      color: white; backdrop-filter: blur(4px);
    }
    .podcast-content { padding: 24px; }
    .podcast-tag { font-size: 0.85rem; color: var(--primary); font-weight: 700; text-transform: uppercase; margin-bottom: 8px; display: block; }
    .podcast-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 12px; line-height: 1.4; color: var(--text-main); }
    .podcast-desc { font-size: 1rem; color: var(--text-muted); }

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
      .brand-heading { font-size: 2.5rem; } 
      .hero h1 { font-size: 2.5rem; }
      .stats-grid { grid-template-columns: 1fr 1fr 1fr; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      .grid-3 { grid-template-columns: 1fr 1fr 1fr; }
      .offer-grid { grid-template-columns: 1fr 1fr; } 
      .podcast-grid { grid-template-columns: 1fr 1fr; }
      
      .testimonials-grid {
        grid-template-columns: 1fr 1fr; /* 2 columns on desktop */
      }
    }
    
    @media (min-width: 1200px) {
       .container { padding: 0 60px; }
       .brand-heading { font-size: 3.5rem; }
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
            <a href="#qualifications">Qualifications</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#writing">Writing</a>
            <a href="#podcasts">Podcasts</a>
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
            <a href="#qualifications" onClick={toggleMenu}>Qualifications</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#testimonials" onClick={toggleMenu}>Testimonials</a>
            <a href="#writing" onClick={toggleMenu}>Writing</a>
            <a href="#podcasts" onClick={toggleMenu}>Podcasts</a>
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
                {!profileImgError ? (
                    <img 
                      src="/profile.jpeg" 
                      alt="Shipra Kiran Bansal" 
                      className="profile-img"
                      onError={() => setProfileImgError(true)}
                    />
                ) : (
                    <div style={{height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'#94a3b8', textAlign:'center', padding:'20px'}}>
                        <span style={{fontSize: '40px', marginBottom:'10px'}}>👤</span>
                        <p style={{fontSize:'14px'}}><strong>Photo Missing</strong><br/>Put <code>profile.jpeg</code> in the <code>public</code> folder</p>
                    </div>
                )}
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
                  <div style={{fontWeight: 'bold', fontSize: '14px', color: '#0f172a'}}>15+ Years</div>
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
              With over <strong>15+ years of experience</strong> as a Counsellor & Facilitator, I’ve been helping Individuals, Couples, Children/Teens, and Parents navigate through life’s emotional ups and downs—whether it’s Relationship conflicts, Parenting challenges, Teenage issues, Anxiety, Anger, Academic stress, or Postpartum struggles.
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

      {/* NEW: Qualifications Section */}
      <section id="qualifications" className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Qualifications & Experience</h2>
            <div className="divider"></div>
          </div>

          <div className="profile-acc-container">
            {/* Accordion 1: Education */}
            <div className="profile-acc-card">
              <div className="profile-acc-header" onClick={() => setActiveProfileAccordion(activeProfileAccordion === 0 ? null : 0)}>
                <div className="profile-acc-title-group">
                  <div className="profile-acc-icon"><BookMarked size={24}/></div>
                  Education & Certifications
                </div>
                <ChevronDown size={24} style={{transform: activeProfileAccordion === 0 ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s', color: 'var(--text-muted)'}} />
              </div>
              <div className={`profile-acc-body ${activeProfileAccordion === 0 ? 'open' : ''}`}>
                <ul>
                  <li>B.Ed. with specialization in <strong>Child & Parent Psychology</strong>, building a strong foundation in emotional development, family dynamics, and supportive guidance.</li>
                  <li>Completed a Certificate Course in Guidance & Counselling from <strong>IGNOU</strong> to deepen therapeutic and counseling skills.</li>
                </ul>
              </div>
            </div>

            {/* Accordion 2: Experience */}
            <div className="profile-acc-card">
              <div className="profile-acc-header" onClick={() => setActiveProfileAccordion(activeProfileAccordion === 1 ? null : 1)}>
                <div className="profile-acc-title-group">
                  <div className="profile-acc-icon"><HeartHandshake size={24}/></div>
                  Experience & Welfare Leadership
                </div>
                <ChevronDown size={24} style={{transform: activeProfileAccordion === 1 ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s', color: 'var(--text-muted)'}} />
              </div>
              <div className={`profile-acc-body ${activeProfileAccordion === 1 ? 'open' : ''}`}>
                <ul>
                  <li>Bringing together <strong>15+ years of hands-on experience</strong>, with a compassionate and practical approach to helping individuals build clarity, resilience, emotional well-being, and healthier lives.</li>
                  <li>Served in a leadership role within <strong>Naval Squadron Family Welfare</strong> initiatives, providing regular counseling and emotional support to <strong>100+ families</strong> through personal, relational, and life transitions.</li>
                  <li>Began professional journey in education as a teacher, where <strong>counseling and supporting parents and educators</strong> became an integral part of my work.</li>
                </ul>
              </div>
            </div>

            {/* Accordion 3: Specialized Training */}
            <div className="profile-acc-card">
              <div className="profile-acc-header" onClick={() => setActiveProfileAccordion(activeProfileAccordion === 2 ? null : 2)}>
                <div className="profile-acc-title-group">
                  <div className="profile-acc-icon"><Award size={24}/></div>
                  Specialized Training
                </div>
                <ChevronDown size={24} style={{transform: activeProfileAccordion === 2 ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s', color: 'var(--text-muted)'}} />
              </div>
              <div className={`profile-acc-body ${activeProfileAccordion === 2 ? 'open' : ''}`}>
                <ul>
                  <li>Further strengthened my professional practice through <strong>NLP (Neuro-Linguistic Programming)</strong> training with focus areas in <strong>Child Psychology, Parent Psychology, Behavioural Psychology</strong>, and practical life interventions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
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

      {/* NEW SECTION: Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="text-center">
            <div style={{background: 'var(--primary-light)', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px'}}>
               <Quote size={40} color="var(--primary)" />
            </div>
            <h2 className="section-title">Client Stories</h2>
            <div className="divider"></div>
            <p style={{fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px', lineHeight: 1.8}}>
               The people I work with hold a special place in my heart. I journey with them through understanding, empathy, and a strong professional bond. This connection helps me truly see them and offer a coaching experience that feels personal, empowering, and transformative.
            </p>
          </div>

          <div className="testimonial-wrapper">
             <div className="testimonials-grid">
               {testimonials.map((testimonial, index) => (
                 <TestimonialCard key={index} data={testimonial} />
               ))}
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
                <a href="https://www.facebook.com/share/1W9Gx8zTX5/" target="_blank" rel="noopener noreferrer" className="btn-facebook">
                    <Facebook size={24} /> Follow on Facebook
                </a>
            </div>
        </div>
      </section>

      {/* NEW SECTION: Podcasts */}
      <section id="podcasts" className="section" style={{background: '#f1f5f9'}}>
        <div className="container">
          <div className="text-center">
            <div style={{background: 'var(--primary-light)', width: 80, height: 80, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px'}}>
               <Mic size={40} color="var(--primary)" />
            </div>
            <h2 className="section-title">Podcasts & Discussions</h2>
            <div className="divider"></div>
            <p style={{fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px', lineHeight: 1.8}}>
               Join me on <strong>The Hitesh Valkundakar Show</strong> where we dive deep into the pressing issues facing today's families. 
               From the emotional crisis of Gen Z teens to the silent habits that erode relationships, these episodes offer honest conversations and actionable insights.
            </p>
          </div>

          <div className="podcast-grid">
            {podcasts.map((pod, index) => (
              <a key={index} href={pod.link} target="_blank" rel="noopener noreferrer" className="podcast-card">
                <div className="thumb-wrapper">
                  <img 
                    src={`https://img.youtube.com/vi/${pod.id}/maxresdefault.jpg`} 
                    alt={pod.title} 
                    className="thumb-img"
                  />
                  <div className="play-icon">
                    <ArrowRight size={32} />
                  </div>
                </div>
                <div className="podcast-content">
                  <span className="podcast-tag">Featured Episode</span>
                  <h3 className="podcast-title">{pod.title}</h3>
                  <p className="podcast-desc">{pod.desc}</p>
                </div>
              </a>
            ))}
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
               <a href="mailto:shiprakiran75@gmail.com" className="social-icon"><Mail size={24} /></a>
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
