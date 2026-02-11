<template>
    <div class="about-container">
      <!-- Back Button -->
      <button @click="goBack" class="back-to-home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M19 12H5M5 12L12 19M5 12L12 5"/>
        </svg>
      </button>
  
      <div class="about-layout">
        <!-- Left Side - Text Content -->
        <div class="about-text">
          <h1 class="about-title">WHO I AM</h1>
          <div class="about-content">
            <p>
              I'm a Machine Learning Engineer at the intersection of AI, 
              technology, and creative expression. What started as a curiosity 
              about intelligent systems has evolved into a passion for building 
              solutions that merge technical depth with real-world impact.
            </p>
            <p>
              From developing LLM-powered applications serving thousands to 
              contributing to open-source tools used by 16,000+ developers, 
              I'm driven by the challenge of making AI accessible and practical. 
              Currently pursuing my MS in AI at Northeastern University while 
              exploring the creative side of technology through art and design.
            </p>
            <p>
              Beyond code and models, I find inspiration in anime aesthetics, 
              manga storytelling, and the blend of digital and physical creativity. 
              I believe the future of AI isn't just about algorithms—it's about 
              building experiences that feel human.
            </p>
          </div>
        </div>
  
        <!-- Right Side - Azuki-Style Grid -->
        <div class="grid-wrapper" @mouseenter="shiftGrid" @mouseleave="resetGrid">
          <div class="image-grid" :class="{ 'shifted': isHovered }">
            <!-- Row 1: 4 boxes (some cut at top) -->
            <div class="grid-row row-1">
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" alt="1"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400" alt="2"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400" alt="3"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=400" alt="4"></div>
            </div>
            
            <!-- Row 2: 3.5 boxes -->
            <div class="grid-row row-2">
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400" alt="5"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=400" alt="6"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1615738935250-55e1b5b69a0e?w=400" alt="7"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400" alt="8"></div>
            </div>
            
            <!-- Row 3: 4 boxes -->
            <div class="grid-row row-3">
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400" alt="9"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=400" alt="10"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1568876694728-451bbf694b83?w=400" alt="11"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400" alt="12"></div>
            </div>
            
            <!-- Row 4: 3 boxes (some cut at bottom) -->
            <div class="grid-row row-4">
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1615738935250-55e1b5b69a0e?w=400" alt="13"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400" alt="14"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400" alt="15"></div>
              <div class="grid-item"><img src="https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400" alt="16"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isHovered = ref(false)
  
  const shiftGrid = () => {
    isHovered.value = true
  }
  
  const resetGrid = () => {
    isHovered.value = false
  }
  
  const goBack = () => {
    router.push('/?view=panels')
  }
  </script>
  
<style scoped>
.about-container {
  width: 100%;
  height: 100vh;
  background: #0A0A0F;
  color: #fff;
  overflow: hidden;
}

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
  border-color: #FF69B4;
  transform: scale(1.1);
}

.about-layout {
  display: grid;
  grid-template-columns: 38% 62%;
  height: 100vh;
  overflow: hidden;
  gap: 3rem;
}

/* ===== LEFT SIDE - TEXT ===== */
.about-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 1rem 4rem 6rem;
}

.about-title {
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 2rem;
  line-height: 1;
  background: linear-gradient(135deg, #FF69B4 0%, #64FFDA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'JetBrains Mono', monospace;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-content p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* ===== RIGHT SIDE - AZUKI GRID ===== */
.grid-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: visible;
  cursor: pointer;
  padding-right: 0;
}

.image-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: -12rem;
  margin-bottom: -12rem;
  margin-right: -8rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, gap;
}

/* HOVER STATE */
.image-grid.shifted {
  transform: translateX(50px);
  gap: 1.2rem;
}

/* Each row */
.grid-row {
  display: flex;
  gap: 0.8rem;
  transition: gap 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.image-grid.shifted .grid-row {
  gap: 1.2rem;
}

/* Offset rows */
.row-2 {
  padding-left: 2rem;
}

.row-4 {
  padding-left: 4rem;
}

/* Grid items */
.grid-item {
  position: relative;
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.grid-item.half-cut {
  width: 125px;
}
.grid-item:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 35px rgba(255, 105, 180, 0.5);
  z-index: 10;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-item:hover img {
  transform: scale(1.1);
}

/* Gradient overlay */
.grid-item::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 105, 180, 0.2) 0%,
    rgba(100, 255, 218, 0.2) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.grid-item:hover::after {
  opacity: 1;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1400px) {
  .about-layout {
    grid-template-columns: 38% 62%;
    gap: 2rem;
  }
  
  .grid-item {
    width: 200px;
    height: 200px;
  }
  
  .grid-item.half-cut {
    width: 100px;
  }
  
  .image-grid {
    margin-top: -10rem;
    margin-bottom: -10rem;
    margin-right: -6rem;
  }
}

@media (max-width: 1200px) {
  .about-layout {
    grid-template-columns: 40% 60%;
    gap: 2rem;
  }
  
  .about-text {
    padding: 3rem 0.5rem 3rem 3rem;
  }
  
  .about-title {
    font-size: 3rem;
  }
  
  .about-content p {
    font-size: 1rem;
  }
  
  .grid-item {
    width: 170px;
    height: 170px;
  }
  
  .grid-item.half-cut {
    width: 85px;
  }
  
  .image-grid {
    margin-top: -8rem;
    margin-bottom: -8rem;
    margin-right: -5rem;
  }
  
  .image-grid.shifted {
    transform: translateX(0px);
    gap: 0.8rem;
  }
  
  .image-grid.shifted .grid-row {
    gap: 0.8rem;
  }
}

/* STACK VERTICALLY ON TABLETS AND BELOW */
@media (max-width: 1024px) {
  .about-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    gap: 0;
    overflow-y: auto;
  }

  .about-text {
    padding: 3rem 2rem;
    justify-content: flex-start;
  }
  
  .about-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  .about-content p {
    font-size: 0.95rem;
  }
  
  .grid-wrapper {
    justify-content: center;
    align-items: flex-start;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .grid-item {
    width: 150px;
    height: 150px;
  }
  
  .grid-item.half-cut {
    width: 75px;
  }
  
  .image-grid {
    gap: 0.7rem;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0;
  }
  
  .grid-row {
    gap: 0.7rem;
  }
  
  /* No hover on tablets */
  .image-grid.shifted {
    transform: translateX(0px);
    gap: 0.7rem;
  }
  
  .image-grid.shifted .grid-row {
    gap: 0.7rem;
  }
}

@media (max-width: 768px) {
  .about-text {
    padding: 2rem 1.5rem;
  }
  
  .about-title {
    font-size: 2rem;
  }

  .about-content p {
    font-size: 0.85rem;
    line-height: 1.6;
  }
  
  .grid-item {
    width: 120px;
    height: 120px;
  }
  
  .grid-item.half-cut {
    width: 60px;
  }
  
  .image-grid {
    gap: 0.6rem;
  }
  
  .grid-row {
    gap: 0.6rem;
  }
}

@media (max-width: 640px) {
  .about-text {
    padding: 1.5rem 1rem;
  }
  
  .about-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .about-content {
    gap: 1rem;
  }

  .about-content p {
    font-size: 0.75rem;
    line-height: 1.5;
  }
  
  .grid-item {
    width: 100px;
    height: 100px;
  }
  
  .grid-item.half-cut {
    width: 50px;
  }
  
  .image-grid {
    gap: 0.5rem;
  }
  
  .grid-row {
    gap: 0.5rem;
  }
}
</style>