    // Highlight the current page in the navigation menu
    const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

