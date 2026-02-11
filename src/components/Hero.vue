<template>
  <div class="portfolio-container" @wheel="handleScroll" ref="container">
    <div class="circuit-wrapper">
      <div class="circuit-bg bright" :style="{ backgroundImage: `url(${circuitBg})` }"></div>
      <div class="circuit-bg faded" ref="fadedCircuit" :style="{ backgroundImage: `url(${circuitBg})` }"></div>
    </div>
    <!-- Landing Page -->
        <section class="landing-page" :class="{ 'slide-out': scrollProgress > 0 }">
          <div class="sakura-overlay"></div>
          
          <div class="landing-layout">
      <div class="landing-content">
        <div class="greeting">Hi, my name is</div>
            
            <h1 class="name">
              Gauri Prabhakar<span class="cursor">_</span>
            </h1>
            
            <h2 class="title">
              I build <span class="gradient-text">intelligent systems</span>.
            </h2>
            
            <p class="description">
              I'm a Machine Learning Engineer specializing in <span class="highlight">LLMs</span>, 
              <span class="highlight">NLP</span>, and <span class="highlight">Computer Vision</span>. 
              Currently pursuing MS in AI at Northeastern University, with a track record of improving 
              system performance by 80% and contributing to open-source tools used by 16,000+ developers.
            </p>
            
            <div class="centered-buttons">
              <button @click="triggerPanels" class="main-btn">
                <span>EXPLORE MY WORK</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div class="social-links">
              <a href="https://github.com/GauriSP10" target="_blank" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/in/gauri-prabhakar-766555183/" target="_blank" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:gprabhakar1820@gmail.com" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
      
      <!-- Photo Circle -->
      <div class="photo-circle">
      <img :src="myPhoto" alt="Gauri Prabhakar">
    <div class="manga-corner top-left"></div>
    <div class="manga-corner top-right"></div>
    <div class="manga-corner bottom-left"></div>
    <div class="manga-corner bottom-right"></div>
  </div>
  
    </div>
    </section>
        
        <!-- Horizontal Comic Panels -->
        <div class="panels-viewport" :class="{ 'active': scrollProgress > 0 }">
          <button @click="resetView" class="back-btn" v-if="isInPanels">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
          
          <div class="panels-track" :style="{ transform: `translateX(-${panelScroll}px)` }">
            <div
            v-for="panel in panels" 
  :key="panel.id"
  @click="navigateToPanel(panel)"
  class="comic-panel"
>
              <div class="panel-bg" :style="{ backgroundImage: `url(${panel.image})` }"></div>
              <div class="panel-overlay" :style="{ background: panel.colorGradient }"></div>
              
              <div class="panel-content">
                <span class="panel-number">{{ panel.number }}</span>
                <div class="panel-text">
      <div class="text-tag">
        <h3 class="panel-title">{{ panel.title }}</h3>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref , onMounted, onUnmounted} from 'vue'
    import myPhoto from '../assets/profile.jpg'
    import circuitBg from '../assets/background.png'
    import aboutImage from '../assets/aboutPanel.jpg'
    import projectsImage from '../assets/projectsPanel.jpg'
    import experienceImage from '../assets/experiencePanel.jpg'
    import skillsImage from '../assets/skillsPanel.jpg'
    import contactImage from '../assets/contactPanel.jpg'
    import { useRouter, useRoute } from 'vue-router'

    const container = ref(null)
    const scrollProgress = ref(0)
    const panelScroll = ref(0)
    const isInPanels = ref(false)
    const router = useRouter()
    const route = useRoute()
    
    const panels = ref([
      {
        id: 1,
        title: 'ABOUT',
        link: '/about',
        colorGradient: 'linear-gradient(180deg, rgba(255, 105, 180, 0.9) 0%, rgba(255, 182, 193, 0.9) 100%)',
        image: aboutImage
      },
      {
  id: 3,
  title: 'PROJECTS',
  link: '/projects',  // Changed from #projects
  colorGradient: 'linear-gradient(180deg, rgba(255, 107, 107, 0.9) 0%, rgba(255, 182, 193, 0.9) 100%)',
  image: projectsImage
},
      {
    id: 3,
    title: 'EXPERIENCE',
    link: '/experience',  // Changed from #experience
    colorGradient: 'linear-gradient(180deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 236, 139, 0.9) 100%)',
    image: experienceImage
  },
  {
  id: 4,
  title: 'SKILLS',
  link: '/skills',  // Changed from #skills
  colorGradient: 'linear-gradient(180deg, rgba(147, 112, 219, 0.9) 0%, rgba(221, 160, 221, 0.9) 100%)',
  image: skillsImage
},
{
  id: 5,
  title: 'CONTACT',
  link: '/contact',  // Changed from #contact
  colorGradient: 'linear-gradient(180deg, rgba(138, 43, 226, 0.9) 0%, rgba(186, 85, 211, 0.9) 100%)',
  image: contactImage
}
    ])

