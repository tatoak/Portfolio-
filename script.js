const scrollBtn = document.querySelector('.scroll-top');

    window.onscroll = () => {
      if (document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    };

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }