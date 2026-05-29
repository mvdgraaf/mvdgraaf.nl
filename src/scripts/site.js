export function setupSite() {
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  reveals.forEach((el) => io.observe(el));

  // Nav scroll effect
  const nav = document.querySelector('nav');
  const onScroll = () => {
    if (!nav) {
      return;
    }

    nav.style.borderBottomColor =
      window.scrollY > 50
        ? 'rgba(255,255,255,0.1)'
        : 'rgba(255,255,255,0.06)';
  };

  window.addEventListener('scroll', onScroll);
  onScroll();

   // Form submit handler
   function handleSubmit(e) {
     e.preventDefault();

     // UI feedback
    const success = document.getElementById('form-success');
    if (success) success.style.display = 'block';
    const btn = e.target.querySelector('.form-submit');
    if (btn) {
      btn.textContent = 'Verzonden ✓';
      btn.style.background = '#4fd1c5';
    }

    // Reset form after a short delay
    setTimeout(() => {
      e.target.reset();
      if (success) success.style.display = 'none';
      if (btn) {
        btn.textContent = 'Verstuur';
        btn.style.background = '';
      }
    }, 3000);
  }

  window.handleSubmit = handleSubmit;

  // Smooth active nav link
  const links = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => {
            l.style.color = '';
          });

          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active && !active.classList.contains('nav-cta')) {
            active.style.color = '#f5f2ec';
          }
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));

  return () => {
    window.removeEventListener('scroll', onScroll);
    io.disconnect();
    observer.disconnect();
    delete window.handleSubmit;
  };
}
