// Translations Dictionary
const translations = {
    en: {
        nav_home: "Home",
        nav_problem: "The Problem",
        nav_solution: "Features",
        nav_pricing: "Pricing",
        nav_team: "Team",
        nav_contact: "Contact",
        
        hero_headline: "Automate Your Gulf Guest House.<br><span class='text-orange'>Save 20+ Hours a Week.</span>",
        hero_subhead: "We build custom AI and workflow automations for boutique hotels and holiday homes in the UAE, Saudi Arabia, and Qatar. Stop missing 2 AM bookings and claim back your time.",
        hero_cta: "Schedule Your Free Automation Audit",
        hero_trust: "Supporting PMS systems like Cloudbeds, Hostaway, and Little Hotelier.",
        
        prob_title: "Are Manual Tasks Capping Your Growth?",
        prob_1_title: "The 2 AM Missed Booking",
        prob_1_desc: "Losing high-paying guests because your team is asleep when inquiries come in.",
        prob_2_title: "Inbox Chaos",
        prob_2_desc: "Spending 4+ hours daily copy-pasting repetitive WhatsApp replies and email confirmations.",
        prob_3_title: "Zero Visibility",
        prob_3_desc: "Waking up without a clear, concise report of overnight performance and daily check-ins.",
        
        sol_title: "Your PMS Records Bookings. <span class='text-orange'>We Automate Everything Else.</span>",
        sol_1_title: "24/7 WhatsApp AI Chatbots",
        sol_1_desc: "Instant, intelligent replies to guest inquiries in both English and Arabic. Never miss a lead.",
        sol_2_title: "AI Voice Calling Agents",
        sol_2_desc: "Automated check-in reminders and booking confirmations via human-like voice calls.",
        sol_3_title: "Smart Gmail Classifier",
        sol_3_desc: "Automatically sorts incoming emails, prioritizes VIP guests, and auto-responds to standard queries.",
        sol_4_title: "Daily Owner Reports",
        sol_4_desc: "Wake up to an automated WhatsApp or Google Sheets summary of your property's daily performance.",
        sol_5_title: "Social Media Engine",
        sol_5_desc: "Auto-posting engine that keeps your brand active online without manual effort.",
        sol_6_title: "Custom PMS Integration",
        sol_6_desc: "We connect seamlessly via webhooks and APIs to supercharge your existing software.",
        
        price_title: "Transparent Pricing for Tech-Forward Hosts",
        price_subtitle: "Monthly maintenance retainers available starting at $400/month.",
        price_1_name: "Starter Tier",
        price_1_amt: "$800 - $1,200 <span class='setup'>One-time setup</span>",
        price_1_f1: "WhatsApp Chatbot",
        price_1_f2: "Gmail Classifier",
        price_1_f3: "Booking Confirmation Automation",
        price_btn: "Get Started",
        
        price_popular: "Most Popular",
        price_2_name: "Growth Tier",
        price_2_amt: "$2,000 - $3,500 <span class='setup'>One-time setup</span>",
        price_2_f1: "Starter Package +",
        price_2_f2: "AI Voice Calling Agent",
        price_2_f3: "Social Media Auto-Poster",
        price_2_f4: "Owner Daily Reports",
        
        price_3_name: "Full System Tier",
        price_3_amt: "$4,000 - $6,000 <span class='setup'>One-time setup</span>",
        price_3_f1: "Everything +",
        price_3_f2: "Custom PMS Integration",
        price_3_f3: "Full Arabic Language Support",
        price_3_f4: "30-Day Priority Support",
        
        team_title: "The Gulf's Dedicated Hospitality Automation Specialists",
        team_1_name: "Khadija Awan",
        team_1_role: "UAE Market Lead",
        team_1_desc: "Specializing in Dubai & Abu Dhabi holiday homes.",
        team_2_name: "Laiba Zafar",
        team_2_role: "Saudi Arabia Market Lead",
        team_2_desc: "Supporting Vision 2030 hospitality growth in Riyadh & Jeddah.",
        team_3_name: "Abdullah Malik",
        team_3_role: "Qatar & Gulf Market Lead",
        team_3_desc: "Serving boutique properties across Doha, Kuwait, and Oman.",
        
        ben_title: "Why Automare?",
        ben_1_title: "Faster Response Times",
        ben_1_desc: "Reply to guests in under 5 seconds.",
        ben_2_title: "Increased Bookings",
        ben_2_desc: "Capture leads 24/7 without a night shift.",
        ben_3_title: "Lower Operational Costs",
        ben_3_desc: "Reduce the need for manual data entry staff.",

        hiw_title: "Our 3-Step Process",
        hiw_1_title: "Free Audit",
        hiw_1_desc: "We analyze your current manual workflows and identify bottlenecks.",
        hiw_2_title: "Custom Build",
        hiw_2_desc: "We design and deploy AI agents and webhooks tailored to your specific PMS.",
        hiw_3_title: "Go Live & Relax",
        hiw_3_desc: "We launch the system, train your team, and provide ongoing support.",

        faq_title: "Frequently Asked Questions",
        faq_q1: "Do I need to replace my current PMS?",
        faq_a1: "Not at all. Automare acts as an automation layer over your existing software. We integrate seamlessly with systems like Cloudbeds, Hostaway, and Little Hotelier via APIs and webhooks. Your PMS continues to record bookings, while we automate the communication and reporting that happens afterward.",
        faq_q2: "Will the AI Chatbots and Voice Agents sound robotic?",
        faq_a2: "No, we build our systems using advanced AI like Claude AI and ElevenLabs. Our voice calling agents and WhatsApp chatbots are designed to have natural, human-like conversations and can handle complex inquiries instantly, 24/7.",
        faq_q3: "Do your automated systems support Arabic?",
        faq_a3: "Yes, absolutely. Understanding the Gulf market, our chatbots and voice agents come with full Arabic language capability. This ensures your guests in Saudi Arabia, UAE, and the wider Gulf region receive localized and professional support.",
        faq_q4: "How much does the automation setup cost?",
        faq_a4: "We offer transparent pricing based on your property's needs. Our one-time setup fees range from $800 for our Starter package (WhatsApp bot & Gmail classification) up to $6,000 for a Full System with native PMS integration. We also offer monthly maintenance retainers starting at $400 to ensure your workflows run smoothly.",
        faq_q5: "What kind of properties do you work with?",
        faq_a5: "We specialize in tech-forward boutique guest houses, holiday homes, and short-term rentals, typically managing between 3 to 25 properties. We have dedicated team members specifically focused on the UAE, Saudi Arabia, and Qatar markets to provide customized, localized service.",
        faq_q6: "I am interested, what is the first step?",
        faq_a6: "The first step is to book a completely free, 15-minute Discovery Audit with us. On this short call, we will analyze your current manual tasks and identify the top 3 'quick wins' where automation can save you the most time immediately.",
        faq_q7: "Will I have visibility over my daily operations?",
        faq_a7: "Yes! One of our most popular workflows is the daily owner report. Our system automatically compiles overnight performance, new bookings, and guest inquiries into a clear report sent directly to your WhatsApp or email every morning.",

        cal_title: "Schedule Your Free Automation Audit",
        
        lm_title: "Not Ready for a Call Yet?",
        lm_desc: "Download our free guide: The Gulf Guest House Automation Checklist - 10 Tasks You Should Never Do Manually.",
        lm_ph: "Enter your email",
        lm_btn: "Get The Free Checklist",
        
        footer_copy: "Copyright &copy; 2026 Automare.ai",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service"
    },
    ar: {
        nav_home: "الرئيسية",
        nav_problem: "المشكلة",
        nav_solution: "المميزات",
        nav_pricing: "الأسعار",
        nav_team: "الفريق",
        nav_contact: "اتصل بنا",
        
        hero_headline: "أتمتة بيوت الضيافة في الخليج.<br><span class='text-orange'>وفر أكثر من 20 ساعة أسبوعياً.</span>",
        hero_subhead: "نبني أتمتة مخصصة بالذكاء الاصطناعي وسير العمل للفنادق الصغيرة وبيوت العطلات في الإمارات والسعودية وقطر. توقف عن تفويت حجوزات الساعة 2 صباحاً واستعد وقتك.",
        hero_cta: "احجز تدقيق الأتمتة المجاني الخاص بك",
        hero_trust: "ندعم أنظمة إدارة الممتلكات (PMS) مثل Cloudbeds و Hostaway و Little Hotelier.",
        
        prob_title: "هل تعيق المهام اليدوية نموك؟",
        prob_1_title: "حجز الساعة 2 صباحاً المفقود",
        prob_1_desc: "فقدان ضيوف ذوي الدفع العالي لأن فريقك نائم عندما تصل الاستفسارات.",
        prob_2_title: "فوضى صندوق الوارد",
        prob_2_desc: "قضاء أكثر من 4 ساعات يومياً في نسخ ولصق ردود واتساب المتكررة وتأكيدات البريد الإلكتروني.",
        prob_3_title: "انعدام الرؤية",
        prob_3_desc: "الاستيقاظ بدون تقرير واضح وموجز عن أداء الليل وتسجيلات الدخول اليومية.",
        
        sol_title: "نظام إدارة الممتلكات الخاص بك يسجل الحجوزات. <span class='text-orange'>نحن نؤتمت كل شيء آخر.</span>",
        sol_1_title: "روبوتات دردشة واتساب بالذكاء الاصطناعي 24/7",
        sol_1_desc: "ردود فورية وذكية لاستفسارات الضيوف باللغتين الإنجليزية والعربية. لن تفوت أي عميل محتمل أبداً.",
        sol_2_title: "وكلاء الاتصال الصوتي بالذكاء الاصطناعي",
        sol_2_desc: "تذكيرات تلقائية بتسجيل الدخول وتأكيدات الحجز عبر مكالمات صوتية تشبه البشر.",
        sol_3_title: "مصنف جي ميل الذكي",
        sol_3_desc: "يصنف رسائل البريد الإلكتروني الواردة تلقائياً، ويعطي الأولوية للضيوف المهمين، ويرد تلقائياً على الاستفسارات القياسية.",
        sol_4_title: "تقارير المالك اليومية",
        sol_4_desc: "استيقظ على ملخص تلقائي عبر واتساب أو جداول بيانات جوجل لأداء ممتلكاتك اليومي.",
        sol_5_title: "محرك وسائل التواصل الاجتماعي",
        sol_5_desc: "محرك نشر تلقائي يحافظ على نشاط علامتك التجارية عبر الإنترنت دون جهد يدوي.",
        sol_6_title: "تكامل مخصص لنظام إدارة الممتلكات",
        sol_6_desc: "نتصل بسلاسة عبر خطافات الويب (Webhooks) وواجهات برمجة التطبيقات لتعزيز برامجك الحالية.",
        
        price_title: "أسعار شفافة للمضيفين المتقدمين تكنولوجياً",
        price_subtitle: "تتوفر خدمات الصيانة الشهرية ابتداءً من 400 دولار شهرياً.",
        price_1_name: "الباقة الأساسية",
        price_1_amt: "$800 - $1,200 <span class='setup'>رسوم إعداد لمرة واحدة</span>",
        price_1_f1: "روبوت دردشة واتساب",
        price_1_f2: "مصنف جي ميل",
        price_1_f3: "أتمتة تأكيد الحجز",
        price_btn: "البدء",
        
        price_popular: "الأكثر شعبية",
        price_2_name: "باقة النمو",
        price_2_amt: "$2,000 - $3,500 <span class='setup'>رسوم إعداد لمرة واحدة</span>",
        price_2_f1: "الباقة الأساسية +",
        price_2_f2: "وكيل اتصال صوتي بالذكاء الاصطناعي",
        price_2_f3: "ناشر تلقائي لوسائل التواصل الاجتماعي",
        price_2_f4: "تقارير يومية للمالك",
        
        price_3_name: "نظام كامل",
        price_3_amt: "$4,000 - $6,000 <span class='setup'>رسوم إعداد لمرة واحدة</span>",
        price_3_f1: "كل شيء +",
        price_3_f2: "تكامل مخصص لنظام إدارة الممتلكات",
        price_3_f3: "دعم كامل للغة العربية",
        price_3_f4: "دعم ذو أولوية لمدة 30 يوماً",
        
        team_title: "متخصصو أتمتة الضيافة المخصصون في الخليج",
        team_1_name: "خديجة أعوان",
        team_1_role: "رئيسة سوق الإمارات",
        team_1_desc: "متخصصة في بيوت عطلات دبي وأبو ظبي.",
        team_2_name: "لائبة ظفر",
        team_2_role: "رئيسة سوق السعودية",
        team_2_desc: "دعم نمو الضيافة في الرياض وجدة وفقاً لرؤية 2030.",
        team_3_name: "عبدالله مالك",
        team_3_role: "رئيس سوق قطر والخليج",
        team_3_desc: "خدمة العقارات الصغيرة في جميع أنحاء الدوحة والكويت وعمان.",
        
        ben_title: "لماذا Automare؟",
        ben_1_title: "أوقات استجابة أسرع",
        ben_1_desc: "الرد على الضيوف في أقل من 5 ثوانٍ.",
        ben_2_title: "زيادة الحجوزات",
        ben_2_desc: "التقاط العملاء المحتملين على مدار الساعة دون نوبة ليلية.",
        ben_3_title: "انخفاض التكاليف التشغيلية",
        ben_3_desc: "تقليل الحاجة إلى موظفي إدخال البيانات اليدوي.",

        hiw_title: "عمليتنا من 3 خطوات",
        hiw_1_title: "تدقيق مجاني",
        hiw_1_desc: "نحلل سير العمل اليدوي الحالي ونحدد نقاط الاختناق.",
        hiw_2_title: "بناء مخصص",
        hiw_2_desc: "نصمم وننشر وكلاء الذكاء الاصطناعي وخطافات الويب (webhooks) المصممة خصيصاً لنظام إدارة الممتلكات الخاص بك.",
        hiw_3_title: "الإطلاق والاسترخاء",
        hiw_3_desc: "نطلق النظام وندرب فريقك ونقدم الدعم المستمر.",

        faq_title: "الأسئلة الشائعة",
        faq_q1: "هل أحتاج إلى استبدال نظام إدارة الممتلكات (PMS) الحالي الخاص بي؟",
        faq_a1: "على الإطلاق. تعمل Automare كطبقة أتمتة فوق برنامجك الحالي. نحن نتكامل بسلاسة مع أنظمة مثل Cloudbeds و Hostaway و Little Hotelier عبر واجهات برمجة التطبيقات وخطافات الويب. يستمر نظام إدارة الممتلكات الخاص بك في تسجيل الحجوزات، بينما نقوم بأتمتة الاتصالات والتقارير التي تحدث بعد ذلك.",
        faq_q2: "هل ستبدو روبوتات الدردشة ووكلاء الصوت آليين؟",
        faq_a2: "لا، نحن نبني أنظمتنا باستخدام ذكاء اصطناعي متقدم مثل Claude AI و ElevenLabs. تم تصميم وكلاء الاتصال الصوتي وروبوتات دردشة واتساب الخاصة بنا لإجراء محادثات طبيعية تشبه البشر ويمكنها التعامل مع الاستفسارات المعقدة على الفور، على مدار الساعة طوال أيام الأسبوع.",
        faq_q3: "هل تدعم أنظمتكم الآلية اللغة العربية؟",
        faq_a3: "نعم، بالتأكيد. لفهمنا لسوق الخليج، تأتي روبوتات الدردشة ووكلاء الصوت لدينا بقدرات كاملة باللغة العربية. هذا يضمن حصول ضيوفك في المملكة العربية السعودية والإمارات العربية المتحدة ومنطقة الخليج الأوسع على دعم احترافي محلي.",
        faq_q4: "كم تكلفة إعداد الأتمتة؟",
        faq_a4: "نحن نقدم أسعاراً شفافة بناءً على احتياجات ممتلكاتك. تتراوح رسوم الإعداد لمرة واحدة من 800 دولار لحزمة المبتدئين (روبوت واتساب وتصنيف جيميل) إلى 6000 دولار للنظام الكامل مع تكامل نظام إدارة الممتلكات. نقدم أيضاً خدمات صيانة شهرية تبدأ من 400 دولار لضمان تشغيل سير العمل بسلاسة.",
        faq_q5: "ما نوع العقارات التي تعملون معها؟",
        faq_a5: "نحن متخصصون في بيوت الضيافة وبيوت العطلات والإيجارات قصيرة الأجل المتقدمة تكنولوجياً، وعادة ما ندير ما بين 3 إلى 25 عقاراً. لدينا أعضاء فريق متخصصون يركزون بشكل خاص على أسواق الإمارات العربية المتحدة والمملكة العربية السعودية وقطر لتقديم خدمة مخصصة ومحلية.",
        faq_q6: "أنا مهتم، ما هي الخطوة الأولى؟",
        faq_a6: "الخطوة الأولى هي حجز تدقيق استكشافي مجاني تماماً لمدة 15 دقيقة معنا. في هذه المكالمة القصيرة، سنحلل مهامك اليدوية الحالية ونحدد أفضل 3 مكاسب سريعة يمكن للأتمتة أن توفر لك فيها أقصى وقت على الفور.",
        faq_q7: "هل سيكون لدي رؤية لعملياتي اليومية؟",
        faq_a7: "نعم! أحد أكثر مسارات العمل شيوعاً لدينا هو التقرير اليومي للمالك. يقوم نظامنا تلقائياً بتجميع أداء الليل والحجوزات الجديدة واستفسارات الضيوف في تقرير واضح يتم إرساله مباشرة إلى واتساب أو بريدك الإلكتروني كل صباح.",

        cal_title: "احجز تدقيق الأتمتة المجاني الخاص بك",
        
        lm_title: "لست مستعداً للاتصال بعد؟",
        lm_desc: "قم بتنزيل دليلنا المجاني: قائمة التحقق لأتمتة بيوت الضيافة في الخليج - 10 مهام يجب ألا تقوم بها يدوياً أبداً.",
        lm_ph: "أدخل بريدك الإلكتروني",
        lm_btn: "احصل على القائمة المجانية",
        
        footer_copy: "حقوق النشر &copy; 2026 Automare.ai",
        footer_privacy: "سياسة الخصوصية",
        footer_terms: "شروط الخدمة"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Logic
    const langEnBtn = document.getElementById('lang-en');
    const langArBtn = document.getElementById('lang-ar');
    let currentLang = 'en';

    function setLanguage(lang) {
        currentLang = lang;
        
        // Update Buttons
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langArBtn.classList.remove('active');
            document.body.classList.remove('rtl');
            document.body.setAttribute('dir', 'ltr');
        } else {
            langArBtn.classList.add('active');
            langEnBtn.classList.remove('active');
            document.body.classList.add('rtl');
            document.body.setAttribute('dir', 'rtl');
        }

        // Translate Text
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });
    }

    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langArBtn.addEventListener('click', () => setLanguage('ar'));

    // Form Submission Placeholder
    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = leadForm.querySelector('input[type="email"]').value;
        
        // n8n Webhook logic would go here
        console.log(`Submitting ${email} to n8n webhook (Simulated)`);
        
        alert(currentLang === 'en' ? 
            "Thanks! Check your email for the guide." : 
            "شكراً لك! تفقد بريدك الإلكتروني للحصول على الدليل.");
        
        leadForm.reset();
    });

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
