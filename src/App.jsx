import "./App.css";

import logo from "./assets/logo.jpg";
import profile3d from "./assets/profile-3d.jpg";

import {
  BrainCircuit,
  CalendarDays,
  Users,
  Rocket,
  BarChart3,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import genesisLogo from "./assets/genesis-logo.png";
import agingPlanLogo from "./assets/agingplan-logo.png";
import heroArt from "./assets/hero-art.png";

export default function App() {
  const services = [
    {
      title: "Social Media Strategy",
      desc: "Content strategy, audience research, brand voice, and growth planning tailored to your goals.",
      icon: <BrainCircuit size={32} />,
    },
    {
      title: "Content Planning & Calendar",
      desc: "Monthly/weekly content calendars with post themes, captions, hashtags, and timing.",
      icon: <CalendarDays size={32} />,
    },
    {
      title: "Community Management",
      desc: "Engaging with followers, replying to messages/comments, and building trust daily.",
      icon: <Users size={32} />,
    },
    {
      title: "Meta Ads / Boosting",
      desc: "Campaign setup, targeting, creatives, A/B testing, and optimization to drive results.",
      icon: <Rocket size={32} />,
    },
    {
      title: "Reporting & Analytics",
      desc: "Weekly/monthly performance reports with insights and next-step recommendations.",
      icon: <BarChart3 size={32} />,
    },
    {
      title: "Email Marketing",
      desc: "Mailchimp newsletters, automations, segmentation, and conversion-focused email flows.",
      icon: <Mail size={32} />,
    },
  ];

  const tools = [
    "Meta Business Suite",
    "Instagram",
    "Facebook",
    "LinkedIn",
    "TikTok",
    "Canva",
    "CapCut",
    "Buffer/Hootsuite",
    "Mailchimp",
    "Google Analytics",
    "ChatGPT",
  ];

  const caseStudies = [
    {
      brand: "Genesis Consultancy (Dubai)",
      result: "Improved engagement and built consistent brand presence with weekly strategy + content calendar.",
      work: ["Content Strategy", "Post Design Briefs", "Audience Engagement", "Performance Reports"],
      link: "#",
    },
    {
      brand: "AgingPlan LTC (USA)",
      result: "Managed social pages to increase trust, visibility, and consistent audience growth.",
      work: ["Brand Voice", "Content Planning", "Community Management"],
      link: "#",
    },
    {
      brand: "House of Wonder (Denmark)",
      result: "Email campaigns to support product launches and sales through Mailchimp.",
      work: ["Email Templates", "Segmentation", "Newsletter Campaigns"],
      link: "#",
    },
  ];

  const testimonials = [
    {
      quote:
        "Faisal always delivers consistent, high-quality content and understands our brand perfectly.",
      name: "Client",
      company: "Genesis Consultancy",
      logo: genesisLogo,
    },
    {
      quote:
        "Great communication, fast turnaround, and strong results. Highly recommended.",
      name: "Client",
      company: "AgingPlan LTC",
      logo: agingPlanLogo,
    },
  ];

  return (
    <div className="page">
      {/* Navbar */}
      <nav className="nav">
        <div className="nav__brand">
          <img src={logo} alt="Faisal" />
        </div>
        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#tools">Tools</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulsing-dot"></span> Available for new projects
            </div>
            <h1>
              Elevating Brands with <span className="gradient-text">Strategic Social Media</span>
            </h1>
            <p className="hero-description">
              Hi, I’m <strong>MD Faisal Iqbal</strong>. I turn followers into loyal customers through data-driven content strategies, community engagement, and targeted ad campaigns.
            </p>

            <div className="hero-actions">
              <a className="btn primary big" href="#work">View My Work</a>
              <a className="btn big-outline" href="#contact">Let's Talk</a>
            </div>

            <div className="hero-stats-new">
              <div className="stat-item">
                <span className="stat-value">5+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">Global</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-value">100%</span>
                <span className="stat-label">Dedication</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <img src={heroArt} alt="Social Media Strategy Art" className="hero-art" />
              <div className="floating-card c1">
                <span>🚀</span> Growth
              </div>
              <div className="floating-card c2">
                <span>📊</span> Analytics
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section">
        <div className="about-container">
          <div className="about-image">
            <img src={profile3d} alt="MD Faisal Iqbal" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I’m a Social Media Manager with 5+ years of experience working with
              international clients. I plan content calendars, manage communities,
              run Meta ad campaigns, and track performance to improve engagement and growth.
            </p>
            <p>
              I care about consistent branding, clear communication, and measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="card service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work / Case Studies */}
      <section id="work" className="section">
        <h2>Work & Case Studies</h2>
        <div className="grid">
          {caseStudies.map((c) => (
            <div key={c.brand} className="card">
              <h3>{c.brand}</h3>
              <p className="muted">{c.result}</p>

              <div className="chips small">
                {c.work.map((w) => (
                  <span key={w} className="chip">{w}</span>
                ))}
              </div>

              {c.link !== "#" && (
                <a className="card__link" href={c.link} target="_blank">
                  View Details →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="section">
        <h2>Tools I Use</h2>
        <div className="chips">
          {tools.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <h2>Testimonials</h2>
        <div className="grid">
          {testimonials.map((t, i) => (
            <div key={i} className="card testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-logo-wrapper">
                  <img src={t.logo} alt={t.company} />
                </div>
                <div className="testimonial-info">
                  <h4>{t.company}</h4>
                  <p className="muted small">{t.name}</p>
                </div>
              </div>
              <p className="quote">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <h2>Ready to Scale Your Brand?</h2>
            <p className="contact-subtitle">
              Let's turn your audience into a community and your followers into customers.
            </p>
            <a href="mailto:faisalnotun2@gmail.com" className="email-btn-large">
              <Mail className="btn-icon" />
              <span>faisalnotun2@gmail.com</span>
            </a>
          </div>

          <div className="contact-links">
            <a href="https://www.facebook.com/Fayshal27/" target="_blank" className="contact-card facebook">
              <div className="contact-card-info">
                <span className="contact-card-label">Facebook</span>
                <span className="contact-card-sub">Follow for updates</span>
              </div>
              <ArrowUpRight className="contact-arrow" />
            </a>

            <a href="https://www.linkedin.com/in/mdfaisaliqbal" target="_blank" className="contact-card linkedin">
              <div className="contact-card-info">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-sub">Let's connect</span>
              </div>
              <ArrowUpRight className="contact-arrow" />
            </a>

            <a href="https://www.fiverr.com/mdfaisal27" target="_blank" className="contact-card fiverr">
              <div className="contact-card-info">
                <span className="contact-card-label">Fiverr</span>
                <span className="contact-card-sub">Hire me directly</span>
              </div>
              <ArrowUpRight className="contact-arrow" />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} MD Faisal Iqbal — Social Media Manager
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801951336251"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
          className="whatsapp-icon"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
