<template>
    <div>
      <!-- Overlay (click to close) -->
      <div v-if="isOpen" class="contact-overlay" @click="goBack"></div>
      
      <!-- Sliding Panel -->
      <div class="contact-panel" :class="{ open: isOpen }">
        <!-- Close button -->
        <button @click="goBack" class="close-btn">×</button>
        
        <!-- Social Icons -->
        <div class="social-icons">
          
          <!-- Email -->
          <a href="mailto:your.email@example.com" class="social-icon" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </a>
  
          <!-- LinkedIn -->
          <a href="https://linkedin.com/in/yourprofile" target="_blank" class="social-icon" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
            </svg>
          </a>
  
          <!-- GitHub -->
          <a href="https://github.com/yourprofile" target="_blank" class="social-icon" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
  
          <!-- Twitter/X -->
          <a href="https://twitter.com/yourprofile" target="_blank" class="social-icon" title="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
  
          <!-- Instagram -->
          <a href="https://instagram.com/yourprofile" target="_blank" class="social-icon" title="Instagram">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
            </svg>
          </a>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  const isOpen = ref(false)
  
  const goBack = () => {
    isOpen.value = false
    setTimeout(() => {
      router.push('/?view=panels')
    }, 300)
  }
  
  onMounted(() => {
    setTimeout(() => {
      isOpen.value = true
    }, 50)
  })
  </script>
  
  <style scoped>
  /* Overlay */
  .contact-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  /* Sliding Panel */
  .contact-panel {
    position: fixed;
    right: 0;
    top: 0;
    width: 80px;
    height: 100vh;
    background: #0A0A0F;
    border-left: 2px solid #E74C3C;
    padding: 4rem 0;
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contact-panel.open {
    transform: translateX(0);
  }
  
  /* Close Button */
  .close-btn {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 28px;
    height: 28px;
    background: transparent;
    color: #fff;
    border: 1px solid #333;
    border-radius: 50%;
    font-size: 1.3rem;
    line-height: 1;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .close-btn:hover {
    background: #E74C3C;
    border-color: #E74C3C;
    transform: translateX(-50%) rotate(90deg);
  }
  
  /* Social Icons */
  .social-icons {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    flex: 1;
    justify-content: center;
  }
  
  .social-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .social-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .social-icon:hover {
    color: #E74C3C;
    transform: scale(1.2);
  }
  
  .social-icon:hover::before {
    content: '';
    position: absolute;
    inset: -8px;
    background: rgba(231, 76, 60, 0.1);
    border-radius: 50%;
    z-index: -1;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .contact-panel {
      width: 70px;
      padding: 3rem 0;
    }
  
    .social-icon {
      width: 36px;
      height: 36px;
    }
  
    .social-icon svg {
      width: 20px;
      height: 20px;
    }
  }
  </style>