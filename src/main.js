import './style.css'

/* ===== TRANSLATIONS ===== */
const translations = {
  es: {
    // Nav
    navHome: "Inicio",
    navHelp: "¿Cómo Ayudamos?",
    navServices: "Servicios",
    navTestimonials: "Testimonios",
    navFaq: "Preguntas",
    navContact: "Contacto",

    // Hero
    heroH1: "Recupera el Amor y la Felicidad que Mereces",
    heroSub: "Somos especialistas en guía espiritual, lecturas de tarot y armonización de parejas. Trabajamos desde el amor, la empatía y la magia blanca para ayudarte a reconectar con tu ser amado. Miles de latinos en EE.UU. ya confían en nosotros.",
    heroCTA: "🔮 Consulta Gratis por WhatsApp",

    // Connector 1
    conn1Title: "Trabajamos desde el Amor y la Luz ✨",
    conn1Text: "Nuestra práctica se fundamenta en la magia blanca, la energía positiva y la intención pura. No manipulamos, no forzamos. Abrimos caminos con amor, empatía y respeto por el libre albedrío.",
    conn1Point1: "Energía positiva y pura intención en cada trabajo",
    conn1Point2: "Respeto total al libre albedrío",
    conn1Point3: "Sin manipulación, sin oscuridad — solo amor",

    // How we help
    helpH2: "¿Cómo Te Podemos Ayudar?",
    helpSub: "Entendemos tu dolor. La distancia, las dudas y los problemas de pareja pueden sentirse abrumadores, especialmente lejos de casa. Estamos aquí para guiarte con amor y sabiduría espiritual.",
    helpCard1Title: "Claridad Espiritual",
    helpCard1Desc: "A través de lecturas de tarot profundas, te revelamos los bloqueos y las energías que rodean tu situación amorosa.",
    helpCard2Title: "Reconexión Emocional",
    helpCard2Desc: "Trabajamos para que la armonía y el entendimiento regresen a tu relación, fortaleciendo los lazos afectivos.",
    helpCard3Title: "Guía Personalizada",
    helpCard3Desc: "Cada situación es única. Diseñamos un plan espiritual adaptado 100% a tu caso, con seguimiento y apoyo continuo.",

    // Connector 2
    conn2Title: "Hechicería Positiva desde el Corazón 🤍",
    conn2Text: "Cada trabajo que realizamos está cargado de intención positiva. Creemos en la fuerza del universo cuando se canaliza desde la bondad. Tu bienestar y el de tu pareja son nuestra prioridad absoluta.",
    conn2Stat1: "Familias latinas ayudadas en USA",
    conn2Stat2: "Confidencial y seguro",
    conn2Stat3: "Disponibles por WhatsApp",
    conn2Motivate: "No tienes que pasar por esto solo/a. Da el primer paso hoy y permítenos guiarte hacia la felicidad que mereces.",

    // Services
    servH2: "Nuestros Servicios Espirituales",
    servSub: "Ofrecemos una gama completa de servicios de guía espiritual y armonización energética para todas las situaciones del amor.",
    srv1Title: "Lecturas de Tarot",
    srv1Desc: "Lecturas profundas y detalladas que iluminan tu camino amoroso. Descubre qué te depara el futuro y cómo superar los obstáculos.",
    srv2Title: "Amarres de Amor",
    srv2Desc: "Rituales de magia blanca diseñados para fortalecer y reconectar los lazos de amor entre tú y tu pareja. Trabajo serio y confidencial.",
    srv3Title: "Amarres de Pasión",
    srv3Desc: "Enciende la llama de la pasión y el deseo en tu relación. Rituales energéticos para reavivar la chispa y la conexión íntima.",
    srv4Title: "Amarres del Mismo Sexo",
    srv4Desc: "El amor no tiene género. Ofrecemos trabajos espirituales especializados para parejas del mismo sexo con total respeto y discreción.",
    srv5Title: "Endulzamientos",
    srv5Desc: "Suaviza el carácter y las emociones de tu ser amado. Los endulzamientos crean un ambiente de dulzura, paz y receptividad en la relación.",
    srvCTA: "Consultar Ahora",

    // WhatsApp Bubble
    waBubbleText: "Queremos ayudarte a cambiar tu futuro ✨ Escríbenos, tu primera consulta es gratis.",
    waBubbleCTA: "🔮 Consulta por WhatsApp",

    // Connector 3
    conn3Title: "Tu Confianza es Sagrada 🕊️",
    conn3Text: "Privacidad absoluta, empatía genuina y resultados reales. No prometemos milagros, prometemos dedicación, experiencia y un compromiso real con tu felicidad.",
    conn3Point1: "Privacidad absoluta — tu historia queda entre nosotros",
    conn3Point2: "Empatía genuina — escuchamos sin juzgar",
    conn3Point3: "Resultados reales respaldados por cientos de testimonios",
    conn3Motivate: "Cada día que esperas es un día sin la felicidad que mereces. Escríbenos ahora y comienza tu transformación.",

    // Testimonials
    testH2: "Lo que Dicen Nuestros Clientes",
    testSub: "Más de 500 familias latinas en EE.UU. han confiado en nosotros. Estas son algunas de sus historias.",

    // FAQ
    faqH3: "Preguntas Frecuentes",
    q1: "¿Es confidencial la consulta?",
    a1: "Sí, absolutamente toda la información que compartas es 100% privada y está estrictamente protegida. Tu privacidad es sagrada para nosotros.",
    q2: "¿Qué métodos de pago aceptan en USA?",
    a2: "Aceptamos Zelle, CashApp, PayPal y las principales tarjetas de crédito/débito. Todo de forma segura.",
    q3: "¿Cómo se realiza la lectura si vivo lejos?",
    a3: "Las sesiones se llevan a cabo de forma remota mediante videollamada o llamada de audio vía WhatsApp, según tu comodidad.",
    q4: "¿Cuánto tiempo tarda en hacer efecto un trabajo espiritual?",
    a4: "Cada caso es diferente. Algunos clientes ven resultados en días, otros en semanas. Lo importante es la dedicación y la fe en el proceso.",
    q5: "¿Trabajan con magia blanca?",
    a5: "Sí, todos nuestros trabajos se realizan exclusivamente con magia blanca y energía positiva. Nunca utilizamos prácticas que dañen o manipulen el libre albedrío.",
    q6: "¿Es seguro? ¿Tiene efectos secundarios?",
    a6: "Nuestros rituales son completamente seguros. Al trabajar desde la luz y el amor, la energía que se mueve es siempre positiva y beneficiosa.",

    // Footer
    disclaimer: "Aviso Legal: Todas las lecturas de tarot y servicios espirituales ofrecidos son exclusivamente con fines de entretenimiento (\"entertainment purposes only\"). No garantizamos ningún resultado específico. Debe ser mayor de 18 años para utilizar nuestros servicios. La información proporcionada en las sesiones no sustituye en ningún caso el asesoramiento médico, psicológico, legal o financiero profesional.",
    footerRights: "© 2026 Lumina Spiritual. Todos los derechos reservados."
  },
  en: {
    navHome: "Home",
    navHelp: "How We Help",
    navServices: "Services",
    navTestimonials: "Testimonials",
    navFaq: "FAQ",
    navContact: "Contact",

    heroH1: "Reclaim the Love and Happiness You Deserve",
    heroSub: "We specialize in spiritual guidance, tarot readings, and relationship harmony. We work from a place of love, empathy, and white magic to help you reconnect with your loved one. Thousands of Latinos in the US already trust us.",
    heroCTA: "🔮 Free WhatsApp Consultation",

    conn1Title: "We Work from Love and Light ✨",
    conn1Text: "Our practice is rooted in white magic, positive energy, and pure intention. We don't manipulate, we don't force. We open paths with love, empathy, and respect for free will.",
    conn1Point1: "Positive energy and pure intention in every work",
    conn1Point2: "Total respect for free will",
    conn1Point3: "No manipulation, no darkness — only love",

    helpH2: "How Can We Help You?",
    helpSub: "We understand your pain. Distance, doubts, and relationship problems can feel overwhelming, especially away from home. We're here to guide you with love and spiritual wisdom.",
    helpCard1Title: "Spiritual Clarity",
    helpCard1Desc: "Through deep tarot readings, we reveal the blockages and energies surrounding your love situation.",
    helpCard2Title: "Emotional Reconnection",
    helpCard2Desc: "We work to restore harmony and understanding to your relationship, strengthening emotional bonds.",
    helpCard3Title: "Personalized Guidance",
    helpCard3Desc: "Every situation is unique. We design a spiritual plan 100% tailored to your case, with follow-up and ongoing support.",

    conn2Title: "Positive Sorcery from the Heart 🤍",
    conn2Text: "Every work we perform is charged with positive intention. We believe in the force of the universe when channeled through kindness. Your well-being and your partner's are our absolute priority.",
    conn2Stat1: "Latino families helped in the US",
    conn2Stat2: "100% Confidential and safe",
    conn2Stat3: "Available on WhatsApp",
    conn2Motivate: "You don't have to go through this alone. Take the first step today and let us guide you toward the happiness you deserve.",

    servH2: "Our Spiritual Services",
    servSub: "We offer a complete range of spiritual guidance and energy alignment services for all love situations.",
    srv1Title: "Tarot Readings",
    srv1Desc: "Deep and detailed readings that illuminate your love path. Discover what the future holds and how to overcome obstacles.",
    srv2Title: "Love Binding Rituals",
    srv2Desc: "White magic rituals designed to strengthen and reconnect the bonds of love between you and your partner. Serious and confidential work.",
    srv3Title: "Passion Rituals",
    srv3Desc: "Ignite the flame of passion and desire in your relationship. Energy rituals to rekindle the spark and intimate connection.",
    srv4Title: "Same-Sex Rituals",
    srv4Desc: "Love has no gender. We offer specialized spiritual work for same-sex couples with total respect and discretion.",
    srv5Title: "Sweetening Rituals",
    srv5Desc: "Soften the character and emotions of your loved one. Sweetening rituals create an atmosphere of sweetness, peace, and receptivity in the relationship.",
    srvCTA: "Consult Now",

    waBubbleText: "We want to help you change your future ✨ Write to us, your first consultation is free.",
    waBubbleCTA: "🔮 Free WhatsApp Consultation",

    conn3Title: "Your Trust is Sacred 🕊️",
    conn3Text: "Absolute privacy, genuine empathy, and real results. We don't promise miracles, we promise dedication, experience, and a real commitment to your happiness.",
    conn3Point1: "Absolute privacy — your story stays between us",
    conn3Point2: "Genuine empathy — we listen without judgment",
    conn3Point3: "Real results backed by hundreds of testimonials",
    conn3Motivate: "Every day you wait is a day without the happiness you deserve. Write to us now and begin your transformation.",

    testH2: "What Our Clients Say",
    testSub: "Over 500 Latino families in the US have trusted us. These are some of their stories.",

    faqH3: "Frequently Asked Questions",
    q1: "Is the consultation strictly confidential?",
    a1: "Yes, absolutely all the information you share is 100% private and strictly protected. Your privacy is sacred to us.",
    q2: "What payment methods are accepted in the US?",
    a2: "We accept Zelle, CashApp, PayPal, and all major credit/debit cards. All securely processed.",
    q3: "How is the reading conducted if I live far away?",
    a3: "Sessions take place remotely via video call or audio call on WhatsApp, at your convenience.",
    q4: "How long does it take for spiritual work to take effect?",
    a4: "Every case is different. Some clients see results in days, others in weeks. What matters is dedication and faith in the process.",
    q5: "Do you work with white magic?",
    a5: "Yes, all our work is performed exclusively with white magic and positive energy. We never use practices that harm or manipulate free will.",
    q6: "Is it safe? Are there side effects?",
    a6: "Our rituals are completely safe. By working from light and love, the energy that is moved is always positive and beneficial.",

    disclaimer: "Disclaimer: All tarot readings and spiritual services provided are for entertainment purposes only. We do not guarantee any specific outcomes. You must be 18 years of age or older to use our services. Information provided does not substitute professional medical, psychological, legal, or financial advice.",
    footerRights: "© 2026 Lumina Spiritual. All rights reserved."
  }
}

