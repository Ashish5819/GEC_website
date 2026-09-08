import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dr. Mohammed Abbas Ali | Founder",
  description: "Meet Dr. Mohammed Abbas Ali, founder of Global Education & Careers, and explore his academic, international and public-service experience.",
  robots: { index: false, follow: false },
};

export default function FounderPage() {
  return <>
    <section className="founder-hero">
      <div className="container founder-hero-grid">
        <div className="founder-hero-copy">
          <span className="eyebrow light">Founder of Global Education & Careers</span>
          <h1>Dr. Mohammed Abbas Ali</h1>
          <p className="lead">An academic leader whose career spans more than four decades across management, behavioural studies, public administration and international education.</p>
          <div className="founder-facts" aria-label="Career highlights">
            <div><strong>40+ years</strong><span>in education and leadership</span></div>
            <div><strong>1979–2009</strong><span>Osmania University</span></div>
            <div><strong>2009–2015</strong><span>Al Ghurair University, Dubai</span></div>
          </div>
        </div>
        <figure className="founder-hero-photo"><Image src="/images/dr-mohammed-abbas-ali.webp" alt="Dr. Mohammed Abbas Ali seated in his office" fill priority sizes="(max-width: 820px) 100vw, 38vw"/></figure>
      </div>
    </section>

    <section className="section">
      <div className="container profile-layout">
        <aside className="profile-aside">
          <span className="eyebrow">At a glance</span>
          <h2>Academic depth. International perspective.</h2>
          <p>Dr. Abbas Ali’s work brings together management education, behavioural insight, leadership development and public-service training.</p>
          <Link className="text-link" href="/about">About GEC <span aria-hidden="true">→</span></Link>
        </aside>
        <div className="profile-story">
          <span className="eyebrow">A life in education and leadership</span>
          <h2>Building capability across classrooms, institutions and public service</h2>
          <p className="lead-small">Dr. Mohammed Abbas Ali earned his MBA and Ph.D. from Osmania University, Hyderabad. His professional journey has combined university teaching, international academic experience, executive learning and advisory responsibility.</p>
          <p>Across these roles, he has contributed to the development of students, professionals and public administrators by connecting management principles with ethical leadership, behavioural understanding and practical decision-making.</p>
          <ol className="career-timeline">
            <li><strong>Osmania University, Hyderabad</strong><span>Professor of Business Management from 1979 to 2009, contributing three decades to management education.</span></li>
            <li><strong>Al Ghurair University, Dubai</strong><span>Professor from 2009 to 2015, extending his academic work into an international learning environment.</span></li>
            <li><strong>Dr. MCR HRDI, Telangana</strong><span>Head and Senior Professor at the Centre for Management & Behavioural Studies, with involvement in leadership and public-administration training.</span></li>
          </ol>
        </div>
      </div>
    </section>

    <section className="section section-tint">
      <div className="container profile-layout">
        <div><span className="eyebrow">Advisory and public service</span><h2>Experience beyond the lecture hall</h2></div>
        <div className="profile-story"><p>Dr. Abbas Ali has served as Honorary Advisor to the Confederation of Indian Industry in Andhra Pradesh and as National Convener for an assistance programme in India connected with the Islamic Development Bank in Jeddah, Saudi Arabia.</p><p>From 1992 to 1997, he also worked as a full-time consultant to the AP Minorities Commission. These responsibilities reflect a career shaped by education, institutional development and public purpose.</p><p className="source-note">Professional history verified on 8 September 2026 against the <a href="https://www.mcrhrdi.gov.in/fellow.html" target="_blank" rel="noreferrer">official Dr. MCR HRDI profile</a> and the institute’s published course materials.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container"><blockquote className="founder-quote">“Education should help every learner see possibilities clearly, assess them responsibly and move forward with purpose.” (D)<cite>Founder vision for GEC (D)</cite></blockquote></div>
    </section>

    <section className="section section-tint"><div className="container callout"><div><span className="eyebrow">The GEC vision (D)</span><h2>Thoughtful guidance for global education decisions (D)</h2><p>GEC is being developed to help students and professionals explore education and career pathways through clear, ethical and individualised planning. (D)</p></div><Link className="button button-gold" href="/contact">Contact GEC</Link></div></section>
  </>;
}
