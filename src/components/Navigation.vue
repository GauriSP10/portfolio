<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-bracket">&lt;</span>
        GP
        <span class="logo-bracket">/&gt;</span>
      </div>
      
      <div class="nav-links">
        <a href="#about" class="nav-link">
          <span class="nav-number">01.</span> About
        </a>
        <a href="#projects" class="nav-link">
          <span class="nav-number">02.</span> Projects
        </a>
        <a href="#experience" class="nav-link">
          <span class="nav-number">03.</span> Experience
        </a>
        <a href="#contact" class="nav-link">
          <span class="nav-number">04.</span> Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

.nav.scrolled {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-bottom-color: rgba(100, 255, 218, 0.2);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: #E6F1FF;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo:hover {
  color: #64FFDA;
}

.logo-bracket {
  color: #64FFDA;
  font-weight: 400;
}

.nav-links {
  display: flex;
  gap: 3rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #8892B0;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  font-family: 'JetBrains Mono', monospace;
  position: relative;
}

.nav-number {
  color: #64FFDA;
  margin-right: 0.5rem;
  font-size: 0.85rem;
}

.nav-link:hover {
  color: #64FFDA;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .nav-container {
    padding: 1rem 1.5rem;
  }
  
  .nav-links {
    gap: 1.5rem;
  }
  
  .nav-link {
    font-size: 0.85rem;
  }
}
</style>