/* ===== TESTIMONIALS DATA (50+) ===== */
const testimonials = [
  { name: "María R.", city: "Houston, TX", text_es: "Estaba a punto de perder a mi esposo. Después del trabajo espiritual, regresó a casa y ahora somos más felices que nunca.", text_en: "I was about to lose my husband. After the spiritual work, he came home and now we are happier than ever." },
  { name: "Carlos M.", city: "Miami, FL", text_es: "Llevaba meses sin hablar con mi pareja. Gracias a la lectura de tarot entendí lo que debía hacer. Hoy estamos juntos.", text_en: "I hadn't spoken to my partner for months. Thanks to the tarot reading, I understood what I needed to do. Today we are together." },
  { name: "Sofía L.", city: "Los Angeles, CA", text_es: "El endulzamiento cambió la energía de mi relación por completo. Mi novio ahora es más cariñoso y atento.", text_en: "The sweetening ritual completely changed the energy of my relationship. My boyfriend is now more loving and attentive." },
  { name: "Alejandra P.", city: "Dallas, TX", text_es: "Quiero darles las gracias. Ya llevamos 3 meses juntos otra vez y todo va de maravilla. Son los mejores.", text_en: "I want to thank you. We've been back together for 3 months now and everything is wonderful. You are the best." },
  { name: "Rosa M.", city: "Phoenix, AZ", text_es: "Mil gracias! Mi esposo regresó a casa y estamos mejor que nunca. Dios los bendiga.", text_en: "Thank you so much! My husband came back home and we are better than ever. God bless you." },
  { name: "Carmen L.", city: "Chicago, IL", text_es: "No lo puedo creer, funcionó! Estoy tan feliz, gracias por todo su trabajo y dedicación.", text_en: "I can't believe it, it worked! I'm so happy, thank you for all your work and dedication." },
  { name: "Juanita V.", city: "San Antonio, TX", text_es: "El tarot me reveló cosas que nadie más sabía. Sentí una conexión espiritual profunda desde el primer momento.", text_en: "The tarot revealed things no one else knew. I felt a deep spiritual connection from the very first moment." },
  { name: "Roberto G.", city: "New York, NY", text_es: "Tenía dudas al principio, pero la profesionalidad y el respeto con el que me trataron me dio total confianza.", text_en: "I had doubts at first, but the professionalism and respect with which they treated me gave me complete confidence." },
  { name: "Patricia S.", city: "Atlanta, GA", text_es: "El amarre de amor funcionó mucho más rápido de lo que imaginé. Mi ex me llamó a la semana y hoy vivimos juntos.", text_en: "The love ritual worked much faster than I imagined. My ex called me within a week and today we live together." },
  { name: "Fernando D.", city: "Denver, CO", text_es: "Les agradezco de corazón. Mi matrimonio estaba destruido y hoy mi esposa y yo somos una pareja renovada.", text_en: "I thank you from the bottom of my heart. My marriage was destroyed and today my wife and I are a renewed couple." },
  { name: "Lucía H.", city: "Las Vegas, NV", text_es: "La lectura de tarot fue increíblemente acertada. Todo lo que me dijeron se cumplió. Muy recomendados.", text_en: "The tarot reading was incredibly accurate. Everything they told me came true. Highly recommended." },
  { name: "Miguel A.", city: "San Diego, CA", text_es: "El amarre del mismo sexo que hicieron para nosotros fue hermoso. Sentimos respeto y profesionalismo absoluto.", text_en: "The same-sex ritual they did for us was beautiful. We felt absolute respect and professionalism." },
  { name: "Elena R.", city: "Orlando, FL", text_es: "Estaba desesperada, sin dormir, sin comer. La consulta me devolvió la paz y la esperanza. Eternamente agradecida.", text_en: "I was desperate, not sleeping, not eating. The consultation gave me back peace and hope. Eternally grateful." },
  { name: "Adriana C.", city: "Charlotte, NC", text_es: "Pagué con Zelle sin ningún problema. Todo fue rápido, profesional y los resultados fueron reales.", text_en: "I paid with Zelle without any problem. Everything was fast, professional, and the results were real." },
  { name: "Jorge P.", city: "Houston, TX", text_es: "Mi novia se había ido con otro. Después del trabajo espiritual, regresó arrepentida y hoy somos más fuertes.", text_en: "My girlfriend had left with someone else. After the spiritual work, she came back remorseful and today we are stronger." },
  { name: "Verónica T.", city: "Philadelphia, PA", text_es: "Los endulzamientos que me hicieron transformaron a mi esposo. De ser frío y distante a ser dulce y amoroso.", text_en: "The sweetening rituals transformed my husband. From being cold and distant to being sweet and loving." },
  { name: "Daniela M.", city: "Sacramento, CA", text_es: "Me encantó la energía positiva que transmiten. Se nota que trabajan desde el amor y la magia blanca.", text_en: "I loved the positive energy they transmit. You can tell they work from love and white magic." },
  { name: "Raúl F.", city: "Austin, TX", text_es: "Escéptico total al principio. Hoy soy el primero en recomendarlos. Mi relación dio un giro de 180 grados.", text_en: "Total skeptic at first. Today I'm the first to recommend them. My relationship did a 180-degree turn." },
  { name: "Gabriela N.", city: "Tampa, FL", text_es: "La consulta por WhatsApp fue súper cómoda. Me explicaron todo paso a paso y me sentí en confianza total.", text_en: "The WhatsApp consultation was super convenient. They explained everything step by step and I felt completely comfortable." },
  { name: "Isabel J.", city: "Raleigh, NC", text_es: "Llevaba 2 años separada de mi esposo. El ritual de amor nos reunió y ahora tenemos un bebé en camino.", text_en: "I had been separated from my husband for 2 years. The love ritual brought us back together and now we have a baby on the way." },
  { name: "Andrés Q.", city: "Nashville, TN", text_es: "La lectura de tarot fue como hablar con alguien que conocía mi vida entera. Precisión y empatía increíbles.", text_en: "The tarot reading was like talking to someone who knew my entire life. Incredible precision and empathy." },
  { name: "Marisol E.", city: "Portland, OR", text_es: "Tenía miedo de los amarres, pero me explicaron que todo es magia blanca y energía positiva. Me sentí segura.", text_en: "I was afraid of love rituals, but they explained that everything is white magic and positive energy. I felt safe." },
  { name: "Teresa B.", city: "San José, CA", text_es: "Gracias! Mi marido dejó los vicios y ahora es un hombre de familia dedicado. La consulta cambió nuestras vidas.", text_en: "Thank you! My husband gave up his vices and is now a dedicated family man. The session changed our lives." },
  { name: "Diego L.", city: "Las Vegas, NV", text_es: "Mi pareja y yo estábamos al borde del divorcio. El trabajo de armonización nos salvó. Gracias infinitas.", text_en: "My partner and I were on the verge of divorce. The harmony work saved us. Infinite thanks." },
  { name: "Claudia V.", city: "Minneapolis, MN", text_es: "Increíble servicio. Me hicieron un amarre de pasión y la conexión con mi esposo es como cuando éramos novios.", text_en: "Incredible service. They did a passion ritual for me and the connection with my husband is like when we were dating." },
  { name: "Ana G.", city: "Houston, TX", text_es: "Lo mejor es la confidencialidad. Nadie sabe que consulté y los resultados hablan por sí solos.", text_en: "The best part is the confidentiality. No one knows I consulted and the results speak for themselves." },
  { name: "Pedro R.", city: "Boston, MA", text_es: "Soy hombre y también necesité ayuda. Me trataron con respeto y sin juicios. Mi novia regresó a mi vida.", text_en: "I'm a man and I also needed help. They treated me with respect and without judgment. My girlfriend came back to my life." },
  { name: "Lourdes K.", city: "Tucson, AZ", text_es: "Tuve resultados en solo 5 días. Mi ex me escribió pidiéndome perdón. Estoy impactada y agradecida.", text_en: "I had results in just 5 days. My ex texted me asking for forgiveness. I'm shocked and grateful." },
  { name: "Beatriz A.", city: "Columbus, OH", text_es: "La empatía con la que me escucharon fue lo que más me impactó. No son solo lectoras, son consejeras de vida.", text_en: "The empathy with which they listened to me was what impacted me the most. They're not just readers, they're life counselors." },
  { name: "Ricardo M.", city: "Salt Lake City, UT", text_es: "Mi esposa estaba fría y distante. El endulzamiento transformó nuestra relación por completo en menos de un mes.", text_en: "My wife was cold and distant. The sweetening completely transformed our relationship in less than a month." },
  { name: "Mónica S.", city: "Detroit, MI", text_es: "Le hice una consulta de tarot a mi hermana como regalo y quedó fascinada. Ahora ella también es clienta.", text_en: "I gave my sister a tarot reading as a gift and she was fascinated. Now she's also a client." },
  { name: "Sandra O.", city: "Memphis, TN", text_es: "Probé con 3 personas antes y ninguna me dio confianza. Aquí encontré profesionalismo real. Gracias.", text_en: "I tried with 3 people before and none of them gave me confidence. Here I found real professionalism. Thank you." },
  { name: "Ernesto C.", city: "Kansas City, MO", text_es: "Nos hicieron un ritual especial para parejas del mismo sexo. Fue lindo, respetuoso y poderoso. Lo recomiendo.", text_en: "They performed a special ritual for same-sex couples. It was beautiful, respectful, and powerful. I recommend it." },
  { name: "Laura D.", city: "San Francisco, CA", text_es: "Vivo lejos pero las sesiones por WhatsApp son igual de poderosas. Sentí toda la energía y la conexión.", text_en: "I live far away but the WhatsApp sessions are just as powerful. I felt all the energy and the connection." },
  { name: "Natalia P.", city: "Indianapolis, IN", text_es: "El tarot me dijo exactamente lo que mi corazón ya sabía. Me ayudaron a tomar la decisión correcta.", text_en: "The tarot told me exactly what my heart already knew. They helped me make the right decision." },
  { name: "Martha H.", city: "El Paso, TX", text_es: "30 años de matrimonio y estábamos perdidos. El trabajo de armonización nos devolvió la chispa que creíamos perdida.", text_en: "30 years of marriage and we were lost. The harmony work brought back the spark we thought was gone." },
  { name: "Óscar J.", city: "Virginia Beach, VA", text_es: "Todo el proceso fue transparente. Me dijeron exactamente qué esperar y se cumplió tal cual. Profesionales de verdad.", text_en: "The entire process was transparent. They told me exactly what to expect and it happened just like that. True professionals." },
  { name: "Yolanda F.", city: "Bakersfield, CA", text_es: "Estaba sufriendo mucho por amor. La lectura me dio paz, claridad y un plan espiritual que seguí al pie de la letra.", text_en: "I was suffering a lot for love. The reading gave me peace, clarity, and a spiritual plan that I followed to the letter." },
  { name: "Alicia R.", city: "Reno, NV", text_es: "Me recomendaron una amiga y ahora entiendo por qué. Son los mejores en lo que hacen. Mi vida cambió.", text_en: "A friend recommended them to me and now I understand why. They are the best at what they do. My life changed." },
  { name: "Juan C.", city: "Oklahoma City, OK", text_es: "El amarre de amor fue discreto, profesional y efectivo. Mi ex esposa volvió a casa en menos de 2 semanas.", text_en: "The love ritual was discreet, professional, and effective. My ex-wife came home in less than 2 weeks." },
  { name: "Valentina M.", city: "Albuquerque, NM", text_es: "Me encanta que todo sea magia blanca. Me sentí protegida y en paz durante todo el proceso. Bendiciones.", text_en: "I love that everything is white magic. I felt protected and at peace throughout the process. Blessings." },
  { name: "Cristina G.", city: "Jacksonville, FL", text_es: "El endulzamiento más una lectura de tarot combinados fueron exactamente lo que mi relación necesitaba. Wow.", text_en: "The sweetening plus a combined tarot reading were exactly what my relationship needed. Wow." },
  { name: "Ramón T.", city: "Fresno, CA", text_es: "Soy muy reservado con estas cosas pero la privacidad que ofrecen es real. Nadie sabe y todo salió perfecto.", text_en: "I'm very private about these things but the privacy they offer is real. No one knows and everything turned out perfectly." },
  { name: "Gloria E.", city: "Milwaukee, WI", text_es: "Después de la consulta me sentí como si me quitaran un peso del corazón. Esa misma noche dormí en paz.", text_en: "After the consultation I felt like a weight was lifted from my heart. That same night I slept in peace." },
  { name: "Estela N.", city: "Louisville, KY", text_es: "Les escribí a las 2am desesperada y me respondieron temprano con toda la calma del mundo. Eso es vocación.", text_en: "I wrote to them at 2am desperate and they responded early with all the calm in the world. That's dedication." },
  { name: "Felipe B.", city: "Omaha, NE", text_es: "Mi novia me había bloqueado de todo. Después del trabajo espiritual, ella misma me buscó. Impresionante.", text_en: "My girlfriend had blocked me from everything. After the spiritual work, she herself came looking for me. Impressive." },
  { name: "Rocío A.", city: "New Orleans, LA", text_es: "La energía que manejan es pura luz. Se siente desde el primer mensaje. Muy agradecida por todo. Los amo.", text_en: "The energy they handle is pure light. You feel it from the first message. Very grateful for everything. I love them." },
  { name: "Silvia D.", city: "Hartford, CT", text_es: "Tenía 6 meses sin saber nada de él. Le hicieron un amarre y a los 10 días me llamó llorando. Gracias!", text_en: "I hadn't heard from him for 6 months. They did a love ritual and in 10 days he called me crying. Thank you!" },
  { name: "Dolores P.", city: "Riverside, CA", text_es: "Me hicieron una lectura de tarot extraordinaria. Cada carta resonaba con mi situación. Precisión total.", text_en: "They gave me an extraordinary tarot reading. Every card resonated with my situation. Total precision." },
  { name: "Manuel V.", city: "Boise, ID", text_es: "Mi pareja y yo somos del mismo sexo y nos trataron con un cariño y profesionalismo que no encontramos en otro lado.", text_en: "My partner and I are same-sex and they treated us with a warmth and professionalism we haven't found anywhere else." },
  { name: "Pilar Z.", city: "Little Rock, AR", text_es: "Hicieron un trabajo de pasión para mi matrimonio y la diferencia fue inmediata. Mi esposo volvió a ser el de antes.", text_en: "They did a passion work for my marriage and the difference was immediate. My husband went back to being himself." },
  { name: "Consuelo W.", city: "Buffalo, NY", text_es: "Estoy sorprendida de lo bien que funcionó. Mi familia no lo puede creer. Recuperé la felicidad que merecía.", text_en: "I'm surprised at how well it worked. My family can't believe it. I got back the happiness I deserved." }
]

