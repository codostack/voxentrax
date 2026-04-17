import { useState } from "react";
import { 
  Globe, 
  Settings, 
  ShieldCheck, 
  UserCircle, 
  Cpu, 
  LifeBuoy, 
 Search, 
 
} from "lucide-react";
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

  :root {
    --bg-main: #fcfcfd;
    --card-bg: #ffffff;
    --text-main: #101828;
    --text-muted: #667085;
    --border-light: #eaecf0;
    
    --color-1: #06b6d4; 
    --color-2: #f97316; 
    --color-3: #8b5cf6; 
    --color-4: #ec4899; 
    --color-5: #10b981; 
    --color-6: #3b82f6; 
  }

  .faq-root * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
    font-family: 'Plus Jakarta Sans', sans-serif; 
  }

  .faq-section {
    width: 100%;
    background: var(--bg-main);
    padding: 10px 14px;
    min-height: 100vh;
  }

  .faq-container { max-width: 1200px; margin: 0 auto; }

  /* ── UPDATED HEADER: CENTERED WITH BORDER ── */
/* ── UPDATED HEADER: PROFESSIONAL BOXED STYLE ── */
  .faq-header { 
    margin-bottom: 14px; 
    padding: 10px 20px; /* Increased padding for a spacious, professional feel */
    text-align: center; 
    border: 1px solid var(--border-light); /* Full border box */
    border-radius: 8px; /* Slight rounding for a modern touch */
   
    width: 100%; /* Ensures it spans the full width of the container */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03); /* Soft shadow for depth */
  }
  
  .faq-eyebrow {
    color: var(--color-1);
    font-weight: 700;
    font-size: 12px; /* Slightly smaller for better contrast with title */
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-bottom: 16px;
    display: block;
    opacity: 0.8;
  }

  .faq-title {
    font-size: clamp(24px, 4vw, 32px);
    color: #9ED3DC; /* Kept your specific blue */
    font-weight: 600; /* Increased weight slightly for "Professional" look */
    line-height: 1.3;
    letter-spacing: -0.2px;
    max-width: 800px;
    margin: 0 auto;
  }
/* ── UPDATED ICON CONTAINER ── */
  .faq-nav-icon-wrapper {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--active-color);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
    flex-shrink: 0;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  /* ── GRID & SIDEBAR ── */
  .faq-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 48px;
    align-items: start;
  }

  @media (max-width: 992px) {
    .faq-grid { grid-template-columns: 1fr; }
    .faq-sidebar { position: static !important; margin-bottom: 30px; }
  }

  .faq-sidebar { position: sticky; top: 40px; }
  .faq-nav { display: flex; flex-direction: column; gap: 12px; }

  .faq-nav-item {
    display: flex;
    align-items: center;
    background: var(--card-bg);
    padding: 10px;
    border-radius: 100px 24px 24px 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid var(--border-light);
  }

  .faq-nav-item.active {
    background: #fff;
    border-color: var(--active-color);
    transform: translateX(8px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
  }

  .faq-nav-circle {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--active-color);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    margin-right: 16px;
    flex-shrink: 0;
  }

  .faq-nav-label { display: block; font-size: 15px; font-weight: 600; color: var(--text-main); }
  .faq-nav-sub { font-size: 12px; color: var(--text-muted); }

  /* ── SEARCH (PROFESSIONAL UPGRADE) ── */
.faq-search-area { 
  margin-bottom: 28px; 
  position: relative; 
}

.faq-search-input {
  width: 100%;
  padding: 14px 20px 14px 52px;
  border-radius: 14px;
  border: 1px solid var(--border-light);
  background: #ffffff;
  font-size: 15px;
  outline: none;
  color: var(--text-main);

  /* ✨ smooth UX */
  transition: all 0.25s ease;

  /* ✨ soft shadow */
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.04);
}

/* ✨ hover effect */
.faq-search-input:hover {
  border-color: #d0d5dd;
}

/* 🔥 focus (premium look) */
.faq-search-input:focus {
  border-color: var(--color-1);
  box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.15);
}

