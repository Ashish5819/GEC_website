export type PageKind = "standard" | "listing" | "article" | "event" | "form" | "legal";

export type PageData = {
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  kind?: PageKind;
  items?: string[];
};

export const contact = {
  owner: "Dr. Abbas Ali",
  phone: "7093377801",
  email: "professorabbasali854@gmail.com",
  city: "Hyderabad, Telangana, India",
};

export const destinations = ["Australia", "Canada", "Emerging Destinations", "Europe", "Germany", "Ireland", "UK", "USA"];
export const programs = ["Undergraduate", "Postgraduate", "Doctoral & Research", "Professional", "Executive Education", "Short-term"];
export const fields = ["Architecture & Design", "Artificial Intelligence", "Business & Management", "Computer Science", "Cybersecurity", "Data Science", "Engineering", "Finance & Accounting", "Law", "Nursing", "Psychology", "Public Health", "Research", "Robotics & Automation", "Social Sciences"];
export const services = ["Application Assistance", "Career Counselling", "Career & Employability", "Country Selection", "Course Selection", "CV, Résumé & Portfolio", "Financial Aid & Education Loans", "Language Training", "Personality & Aptitude Guidance", "Post-arrival Support", "Pre-departure Support", "Scholarship Guidance", "SOP & Documentation", "Test Preparation", "University Selection", "Visa Assistance"];
export const tests = ["Duolingo", "GMAT", "GRE", "IELTS", "PTE", "SAT", "TOEFL"];
export const languages = ["Arabic", "French", "German", "Italian", "Spanish"];

