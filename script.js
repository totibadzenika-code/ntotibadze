/**
 * NEXUS NOVA - High-Tech Interactive Landing Page Script
 * Features:
 * - HTML5 Canvas Constellation Particle System
 * - Bilingual i18n System (Georgian <-> English)
 * - 3D Tilt Parallax Card
 * - Animated Stats Counter
 * - Interactive Tabs & Filter Chips
 * - Real-Time Code/Stream Interactive Terminal Widget
 * - Validated Contact Form with Toast Notification
 * - Smooth Scroll & Active Nav Spy
 * - FAQ Accordion
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. BILINGUAL INTERNATIONALIZATION (i18n)
  // ==========================================
  const translations = {
    ka: {
      "nav.hero": "მთავარი",
      "nav.about": "ჩვენ შესახებ",
      "nav.features": "შესაძლებლობები",
      "nav.connect": "კავშირი",
      "nav.cta": "დაწყება",
      
      "hero.badge": "✨ AI-ით აღჭურვილი შემდეგი თაობის ეკოსისტემა",
      "hero.title_part1": "შექმენი მომავლის",
      "hero.title_highlight": "ციფრული გამოცდილება",
      "hero.title_part2": "შეუზღუდავი ძალით",
      "hero.description": "თანამედროვე ხელოვნური ინტელექტი, ელვისებური სისწრაფე და უმაღლესი დონის უსაფრთხოება ერთიან ინოვაციურ პლატფორმაზე. გადააქციე შენი თამამი იდეები რეალობად წამებში.",
      "hero.cta_start": "დაიწყე უფასოდ",
      "hero.cta_explore": "შესაძლებლობების ნახვა",
      "hero.proof_text": "<strong>10,000+</strong> ინოვატორი იყენებს მსოფლიოში",
      "hero.live_status": "ონლაინ",
      "hero.dash_speed": "სიჩქარე",
      "hero.dash_ai": "AI დატვირთვა",
      "hero.dash_chart_title": "მონაცემთა ნაკადის ტრაფიკი",
      "hero.dash_log1": "ავტონომიური AI მოდელი ინიციალიზებულია",
      "hero.dash_log2": "კვანტური შიფრაციის ფარი აქტიურია",

      "about.tag": "// ჩვენ შესახებ //",
      "about.title_part1": "ტექნოლოგიური ევოლუცია,",
      "about.title_highlight": "რომელიც ცვლის წესებს",
      "about.subtitle": "Nexus Nova აერთიანებს მაღალი დონის ინჟინერიას, მანქანურ სწავლებასა და მომხმარებელზე ორიენტირებულ დიზაინს, რათა შექმნას ციფრული სამყაროს ახალი სტანდარტი.",
      "about.metric1_title": "საიმედოობა & Uptime",
      "about.metric1_desc": "გლობალური კლასტერული ინფრასტრუქტურა შეფერხების გარეშე",
      "about.metric2_title": "ოპერაცია წამში",
      "about.metric2_desc": "ულტრა-სწრაფი ასინქრონული დამუშავება პარალელურ რეჟიმში",
      "about.metric3_title": "ქვეყანა მსოფლიოში",
      "about.metric3_desc": "Edge სერვერები 6 კონტინენტზე მაქსიმალური სიჩქარისთვის",
      "about.metric4_title": "ინტელექტუალური მხარდაჭერა",
      "about.metric4_desc": "მყისიერი პასუხები და ინჟინრების ექსპერტული დახმარება",
      "about.tab_mission": "ჩვენი მისია",
      "about.tab_vision": "ხედვა & მომავალი",
      "about.tab_security": "უსაფრთხოება & ეთიკა",
      "about.pane_mission_title": "რთული პროცესების გამარტივება მოწინავე ტექნოლოგიებით",
      "about.pane_mission_p1": "ჩვენი მისიაა მივცეთ ნებისმიერ დეველოპერს, სტარტაპსა თუ მსხვილ საწარმოს წვდომა უახლეს AI ალგორითმებსა და ელვისებურ ინფრასტრუქტურაზე.",
      "about.mission_item1": "ღია, ადაპტირებადი და მოქნილი არქიტექტურა",
      "about.mission_item2": "დროის და რესურსების 80%-ით ეკონომია ავტომატიზაციით",
      "about.mission_item3": "უმაღლესი სტანდარტის შემუშავების კულტურა",
      "about.graphic_badge1": "ინოვაცია",
      "about.graphic_badge1_sub": "ყოველდღიური წინსვლა",
      "about.graphic_badge2": "სისწრაფე",
      "about.graphic_badge2_sub": "ნულოვანი დაყოვნება",
      "about.graphic_badge3": "მასშტაბი",
      "about.graphic_badge3_sub": "შეუზღუდავი ზრდა",
      "about.pane_vision_title": "ციფრული სამყაროს შემდეგი ჰორიზონტი",
      "about.pane_vision_p1": "ჩვენ გვჯერა, რომ მომავალში ადამიანური კრეატიულობა და ხელოვნური ინტელექტი შექმნიან სრულყოფილ სინერგიას. ჩვენ ვქმნით სისტემებს, რომლებიც უსწრებენ მოვლენებს.",
      "about.vision_item1": "ავტონომიური აგენტური ქსელები და კოლაბორაცია",
      "about.vision_item2": "პრედიქტიული მოდელები რეალური დროის გადაწყვეტილებებისთვის",
      "about.vision_item3": "ეკოლოგიური და ენერგოეფექტური გამოთვლითი სიმძლავრეები",
      "about.vision_core": "CORE INTELLIGENCE",
      "about.pane_sec_title": "უსაფრთხოება, რომელსაც ენდობიან გლობალური ლიდერები",
      "about.pane_sec_p1": "მონაცემთა დაცვა და ეთიკური AI ჩვენი ფუნდამენტური პრინციპია. ჩვენი Zero-Trust არქიტექტურა იცავს ყოველ ტრანზაქციასა და ინფორმაციულ ნაკადს.",
      "about.sec_item1": "End-to-End AES-256 და RSA-4096 დაშიფვრა",
      "about.sec_item2": "SOC 2 Type II და GDPR სრული შესაბამისობა",
      "about.sec_item3": "ავტომატური კიბერ-საფრთხეების დეტექცია 0.01 წამში",

      "features.tag": "// შესაძლებლობები //",
      "features.title_part1": "ყველაფერი რაც გჭირდება",
      "features.title_highlight": "სრული ტრანსფორმაციისთვის",
      "features.subtitle": "აღმოაჩინე მოწინავე ინსტრუმენტები და ინტელექტუალური მოდულები, შექმნილი მაქსიმალური პროდუქტიულობისთვის.",
      "features.filter_all": "ყველა",
      "features.filter_ai": "ხელოვნური ინტელექტი",
      "features.filter_speed": "სიჩქარე & Cloud",
      "features.filter_sec": "უსაფრთხოება",
      "features.card1_title": "Ultra AI Engine",
      "features.card1_desc": "ღრმა ნეირონული მოდელები რეალურ დროში ანალიზისა და ავტონომიური გადაწყვეტილებების მისაღებად.",
      "features.card2_title": "Lightning Edge Cloud",
      "features.card2_desc": "გლობალური განაწილებული ქსელი 10 მილიწამზე ნაკლები დაყოვნებით მსოფლიოს ნებისმიერ წერტილში.",
      "features.card3_title": "Quantum-Grade დაცვა",
      "features.card3_desc": "მრავალდონიანი დაშიფვრა, ბიომეტრიული ვერიფიკაცია და ნულოვანი ნდობის (Zero-Trust) უსაფრთხოების მოდელი.",
      "features.card4_title": "პრედიქტიული ანალიტიკა",
      "features.card4_desc": "ვიზუალური დაფები და მონაცემთა ინტელექტუალური დამუშავება მომავალი ტრენდების ზუსტი პროგნოზირებისთვის.",
      "features.card5_title": "პროცესების ავტომატიზაცია",
      "features.card5_desc": "გაათავისუფლე გუნდი მონოტონური სამუშაოსგან ჭკვიანი ტრიგერებითა და მოქნილი ლოგიკური ჯაჭვებით.",
      "features.card6_title": "მოქნილი REST & GraphQL API",
      "features.card6_desc": "სრული დოკუმენტაცია, მრავალენოვანი SDK-ები და მარტივი ინტეგრაცია 200+ თანამედროვე პლატფორმასთან.",
      "features.demo_tab1": "AI ნაკადის გენერატორი",
      "features.demo_tab2": "სიჩქარის ტესტი",
      "features.demo_tab3": "კვანტური შიფრაცია",
      "features.demo_run": "გაშვება",

      "connect.tag": "// კავშირი //",
      "connect.title_part1": "დაგვიკავშირდით და",
      "connect.title_highlight": "შევქმნათ მომავალი",
      "connect.subtitle": "გაქვთ საინტერესო პროექტი, შეკითხვა ან გსურთ პარტნიორობა? ჩვენი გუნდი მზადაა უპასუხოს თქვენს ნებისმიერ ინიციატივას.",
      "connect.info_title": "პირდაპირი კონტაქტი",
      "connect.info_sub": "ჩვენი გუნდი ოპერატიულად პასუხობს ყოველ სამუშაო დღეს 24 საათის განმავლობაში.",
      "connect.office_status": "ოფისი ღიაა | თბილისი, საქართველო",
      "connect.email_label": "ელ-ფოსტა",
      "connect.phone_label": "ტელეფონი",
      "connect.loc_label": "ლოკაცია",
      "connect.loc_val": "ჭავჭავაძის გამზ. 37, თბილისი",
      "connect.social_label": "შემოგვიერთდით ქსელში:",
      "connect.form_title": "გამოგვიგზავნეთ შეტყობინება",
      "connect.form_sub": "შეავსეთ ფორმა და ჩვენი კონსულტანტი დაგიკავშირდებათ 1 საათის განმავლობაში.",
      "connect.field_name": "თქვენი სახელი და გვარი *",
      "connect.field_email": "ელექტრონული ფოსტა *",
      "connect.field_topic": "თემა / ინტერესის სფერო",
      "connect.topic_ai": "ხელოვნური ინტელექტის ინტეგრაცია",
      "connect.topic_cloud": "Edge Cloud & არქიტექტურა",
      "connect.topic_sec": "უსაფრთხოების აუდიტი",
      "connect.topic_part": "ბიზნეს პარტნიორობა",
      "connect.topic_other": "სხვა შეკითხვა",
      "connect.field_msg": "შეტყობინება *",
      "connect.btn_send": "შეტყობინების გაგზავნა",
      "connect.disclaimer": "🔒 თქვენი მონაცემები სრულად დაცულია და არასდროს გადაეცემა მესამე პირებს.",
      "connect.err_name": "გთხოვთ მიუთითოთ თქვენი სახელი",
      "connect.err_email": "გთხოვთ მიუთითოთ ვალიდური ელ-ფოსტის მისამართი",
      "connect.err_msg": "გთხოვთ დაწეროთ შეტყობინება (მინიმუმ 10 სიმბოლო)",
      "connect.faq_title": "ხშირად დასმული შეკითხვები",
      "connect.faq1_q": "რამდენად სწრაფია პლატფორმის ინტეგრაცია?",
      "connect.faq1_a": "ჩვენი მზა SDK-ებისა და REST/GraphQL API-ების წყალობით, ინტეგრაცია ჩვეულებრივ 15 წუთზე ნაკლებ დროს მოითხოვს.",
      "connect.faq2_q": "არის თუ არა უფასო საცდელი პერიოდი?",
      "connect.faq2_a": "დიახ, ჩვენ გთავაზობთ 14-დღიან სრულად ფუნქციურ უფასო საცდელ პერიოდს საბანკო ბარათის გარეშე.",
      "connect.faq3_q": "როგორ ხდება მონაცემთა უსაფრთხოების გარანტია?",
      "connect.faq3_a": "ყველა მონაცემი იშიფრება საბანკო დონის AES-256 სტანდარტით როგორც გადაცემის, ისე შენახვის ეტაპზე.",

      "footer.desc": "შემდეგი თაობის AI და Cloud ინფრასტრუქტურა ინოვაციური ბიზნესებისა და დეველოპერებისთვის.",
      "footer.status": "ყველა სისტემა ფუნქციონირებს გამართულად",
      "footer.nav_title": "ნავიგაცია",
      "footer.tech_title": "ტექნოლოგია",
      "footer.news_title": "სიახლეების გამოწერა",
      "footer.news_sub": "მიიღეთ უახლესი ტექნოლოგიური განახლებები პირველებმა.",
      "footer.copy": "© 2026 Nexus Nova. ყველა უფლება დაცულია. შექმნილია უმაღლესი სტანდარტებით.",
      "footer.privacy": "კონფიდენციალურობა",
      "footer.terms": "წესები და პირობები"
    },
    en: {
      "nav.hero": "Home",
      "nav.about": "About",
      "nav.features": "Features",
      "nav.connect": "Connect",
      "nav.cta": "Get Started",
      
      "hero.badge": "✨ AI-Powered Next-Generation Ecosystem",
      "hero.title_part1": "Architect the Future of",
      "hero.title_highlight": "Digital Experience",
      "hero.title_part2": "With Boundless Scale",
      "hero.description": "Cutting-edge artificial intelligence, lightning speed, and quantum-grade security within a unified innovative platform. Turn your boldest ideas into reality.",
      "hero.cta_start": "Start for Free",
      "hero.cta_explore": "Explore Features",
      "hero.proof_text": "<strong>10,000+</strong> innovators scale globally",
      "hero.live_status": "ONLINE",
      "hero.dash_speed": "Latency",
      "hero.dash_ai": "AI Workload",
      "hero.dash_chart_title": "Live Data Stream Traffic",
      "hero.dash_log1": "Autonomous AI model initialized",
      "hero.dash_log2": "Quantum encryption mesh active",

      "about.tag": "// ABOUT US //",
      "about.title_part1": "Technological Evolution,",
      "about.title_highlight": "Redefining the Rules",
      "about.subtitle": "Nexus Nova unites world-class engineering, machine learning, and human-centric design to establish a new gold standard for the modern digital era.",
      "about.metric1_title": "Reliability & Uptime",
      "about.metric1_desc": "Global resilient cluster architecture without interruptions",
      "about.metric2_title": "Operations / Sec",
      "about.metric2_desc": "Ultra-fast asynchronous processing in true parallel mode",
      "about.metric3_title": "Countries Worldwide",
      "about.metric3_desc": "Edge servers across 6 continents for sub-millisecond delivery",
      "about.metric4_title": "Intelligent Support",
      "about.metric4_desc": "Instant automated assistance backed by principal engineers",
      "about.tab_mission": "Our Mission",
      "about.tab_vision": "Vision & Horizon",
      "about.tab_security": "Security & Ethics",
      "about.pane_mission_title": "Simplifying Complexity via Next-Gen Architecture",
      "about.pane_mission_p1": "Our mission is to empower developers, high-growth startups, and global enterprises with instant access to state-of-the-art AI and ultra-low latency infrastructure.",
      "about.mission_item1": "Open, modular, and cloud-agnostic architecture",
      "about.mission_item2": "80% reduction in time-to-market via autonomous automation",
      "about.mission_item3": "Principled software engineering and human-first design",
      "about.graphic_badge1": "Innovation",
      "about.graphic_badge1_sub": "Continuous Breakthroughs",
      "about.graphic_badge2": "Velocity",
      "about.graphic_badge2_sub": "Sub-millisecond latency",
      "about.graphic_badge3": "Scale",
      "about.graphic_badge3_sub": "Limitless elasticity",
      "about.pane_vision_title": "The Next Frontier of Intelligent Computing",
      "about.pane_vision_p1": "We envision an ecosystem where human imagination and autonomous AI form seamless synergy to solve humanity's hardest technical challenges.",
      "about.vision_item1": "Autonomous multi-agent swarms and collaboration",
      "about.vision_item2": "Real-time predictive inference engines",
      "about.vision_item3": "Green, carbon-neutral computing clusters",
      "about.vision_core": "CORE INTELLIGENCE",
      "about.pane_sec_title": "Enterprise Trust & Quantum-Resilient Defense",
      "about.pane_sec_p1": "Data privacy and ethical AI are our non-negotiable fundamentals. Our Zero-Trust architecture protects every packet, transaction, and model parameter.",
      "about.sec_item1": "End-to-End AES-256 and post-quantum encryption",
      "about.sec_item2": "Full SOC 2 Type II, ISO 27001, and GDPR compliance",
      "about.sec_item3": "Autonomous cyber threat mitigation in under 0.01s",

      "features.tag": "// FEATURES //",
      "features.title_part1": "Everything You Need for",
      "features.title_highlight": "Total Transformation",
      "features.subtitle": "Discover purpose-built modules and intelligent tools engineered for unparalleled developer velocity and enterprise scale.",
      "features.filter_all": "All",
      "features.filter_ai": "Artificial Intelligence",
      "features.filter_speed": "Speed & Cloud",
      "features.filter_sec": "Security",
      "features.card1_title": "Ultra AI Engine",
      "features.card1_desc": "Deep neural foundation models for streaming reasoning, multimodal analysis, and real-time execution.",
      "features.card2_title": "Lightning Edge Cloud",
      "features.card2_desc": "Globally distributed edge compute delivering sub-10ms response times anywhere on Earth.",
      "features.card3_title": "Quantum-Grade Defense",
      "features.card3_desc": "Multi-tier cryptographic protection, hardware enclave verification, and continuous zero-trust validation.",
      "features.card4_title": "Predictive Analytics",
      "features.card4_desc": "Interactive telemetry dashboards and continuous pattern forecasting with sub-second queries.",
      "features.card5_title": "Workflow Automation",
      "features.card5_desc": "Eliminate repetitive tasks with intelligent triggers, robust retry mechanisms, and visual DAGs.",
      "features.card6_title": "Flexible REST & GraphQL",
      "features.card6_desc": "Comprehensive docs, type-safe multi-language SDKs, and out-of-the-box connectors for 200+ systems.",
      "features.demo_tab1": "AI Stream Engine",
      "features.demo_tab2": "Speed Benchmark",
      "features.demo_tab3": "Quantum Shield",
      "features.demo_run": "Run",

      "connect.tag": "// CONNECT //",
      "connect.title_part1": "Get in Touch &",
      "connect.title_highlight": "Build the Future",
      "connect.subtitle": "Have a bold project, enterprise inquiry, or want to partner? Our engineering and advisory team is standing by.",
      "connect.info_title": "Direct Contact",
      "connect.info_sub": "Our global engineering and support team responds promptly around the clock 24/7.",
      "connect.office_status": "Office Active | Tbilisi, Silicon Valley",
      "connect.email_label": "Email",
      "connect.phone_label": "Phone",
      "connect.loc_label": "Headquarters",
      "connect.loc_val": "37 Chavchavadze Ave, Tbilisi",
      "connect.social_label": "Join our ecosystem channels:",
      "connect.form_title": "Send Us a Message",
      "connect.form_sub": "Complete the form and a senior technical lead will contact you within 1 hour.",
      "connect.field_name": "Full Name *",
      "connect.field_email": "Corporate Email *",
      "connect.field_topic": "Topic / Scope",
      "connect.topic_ai": "AI Core Integration",
      "connect.topic_cloud": "Edge Cloud Architecture",
      "connect.topic_sec": "Security Audit & Zero-Trust",
      "connect.topic_part": "Enterprise Partnership",
      "connect.topic_other": "General Inquiry",
      "connect.field_msg": "Message *",
      "connect.btn_send": "Send Message",
      "connect.disclaimer": "🔒 Your confidential information is encrypted and never shared with third parties.",
      "connect.err_name": "Please enter your full name",
      "connect.err_email": "Please enter a valid corporate email address",
      "connect.err_msg": "Please write your message (minimum 10 characters)",
      "connect.faq_title": "Frequently Asked Questions",
      "connect.faq1_q": "How fast is platform onboarding?",
      "connect.faq1_a": "With our unified SDKs and drop-in REST/GraphQL APIs, most teams achieve working integration in under 15 minutes.",
      "connect.faq2_q": "Is there a free trial period?",
      "connect.faq2_a": "Yes! We provide an unrestricted 14-day enterprise trial without requiring a credit card.",
      "connect.faq3_q": "What compliance certifications do you maintain?",
      "connect.faq3_a": "All customer data is encrypted using AES-256 and RSA-4096 both in transit and at rest with full SOC 2 Type II audit reports.",

      "footer.desc": "Next-generation AI and resilient cloud infrastructure designed for ambitious builders.",
      "footer.status": "All systems operational 100%",
      "footer.nav_title": "Navigation",
      "footer.tech_title": "Technology",
      "footer.news_title": "Stay Updated",
      "footer.news_sub": "Get the latest engineering changelogs and platform announcements.",
      "footer.copy": "© 2026 Nexus Nova. All rights reserved. Crafted with the highest standards.",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service"
    }
  };

  let currentLang = 'ka';

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update language button display
    const langFlag = document.getElementById('lang-flag');
    const langLabel = document.getElementById('lang-label');
    if (lang === 'ka') {
      if (langFlag) langFlag.textContent = '🇬🇪';
      if (langLabel) langLabel.textContent = 'KA';
    } else {
      if (langFlag) langFlag.textContent = '🇬🇧';
      if (langLabel) langLabel.textContent = 'EN';
    }

    // Replace all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update placeholders
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const msgInput = document.getElementById('contact-message');
    const newsletterInput = document.getElementById('newsletter-email');

    if (lang === 'ka') {
      if (nameInput) nameInput.placeholder = 'მაგ. ალექსანდრე ბერიძე';
      if (emailInput) emailInput.placeholder = 'alex@company.com';
      if (msgInput) msgInput.placeholder = 'მოგვიყევით თქვენი პროექტის ან შეკითხვის შესახებ...';
      if (newsletterInput) newsletterInput.placeholder = 'თქვენი ელ-ფოსტა...';
    } else {
      if (nameInput) nameInput.placeholder = 'e.g. Alex Beridze';
      if (emailInput) emailInput.placeholder = 'alex@company.com';
      if (msgInput) msgInput.placeholder = 'Tell us about your project or architecture needs...';
      if (newsletterInput) newsletterInput.placeholder = 'Your corporate email...';
    }
  }

  // Toggle Language Handler
  const langSwitchBtn = document.getElementById('lang-switch');
  const mobileLangSwitchBtn = document.getElementById('mobile-lang-switch');

  function toggleLanguage() {
    const nextLang = currentLang === 'ka' ? 'en' : 'ka';
    applyLanguage(nextLang);
  }

  if (langSwitchBtn) langSwitchBtn.addEventListener('click', toggleLanguage);
  if (mobileLangSwitchBtn) mobileLangSwitchBtn.addEventListener('click', toggleLanguage);


  // ==========================================
  // 2. HTML5 CANVAS CONSTELLATION BACKGROUND
  // ==========================================
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
    const mouse = { x: null, y: null, radius: 140 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1;
        this.baseColor = Math.random() > 0.4 ? 'rgba(56, 189, 248,' : 'rgba(129, 140, 248,';
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 2.5;
            this.y -= (dy / dist) * force * 2.5;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor + this.alpha + ')';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
  }


  // ==========================================
  // 3. HEADER SCROLL & MOBILE DRAWER
  // ==========================================
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileDrawer.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        mobileDrawer.classList.remove('open');
      });
    });
  }


  // ==========================================
  // 4. ACTIVE NAVIGATION LINK SPY
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-nav') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);


  // ==========================================
  // 5. SCROLL REVEAL (INTERSECTION OBSERVER)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));


  // ==========================================
  // 6. 3D TILT EFFECT ON HERO DASHBOARD CARD
  // ==========================================
  const tiltCard = document.getElementById('hero-tilt-card');
  if (tiltCard) {
    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -9;
      const rotateY = ((x - centerX) / centerX) * 9;

      const inner = tiltCard.querySelector('.glass-dashboard');
      if (inner) {
        inner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    });

    tiltCard.addEventListener('mouseleave', () => {
      const inner = tiltCard.querySelector('.glass-dashboard');
      if (inner) {
        inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      }
    });
  }


  // ==========================================
  // 7. ANIMATED METRIC COUNTERS
  // ==========================================
  const metricsSection = document.getElementById('metrics-counters');
  let counterStarted = false;

  function runCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let currentVal = 0;

      const timer = setInterval(() => {
        currentVal += increment;
        if (currentVal >= target) {
          counter.textContent = isDecimal ? target.toFixed(2) : Math.floor(target);
          clearInterval(timer);
        } else {
          counter.textContent = isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal);
        }
      }, stepTime);
    });
  }

  if (metricsSection) {
    const metricObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !counterStarted) {
        counterStarted = true;
        runCounters();
      }
    }, { threshold: 0.3 });

    metricObserver.observe(metricsSection);
  }


  // ==========================================
  // 8. ABOUT TABS INTERACTION
  // ==========================================
  const tabButtons = document.querySelectorAll('.about-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(`pane-${targetTab}`);
      if (activePane) activePane.classList.add('active');
    });
  });


  // ==========================================
  // 9. FEATURES FILTER CHIPS
  // ==========================================
  const filterChips = document.querySelectorAll('.filter-chip');
  const featureCards = document.querySelectorAll('.feature-card');

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');

      featureCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });


  // ==========================================
  // 10. INTERACTIVE DEMO CODE / STREAM SHOWCASE
  // ==========================================
  const demoTabs = document.querySelectorAll('.demo-tab');
  const demoActionBtn = document.getElementById('demo-action-btn');
  const demoConsole = document.getElementById('demo-console-output');
  let currentDemo = 'stream';

  const demoScenarios = {
    stream: {
      command: '$ nexus.ai.stream("generate-solution", { mode: "ultra" })',
      lines: [
        "● Connecting to Quantum AI Engine [cluster-eu-west-1]...",
        "✔ Neural mesh linked (Latency: 0.08ms)",
        "» Analyzing semantic request context...",
        "⚡ Generated autonomous pipeline: [Data Ingest → Vector Cache → Inference Engine]",
        "✔ Execution status: 200 OK | Finished in 14ms"
      ]
    },
    bench: {
      command: '$ nexus.cloud.benchmark({ nodes: 128, load: "stress-test" })',
      lines: [
        "● Distributing load across 128 global Edge edge-points...",
        "✔ Throughput: 284,520 requests/sec with 0% packet loss",
        "⚡ Mean response latency: 0.07ms (P99: 0.12ms)",
        "✔ Cluster resilience: 100% stable under peak concurrent surge"
      ]
    },
    encrypt: {
      command: '$ nexus.security.encrypt({ cipher: "AES-256-GCM + Post-Quantum" })',
      lines: [
        "● Initializing hardware-isolated cryptographic enclave...",
        "✔ Generated 4096-bit ephemeral keys with zero-knowledge verification",
        "🔒 Zero-Trust policy enforced: Payload encrypted end-to-end",
        "✔ Verification hash: 0x9f83a4c8e71b2d... [AUTHENTIC]"
      ]
    }
  };

  demoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      demoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentDemo = tab.getAttribute('data-demo');
      renderDemo(currentDemo, false);
    });
  });

  function renderDemo(type, autoRun) {
    const data = demoScenarios[type];
    if (!demoConsole || !data) return;

    demoConsole.innerHTML = `
      <div class="console-line"><span class="c-dim">// Nexus Nova Terminal v2.5</span></div>
      <div class="console-line"><span class="c-green">${data.command}</span></div>
      <div class="console-line c-text" id="demo-dynamic-text">> ${autoRun ? 'გაშვება მიმდინარეობს...' : 'სისტემა მზადაა. დააჭირეთ "გაშვება" ღილაკს...'}</div>
    `;

    if (autoRun) {
      let index = 0;
      const targetDiv = document.getElementById('demo-dynamic-text');
      targetDiv.innerHTML = '';

      const interval = setInterval(() => {
        if (index < data.lines.length) {
          const lineEl = document.createElement('div');
          lineEl.className = 'console-line c-cyan';
          lineEl.textContent = data.lines[index];
          demoConsole.appendChild(lineEl);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 350);
    }
  }

  if (demoActionBtn) {
    demoActionBtn.addEventListener('click', () => {
      renderDemo(currentDemo, true);
    });
  }


  // ==========================================
  // 11. FAQ ACCORDION INTERACTION
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });


  // ==========================================
  // 12. CONTACT FORM VALIDATION & INTERACTIVE TOAST
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('submit-btn');
  const btnSpinner = document.getElementById('btn-spinner');
  const btnText = document.getElementById('btn-submit-text');

  const toast = document.getElementById('toast-notification');
  const toastTitle = document.getElementById('toast-title');
  const toastDesc = document.getElementById('toast-desc');
  const toastIcon = document.getElementById('toast-icon');
  const toastClose = document.getElementById('toast-close');

  function showToast(title, desc, isError = false) {
    if (!toast) return;
    toastTitle.textContent = title;
    toastDesc.textContent = desc;
    toastIcon.textContent = isError ? '✕' : '✓';
    toastIcon.style.background = isError ? 'rgba(244, 63, 94, 0.2)' : 'rgba(16, 185, 129, 0.2)';
    toastIcon.style.color = isError ? '#f43f5e' : '#10b981';

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }

  if (toastClose) {
    toastClose.addEventListener('click', () => toast.classList.remove('show'));
  }

  // Live Char Counter
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 500`;
    });
  }

  // Validate Email
  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let hasError = false;

      // Validate Name
      const nameVal = nameInput.value.trim();
      const nameError = document.getElementById('name-error');
      if (nameVal.length < 2) {
        nameInput.classList.add('error');
        nameError.classList.add('visible');
        hasError = true;
      } else {
        nameInput.classList.remove('error');
        nameInput.classList.add('valid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      const emailVal = emailInput.value.trim();
      const emailError = document.getElementById('email-error');
      if (!isValidEmail(emailVal)) {
        emailInput.classList.add('error');
        emailError.classList.add('visible');
        hasError = true;
      } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('valid');
        emailError.classList.remove('visible');
      }

      // Validate Message
      const messageVal = messageInput.value.trim();
      const msgError = document.getElementById('message-error');
      if (messageVal.length < 10) {
        messageInput.classList.add('error');
        msgError.classList.add('visible');
        hasError = true;
      } else {
        messageInput.classList.remove('error');
        messageInput.classList.add('valid');
        msgError.classList.remove('visible');
      }

      if (hasError) {
        showToast(
          currentLang === 'ka' ? 'შეცდომა ფორმაში' : 'Validation Error',
          currentLang === 'ka' ? 'გთხოვთ შეამოწმოთ მითითებული ველები' : 'Please check required fields and try again.',
          true
        );
        return;
      }

      // Simulate asynchronous form submission
      submitBtn.disabled = true;
      btnSpinner.classList.add('active');
      btnText.textContent = currentLang === 'ka' ? 'იგზავნება...' : 'Sending...';

      setTimeout(() => {
        submitBtn.disabled = false;
        btnSpinner.classList.remove('active');
        btnText.textContent = currentLang === 'ka' ? 'შეტყობინების გაგზავნა' : 'Send Message';

        // Show success toast
        showToast(
          currentLang === 'ka' ? 'შეტყობინება წარმატებით გაიგზავნა!' : 'Message Sent Successfully!',
          currentLang === 'ka' ? 'ჩვენი გუნდი მალე დაგიკავშირდებათ მითითებულ ელ-ფოსტაზე.' : 'Our technical advisor will reach back to you shortly.'
        );

        // Reset form
        contactForm.reset();
        nameInput.classList.remove('valid');
        emailInput.classList.remove('valid');
        messageInput.classList.remove('valid');
        if (charCounter) charCounter.textContent = '0 / 500';
      }, 1500);
    });
  }


  // ==========================================
  // 13. NEWSLETTER SUBSCRIPTION FORM
  // ==========================================
  const newsForm = document.getElementById('newsletter-form');
  const newsInput = document.getElementById('newsletter-email');
  const newsMsg = document.getElementById('newsletter-msg');

  if (newsForm && newsInput && newsMsg) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = newsInput.value.trim();
      if (!isValidEmail(val)) {
        newsMsg.className = 'newsletter-msg err';
        newsMsg.textContent = currentLang === 'ka' ? 'გთხოვთ მიუთითოთ ვალიდური ელ-ფოსტა' : 'Please enter a valid email';
        return;
      }

      newsMsg.className = 'newsletter-msg ok';
      newsMsg.textContent = currentLang === 'ka' ? '✓ მადლობა გამოწერისთვის!' : '✓ Subscribed successfully!';
      newsInput.value = '';

      setTimeout(() => {
        newsMsg.textContent = '';
      }, 4000);
    });
  }


  // ==========================================
  // 14. FLOATING SCROLL TO TOP BUTTON
  // ==========================================
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
