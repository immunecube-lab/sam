import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // GNB Scroll Effect
  const gnb = document.querySelector('.gnb');
  
  if (gnb) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        gnb.classList.add('scrolled');
      } else {
        gnb.classList.remove('scrolled');
      }
    });
  }

  // Fade-in Animation on Scroll
  const fadeElems = document.querySelectorAll('.fade-in-section');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElems.forEach(elem => {
    observer.observe(elem);
  });

  // 1. Cinematic Intro Gate Control (Session-based)
  const introGate = document.getElementById('intro-gate');
  if (introGate) {
    const hasVisited = sessionStorage.getItem('sammyeongjang_visited');
    if (!hasVisited) {
      // 최초 방문 시: 스크롤 잠금 및 인트로 액티브
      document.body.style.overflow = 'hidden';
      introGate.classList.add('active');
      
      setTimeout(() => {
        // 인트로 페이드아웃 및 스크롤 복구
        introGate.classList.add('fade-out');
        document.body.style.overflow = '';
        sessionStorage.setItem('sammyeongjang_visited', 'true');
        
        setTimeout(() => {
          introGate.style.display = 'none';
        }, 1000); // CSS fadeout transition duration (1s)
      }, 3400); // 3.4초 동안 칠흑 속에서 철학 카피 음미
    } else {
      // 세션 내 재방문 시 즉시 제거
      introGate.style.display = 'none';
    }
  }

  // 2. Subtle Parallax Scroll Effect on Premium Visuals
  const parallaxElems = document.querySelectorAll('.photo-placeholder, .detail-product');
  if (parallaxElems.length > 0 && window.innerWidth > 860) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElems.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        const elemTop = rect.top + scrolled;
        // 뷰포트 내부 노출 시에만 연산 수행 (렌더링 최적화)
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const relativeScroll = scrolled - (elemTop - window.innerHeight / 2);
          const yPos = relativeScroll * 0.08; // 감도 조절 (0.08)
          elem.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    });
  }

  // 3. Certificate Lightbox Modal Control
  const certModal = document.getElementById('cert-modal');
  const certModalImg = document.getElementById('cert-modal-img');
  const certModalTitle = document.getElementById('cert-modal-title');
  const certModalDesc = document.getElementById('cert-modal-desc');
  const certModalClose = document.querySelector('.cert-modal-close');
  const certCards = document.querySelectorAll('.mini-credential-trigger');

  if (certModal && certCards.length > 0) {
    const openModal = (trigger) => {
      const src = trigger.getAttribute('data-cert-src');
      const title = trigger.getAttribute('data-cert-title');
      const desc = trigger.getAttribute('data-cert-desc');

      if (src) {
        certModalImg.src = src;
        certModalTitle.textContent = title || '';
        certModalDesc.textContent = desc || '';
        certModal.classList.add('active');
        certModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
      }
    };

    const closeModal = () => {
      certModal.classList.remove('active');
      certModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      // Clear image source after animation to prevent flashing next time
      setTimeout(() => {
        if (!certModal.classList.contains('active')) {
          certModalImg.src = '';
        }
      }, 350);
    };

    certCards.forEach(trigger => {
      trigger.addEventListener('click', () => openModal(trigger));
    });

    if (certModalClose) {
      certModalClose.addEventListener('click', closeModal);
    }

    // Close modal on background click
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) {
        closeModal();
      }
    });

    // Close modal on Escape key press
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && certModal.classList.contains('active')) {
        closeModal();
      }
    });
  }
});

export function setupGNB(isDarkTheme = false) {
  const gnb = document.querySelector('.gnb');
  if (gnb && isDarkTheme) {
    gnb.classList.add('dark-theme');
    gnb.style.color = '#fff';
    const links = gnb.querySelectorAll('a');
    links.forEach(link => link.style.color = '#fff');
  }
}