export const toSlug = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const explicit: Record<string, PageData> = {
  "/about": { path: "/about", eyebrow: "About GEC", title: "Guidance shaped around your ambitions (D)", intro: "Global Education & Careers is being developed as an overseas education consultancy based in Hyderabad. Our planned approach puts clarity, individual goals and informed choices first. (D)", items: ["Personalised guidance built around each learner’s goals (D)", "Clear next steps across study and career planning (D)", "Responsible support without outcome guarantees (D)"] },
  "/about/founder": { path: "/about/founder", eyebrow: "Founder", title: "Meet Dr. Mohammed Abbas Ali", intro: "Meet the founder of Global Education & Careers and explore a career spanning more than four decades across management education, behavioural studies, public administration and institutional advisory work." },
  "/about/our-story": { path: "/about/our-story", eyebrow: "Our story", title: "A thoughtful start for a global journey (D)", intro: "GEC is in its pre-launch stage, with an intended base in Hyderabad. The organisation’s fuller story will be added after business details are approved. (D)" },
  "/about/vision-mission": { path: "/about/vision-mission", eyebrow: "Vision & mission", title: "Education guidance with purpose (D)", intro: "Our proposed vision is to help learners make confident, well-researched international education and career decisions. (D)" },
  "/about/why-choose-gec": { path: "/about/why-choose-gec", eyebrow: "Why GEC", title: "Support that starts with listening (D)", intro: "GEC plans to combine personal attention, structured research and transparent guidance throughout the student journey. (D)", items: ["Student-centred conversations (D)", "Transparent, step-by-step guidance (D)", "No admission, visa, scholarship or career guarantees"] },
  "/about/leadership-advisors": { path: "/about/leadership-advisors", eyebrow: "Leadership", title: "Leadership and advisors (D)", intro: "Leadership and advisor profiles will appear here only after roles, biographies and permissions are confirmed. (D)" },
  "/study-abroad": { path: "/study-abroad", eyebrow: "Study abroad", title: "Explore where your education could take you (D)", intro: "Compare proposed destination pathways, learning environments and planning considerations before making a decision. Details must be verified against official sources before use. (D)", kind: "listing", items: destinations },
  "/programs": { path: "/programs", eyebrow: "Programs", title: "Find a study level that fits your next step (D)", intro: "Explore broad program categories and use them as a starting point for an individual academic planning conversation. (D)", kind: "listing", items: programs },
  "/services": { path: "/services", eyebrow: "Planned services", title: "Guidance across the education journey (D)", intro: "These services describe GEC’s intended offering and are not confirmation that every service is currently operational. (D)", kind: "listing", items: services },
  "/university-partnerships": { path: "/university-partnerships", eyebrow: "Institutions", title: "University partnership opportunities (D)", intro: "GEC plans to explore responsible collaborations with universities and education organisations. No partnership should be inferred unless formally confirmed. (D)", items: ["Institutional collaboration (D)", "University visits (D)", "Memoranda of understanding (D)"] },
  "/resources": { path: "/resources", eyebrow: "Resources", title: "Practical resources for informed decisions (D)", intro: "Browse planned guides, articles, checklists, events and scholarship information. Time-sensitive details require official verification. (D)", kind: "listing", items: ["Blog", "Guides", "Checklists", "Events", "Scholarships", "Student resources", "Frequently asked questions"] },
  "/resources/blog": { path: "/resources/blog", eyebrow: "Insights", title: "Study abroad insights (D)", intro: "Sample articles demonstrate the planned resource experience. All facts and dates must be reviewed before publication. (D)", kind: "listing", items: ["How to choose the right study destination (D)", "How to write a strong SOP (D)", "Germany vs Ireland for international students (D)"] },
  "/resources/events": { path: "/resources/events", eyebrow: "Events", title: "Upcoming learning events (D)", intro: "The events shown are interface examples only. No event, speaker, date or registration availability is confirmed. (D)", kind: "listing", items: ["International scholarship webinar (D)", "SOP writing workshop (D)", "Study in Germany information session (D)"] },
  "/resources/faq": { path: "/resources/faq", eyebrow: "FAQ", title: "Frequently asked questions (D)", intro: "Starting points for common questions. Personal circumstances and current official rules should always be checked. (D)", items: ["When should I begin planning? (D)", "How do I shortlist a destination? (D)", "What documents might be required? (D)"] },
  "/contact": { path: "/contact", eyebrow: "Contact", title: "Start a conversation with GEC (D)", intro: "GEC is in pre-launch planning. You can use the confirmed contact details below; the website forms remain demonstrations and do not send or store information. (D)" },
  "/contact/hyderabad-office": { path: "/contact/hyderabad-office", eyebrow: "Hyderabad", title: "Intended base city: Hyderabad", intro: "GEC’s intended base is Hyderabad, Telangana, India. The exact office address and opening hours are not yet confirmed. (D)" },
  "/contact/online-counselling": { path: "/contact/online-counselling", eyebrow: "Online counselling", title: "Plan an online conversation (D)", intro: "Online counselling is a proposed service. Availability, platform and appointment times are not yet confirmed. (D)", kind: "form" },
  "/book-counselling": { path: "/book-counselling", eyebrow: "Counselling", title: "Request a counselling conversation (D)", intro: "This local demonstration does not create an appointment, send information or store personal data. (D)", kind: "form" },
  "/contact/enquiry": { path: "/contact/enquiry", eyebrow: "General enquiry", title: "Tell us what you would like to explore (D)", intro: "Use sample information only. This local demonstration does not transmit or store your entry. (D)", kind: "form" },
  "/contact/institutional-enquiry": { path: "/contact/institutional-enquiry", eyebrow: "Institutions", title: "Explore a future collaboration (D)", intro: "This interface is a local demonstration. It does not submit or store institutional information. (D)", kind: "form" },
  "/university-partnerships/enquiry": { path: "/university-partnerships/enquiry", eyebrow: "Partnership enquiry", title: "Start an institutional conversation (D)", intro: "This interface is a local demonstration and creates no formal partnership or obligation. (D)", kind: "form" },
};

const legalTitles: Record<string, string> = {
  "/privacy-policy": "Privacy policy (D)", "/terms": "Terms of use (D)", "/cookie-policy": "Cookie policy (D)", "/disclaimer": "Website disclaimer (D)", "/refund-policy": "Refund policy (D)", "/data-deletion": "Data deletion information (D)",
};

