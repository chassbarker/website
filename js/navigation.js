    // Highlight the current page in the navigation menu
    // Cache navigation links to improve performance
    const navContainer = document.querySelector('.nav-links'); // Scope to the navigation container
    const navLinks = navContainer ? navContainer.querySelectorAll('a') : []; // Query links within the container
    const ACTIVE_CLASS = 'active'; // Define the active class as a constant
    highlightActiveLink();

    // Get the current page by removing trailing slashes and extracting the last segment of the path
    const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop();

        // Remove the active class from all links
        navLinks.forEach(link => link.classList.remove(ACTIVE_CLASS));

        navLinks.forEach(link => {
            let linkPath = '';
            try {
                const href = link.getAttribute('href');
                if (href) {
                    linkPath = new URL(href, window.location.origin).pathname.replace(/\/$/, '');
                }
                if (isLinkActive(linkPath, currentPage)) {
                    link.classList.add(ACTIVE_CLASS); // Use the constant for the class name
                }
            } catch (error) {
                console.error('Invalid URL in navigation link:', link.getAttribute('href'), error);
            }
        const href = link.getAttribute('href');
        linkPath = href ? new URL(href, window.location.origin).pathname.replace(/\/$/, '') : '';
    });

    // Helper function to check if a link is active
    function isLinkActive(linkPath, currentPage) {
        return linkPath === currentPage;
    }


