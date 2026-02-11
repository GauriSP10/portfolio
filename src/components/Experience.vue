<template>
    <div class="netflix-container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-background">
          <img :src= expStoryImage alt="Experience Hero">
          <div class="hero-gradient"></div>
        </div>
        
        <div class="hero-content">
            <div class="netflix-title-container">
  <h2 class="netflix-text">EXPERIENCE</h2>
</div>
  <div class="subtitle">GAURI PRABHAKAR</div>
  
  <div class="show-meta">
    <span class="year">2021 - Present</span>
    <span class="episodes">3 Companies</span>
    <span class="rating">ML • AI • Engineering</span>
  </div>
          
          <p class="show-description">
            A journey through Machine Learning, AI Research, and Software Engineering. 
            From building LLM-powered applications serving thousands to contributing to 
            cutting-edge research and developing full-stack solutions.
          </p>
          
          <div class="hero-buttons">
            <button class="play-btn" @click="scrollToEpisodes">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z"/>
  </svg>
  View Details
</button>
<button class="hire-btn" @click="addToHireList" :class="{ 'added': isAdded }">
  <svg v-if="!isAdded" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
  <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
</button>
          </div>
        </div>
      </div>
<!-- Info Section -->
<div class="info-section">
    <div class="info-grid">
      <!-- Skills Section -->
<div class="info-left">
        <div class="skills-header">
          <span class="skills-badge">SKILLS</span>
          <span class="skills-list">Python, PyTorch, TensorFlow, LLMs, NLP, Computer Vision, React, Node.js</span>
        </div>
      </div>
      
      <!-- Info Section -->
      <div class="info-right">
        <div class="info-block">
          <span class="info-label">Cast:</span>
          <span class="info-text">Gauri Prabhakar</span>
        </div>
        
        <div class="info-block">
          <span class="info-label">Genres:</span>
          <span class="info-text">Machine Learning, AI Research, Software Engineering</span>
        </div>
        
        <div class="info-block">
          <span class="info-label">This journey is:</span>
          <span class="info-text">Innovative, Technical, Impactful</span>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Episodes Section --> 
      <div class="episodes-section" id ="episodes">
        <h2 class="section-title">Episodes</h2>
        
        <!-- Episode rows -->
        <div class="episode-row" v-for="ep in episodes" :key="ep.id" @click="openModal(ep)">
          <div class="episode-number">{{ ep.id }}</div>
          <div class="episode-thumbnail">
            <img src="../assets/try.png" :alt="ep.title">
            <div class="play-overlay">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div class="episode-details">
            <div class="episode-header">
              <h3 class="episode-title">{{ ep.title }}</h3>
              <span class="episode-duration">{{ ep.duration }}</span>
            </div>
            <p class="episode-synopsis">{{ ep.synopsis }}</p>
          </div>
        </div>
      </div>
      
    <!-- Modal Popup -->
    <Teleport to="body">
      <div v-if="selectedEpisode" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="modal-close" @click="closeModal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div class="modal-header">
            <img src="../assets/try.png" :alt="selectedEpisode.title" class="modal-image">
            <div class="modal-header-gradient"></div>
            <div class="modal-header-info">
              <h2 class="modal-title">{{ selectedEpisode.title }}</h2>
              <span class="modal-duration">{{ selectedEpisode.duration }}</span>
            </div>
          </div>
          <div class="modal-body">
            <p class="modal-synopsis">{{ selectedEpisode.synopsis }}</p>
            <div class="modal-details">
              <div class="modal-detail-item" v-for="(point, i) in selectedEpisode.details" :key="i">
                <span class="detail-bullet">&#9656;</span>
                <span>{{ point }}</span>
              </div>
            </div>
            <div class="modal-tech">
              <span class="modal-tech-label">Technologies:</span>
              <span class="modal-tech-tag" v-for="tech in selectedEpisode.tech" :key="tech">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

      <!-- Back Button -->
      <button @click="goBack" class="back-to-home">
  <svg width="20" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
    <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
  </svg>
</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import expStoryImage from '../assets/expStoryImage.jpg'
  import company1 from '../assets/try.png'
  import company2 from '../assets/try.png'
  import company3 from '../assets/try.png'
  const router = useRouter()
  const isAdded = ref(false)
const selectedEpisode = ref(null)

