<template>
    <div class="skills-overlay" @click="goBack">
      <div class="trading-card" @click.stop>
        <!-- Neon glow effect -->
        <div class="neon-glow"></div>
        
        <!-- Close button -->
        <button @click="goBack" class="close-btn">×</button>
        
        <!-- Card Header -->
        <div class="card-header">
          <div class="card-name">GAURI PRABHAKAR</div>
          <div class="card-subtitle">ML ENGINEER</div>
        </div>
        
        <!-- Character Art Section -->
<!-- Character Art Section -->
<div class="character-art">
  <div class="foil-shine"></div>
  <img :src=skillsCharacterImage alt="Character" class="character-image">
</div>
        <!-- Flavor Text -->
        <div class="flavor-text">
          "A rare find! This engineer's debugging skills are off the charts."
        </div>
        
        <!-- Abilities Section -->
        <div class="abilities-section">
          <div class="section-title"> SKILLS </div>
          
          <div class="skill-category">
            <div class="category-label">Languages</div>
            <div class="skill-pills">
              <span>Python</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>SQL</span>
              <span>C++</span>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-label">ML/AI</div>
            <div class="skill-pills">
              <span>PyTorch</span>
              <span>TensorFlow</span>
              <span>LLMs</span>
              <span>NLP</span>
              <span>Computer Vision</span>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-label">Frontend</div>
            <div class="skill-pills">
              <span>React</span>
              <span>Vue.js</span>
              <span>Next.js</span>
              <span>Tailwind</span>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-label">Backend</div>
            <div class="skill-pills">
              <span>Node.js</span>
              <span>FastAPI</span>
              <span>Django</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          
          <div class="skill-category">
            <div class="category-label">Cloud</div>
            <div class="skill-pills">
              <span>AWS</span>
              <span>GCP</span>
              <span>Docker</span>
              <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import skillsCharacterImage from '../assets/skillsCharacter.jpg'
  
  const router = useRouter()
  
  const goBack = () => {
    router.push('/?view=panels')
  }
  </script>
  
  <style scoped>
  .skills-overlay {
    position: fixed;
    inset: 0;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    background: rgba(10, 10, 15, 0.6);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Trading Card */
  .trading-card {
  position: relative;
  width: 550px;
  max-width: 95vw;
  height: auto;
  max-height: 90vh;
  background: linear-gradient(135deg, #1A1A2E 0%, #0f0f1e 100%);
  border-radius: 20px;
  padding: 2rem;
  border: 6px solid #5DADE2;
  box-shadow: 
    0 25px 70px rgba(0, 0, 0, 0.8),
    0 0 60px rgba(93, 173, 226, 0.6),
    inset 0 0 80px rgba(93, 173, 226, 0.08);
  animation: cardEnter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
}
  
  @keyframes cardEnter {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  /* Close Button */
  .close-btn {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    width: 32px;
    height: 32px;
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border: 2px solid #5DADE2;
    border-radius: 50%;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .close-btn:hover {
    background: #5DADE2;
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 0 20px #5DADE2;
  }
  
  /* Card Header */
  .card-header {
    text-align: center;
    margin-bottom: 1rem;
    padding-bottom: 0.8rem;
    border-bottom: 2px solid #5DADE2;
  }
  
  .card-name {
    font-size: 1.6rem;
    font-weight: 900;
    font-family: 'JetBrains Mono', monospace;
    color: #5DADE2;
    letter-spacing: 3px;
    margin-bottom: 0.3rem;
    text-shadow: 0 0 20px rgba(93, 173, 226, 0.6);
  }
  
  .card-subtitle {
    font-size: 0.85rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    font-family: 'JetBrains Mono', monospace;
    letter-spacing: 2px;
  }
  
  /* Character Art */
  .character-art {
    position: relative;
    width: 100%;
    height: 280px;
    background: linear-gradient(135deg, rgba(93, 173, 226, 0.15) 0%, rgba(93, 173, 226, 0.08) 100%);
    border-radius: 12px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #5DADE2;
    overflow: hidden;
    object-fit: contain;
    box-shadow: inset 0 0 30px rgba(93, 173, 226, 0.2);
  }

  .character-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 1;
}
  
  /* Single Slow Foil Shine Effect */
  .foil-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 30%,
      rgba(255, 255, 255, 0.12) 50%,
      transparent 70%
    );
    background-size: 500% 500%;
    animation: foilShine 15s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes foilShine {
    0%, 100% { 
      background-position: 0% 0%;
      opacity: 0.5;
    }
    50% { 
      background-position: 100% 100%;
      opacity: 0.8;
    }
  }
  

  /* Flavor Text */
  .flavor-text {
    font-size: 0.8rem;
    font-style: italic;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 0.8rem;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    border-left: 3px solid #5DADE2;
    line-height: 1.5;
  }
  
  /* Abilities Section */
  .abilities-section {
    margin-bottom: 0;
  }
  
  .section-title {
    font-size: 1rem;
    font-weight: 900;
    color: #5DADE2;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 1rem;
    text-align: center;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(93, 173, 226, 0.5);
  }
  
  .skill-category {
    margin-bottom: 0.8rem;
  }
  
  .skill-category:last-child {
    margin-bottom: 0;
  }
  
  .category-label {
    font-size: 0.85rem;
    font-weight: 700;
    color: #5DADE2;
    font-family: 'JetBrains Mono', monospace;
    margin-bottom: 0.4rem;
  }
  
  .skill-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-pills span {
    padding: 0.35rem 0.8rem;
    background: rgba(93, 173, 226, 0.2);
    border: 1px solid #5DADE2;
    border-radius: 15px;
    color: #fff;
    font-size: 0.8rem;
    font-family: 'JetBrains Mono', monospace;
    transition: all 0.2s ease;
  }
  
  .skill-pills span:hover {
    background: rgba(93, 173, 226, 0.35);
    border-color: #5DADE2;
    transform: translateY(-2px);
    box-shadow: 0 0 12px rgba(93, 173, 226, 0.5);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .trading-card {
      width: 95vw;
      padding: 1.5rem;
    }
  
    .card-name {
      font-size: 1.3rem;
    }
  
    .character-art {
      height: 200px;
    }
  
    .manga-character {
      width: 110px;
      height: 110px;
    }
  
    .flavor-text {
      font-size: 0.75rem;
    }
  
    .category-label {
      font-size: 0.8rem;
    }
  
    .skill-pills span {
      font-size: 0.75rem;
      padding: 0.3rem 0.7rem;
    }
  }
  </style>