const navigateToPanel = (panel) => {
  router.push(panel.link)
}

    const handleScroll = (event) => {
      event.preventDefault()
      
      const delta = event.deltaY
      
      // If on landing page and scrolling down
      if (scrollProgress.value === 0 && delta > 0) {
        scrollProgress.value = 1
        isInPanels.value = true
        return
      }
      
      // If in panels
      if (isInPanels.value) {
        // Scrolling left/up at the beginning - go back to landing
        if (panelScroll.value === 0 && delta < 0) {
          scrollProgress.value = 0
          isInPanels.value = false
          return
        }
        
        // Otherwise scroll horizontally through panels
        const maxScroll = (panels.value.length * 400) - window.innerWidth
        panelScroll.value = Math.max(0, Math.min(panelScroll.value + delta, maxScroll))
      }
    }
    
    const triggerPanels = () => {
      scrollProgress.value = 1
      isInPanels.value = true
    }
    
    const resetView = () => {
      scrollProgress.value = 0
      panelScroll.value = 0
      isInPanels.value = false
    }
  
    // Circuit Cursor Reveal
  const fadedCircuit = ref(null)
  
  const revealCircuit = (event) => {
    if (!fadedCircuit.value || isInPanels.value) {
      if (fadedCircuit.value) {
        fadedCircuit.value.style.webkitMaskImage = 'none'
        fadedCircuit.value.style.maskImage = 'none'
      }
      return
    }
    
    const x = event.clientX
    const y = event.clientY
    
    fadedCircuit.value.style.webkitMaskImage = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, black 100%)`
    fadedCircuit.value.style.maskImage = `radial-gradient(circle 150px at ${x}px ${y}px, transparent 0%, black 100%)`
  }
  
  onMounted(() => {
  console.log('Hero mounted, checking route:', route.query) // DEBUG
  
  // Force panels view if query param exists
  if (route.query.view === 'panels') {
    console.log('Showing panels immediately!') // DEBUG
    scrollProgress.value = 1
    isInPanels.value = true
    panelScroll.value = 0
  }
  
  window.addEventListener('mousemove', revealCircuit)
})
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', revealCircuit)
  })
    
    
    </script>
    
    <style scoped>
    .portfolio-container {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: relative;
      background: #0A0A0F;
    }
  
    /* Circuit Background with Cursor Reveal */
    .circuit-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
  }
  
  .circuit-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  
  .circuit-bg.bright {
    background-image: url('../assets/background.png');
    opacity: 1;
    filter: brightness(2.5) contrast(1.5) saturate(2.5);
  }
  .circuit-bg.faded {
    opacity: 0.9;
    background-color: #0A0A0F;
    filter: grayscale(100%) brightness(0.3);
    -webkit-mask-image: radial-gradient(circle 200px at 50% 50%, transparent 0%, black 100%);
    mask-image: radial-gradient(circle 200px at 50% 50%, transparent 0%, black 100%);
  }
    
    /* ===== LANDING PAGE ===== */
    .landing-page {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4rem 3rem;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.8s ease;
      z-index: 10;
      border: 12px solid #000;
    }
    
    .landing-page.slide-out {
      transform: translateX(-100%);
      opacity: 0;
    }
    
    .sakura-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 20% 50%, rgba(255, 105, 180, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 80% 50%, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
      z-index: 0;
    }
    
    .landing-content {
      max-width: 800px;
      position: relative;
      z-index: 2;
      text-align: center;
      animation: fadeInUp 1s ease-out;
    }
    
    .greeting {
      font-family: 'JetBrains Mono', monospace;
      color: #FF69B4;
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      font-weight: 500;
    }
    
    .name {
      font-size: 5rem;
      font-weight: 800;
      color: #FFF;
      margin-bottom: 1rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }
    
    .cursor {
      color: #FF69B4;
      animation: blink 1s step-end infinite;
    }
    
    .title {
      font-size: 4rem;
      font-weight: 700;
      color: #DDA0DD;
      margin-bottom: 2rem;
      line-height: 1.2;
    }
    
    .gradient-text {
      background: linear-gradient(135deg, #FF69B4 0%, #FFA07A 50%, #FFD700 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .description {
      font-size: 1.2rem;
      line-height: 1.8;
      color: #B8B8C8;
      margin-bottom: 3rem;
      max-width: 650px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .highlight {
      color: #FF69B4;
      font-weight: 600;
    }
    
    .centered-buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    
    .main-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0.8rem 2rem;
      background: transparent;
      color: #FF69B4;
      border: 2px solid #FF69B4;
      border-radius: 50px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      font-size: 0.9rem;
      cursor: pointer;
      transition: all 0.3s ease;
      letter-spacing: 0.5px;
    }
    
    .main-btn:hover {
      background: rgba(255, 105, 180, 0.1);
      transform: translateX(5px);
      box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      color: #B8B8C8;
      border: 2px solid #2A2A3A;
      border-radius: 8px;
      transition: all 0.3s ease;
    }
    
    .social-link:hover {
      color: #FF69B4;
      border-color: #FF69B4;
      transform: translateY(-5px);
    }
    
    /* Landing Layout */
    .landing-layout {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6rem;
      max-width: 1400px;
      width: 100%;
    }
    
    /* Photo Circle */
    .photo-circle {
      position: relative;
      width: 350px;
      height: 350px;
      border-radius: 50%;
      overflow: hidden;
      border: 6px solid #FF69B4;
      flex-shrink: 0;
      box-shadow: 0 0 40px rgba(255, 105, 180, 0.3);
      margin-top: -180px;  /* Move up - adjust this number */
      margin-right: 150px;;
      align-self: center;
    }
    
    .photo-circle img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .manga-corner {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 4px solid #FFF;
    }
    
    .manga-corner.top-left {
      top: 20px;
      left: 20px;
      border-right: none;
      border-bottom: none;
    }
    
    .manga-corner.top-right {
      top: 20px;
      right: 20px;
      border-left: none;
      border-bottom: none;
    }
    
    .manga-corner.bottom-left {
      bottom: 20px;
      left: 20px;
      border-right: none;
      border-top: none;
    }
    
    .manga-corner.bottom-right {
      bottom: 20px;
      right: 20px;
      border-left: none;
      border-top: none;
    }
    
    /* ===== PANELS VIEWPORT ===== */
    .panels-viewport {
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100vh;
      background: #000;
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      overflow: hidden;
      border-top: 12px solid #000;
      border-bottom: 12px solid #000;
    }
    
    .panels-viewport.active {
      transform: translateX(-100%);
    }
    
    .back-btn {
      position: fixed;
      top: 2rem;
      left: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      padding: 0;
      background: rgba(255, 105, 180, 0.1);
      color: #FF69B4;
      border: 2px solid #FF69B4;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 100;
      backdrop-filter: blur(10px);
    }
    
    .back-btn:hover {
      background: rgba(255, 105, 180, 0.2);
      transform: scale(1.1);
    }
    
    .panels-track {
      display: flex;
      height: 100vh;
      transition: transform 0.1s ease-out;
      will-change: transform;
    }
    
    .comic-panel {
      position: relative;
      min-width: 388px;
      width: 388px;
      height: 100vh;
      flex-shrink: 0;
      overflow: hidden;
      cursor: pointer;
      filter: grayscale(100%) brightness(0.6) contrast(0.9);
      transition: filter 0.6s ease;
      margin: 0 6px;
      isolation: isolate;
    }
    
    .comic-panel:hover {
      filter: grayscale(0%) brightness(1);
    }
    
    .panel-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transition: transform 0.5s ease;
    }
    
    .comic-panel:hover .panel-bg {
      transform: translateY(-20px);
    }
    
    .panel-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.5s ease;
      mix-blend-mode: multiply;
    }
    
    .comic-panel:hover .panel-overlay {
      opacity: 1;
    }
    
    .comic-panel:hover .shine-effect {
      transform: translateX(100%) translateY(100%) rotate(45deg);
    }
    
    
    .panel-content {
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3rem 2.5rem;
      z-index: 5;
    }
    
    .panel-number {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.5rem;
      font-weight: 900;
      color: rgba(255, 255, 255, 0.3);
      letter-spacing: 2px;
    }
    
    .panel-text {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
    
    .text-tag {
      background: #000;
      padding: 0.8rem 1rem 2.15rem 0.8rem;
      transform: translateY(100%);
      transition: transform 0.5s ease;
      width: 100%;
    }
    
    .comic-panel:hover .text-tag {
      transform: translateY(0);
    }
    
    .panel-title {
      font-size: 1.8rem;
      font-weight: 900;
      color: #ffffff;
      margin: 0;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes blink {
      0%, 50% { opacity: 1; }
      51%, 100% { opacity: 0; }
    }
    
    /* Responsive */
    @media (max-width: 1024px) {
      .name {
        font-size: 4rem;
      }
      
      .title {
        font-size: 3rem;
      }
      
      .comic-panel {
        min-width: 320px;
        width: 320px;
      }
    }
    
    @media (max-width: 768px) {
      .landing-page {
        padding: 4rem 1.5rem;
      }
      .landing-layout {
        flex-direction: column;
        gap: 3rem;
      }
      
      .photo-circle {
        width: 250px;
        height: 250px;
      }
      .name {
        font-size: 3rem;
      }
      
      .title {
        font-size: 2rem;
      }
      
      .description {
        font-size: 1.05rem;
      }
      
      .comic-panel {
        min-width: 280px;
        width: 280px;
      }
      
      .panel-title {
        font-size: 2rem;
      }
    }
    </style>