const episodes = [
  {
    id: 1,
    title: 'Machine Learning Engineer',
    duration: '2023 - Present',
    synopsis: 'Built and deployed LLM-powered applications serving 10,000+ users. Improved model performance by 80% through optimization techniques. Led development of AI chatbot integrated with company knowledge base.',
    details: [
      'Designed and deployed end-to-end LLM pipelines serving 10,000+ daily active users',
      'Improved model inference latency by 80% through quantization and optimization',
      'Led a team of 3 engineers to build an AI chatbot integrated with internal knowledge bases',
      'Implemented RAG-based retrieval systems for accurate domain-specific responses',
    ],
    tech: ['Python', 'PyTorch', 'LangChain', 'AWS', 'Docker', 'FastAPI'],
  },
  {
    id: 2,
    title: 'AI Research Intern',
    duration: '2022 - 2023',
    synopsis: 'Developed NLP models for text classification achieving 92% accuracy. Published research paper at major AI conference. Contributed to open-source ML libraries with 16,000+ downloads.',
    details: [
      'Built transformer-based NLP models achieving 92% accuracy on text classification benchmarks',
      'Co-authored a research paper accepted at a major AI conference',
      'Contributed to open-source ML libraries garnering 16,000+ downloads',
      'Conducted experiments on large-scale datasets using distributed training',
    ],
    tech: ['Python', 'TensorFlow', 'HuggingFace', 'CUDA', 'Weights & Biases'],
  },
  {
    id: 3,
    title: 'Software Engineering Intern',
    duration: '2021 - 2022',
    synopsis: 'Built full-stack web applications with React and Node.js. Collaborated with cross-functional teams on product features. Implemented responsive UI components used across multiple projects.',
    details: [
      'Developed full-stack features using React and Node.js for production web applications',
      'Collaborated with designers and PMs across cross-functional teams',
      'Built reusable, responsive UI components adopted across multiple projects',
      'Wrote unit and integration tests improving code coverage by 30%',
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Jest'],
  },
]

const openModal = (ep) => {
  selectedEpisode.value = ep
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedEpisode.value = null
  document.body.style.overflow = ''
}

  const goBack = () => {
    router.push('/?view=panels')
  }

  const scrollToEpisodes = () => {
  const episodesSection = document.getElementById('episodes')
  if (episodesSection) {
    episodesSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const addToHireList = () => {
  // Show confirmation prompt
  const confirmDownload = confirm('Download Gauri Prabhakar\'s resume?')
  
  if (confirmDownload) {
    // Download resume
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Gauri_Prabhakar_Resume.pdf'
    link.click()
    
    // Toggle to checkmark
    isAdded.value = true
  }
}

  </script>
  
  <style scoped>
  .netflix-container {
    width: 100%;
    min-height: 100vh;
    background: #141414;
    color: #fff;
  }
  
  /* ===== HERO SECTION ===== */
  .hero-section {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: flex-end;
  padding: 0 4rem 4rem 4rem;  /* Changed from 8rem to 4rem */
}
  
  .hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
  .hero-background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .hero-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      #141414 0%,
      rgba(20, 20, 20, 0.9) 20%,
      rgba(20, 20, 20, 0.6) 50%,
      transparent 100%
    );
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 700px;
  }
  
  .netflix-title-container {
  margin-bottom: 0.5rem;
}

.netflix-text {
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Impact', 'Arial Black', 'Bebas Neue', sans-serif;
  letter-spacing: 2px;
  color: #E50914;
  text-transform: uppercase;
  margin: 0;
  line-height: 1;
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  letter-spacing: 0.5rem;
  font-family: 'Arial', sans-serif;
  text-transform: uppercase;
  text-align: left;
  margin-top: 0.5rem;
}
  
  .show-meta {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1rem;
  }
  
  .year {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
}
  
  .episodes {
    color: #fff;
    font-weight: 600;
  }
  
  .rating {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .show-description {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #fff;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
  }

/* ===== INFO SECTION ===== */
.info-section {
  padding: 2rem 4rem;
  background: #141414;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.info-grid {
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 4rem;
  max-width: 1400px;
  align-items: start;
}

.info-left {
  display: flex;
  flex-direction: column;
  align-self: start;
}

.skills-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.skills-badge {
  padding: 0.3rem 0.6rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
  letter-spacing: 1px;
  flex-shrink: 0;
}

.skills-list {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.4rem 0.9rem;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  transition: all 0.2s ease;
}

.skill-tag:hover {
  border-color: rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 1);
}

.info-right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: start;
}

