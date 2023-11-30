



document.addEventListener("DOMContentLoaded", function() {
    

    gsap.fromTo(".sidebar",{ width: 0 }, { opacity: 1, width: "25%"});
    gsap.fromTo(".navItem",{ opacity: 0}, {opacity: 1 } );
    gsap.fromTo(".content",  { x: 100 }, {opacity: 1, x: 0 });

   
    gsap.from('.hero-main-title',{ duration: 1, y: 100, opacity: 0, delay: 0.5 });
    gsap.from('.hero-main-info',{ duration: 1, y: 100, opacity: 0, delay: 1 });
   

    const heroSection = document.querySelector('.hero-container');
    const video = document.querySelector('.main-video');
    const info = document.querySelector('.hero-main-info');

    const options = {
      root: null, 
      threshold: 0.5, 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {          
          video.style.opacity = '0.6';
          info.style.opacity = '1.0';
        } else {          
          video.style.opacity = '0.2';
          info.style.opacity = '0';
        }
      });
    }, options);

    observer.observe(heroSection);   
   
});



gsap.registerPlugin(ScrollTrigger);

  document.addEventListener("DOMContentLoaded", function() {
   
    gsap.from('.content-container .body-image', { 
      duration: 1, opacity: 0, x: -100,
      scrollTrigger: { trigger: '.content-container', start: 'top 80%', }
    });

    gsap.from('.content-container .body-content', { 
      duration: 1, opacity: 0, y: 100, srollTrigger: {
        trigger: '.content-container', start: 'top 80%',
      }
    });


    document.querySelectorAll('.place').forEach(place => {
      gsap.from(place, { duration: 1, opacity: 0, y: 100, scrollTrigger: { 
        trigger: place, start: 'top 80%',
        }
      });
    });

});




document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.navItem a');

    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault(); 

        const sectionId = item.getAttribute('href');
        const section = document.querySelector(sectionId);

        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        animateSection(section);
        }
      });
    });

    function animateSection(section) {
      gsap.from(section, { 
      duration: 1,opacity: 0, x: 100 
      });
    }
  });





  document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.navItem a');
    const sidebar = document.querySelector('.sidebar');
    const colors = ['#2A5639', '#06628F', '#0165B9', '#73742C', '#014EC2']; 

    navItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        sidebar.style.backgroundColor = colors[index % colors.length];
      });
    });
  });




 