/* ===== ADMIN SETTINGS (DISABLED TO USE HARDCODED VALUES) ===== */
function getAdminSettings() {
  return {} // Forzamos a que siempre devuelva un objeto vacío, ignorando el localStorage del admin.
}

/* ===== STATE ===== */
let currentLang = localStorage.getItem('language') || 'es'
let currentTestimonialPage = 0
const TESTIMONIALS_PER_PAGE = 6

/* ===== LANGUAGE SWITCHER ===== */
function updateLanguage(lang) {
  currentLang = lang
  localStorage.setItem('language', lang)
  document.documentElement.lang = lang === 'es' ? 'es-US' : 'en-US'

  const btnEs = document.getElementById('toggle-es')
  const btnEn = document.getElementById('toggle-en')
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.classList.add('bg-gold-400', 'text-dark-900', 'font-semibold')
      btnEs.classList.remove('text-gray-400')
      btnEn.classList.remove('bg-gold-400', 'text-dark-900', 'font-semibold')
      btnEn.classList.add('text-gray-400')
    } else {
      btnEn.classList.add('bg-gold-400', 'text-dark-900', 'font-semibold')
      btnEn.classList.remove('text-gray-400')
      btnEs.classList.remove('bg-gold-400', 'text-dark-900', 'font-semibold')
      btnEs.classList.add('text-gray-400')
    }
  }

  const t = translations[lang]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')
    if (t[key]) el.textContent = t[key]
  })

  // Re-render testimonials in current language
  currentTestimonialPage = 0
  renderTestimonials()

  // Update WA bubble text
  const bubbleText = document.getElementById('wa-bubble-text')
  if (bubbleText && t.waBubbleText) bubbleText.textContent = t.waBubbleText
}