.info-block {
  display: flex;
  gap: 0.5rem;
}

.info-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  min-width: 120px;
}

.info-text {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

/* Responsive */
@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .info-section {
    padding: 1.5rem 2rem;
  }
}
  
  .play-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 2.5rem;
    background: #fff;
    color: #000;
    border: none;
    border-radius: 4px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'JetBrains Mono', monospace;
  }
  
  .play-btn:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
  
  .hire-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  background: rgba(42, 42, 42, 0.6);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.hire-btn:hover {
  background: rgba(42, 42, 42, 0.9);
  border-color: #fff;
  transform: scale(1.1);
}

.hire-btn.added {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}

.hire-btn.added:hover {
  transform: scale(1.05);
}
  
  /* ===== EPISODES SECTION ===== */
  .episodes-section {
  padding: 1rem 4rem 4rem 4rem;
}
  
  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
    font-family: 'JetBrains Mono', monospace;
  }
  
  .episode-row {
    display: flex;
    gap: 1.5rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }
  
  .episode-row:hover {
    background: rgba(255, 23, 68, 0.05);
    border-color: #FF1744;
  }
  
  .episode-number {
    font-size: 2rem;
    font-weight: 900;
    color: rgba(255, 255, 255, 0.3);
    font-family: 'JetBrains Mono', monospace;
    width: 50px;
    flex-shrink: 0;
  }
  
  .episode-thumbnail {
    position: relative;
    width: 200px;
    height: 120px;
    flex-shrink: 0;
    background: #000;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
  }
  
  .episode-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 1rem;
  }
  
  .play-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .episode-row:hover .play-overlay {
    opacity: 1;
  }
  
  .episode-details {
    flex: 1;
  }
  
  .episode-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.8rem;
  }
  
  .episode-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
    font-family: 'JetBrains Mono', monospace;
  }
  
  .episode-duration {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'JetBrains Mono', monospace;
  }
  
  .episode-synopsis {
    font-size: 1rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
  }
  
  
  /* ===== BACK BUTTON ===== */
  .back-to-home {
  position: fixed;
  top: 2rem;
  left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 0;
  background: rgba(20, 20, 20, 0.9);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  z-index: 100;
}

.back-to-home:hover {
  background: rgba(42, 42, 42, 0.9);
  border-color: #fff;
  transform: scale(1.1);
}
  
  /* ===== RESPONSIVE ===== */
  @media (max-width: 1024px) {
    .about-content {
      grid-template-columns: 1fr;
    }
    
    .episode-row {
      flex-direction: column;
    }
    
    .episode-thumbnail {
      width: 100%;
      height: 180px;
    }
  }
  
  @media (max-width: 768px) {
    .hero-section {
      padding: 0 2rem 4rem 2rem;
    }
    
    .show-title {
      font-size: 3rem;
    }
    
    .episodes-section {
      padding: 2rem;
    }
    
    .about-section {
      padding: 2rem;
    }
    
    .hero-buttons {
      flex-direction: column;
    }
  }
  </style>

<style>
/* Modal styles - unscoped because modal is teleported to body */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: modalFadeIn 0.2s ease;
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: #181818;
  border-radius: 8px;
  width: 100%;
  max-width: 680px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideUp 0.3s ease;
}

@keyframes modalSlideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: #141414;
  border: none;
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.modal-close:hover {
  background: #333;
}

.modal-header {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: #000;
  padding: 1.5rem;
}

.modal-header-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, #181818, transparent);
}

.modal-header-info {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
}

.modal-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  font-family: 'JetBrains Mono', monospace;
  color: #fff;
}

.modal-duration {
  font-size: 0.9rem;
  color: #46d369;
  font-weight: 600;
}

.modal-body {
  padding: 1.5rem;
}

.modal-synopsis {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.modal-details {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
}

.modal-detail-item {
  display: flex;
  gap: 0.6rem;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;
  line-height: 1.5;
}

.detail-bullet {
  color: #E50914;
  flex-shrink: 0;
  margin-top: 2px;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.modal-tech-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  margin-right: 0.3rem;
}

.modal-tech-tag {
  padding: 0.25rem 0.7rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.85);
}
</style>