const articles: Record<string, string> = {
  "/resources/blog/how-to-choose-the-right-study-destination": "How to choose the right study destination (D)",
  "/resources/blog/how-to-write-a-strong-sop": "How to write a strong SOP (D)",
  "/resources/blog/germany-vs-ireland-for-international-students": "Germany vs Ireland for international students (D)",
};

const events: Record<string, string> = {
  "/resources/events/international-scholarship-webinar": "International scholarship webinar (D)",
  "/resources/events/sop-writing-workshop": "SOP writing workshop (D)",
  "/resources/events/study-in-germany-information-session": "Study in Germany information session (D)",
};

const otherRoutes: Record<string, string> = {
  "/university-partnerships/institutional-collaboration": "Institutional collaboration (D)", "/university-partnerships/mou": "Memoranda of understanding (D)", "/university-partnerships/opportunities": "Partnership opportunities (D)", "/university-partnerships/university-visits": "University visits (D)",
  "/resources/checklists": "Planning checklists (D)", "/resources/guides": "Study abroad guides (D)", "/resources/scholarships": "Scholarship resources (D)", "/resources/student-resources": "Student resources (D)",
  "/registrations": "Event registration (D)", "/thank-you": "Thank you (D)", "/form-error": "Form status (D)", "/error": "Something needs attention (D)",
};

const generic = (path: string, group: string, title: string): PageData => ({
  path, eyebrow: group, title: `${title} (D)`,
  intro: `Explore planned ${group.toLowerCase()} information and use it as a starting point for a personalised conversation. Details, availability and time-sensitive guidance must be confirmed before decisions are made. (D)`,
  items: ["Explore the key considerations (D)", "Prepare questions for a guidance conversation (D)", "Verify current details with official sources (D)"],
});

const generated: Record<string, PageData> = {};
destinations.forEach((name) => generated[`/study-abroad/${toSlug(name)}`] = generic(`/study-abroad/${toSlug(name)}`, "Study abroad", `Study in ${name}`));
programs.forEach((name) => generated[`/programs/${toSlug(name)}`] = generic(`/programs/${toSlug(name)}`, "Programs", name));
fields.forEach((name) => generated[`/fields/${toSlug(name)}`] = generic(`/fields/${toSlug(name)}`, "Fields of study", name));
services.forEach((name) => generated[`/services/${toSlug(name)}`] = generic(`/services/${toSlug(name)}`, "Planned services", name));
tests.forEach((name) => generated[`/services/test-preparation/${toSlug(name)}`] = generic(`/services/test-preparation/${toSlug(name)}`, "Test preparation", name));
languages.forEach((name) => generated[`/services/language-training/${toSlug(name)}`] = generic(`/services/language-training/${toSlug(name)}`, "Language training", name));

for (const [path, title] of Object.entries(legalTitles)) explicit[path] = { path, eyebrow: "Legal information", title, intro: "This is proposed placeholder legal information and has not been legally reviewed or approved for publication. (D)", kind: "legal" };
for (const [path, title] of Object.entries(articles)) explicit[path] = { path, eyebrow: "Sample article", title, intro: "This article page is a content demonstration. Its facts, comparisons and recommendations require editorial and official-source verification before publication. (D)", kind: "article" };
for (const [path, title] of Object.entries(events)) explicit[path] = { path, eyebrow: "Sample event", title, intro: "This is a sample event page only. The date, venue, speakers and registration are not confirmed. (D)", kind: "event" };
for (const [path, title] of Object.entries(otherRoutes)) explicit[path] = { path, eyebrow: path.includes("resource") ? "Resources" : "GEC", title, intro: "This planned page is included for local website review. Its content and availability are not yet approved. (D)" };

export const pageMap: Record<string, PageData> = { ...generated, ...explicit };
export const publicPaths = Object.keys(pageMap);
export const searchItems = [{ path: "/", title: "Home" }, ...publicPaths.map((path) => ({ path, title: pageMap[path].title }))];

export const primaryNav = [
  { label: "Study abroad", href: "/study-abroad" },
  { label: "Programs", href: "/programs" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];