/* placeholder */
.faq-search-input::placeholder {
  color: #98a2b3;
  font-weight: 400;
}

/* icon */
.faq-search-icon { 
  position: absolute; 
  left: 18px; 
  top: 50%; 
  transform: translateY(-50%);
  color: #98a2b3;
  transition: color 0.25s ease;
}

/* icon highlight on focus */
.faq-search-input:focus + .faq-search-icon {
  color: var(--color-1);
}
  /* ── ACCORDION ── */
  .faq-main-list { display: flex; flex-direction: column; gap: 12px; }
  .faq-card {
    background: #fff;
    border: 1px solid var(--border-light);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s;
  }
  .faq-card.open { border-color: var(--active-color); }
  .faq-trigger {
    width: 100%; padding: 20px 24px; background: none; border: none;
    display: flex; align-items: center; justify-content: space-between;
    cursor: pointer; text-align: left; gap: 16px;
  }
  .faq-q-text { font-size: 16px; font-weight: 600; color: var(--text-main); }
  .faq-icon-box {
    width: 28px; height: 28px; border-radius: 6px; background: #f9fafb;
    display: flex; align-items: center; justify-content: center;
    color: var(--text-muted); transition: all 0.3s;
  }
  .faq-card.open .faq-icon-box { background: var(--active-color); color: #fff; transform: rotate(45deg); }
  .faq-body { max-height: 0; overflow: hidden; transition: max-height 0.4s ease; }
  .faq-answer { padding: 0 24px 24px 24px; color: var(--text-muted); line-height: 1.6; font-size: 15px; }
`;
const categories = [
  { name: "General", sub: "Platform basics", color: "var(--color-1)", icon: Globe },
  { name: "Technical", sub: "Setup & Speed", color: "var(--color-2)", icon: Settings },
  { name: "Security", sub: "Privacy & Fraud", color: "var(--color-3)", icon: ShieldCheck },
  { name: "Account", sub: "Porting & Billing", color: "var(--color-4)", icon: UserCircle },
  { name: "Features", sub: "AI & Integrations", color: "var(--color-5)", icon: Cpu },
  { name: "Support", sub: "Emergency & Help", color: "var(--color-6)", icon: LifeBuoy },
];

const faqs = [
  { id: 1, cat: "General", q: "What is VoIP?", a: "VoIP (Voice over Internet Protocol) allows you to make voice and video calls over the internet instead of traditional phone lines." },
  { id: 2, cat: "General", q: "Who can use VoIP services?", a: "VoIP is suitable for businesses of all sizes, remote teams, and individuals who need flexible communication." },
  { id: 3, cat: "General", q: "Can I make international calls?", a: "Yes, VoIP allows you to make international calls at significantly reduced rates compared to traditional providers." },
  { id: 4, cat: "General", q: "How quickly can I get started?", a: "Most users can set up and start using VoIP within minutes after account activation." },
  { id: 5, cat: "Technical", q: "How does VoIP work?", a: "Your voice is converted into digital packets and transmitted securely over the internet using advanced codecs." },
  { id: 6, cat: "Technical", q: "What internet speed is required?", a: "A stable connection with at least 100 kbps per call is recommended for optimal quality." },
  { id: 7, cat: "Technical", q: "What happens if my internet goes out?", a: "We offer Call Continuity which automatically reroutes calls to your mobile device if your office internet fails." },
  { id: 8, cat: "Technical", q: "What router settings are best?", a: "Enabling Quality of Service (QoS) on your router to prioritize SIP traffic ensures the best audio quality." },
  { id: 9, cat: "Security", q: "Is my data safe?", a: "We use TLS and SRTP end-to-end encryption, backed by ISO-certified cloud infrastructure." },
  { id: 10, cat: "Security", q: "Do you protect against spam calls?", a: "We implement AI-driven fraud detection, IP filtering, and traffic monitoring to prevent unauthorized access." },
  { id: 11, cat: "Security", q: "How do you prevent 'vishing'?", a: "We use STIR/SHAKEN protocols to verify caller ID and protect against number spoofing." },
  { id: 12, cat: "Account", q: "Can I port my existing number?", a: "Yes — you can transfer your existing business number with zero downtime. Our team manages the entire process." },
  { id: 13, cat: "Account", q: "Can I cancel anytime?", a: "Yes. There are no long-term contracts. You can upgrade, downgrade, or cancel anytime from your dashboard." },
  { id: 14, cat: "Account", q: "Are there activation fees?", a: "No. Our pricing is transparent. Setup and activation are 100% free with no hidden charges." },
  { id: 15, cat: "Features", q: "What features are included?", a: "HD calling, IVR systems, real-time analytics, recordings, and CRM integrations are all included." },
  { id: 16, cat: "Features", q: "Do you offer call recording?", a: "Yes, automatic and on-demand call recording is available with secure cloud storage." },
  { id: 17, cat: "Features", q: "Does the platform support Video Conferencing?", a: "Absolutely. We provide HD video conferencing with screen sharing and meeting recording for up to 500 participants." },
  { id: 18, cat: "Features", q: "Is VoIP suitable for remote teams?", a: "Yes. It enables teams to communicate through voice, video, and messaging from anywhere in the world." },
  { id: 19, cat: "Support", q: "Can I use VoIP for emergency calls (911)?", a: "Yes, our service supports E911. You must maintain an updated physical address in your account settings for emergency services." },
  { id: 20, cat: "Support", q: "What support is available?", a: "We provide 24/7 technical support via live chat, email, and phone for all our customers." },
  { id: 21, cat: "Support", q: "Is training provided for my staff?", a: "Yes, we offer free onboarding webinars and a comprehensive video knowledge base to get your team up to speed." }
];

function FAQCard({ faq, color }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-card ${open ? 'open' : ''}`} style={{ '--active-color': color }}>
      <button className="faq-trigger" onClick={() => setOpen(!open)}>
        <span className="faq-q-text">{faq.q}</span>
        <span className="faq-icon-box">+</span>
      </button>
      <div className="faq-body" style={{ maxHeight: open ? "400px" : "0" }}>
        <p className="faq-answer">{faq.a}</p>
      </div>
    </div>
  );
}

