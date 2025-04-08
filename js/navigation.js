    // Highlight the current page in the navigation menu
    // Cache navigation links to improve performance
    const navLinks = document.querySelectorAll('.nav-links a');
    const ACTIVE_CLASS = 'active'; // Define the active class as a constant
    highlightActiveLink();

function highlightActiveLink() {
    const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop();

    navLinks.forEach(link => {
        if (isLinkActive(link, currentPage)) {
            link.classList.add(ACTIVE_CLASS); // Use the constant for the class name
        }
    });

    // Helper function to check if a link is active
    function isLinkActive(link, currentPage) {
        return link.getAttribute('href').split('?')[0].split('#')[0] === currentPage;
    }
}

