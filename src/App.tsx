import { useEffect, useMemo, useRef, useState } from 'react';

import aboutCard1 from '../assets/made-1.png';
import aboutCard2 from '../assets/made-2.png';
import aboutCard3 from '../assets/made-4.png';
import aboutCard4 from '../assets/made-5.png';
import aboutCard5 from '../branding_marketing.png';
import chefImage from '../assets/chef.jpeg';
import hospitalityImage from '../assets/hospitality.jpeg';
import influenceImage from '../assets/influence.jpeg';
import produceImage from '../assets/produce.jpeg';
import jackalopeImage from '../assets/jackalope.png';
import luxuryImage from '../assets/luxury.jpg';
import taylorImage from '../assets/taylor.png';
import mountImage from '../assets/mount.png';
import taylorCard1 from '../assets/TAYLORPASSCREATIVEFILM_V52K_final.00_00_00_19.Still004-scaled.jpg';
import taylorCard2 from '../assets/high-3.webp';
import taylorCard3 from '../assets/crown.jpeg';
import taylorCard4 from '../assets/butter.jpeg';

type DrawerId = 'about' | 'services' | 'portfolio' | 'taylor';
type MobileSectionId = 'home' | DrawerId;

type DrawerCard = {
  title: string;
  image: string;
  eyebrow?: string;
};

const drawerTabs: { id: DrawerId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'taylor', label: 'Taylor Pass' },
];

const mobileSections: { id: MobileSectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'taylor', label: 'Taylor Pass' },
];