export default function ProfessionalVoIPFAQ() {
  const [activeCat, setActiveCat] = useState("General");
  const [search, setSearch] = useState("");

  const filtered = faqs.filter(f => 
    f.cat === activeCat && 
    (f.q.toLowerCase().includes(search.toLowerCase()))
  );

  const activeCategoryData = categories.find(c => c.name === activeCat);



 return (
    <div className="faq-root">
      <style>{styles}</style>
      <section className="faq-section">
        <div className="faq-container">
          <header className="faq-header">
            <span className="faq-eyebrow">Expert Guidance</span>
            <h5 className="faq-title">Helpful Answers to Your Questions</h5>
          </header>

          <div className="faq-grid">
            <aside className="faq-sidebar">
              <nav className="faq-nav">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <div 
                      key={cat.name} 
                      className={`faq-nav-item ${activeCat === cat.name ? 'active' : ''}`}
                      style={{ '--active-color': cat.color }}
                      onClick={() => setActiveCat(cat.name)}
                    >
                      <div className="faq-nav-icon-wrapper">
                        <Icon size={22} strokeWidth={2.5} />
                      </div>
                      <div className="faq-nav-text">
                        <span className="faq-nav-label">{cat.name}</span>
                        <span className="faq-nav-sub">{cat.sub}</span>
                      </div>
                    </div>
                  );
                })}
              </nav>
            </aside>

            <div className="faq-content-main">
              <div className="faq-search-area">
                <Search className="faq-search-icon" size={20} />
                <input 
                  className="faq-search-input"
                  type="text" 
                  placeholder={`Search in ${activeCat}...`} 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="faq-main-list">
                {filtered.map(faq => (
                  <FAQCard key={faq.id} faq={faq} color={activeCategoryData.color} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}