/* ===== TESTIMONIALS RENDERER ===== */
function renderTestimonials() {
  const slider = document.getElementById('testimonials-slider')
  if (!slider) return

  // Render all testimonials with dynamic sizing classes
  slider.innerHTML = testimonials.map(t => `
    <div class="test-card flex-none w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.33px)] bg-dark-800/60 p-6 rounded-2xl border border-white/5 backdrop-blur-lg hover:border-gold-400/30 transition-all duration-300">
      <div class="text-gold-400 text-3xl mb-3 font-serif">"</div>
      <p class="text-gray-300 font-light italic leading-relaxed text-sm mb-4 min-h-[80px]">${currentLang === 'es' ? t.text_es : t.text_en}</p>
      <div class="flex items-center gap-3 mt-auto">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-neon-purple flex items-center justify-center text-white text-sm font-bold">${t.name.charAt(0)}</div>
        <div>
          <p class="text-white font-semibold text-sm">${t.name}</p>
          <p class="text-gray-500 text-xs">${t.city}</p>
        </div>
      </div>
    </div>
  `).join('')

  initTestimonialSlider()
}

let testimonialInterval
function initTestimonialSlider() {
  const slider = document.getElementById('testimonials-slider')
  const prevBtn = document.getElementById('test-prev')
  const nextBtn = document.getElementById('test-next')
  const dotsContainer = document.getElementById('test-dots')
  if (!slider || !prevBtn || !nextBtn || !dotsContainer) return

  const cards = slider.querySelectorAll('.test-card')
  if (cards.length === 0) return

  let currentIndex = 0
  
  // Calculate how many cards are visible based on screen width
  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3 // lg
    if (window.innerWidth >= 768) return 2 // md
    return 1 // sm
  }

  let visibleCards = getVisibleCards()
  let maxIndex = Math.max(0, cards.length - visibleCards)

  // Render Dots
  const renderDots = () => {
    dotsContainer.innerHTML = ''
    const numDots = Math.ceil(cards.length / visibleCards)
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement('button')
      dot.className = `w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / visibleCards) === i ? 'bg-gold-400 w-6' : 'bg-white/20 hover:bg-white/50'}`
      dot.addEventListener('click', () => {
        currentIndex = Math.min(i * visibleCards, maxIndex)
        updateSlider()
        resetInterval()
      })
      dotsContainer.appendChild(dot)
    }
  }

  const updateSlider = () => {
    const cardWidth = cards[0].offsetWidth
    const gap = 20 // 1.25rem (gap-5)
    
    // Boundary check
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex))
    
    const offset = currentIndex * (cardWidth + gap)
    slider.style.transform = `translateX(-${offset}px)`

    // Update buttons
    prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1'
    nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1'
    prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto'
    nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto'

    renderDots()
  }

  const moveNext = () => {
    if (currentIndex >= maxIndex) {
      currentIndex = 0 // Loop back
    } else {
      currentIndex++
    }
    updateSlider()
  }

  const movePrev = () => {
    if (currentIndex > 0) {
      currentIndex--
      updateSlider()
    }
  }

  prevBtn.onclick = () => { movePrev(); resetInterval() }
  nextBtn.onclick = () => { moveNext(); resetInterval() }

  // Auto scroll
  const startInterval = () => {
    testimonialInterval = setInterval(moveNext, 4000)
  }
  
  const resetInterval = () => {
    clearInterval(testimonialInterval)
    startInterval()
  }

  // Handle resize
  window.addEventListener('resize', () => {
    const newVisible = getVisibleCards()
    if (visibleCards !== newVisible) {
      visibleCards = newVisible
      maxIndex = Math.max(0, cards.length - visibleCards)
      currentIndex = 0
      updateSlider()
    }
  })

  // Init
  clearInterval(testimonialInterval)
  updateSlider()
  startInterval()
  
  // Pause on hover
  slider.parentElement.addEventListener('mouseenter', () => clearInterval(testimonialInterval))
  slider.parentElement.addEventListener('mouseleave', startInterval)
}