const drawerContent: Record<DrawerId, { title: string; description: string; cards: DrawerCard[] }> = {
  about: {
    title: 'Branding & Marketing',
    description: 'A focused view of the brand storytelling, campaign design, and content systems behind the work.',
    cards: [
      { title: 'Branding & Marketing', image: aboutCard1, eyebrow: 'Campaign world' },
      { title: 'Branding & Marketing', image: aboutCard2, eyebrow: 'Creative direction' },
      { title: 'Branding & Marketing', image: aboutCard3, eyebrow: 'Production planning' },
      { title: 'Branding & Marketing', image: aboutCard4, eyebrow: 'Visual storyboards' },
      { title: 'Branding & Marketing', image: aboutCard5, eyebrow: 'Brand systems' },
    ],
  },
  services: {
    title: 'Services',
    description: 'Ways we shape premium campaigns, immersive content, and hospitality-led storytelling.',
    cards: [
      { title: 'Branding & Marketing', image: chefImage, eyebrow: 'Strategy' },
      { title: 'Branding & Marketing', image: hospitalityImage, eyebrow: 'Production' },
      { title: 'Branding & Marketing', image: influenceImage, eyebrow: 'Distribution' },
      { title: 'Branding & Marketing', image: produceImage, eyebrow: 'Launch support' },
    ],
  },
  portfolio: {
    title: 'Portfolio',
    description: 'A snapshot of the chefs, venues, and partner brands we collaborate with across AU and NZ.',
    cards: [
      { title: 'Branding & Marketing', image: jackalopeImage, eyebrow: 'Hospitality' },
      { title: 'Branding & Marketing', image: luxuryImage, eyebrow: 'Luxury travel' },
      { title: 'Branding & Marketing', image: taylorImage, eyebrow: 'Wine and food' },
      { title: 'Branding & Marketing', image: mountImage, eyebrow: 'Regional stories' },
    ],
  },
  taylor: {
    title: 'Taylor Pass',
    description: 'Editorial stills and campaign moments drawn from the Taylor Pass brand universe.',
    cards: [
      { title: 'Branding & Marketing', image: taylorCard1, eyebrow: 'Taylor Pass' },
      { title: 'Branding & Marketing', image: taylorCard2, eyebrow: 'Creative film' },
      { title: 'Branding & Marketing', image: taylorCard3, eyebrow: 'Launch asset' },
      { title: 'Branding & Marketing', image: taylorCard4, eyebrow: 'Campaign detail' },
    ],
  },
};

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const burgerButtonRef = useRef<HTMLButtonElement>(null);
  const categoryCarouselRef = useRef<HTMLDivElement>(null);
  const [activeDrawer, setActiveDrawer] = useState<DrawerId | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<MobileSectionId>('about');

  const partners = useMemo(
    () => [
      { src: '/assets/parkhyatt.jpeg', alt: 'Park Hyatt' },
      { src: '/assets/mount.png', alt: 'Mount William Station' },
      { src: '/assets/oraking.webp', alt: 'Ora King' },
      { src: '/assets/bunny.png', alt: 'Bunny' },
      { src: '/assets/jackalope.png', alt: 'Jackalope' },
      { src: '/assets/kenwood.png', alt: 'Kenwood' },
      { src: '/assets/perfection.png', alt: 'Perfection' },
      { src: '/assets/taylor.png', alt: 'Taylor' },
      { src: '/assets/prahran.png', alt: 'Prahran' },
      { src: '/assets/penfolds.png', alt: 'Penfolds' },
      { src: '/assets/luxury.jpg', alt: 'Luxury Lodges' },
      { src: '/assets/norco.jpg', alt: 'Norco' },
      { src: '/assets/humptydoo.png', alt: 'Humpty Doo' },
      { src: '/assets/manning.jpg', alt: 'Manning' },
    ],
    [],
  );

  const categories = useMemo(
    () => [
      {
        title: 'Chefs',
        description:
          'We collaborate with renowned chefs to showcase their culinary artistry and bring their innovative creations to a global audience.',
        image: '/assets/chef.jpeg',
        featured: true,
      },
      {
        title: 'Produce',
        description: '',
        image: '/assets/produce.jpeg',
      },
      {
        title: 'Hospitality',
        description: '',
        image: '/assets/hospitality.jpeg',
      },
      {
        title: 'Influence',
        description: '',
        image: '/assets/influence.jpeg',
      },
      {
        title: 'Influence',
        description: '',
        image: '/assets/influence.jpeg',
      },
      {
        title: 'Influence',
        description: '',
        image: '/assets/influence.jpeg',
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${offset * 0.03}px) scale(1.08)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!drawerOpen && !mobileMenuOpen) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }

      const clickedHeader = headerRef.current?.contains(target) ?? false;
      const clickedMobileMenu = mobileMenuRef.current?.contains(target) ?? false;
      const clickedBurger = burgerButtonRef.current?.contains(target) ?? false;

      if (mobileMenuOpen && !clickedMobileMenu && !clickedBurger) {
        setMobileMenuOpen(false);
        return;
      }

      if (!clickedHeader) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown, true);
    return () => window.removeEventListener('pointerdown', handlePointerDown, true);
  }, [drawerOpen, mobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      } else {
        setDrawerOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const slider = categoryCarouselRef.current;

    if (!slider) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      slider.classList.add('dragging');

      startX = e.pageX;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseUp = () => {
      isDragging = false;
      slider.classList.remove('dragging');
    };

    const handleMouseLeave = () => {
      isDragging = false;
      slider.classList.remove('dragging');
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      e.preventDefault();

      const walk = e.pageX - startX;

      slider.scrollLeft = scrollLeft - walk;
    };

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth > 1024) return;

      e.preventDefault();
      slider.scrollLeft += e.deltaY;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mousemove', handleMouseMove);
    slider.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="app-shell" id="top">
      <header className="site-header" ref={headerRef}>
        <div className="brand">TASTE OF AUS & NZ</div>
        <nav className={`nav-panel${drawerOpen ? ' is-open' : ''}`}>
          <div className="nav-panel__tabs">
            {drawerTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`nav-panel__item${drawerOpen && activeDrawer === tab.id ? ' is-active' : ''}`}
                aria-expanded={drawerOpen && activeDrawer === tab.id}
                onClick={() => {
                  if (drawerOpen && activeDrawer === tab.id) {
                    setDrawerOpen(false);
                    return;
                  }

                  setActiveDrawer(tab.id);
                  setDrawerOpen(true);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            className={`nav-panel__drawer${drawerOpen ? ' is-open' : ''}`}
            aria-hidden={!drawerOpen}
            onTransitionEnd={(event) => {
              if (event.target !== event.currentTarget) {
                return;
              }

              if (!drawerOpen) {
                setActiveDrawer(null);
              }
            }}
          >
            {activeDrawer ? (
              <div className="nav-panel__content">
                <div className="header-drawer__grid header-drawer__grid--stack" aria-label={`${drawerContent[activeDrawer].title} gallery`}>
                  {drawerContent[activeDrawer].cards.map((card, index) => (
                    <article
                      key={`${activeDrawer}-${card.title}-${index}`}
                      className="drawer-card"
                      style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 10, 10, 0.05), rgba(6, 6, 6, 0.72)), url('${card.image}')` }}
                    >
                      <div className="drawer-card__overlay">
                        <span className="drawer-card__eyebrow">{card.eyebrow ?? drawerContent[activeDrawer].title}</span>
                        <span className="drawer-card__title">{card.title}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>
        <a href="#contact" className="contact-button">
          Contact Us →
        </a>
        <button
          ref={burgerButtonRef}
          type="button"
          className={`burger-button${mobileMenuOpen ? ' is-open' : ''}`}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>


      <aside
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`mobile-menu${mobileMenuOpen ? ' is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className={`mobile-menu__backdrop${mobileMenuOpen ? ' is-visible' : ''}`} onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-menu__panel">
          <div className="mobile-menu__header">
            <span>Menu</span>
            <button type="button" className="mobile-menu__close" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
              Close
            </button>
          </div>

          <div className="mobile-menu__sections">
            {mobileSections.map((section) => {
              const isOpen = expandedMobileSection === section.id;
              const sectionContent = section.id === 'home' ? null : drawerContent[section.id];

              return (
                <div key={section.id} className={`mobile-menu__section${isOpen ? ' is-open' : ''}`}>
                  <button
                    type="button"
                    className="mobile-menu__trigger"
                    onClick={() => {
                      if (section.id === 'home') {
                        setExpandedMobileSection((current) => (current === 'home' ? 'about' : 'home'));
                        return;
                      }

                      setExpandedMobileSection((current) => (current === section.id ? 'home' : section.id));
                    }}
                  >
                    <span>{section.label}</span>
                    <span className="mobile-menu__indicator">{isOpen ? '−' : '+'}</span>
                  </button>

                  <div className="mobile-menu__dropdown">
                    {section.id === 'home' ? (
                      <div className="mobile-menu__links">
                        <a href="#top" onClick={() => setMobileMenuOpen(false)}>
                          Back to top
                        </a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                          About
                        </a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)}>
                          Services
                        </a>
                        <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                          Portfolio
                        </a>
                      </div>
                    ) : sectionContent ? (
                      <div className="mobile-menu__cards">
                        {sectionContent.cards.slice(0, 4).map((card, index) => (
                          <article
                            key={`${section.id}-${card.title}-${index}`}
                            className="mobile-menu__card"
                            style={{ backgroundImage: `linear-gradient(180deg, rgba(10, 10, 10, 0.05), rgba(6, 6, 6, 0.72)), url('${card.image}')` }}
                          >
                            <div className="mobile-menu__card-overlay">
                              <span className="mobile-menu__card-eyebrow">{card.eyebrow ?? sectionContent.title}</span>
                              <span className="mobile-menu__card-title">{card.title}</span>
                            </div>
                          </article>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      <section className="hero-section">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          src="/assets/jason_roberts_cooking_with_fire%20(720p).mp4"
        >
          Your browser does not support the video banner.
        </video>
        <div className="hero-copy">
          <span className="eyebrow">Experience the best of Australia & New Zealand</span>
          <h1>TASTE OF AUS & NZ</h1>
        </div>
      </section>

      <section id="about" className="intro-section">
        <div className="intro-grid">
          <div className="intro-title">
            <h2>Brought to life through immersive storytelling</h2>
          </div>
          <div className="intro-copy">
            <p>
              Taste of AU & NZ creates cinematic brand work, premium content production and strategic storytelling
              across hospitality, culture, luxury lifestyle and global consumer audiences. We specialise in
              elevated experiences, authentic narratives and seamless delivery from concept to launch.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <img className="services-bg" src="/assets/butter.jpeg" alt="" aria-hidden="true" />
        <div className="services-overlay" />
        <div className="services-content" aria-label="Branding and marketing services">
          <div className="services-stage">
            <img className="services-line" src="/assets/Vector_Line.png" alt="" aria-hidden="true" />
            <span className="services-label services-label--center">Branding & Marketing</span>
            <span className="services-label services-label--left services-label--content">
              Content Production &amp; <br />
              Broadcast Media
            </span>
            <span className="services-label services-label--right services-label--photo">
              Photography, Film, TVC, <br />
              &amp; Documentaries
            </span>
            <span className="services-label services-label--left services-label--influencer">
              Influencer, KOL, &amp; <br />
              Celebrity Endorsements
            </span>
            <span className="services-label services-label--right services-label--vip">
              VIP &amp; Celebrity Experiences
            </span>
          </div>
        </div>
      </section>

      <section id="portfolio" className="categories-section">
        <div className="section-heading">
          <span className="section-title">Categories we support</span>
        </div>
        <div className="category-carousel" aria-label="Categories we support" ref={categoryCarouselRef}>
          <div className="category-track">
            {categories.map((category) => (
              <article
                key={category.title}
                className={`category-card${category.featured ? ' featured' : ''}`}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(24, 24, 24, 0.12), rgba(10, 10, 10, 0.65)), url('${category.image}')` }}
              >
                <div className="category-card__content">
                  <h3>{category.title}</h3>
                  {category.featured ? <p>{category.description}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="partner-carousel" aria-label="Client logos">
          <div className="partner-track">
            {partners.concat(partners).map((partner, index) => (
              <article className="partner-slide" key={`${partner.alt}-${index}`}>
                <img src={partner.src} alt={index < partners.length ? partner.alt : ''} className="partner-logo" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <div className="footer-brand footer-brand--large">
              <span>Taste of</span>
              <span>AUS &amp; NZ</span>
            </div>
            <p className="footer-ack">
              &lsquo;Taste&rsquo; acknowledges the Gadigal people of the Eora Nation, the land on which we work, and
              we pay our respects to Elders past, present and emerging.
            </p>
            <div className="footer-socials" aria-label="Social links">
              <a href="#contact" className="social-icon" aria-label="YouTube">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon__svg">
                  <rect x="1.5" y="4.75" width="21" height="14.5" rx="4" ry="4" fill="currentColor" />
                  <polygon points="10,8 16,12 10,16" fill="#fff" />
                </svg>
              </a>
              <a href="#contact" className="social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon__svg">
                  <path
                    d="M13.5 8.5V7.1c0-.8.5-1.3 1.4-1.3h1.7V3.1h-2.4c-2.5 0-4.1 1.6-4.1 4.1v1.3H8v2.9h2.1v9h3.4v-9H16l.5-2.9h-3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#contact" className="social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon__svg">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" ry="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links-block">
            <h4>Quick Links</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#portfolio">Partners</a>
          </div>

          <div className="footer-links-block">
            <h4>Contact</h4>
            <a href="#contact">Inquire</a>
          </div>

          <div className="footer-links-block">
            <h4>Support</h4>
            <a href="#contact">Privacy Policy</a>
            <a href="#contact">Help Center</a>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-field">
              <input type="email" placeholder="Enter your e-mail" aria-label="Email address" />
              <button type="button">Send</button>
            </div>
          </div>
        </div>
        <div className="footer-copy">© Taste of AUS &amp; NZ. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
