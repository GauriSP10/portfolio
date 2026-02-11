<template>
    <div class="projects-page">
      <!-- Back Button -->
      <button @click="goBack" class="back-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
        </svg>
      </button>
  
      <!-- Split Layout -->
      <div class="split-container">
        
        <!-- Left Column -->
        <div class="column left-column">
          
          <!-- Project 1 -->
          <div class="project-item">
            <div class="project-number">01</div>
            <h2 class="project-title">LLM Chat Application</h2>
            <p class="project-desc">
              Real-time chat application powered by large language models, serving thousands of users with intelligent responses.
            </p>
            <div class="tech-stack">
              <span>Python</span>
              <span>FastAPI</span>
              <span>React</span>
              <span>LLMs</span>
            </div>
            <div class="project-links">
              <a href="#" class="link-btn">Demo</a>
              <a href="#" class="link-btn">GitHub</a>
            </div>
          </div>
  
          <!-- Project 2 -->
          <div class="project-item">
            <div class="project-number">02</div>
            <h2 class="project-title">Open-Source ML Library</h2>
            <p class="project-desc">
              Machine learning library used by 16,000+ developers worldwide for computer vision tasks.
            </p>
            <div class="tech-stack">
              <span>Python</span>
              <span>PyTorch</span>
              <span>Computer Vision</span>
            </div>
            <div class="project-links">
              <a href="#" class="link-btn">Demo</a>
              <a href="#" class="link-btn">GitHub</a>
            </div>
          </div>
  
          <!-- Project 3 -->
          <div class="project-item">
            <div class="project-number">03</div>
            <h2 class="project-title">Real-Time Analytics Dashboard</h2>
            <p class="project-desc">
              Analytics dashboard processing millions of data points with interactive visualizations.
            </p>
            <div class="tech-stack">
              <span>React</span>
              <span>D3.js</span>
              <span>Node.js</span>
            </div>
            <div class="project-links">
              <a href="#" class="link-btn">Demo</a>
              <a href="#" class="link-btn">GitHub</a>
            </div>
          </div>
  
        </div>
  
        <!-- Divider -->
        <div class="divider"></div>
  
        <!-- Right Column -->
        <div class="column right-column">
          
          <!-- Project 4 -->
          <div class="project-item">
            <div class="project-number">04</div>
            <h2 class="project-title">NLP Sentiment Analysis</h2>
            <p class="project-desc">
              NLP-powered tool that processes social media data to extract insights and emotional patterns.
            </p>
            <div class="tech-stack">
              <span>Python</span>
              <span>Transformers</span>
              <span>NLP</span>
            </div>
            <div class="project-links">
              <a href="#" class="link-btn">Demo</a>
              <a href="#" class="link-btn">GitHub</a>
            </div>
          </div>
  
          <!-- Project 5 -->
          <div class="project-item">
            <div class="project-number">05</div>
            <h2 class="project-title">E-Commerce Platform</h2>
            <p class="project-desc">
              Full-stack e-commerce platform with payment integration and inventory management.
            </p>
            <div class="tech-stack">
              <span>Vue.js</span>
              <span>Django</span>
              <span>PostgreSQL</span>
            </div>
            <div class="project-links">
              <a href="#" class="link-btn">Demo</a>
              <a href="#" class="link-btn">GitHub</a>
            </div>
          </div>
  
          <!-- Project 6 -->
          <div class="project-item">
            <div class="project-number">06</div>
            <h2 class="project-title">AI Image Generator</h2>
            <p class="project-desc">
              Text-to-image generation using diffusion models for creating custom artwork.
            </p>
            <div class="tech-stack">
              <span>Python</span>
              <span>Stable Diffusion</span>
              <span>FastAPI</span>
            </div>
            <div class="project-links">
              <a href="#" class="link-btn">Demo</a>
              <a href="#" class="link-btn">GitHub</a>
            </div>
          </div>
  
        </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goBack = () => {
    router.push('/?view=panels')
  }
  </script>
  
  <style scoped>
  .projects-page {
    width: 100vw;
    height: 100vh;
    background: #0A0A0F;
    position: relative;
    overflow: hidden;
  }
  
  /* Back Button */
  .back-btn {
  position: fixed;
  top: 2rem;
  left: 2rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
  transform: scale(1.1);
}

.back-btn svg {
  width: 24px;
  height: 24px;
}
  
  /* Split Container */
  .split-container {
    width: 100%;
    height: 100%;
    display: flex;
  }
  
  /* Column */
  .column {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6rem 3rem 3rem 3rem;
  border: 2px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.column:hover {
  border-image: linear-gradient(135deg, #FF69B4, #5DADE2) 1;
}
  
  .column::-webkit-scrollbar {
    width: 4px;
  }
  
  .column::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .column::-webkit-scrollbar-thumb {
    background: #FF69B4;
    border-radius: 4px;
  }
  
  .column::-webkit-scrollbar-thumb:hover {
    background: #FF1493;
  }
  
  /* Divider */
  .divider {
  width: 1px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
}
  
  /* Project Item */
  .project-item {
    margin-bottom: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid #222;
  }
  
  .project-item:last-child {
    border-bottom: none;
  }
  
  .project-number {
  font-size: 1rem;
  font-weight: 900;
  background: linear-gradient(135deg, #FF69B4 0%, #5DADE2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 1rem;
  letter-spacing: 3px;
}
  
  .project-title {
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
    font-family: 'JetBrains Mono', monospace;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  
  .project-desc {
    font-size: 1rem;
    color: #aaa;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
  
  .tech-stack span {
  padding: 0.4rem 0.9rem;
  background: rgba(255, 105, 180, 0.05);
  border: 1px solid;
  border-image: linear-gradient(135deg, #FF69B4, #5DADE2) 1;
  border-radius: 20px;
  background: linear-gradient(135deg, #FF69B4 0%, #5DADE2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
}
  .project-links {
    display: flex;
    gap: 1rem;
  }
  
  .link-btn {
  padding: 0.15rem 0.15rem;
  background: transparent;
  border: none;
  border-radius: 0;
  color: #aaa;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: 'JetBrains Mono', monospace;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  display: inline-block;
}

.link-btn:hover {
  background: #5DADE2;
  color: #fff;
}
  /* Responsive */
  @media (max-width: 768px) {
    .split-container {
      flex-direction: column;
    }
  
    .divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        #FF69B4 20%,
        #FF69B4 80%,
        transparent 100%
      );
    }
  
    .column {
      height: auto;
      min-height: 50vh;
      padding: 3rem 2rem;
    }
  
    .back-btn {
      top: 1rem;
      left: 1rem;
    }
  
    .project-title {
      font-size: 1.5rem;
    }
  }
  </style>