/* ===== TRACKING ===== */
function trackWhatsAppConversion() {
  const settings = getAdminSettings()

  // Push evento al dataLayer para GTM
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    'event': 'whatsapp_click',
    'event_category': 'Leads',
    'event_label': 'WhatsApp Click',
    'language': currentLang
  })

  // Dynamic WhatsApp number & message from dashboard
  const waNumber = settings.waNumber || '14693367612'
  const defaultMsgEs = settings.waMsgEs || 'Hola, busco ayuda espiritual.'
  const defaultMsgEn = settings.waMsgEn || 'Hello, I\'m looking for spiritual help.'
  const msg = currentLang === 'es' ? defaultMsgEs : defaultMsgEn

  window.open('https://wa.me/' + waNumber + '?text=' + encodeURIComponent(msg), '_blank')
}

/* ===== HERO SLIDER ===== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide')
  if (slides.length === 0) return
  let current = 0

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.style.opacity = i === index ? '1' : '0'
      s.style.transition = 'opacity 1.5s ease-in-out'
    })
  }

  showSlide(0)
  setInterval(() => {
    current = (current + 1) % slides.length
    showSlide(current)
  }, 4000)
}

/* ===== MOBILE NAV ===== */
function initMobileNav() {
  const btn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')
  if (!btn || !menu) return

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
    })
  })
}

