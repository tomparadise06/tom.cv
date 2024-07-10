document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const scrollToTopBtn = document.querySelector('#scroll-to-top');
    const scrollElements = document.querySelectorAll('.scroll-animation');

    // Menu burger
    if (burger && nav) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            if (window.innerWidth <= 768) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // CV download notification
    const downloadButton = document.querySelector('.cta-button[download]');
    if (downloadButton) {
        downloadButton.addEventListener('click', () => {
            alert('Merci de télécharger mon CV!');
        });
    }

    // Bouton pour remonter
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Scroll animations
    const elementInView = (el, percentageScroll = 100) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= 
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial call to handleScrollAnimation to handle the elements already in view
    handleScrollAnimation();
});


document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatbox = document.getElementById('chatbox');
  
    sendBtn.addEventListener('click', async () => {
      const message = userInput.value;
      addMessageToChatbox('You', message);
      userInput.value = '';
  
      const response = await fetch('https://tom-m-cv-numerique-github-io.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
  
      const data = await response.json();
      addMessageToChatbox('Bot', data.reply);
    });
  
    function addMessageToChatbox(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatbox.appendChild(messageElement);
      chatbox.scrollTop = chatbox.scrollHeight;
    }
  });
  