/* ===== SMOOTH SCROLL ===== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

/* ===== WHATSAPP BUBBLE ===== */
function initWaBubble() {
  const bubble = document.getElementById('wa-bubble')
  const closeBtn = document.getElementById('wa-bubble-close')
  if (!bubble || !closeBtn) return

  // Show bubble after 1 second
  setTimeout(() => {
    bubble.classList.remove('hidden')
    // Small delay for CSS transition to kick in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bubble.classList.add('show')
      })
    })
  }, 1000)

  // Close bubble
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation()
    bubble.classList.remove('show')
    setTimeout(() => bubble.classList.add('hidden'), 500)

    // Reappear after 30 seconds
    setTimeout(() => {
      bubble.classList.remove('hidden')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          bubble.classList.add('show')
        })
      })
    }, 30000)
  })
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  // Language toggle
  document.getElementById('toggle-es')?.addEventListener('click', () => updateLanguage('es'))
  document.getElementById('toggle-en')?.addEventListener('click', () => updateLanguage('en'))
  updateLanguage(currentLang)

  // WhatsApp buttons
  document.querySelectorAll('.wa-cta').forEach(btn => {
    btn.addEventListener('click', trackWhatsAppConversion)
  })

  // FAQ toggles
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling
      const icon = button.querySelector('svg')
      content.classList.toggle('hidden')
      if (icon) {
        icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)'
        icon.style.transition = 'transform 0.3s ease'
      }
    })
  })

  // Init modules
  initHeroSlider()
  initMobileNav()
  initSmoothScroll()
  initWaBubble()
  renderTestimonials()

  // Navbar scroll effect
  const nav = document.querySelector('nav')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('shadow-lg', 'py-3')
      nav.classList.remove('py-4')
    } else {
      nav.classList.remove('shadow-lg', 'py-3')
      nav.classList.add('py-4')
    }
  })
})
